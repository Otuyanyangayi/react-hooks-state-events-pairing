import React, { useState } from "react";
import Votes from "./Votes";

function Comments({comments}) {
  console.log(comments)
  const [commentsDisplay, setComment] = useState(comments)
  let inputFromUser;
  
  function getInputValue(event) {
    event.preventDefault()
    inputFromUser = event.target.value
  }

  function handleSubmit(event) {
    event.preventDefault()

    const commentsDisplayed = comments.filter((comment) => {
      if(!inputFromUser){
        return comment;
      } else {
        return (comment.user.indexOf(inputFromUser) !== -1)
      }
    })
    setComment(commentsDisplayed)
  }

  function deleteComment(id) {
    const remainingComments = comments.filter((comment) => comment.id !== id)
    setComment(remainingComments)
  }

  function handlesort(){
    const sortedComments = [...comments].sort((a,b) => a.upvotes < b.upvotes ? 1 : -1)
    setComment(sortedComments)
  }


  const commentList = commentsDisplay.map((comment) => {
    return (
      <div key={comment.id}>
        <h4>{comment.user}</h4>
        <p>{comment.comment}</p>
        <Votes upvotes={comment.upvotes} downvotes={comment.downvotes}/>
        <button onClick={() => {deleteComment(comment.id)}}>Remove Comment</button>
      </div>
    )
  })

  const [showing, setShowing] = useState(true)
  function handleComments() {
    setShowing((showing) => !showing)
  }

  const btnText = showing ? "Hide comments" : "Show Comments"
  return (
    <div>
      <button onClick={handleComments}>{btnText}</button>
      <hr />
      <button onClick={handlesort}>Sort Comments by votes</button>
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search by username..." onChange={getInputValue}/>
        <input type="submit" value="Search" />
      </form>
      <br/>
      <br/>
      <h3>{comments.length} Comments</h3>
      {showing ? commentList : ""}
    </div>
  )
}

export default Comments;