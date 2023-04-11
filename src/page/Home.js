import React from 'react'
import { Link } from 'react-router-dom'
import { StyleDiv, Btn } from '../styles'

export const Home = () => {
  return (
    <StyleDiv>
      <h1>Startpage</h1>
      <ul>
          <li><Link to='/signin'><Btn width= {"250px"} style={{color:"gray"}}>로그인</Btn></Link></li>
          <li><Link to='/signup'><Btn width= {"250px"} style={{color:"gray"}}>회원가입</Btn></Link></li>
      </ul>
    </StyleDiv>
  )
}

