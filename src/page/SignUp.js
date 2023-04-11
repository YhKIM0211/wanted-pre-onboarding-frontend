import React, {useRef, useState, useEffect } from 'react'
import { Btn, StyleDiv } from '../styles'
import { signUpRequest } from '../api/authRequest';
import { useNavigate } from 'react-router-dom';
//const REGEX = /[\w\-.]+@[\w\-.]+/g;
const REGEX = /@/

export const SignUp = () => {

	const [email, setEmail] = useState('')
	const [validEmail, setValidEmail] = useState(false)
	const [pwd, setPwd] = useState('')
	const [validPwd, setValidPwd] = useState(false)
	const [msg, setMsg] = useState(false)

	const focusRef = useRef()
	const navigate = useNavigate();

	useEffect(() => {
			focusRef.current.focus();
	},[])
	
	useEffect(() => {
		setValidEmail(REGEX.test(email));
		if(email.length>=1 && !validEmail) {
			setMsg('email 형식: example@naver.com')
		} 
		if(email.length>=1 && validEmail) {
			setMsg('')
		}
	},[email,validEmail])

	useEffect(() => {
			let pwdValidTest = (pwd.length >= 8)
			setValidPwd(pwdValidTest);
			if(pwd.length>=1 && !validPwd) {
				setMsg('password는 8자리 이상입니다.')
			}
			if(pwd.length>=1 && validPwd) {
				setMsg('')
			}
	}, [pwd, validPwd])

	const handleSignUp = (e) => {
		e.preventDefault();

		if(!validEmail || !validPwd) {
				setMsg('유효성 검사 에러')
				return ; 
		}
		//api 호출
		signUpRequest(email,pwd)
		.then((res) => {
			if(res === 201) navigate('/signin')
			else if(res !== 201) {
				setMsg('중복된 id가 존재합니다.')
				setEmail('')
				setPwd('')
			} 
		})
		
	}

	return (
		<section>
			<StyleDiv>
				<h1>SignUp</h1>
				{ msg ? <p>{msg}</p> : '' }
				<form onSubmit={handleSignUp}>
						<label htmlFor="email">Email:</label>
						<input
							data-testid="email-input"
							id="email"
							type="text" 
							onChange={e => setEmail(e.target.value)}
							value={email}
							required
							autoComplete="off"
							ref={focusRef}
							style={{width:"220px"}}
						/>

						<label htmlFor="pwd">Password:</label>
						<input
							data-testid="password-input"
							id="pwd"
							type="password"
							onChange={(e) => setPwd(e.target.value)}
							value={pwd}
							required
							autoComplete="off"
							style={{width:"220px"}}
						/>
						<Btn
							data-testid="signup-button"
							type="submit"
							disabled={ !validEmail || !validPwd ? true : false }
							primary
							width ={"234px"}
							height = {"2.4rem"}
						>
							회원가입
						</Btn>
				</form>
			</StyleDiv>
		</section>
	)
}
