import axios from 'axios';
import React, { useState } from 'react'

function CommentCreate({ postId }) {
    const [content, setContent] = useState("")

    const submitContent = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:4002/posts/${postId}/comments`, {
            content
        })

        setContent("")
    }
    return (
        <div>
            <form onSubmit={submitContent}>
                <div className='form-group'>
                    <label>New comment</label>
                    <input value={content} onChange={e => setContent(e.target.value)} className='form-control' />
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default CommentCreate