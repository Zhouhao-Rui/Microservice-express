import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CommentCreate from './commentCreate'
import CommentList from './commentList'

function PostList() {
    const [posts, setPosts] = useState({})
    useEffect(() => {
        axios.get('http://localhost:4000/posts').then(res => {
            setPosts(res.data)
            console.log(posts)
        })
    }, [])
    return (
        <div>
            {
                Object.values(posts).length && Object.values(posts).map((post, index) => (
                    <div className='card' style={{ width: '30%', marginBottom: '20px' }} key={post.id}>
                        <div className='card-body'>
                            <h3>{post.title}</h3>
                            <CommentList postId={post.id} />
                            <CommentCreate postId={post.id} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PostList