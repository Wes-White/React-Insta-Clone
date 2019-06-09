import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer (props) {
    return (  
        <div>
         {props.data.map(eachPost => <CommentSection eachPost={eachPost} />)}
        </div>
    )
}

export default PostContainer;