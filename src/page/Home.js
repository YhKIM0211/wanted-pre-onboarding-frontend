import React from 'react'
import { Link } from 'react-router-dom'
import { StyleDiv } from '../styles'

export const Home = () => {
  return (
    <StyleDiv>
      <h1>Startpage</h1>
      <ul>
          <li><Link to='/signin'>로그인</Link></li>
          <li><Link to='/signup'>회원가입</Link></li>
      </ul>
    </StyleDiv>
  )
}

