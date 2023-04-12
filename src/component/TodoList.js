import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({data}) => {	
  return (
    <ul className="todo_list">
			{
				data.map(todo => 
					<TodoItem todo={todo.todo} id={todo.id} isCompleted={todo.isCompleted} key={todo.id} />
				)
			}
    </ul>
  )
}
