import React from 'react';




function CommentSection (props) {
    return(
<div className="container">
<div className="userHeader">
    <img src={props.eachPost.thumbnailUrl} alt="thumbnail" />
    <h2>{props.eachPost.username}</h2>
</div>
<img src={props.eachPost.imageUrl} alt="imageurl" />
<div className="likesComments">
    <img src="https://img.icons8.com/windows/30/000000/hearts.png"></img>
    <img src="https://img.icons8.com/metro/25/000000/topic.png"></img>
</div>
<p className="likes">{props.eachPost.likes} likes</p>

<input type="text" placeHolder="Add a comment..." onChange={props.inputHandler} value={props.input}></input>
</div>
)
};

export default CommentSection ; 