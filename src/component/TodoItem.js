import React, { useState } from 'react'
import { deleteRequest, updateRequest } from '../api/todoRequest'
import { ModifyTodo } from '../component/ModifyTodo'
import { Btn } from '../styles'

export const TodoItem = ({todo, id, isCompleted}) => {
	const [modify, setModify] = useState(false);
	const [isDone, setIsDone] = useState(isCompleted);
	const [updateContent, setUpdateContent] = useState(todo);
	const [delState, setDelState] = useState(false);

	const handleDelete = () => {
		try {
			deleteRequest(id).then( res => {
				console.log(res);
				if(res === 204 ) {
          			setDelState(true);
				} 
			})

		} catch (err) {
			console.log("handleDelete",err);
		}
	}

	const handleIsDone = () => {
		//할일의 내용을 수정하지 않고, isCompleted데이터만 수정한 경우
		updateRequest(id, updateContent, !isDone).then( res => {
			if(res[0] === 200 ) {
				setIsDone(!isDone)
			} 
		})	
	}

  return (
		<>
			{	modify ? (
					<ModifyTodo id={id} isDone={isDone} setIsDone={setIsDone} setModify={setModify} updateContent={updateContent} setUpdateContent={setUpdateContent} />
				) : 
						delState ? '' 
						: 
							(
								<li>
									<label style={{display:"inline-block"}}>
										<input type="checkbox" checked={isDone} onChange={handleIsDone}/>
										<span>{updateContent}</span>
									</label>	
									<Btn data-testid="modify-button" 
										 onClick={() => setModify(true)}
										 primary
									>
										수정
									</Btn>
									<Btn data-testid="delete-button" onClick={handleDelete}>
										삭제
									</Btn> 
								</li>
							)
			}
		</>
  )
}
