import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CommentList({ postId }) {
    const [comments, setComments] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4002/posts/${postId}/comments`).then(res => {
            setComments(res.data)
        })
    }, [])
    return (
        <div>
            <h5>Comment</h5>
            {
                comments.length && comments.map((comment, index) => (
                    <li key={comment.id}>{comment.content}</li>
                ))
            }
        </div>
    )
}

export default CommentList