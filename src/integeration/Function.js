// import supabase from "./supabase"
// import { setUserLogin } from "@/Redux-Store/Features/Auth-Slice"

// export const getUser = async () => {
//     const { data } = await supabase.auth.getSession();
//     if (data?.session?.user) {
//         return data.session.user;
//     }
//     else {
//         window.location.href = "/login";
//     }
//     return false;
// }

// export const signInUser = async (email, password, dispatch) => {
//     const { data, error } = await supabase.auth.signInWithPassword({
//         email: email,
//         password: password
//     })
//     if (error) {
//         console.log(error)
//     } else {
//         dispatch(setUserLogin(data));
//         return true;
//     }
//     return false;
// }

// export const signOutUser = async () => {
//     const { error } = await supabase.auth.signOut();
//     if (error) {
//         console.log(error)
//         return false;
//     }
//     return true;
// }

export const getAccessToken = async () => {

    // const { data } = await supabase.auth.getSession();
    // if (data?.session?.access_token) {
    //     return data?.session?.access_token;
    // }
    // window.location.href = "/login";

    return false;
}