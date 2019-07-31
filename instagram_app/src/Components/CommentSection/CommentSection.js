import React from 'react';
import './CommentSection.css';


function CommentSection (props) {
    return(
<div className="container">
<div className="userHeader">
    <img src={props.eachPost.thumbnailUrl} alt="thumbnail" />
    <h2>{props.eachPost.username}</h2>
</div>
<img src={props.eachPost.imageUrl} alt="imageurl" className='postImage'/>
<div className="likesComments">
    <img src="https://img.icons8.com/ios/30/000000/like.png"></img>
    <img src="https://img.icons8.com/ios/30/000000/topic.png"></img>
</div>
<div className='counter'>
    <p className="likes">{props.eachPost.likes} likes</p>
</div>



<input type="text" placeHolder="Add a comment..." onChange={props.inputHandler} value={props.input}></input>
</div>
)
};

export default CommentSection ; 
