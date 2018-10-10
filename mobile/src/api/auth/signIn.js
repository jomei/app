import axios from 'axios'

export const signIn = (email, pwd) => {
  console.log("send:")
  console.log(email)
  console.log(pwd)
  axios.post('http://ad9a6248.ngrok.io/sign_in', {
    email: email,
    password: pwd
  })
};