// a reducer takes in two things

// 1. the action (info about what happened)
// 2. copy of the current state

function comments(state = [], action) {
  console.log("the post will change");
  console.log(state, action);
  return state;
}

export default comments;