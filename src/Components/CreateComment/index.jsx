/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { createPost } from '../../Redux/PostSlice'
import { useDispatch  } from 'react-redux'
import { nanoid } from 'nanoid'

const index = () => {
    const dispatch = useDispatch()
    const [comment, setComment] = useState("")


    const handleClick = (e) => {


    if (e.keyCode == 13 ) {
        e.preventDefault()
        if(!comment){
            return alert("Please Write Something...")
        }
            const date = new Date();
            const hoursAndMinutes = date.getHours() + ':' + date.getMinutes();  
            const data = {
                id: nanoid(),
                text: comment,
                time: hoursAndMinutes,
                replies: [],
                likes: [],
            }
            dispatch(createPost(data))
            setComment("")
        }

    }
  return (
    <div>
        <form >
            <textarea 
            onKeyDown={handleClick} 
            type="text" 
            placeholder='Make Comment'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            />
        </form>
    </div>
  )
}

export default index