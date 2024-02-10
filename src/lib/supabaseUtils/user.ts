import { supabase } from '../../../supabaseClient';

// get current user
export async function getUser(){
    const { data: { user } } = await supabase.auth.getUser()
        return user
}

// read all users
export async function getAllUsers(){
    let { data: users, error } = await supabase
    .from('users')
    .select('*')

    if(error) throw error;

    return users
}
