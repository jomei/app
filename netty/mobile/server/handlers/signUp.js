import db from "./db";

function handle(params) {
  const {password, password_confirmation} = params.auth;

  if(password !== password_confirmation) {
    return handleFail()
  } else {
    let user = params.auth;
    user.id = db.users.size();
    db.users.push(user);
    return handleSuccess(user)
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

export default handle