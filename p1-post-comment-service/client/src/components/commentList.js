import React from 'react'

function CommentList({ comments }) {
    return (
        <div>
            <h5>Comment</h5>
            {
                comments.length && comments.map((comment, index) => {
                    if (comment.status === 'pending') {
                        return (
                            <li key={comment.id}>{comment.content + '--- awaiting moderation'}</li>
                        )
                    } else if (comment.status === 'approved') {
                        return (
                            <li key={comment.id}>{comment.content + '--- approved'}</li>
                        )
                    } else {
                        return (
                            <li key={comment.id}>{comment.content + '--- Rejected'}</li>
                        )
                    }

                })
            }
        </div>
    )
}

export default CommentList