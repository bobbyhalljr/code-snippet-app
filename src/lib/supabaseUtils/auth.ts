import { supabase } from '../../../supabaseClient';

// Login with magic link
export async function loginWithEmail(email: string) {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) throw error;
    // Magic link sent to the provided email address
}

// Sign up with GitHub
export async function signUpWithGitHub() {
    let { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
    });
    if (error) throw error;
    console.log(data)
    // Redirects to GitHub authentication page
}

// Sign up with Google
export async function signUpWithGoogle() {
    let { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    })
    if (error) throw error;
    console.log(data)
    // Redirects to Google authentication page
}

// log out user
export async function logOut(){
    let { error } = await supabase.auth.signOut()
    if (error) throw error;
}
