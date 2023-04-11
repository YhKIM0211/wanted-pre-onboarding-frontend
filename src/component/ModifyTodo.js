import { useState } from 'react'
import { updateRequest } from '../api/todoRequest';
import { Btn } from '../styles'

export const ModifyTodo = ({id, isDone, setIsDone, setModify, updateContent, setUpdateContent}) => {
  const [todo, setTodo] = useState(updateContent);

  const handleUpdate = () => {
		try {
			updateRequest(id, todo, isDone).then( res => {
				if(res[0] === 200 ) {
          setUpdateContent(res[1].todo)
          setModify(false)      
				} 
			})

		} catch (err) {
			console.log("handleUpdate",err);
		}
	}

  return (
    <li className="modify_todo" style={{display:"flex"}}>
      <label>
        <input  
          type="checkbox" 
          checked={isDone} 
          onChange={()=> setIsDone(!isDone)}
        />
        <input  
          type="text" 
          data-testid="modify-input"
          onChange={(e) => setTodo(e.target.value)} 
          value={todo}
        />
      </label>
      <Btn data-testid="submit-button" onClick={handleUpdate}>제출</Btn>
      <Btn data-testid="cancel-button" onClick={()=> setModify(false)}>취소</Btn> 
    </li>
  )
}
