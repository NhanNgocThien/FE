import React from 'react';

export default function SinglePost({match}) {
    return (
        <div>
            This is post {match.params.postId}
        </div>
    )
}
