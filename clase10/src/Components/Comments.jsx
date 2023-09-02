import React from 'react'
import { useState, useEffect } from 'react';



const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(()=>{

        const url= "https://jsonplaceholder.typicode.com/comments"
        fetch(url)
        .then(response => response.json())
        .then(data => setComments(data))

    , []
    }
    )


  return (
    <ul>
        
        
     {comments.map(comment => <li key = {comment.id}>{comment.body}</li>)


        
        }
    </ul>
  )



}

export default Comments