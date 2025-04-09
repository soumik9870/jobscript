'use server';

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

export async function signUp(params: SignUpParams) {
    const {uid, name, email} = params;

    try {
        const userRecord = await db.collection('users').doc(uid).get();

        if(userRecord.exists) {
            return {
                success: false,
                message: 'User already exists. Please sign in instead.'
            }
        }

        await db.collection('users').doc(uid).set({
            name,
            email,
            createdAt: new Date().toISOString()
        });
    } catch (error: any) {
        console.error('Error signing you up:', error);

        if(error.code === 'auth/email-already-in-use') {
            return {
                success: false,
                message: 'Email already in use. Please try another one.'
            }
        }

        return{
            success: false,
            message: 'An error occurred while signing you up. Please try again later.'
        }
    }
}

export async function setSessionCookie(idToken: string) {

    const ONE_WEEK = 60 * 60 * 24 * 7;
    const cookieStore = await cookies();
    const sessionCookie = await auth.createSessionCookie(idToken, {
        expiresIn: ONE_WEEK* 1000,
    });

    cookieStore.set("session", sessionCookie, {
        maxAge: ONE_WEEK,
        httpOnly:true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: 'lax'
    })


}