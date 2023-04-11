import axios from "./axios";

export const signInRequest = async ( email, pwd ) => {
	try {
		const res = await axios.post( '/auth/signin',
			JSON.stringify({ email, password : pwd })
		)
		
		if(res.status === 200) {
			localStorage.setItem('token', JSON.stringify(res?.data?.access_token));
			//const accessToken = res?.data?.access_token;
			//setAuth({ email, pwd, accessToken }); //전역상태 AuthContext 업데이트
		}
		return res.status;

	} catch (err) {
			console.log(err);
			return err;
	}
}

export const signUpRequest = async ( email, pwd ) => {
	try {
		const res = await axios.post( '/auth/signup',
			JSON.stringify({ email, password : pwd })
		)
		return res.status;

	} catch (err) {
		console.log("signup api err: ", err.message)
		return new Error(err.message);
	}
}