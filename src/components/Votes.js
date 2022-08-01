import React, { useState } from "react";

function Votes({upvotes, downvotes}) {
  const [votesUp, setUpVote] = useState(upvotes)
  const [votesDown, setDownVote] = useState(downvotes)

  function upVote(){
    setUpVote(votesUp + 1)
  }
  function downVote() {
    setDownVote(votesDown + 1)
  }
  return (
    <>
    <button onClick={upVote}>{votesUp}👍</button>
    <button onClick={downVote}>{votesDown}👎</button>
    <br/>
    <br/>
    </>
  )
}

export default Votes;