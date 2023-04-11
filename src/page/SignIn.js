import React, {useRef, useState, useEffect } from 'react'
import { Btn, StyleDiv } from '../styles'
import { Link, useNavigate } from 'react-router-dom';
import { signInRequest } from '../api/authRequest';
const REGEX = /@/

export const SignIn = () => {
	
	const [user, setUser] = useState({
		email:'',
		pwd:'',
	})
	const [valid, setValid] = useState(false)
	const [msg, setMsg] = useState(false)

	const focusRef = useRef()
	const navigate = useNavigate();

	useEffect(() => {
		focusRef.current.focus();
	},[])
	
	useEffect(() => {
		let pwdValidTest = ((user.pwd).length >= 8)
		setValid(REGEX.test(user.email) && pwdValidTest);
	},[user.email, user.pwd])

	useEffect(() => {
		//입력이 존재할 때 유효성 검사 메세지 출력
		if(((user.email).length>=1 || (user.pwd).length>=1) && !valid) {
			setMsg('id는 @를 포함한 email형식, password는 8자리 이상')
		} 
		if(!!valid) {
			setMsg('')
		}
	},[valid, user])

	const handleSignIn = (e) => {
		e.preventDefault();

		if(!valid) {
			setMsg('유효성 검사 에러')
			return ; 
		}

		signInRequest(user.email, user.pwd).then((res) => {
				console.log("res",res);
				if(res === 200) {
					navigate('/todo')
				} else if (res !== 200) { 
					setMsg('email 혹은 password가 일치하지 않습니다.')
					setTimeout(() => {
						setMsg('')
					}, 3000)
				}
		})
  }

	return (
		<section>
			<StyleDiv>
			<h1>Login</h1>
			{ msg ? <p>{msg}</p> : '' }
			<form onSubmit={handleSignIn}>
				<label htmlFor="email">Email:</label>
				<input
					data-testid="email-input"
					id="email"
					type="text" 
					onChange={e => setUser({...user, email: e.target.value})}
					value={user.email}
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
					onChange={e => setUser({...user, pwd: e.target.value})}
					value={user.pwd}
					required
					autoComplete="off"
					style={{width:"220px"}}
				/>
				<Btn
					data-testid="signin-button"
					type="submit"
					disabled={ !valid ? true : false }
					primary
					width ={"234px"}
					height = {"2.4rem"}
				>
					로그인
				</Btn>
			</form>
			<Link to={'/signup'} >회원가입</Link>
			</StyleDiv>
		</section>
	)
}
