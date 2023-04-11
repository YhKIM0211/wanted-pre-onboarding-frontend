import React, { useState, useEffect } from 'react'
import { StyleDiv, Btn } from '../styles'
import { useNavigate } from 'react-router-dom';
import { readRequest } from '../api/todoRequest';
import { CreateTodo } from '../component/CreateTodo';
import { TodoList } from '../component/TodoList';

export const TodoMain = () => {
	const [data, setData] = useState([]);

	const navigate = useNavigate()
	const logOut = async () => {
		await localStorage.removeItem('token');
		navigate('/signin');
	}
	
	useEffect(() => {
		try {
			readRequest().then(res => {
				console.log("readData",res);
				if(res[0] === 200) setData([...res[1].data]);
			})
		} catch (err) {
			console.log("readErr",err);
		}
	}, [])

  return (
    <section style={{maxWidth:"600px", margin:"0 auto"}}>
		<Btn type='button' onClick={logOut} width={"100px"}>
			LogOut
		</Btn>
		<StyleDiv>
			<h1>TodoList</h1>
			<CreateTodo data={data} setData={setData} />
			<TodoList data={data} setData={setData} />
		</StyleDiv>
	</section>
  )
}
