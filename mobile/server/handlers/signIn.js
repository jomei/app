import db from "./db";


function handle(params) {
  const {email, password} = params;

  if(db.users[email]) {
    return handleSuccess(db.users[email])
  } else {
    return handleFail()
  }
}

function handleSuccess(user) {
  return {
    token: user.email,
    user: user
  }
}

function handleFail() {
  return 401
}

export default handle;