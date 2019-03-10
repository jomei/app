import db from './db'

function handle(params, user) {
  return {
    user: user,
    participants: db.getParticipants(user)
  }
}

export default handle;