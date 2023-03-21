import { loginFailure , loginStart , loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethod";

export const login = async (dispatch , user) =>{
    dispatch(loginStart()) // start the login process
    try{
        const res = await publicRequest.post("/auth/login" , user);
        dispatch(loginSuccess(res.data)) // if login is successful then send the user data

    }
    catch(err){
        dispatch(loginFailure()); // if login failed 
    }
}