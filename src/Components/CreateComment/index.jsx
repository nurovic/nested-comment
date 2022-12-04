/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { createPost } from '../../Redux/PostSlice'
import { useDispatch  } from 'react-redux'
import { nanoid } from 'nanoid'

const index = () => {
    const dispatch = useDispatch()
    const [comment, setComment] = useState("")


    const handleClick = (e) => {


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
  return (
    <div>
        <form  onSubmit={handleClick}>
            <input  
            type="text" 
            placeholder='Make Comment'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            />
            <button type='submit'> Send</button>
        </form>
    </div>
  )
}

export default index