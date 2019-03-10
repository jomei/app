import db from './db'

export const create = (params, user) => {
  params.id  = db.boxes.size - 1;

  let participant = {
    id: db.participants.size - 1,
    user_id: user.id,
    is_admin: true,
    box_id: params.id,
    assigned_amount: {amount: 0},
    paid_amount: {amount: 0},
  };
  db.boxes.push(params);
  db.participants.push(participant);

  return {}
};