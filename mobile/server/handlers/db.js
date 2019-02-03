let db = {
  users: {
    jim: {
      id: 0,
      email: "jim",
      password: "raynor"
    },
    sara: {
      id: 1,
      email: "sara",
      password: "kerrigan"
    }
  },
  boxes: [
    {
      id: 0,
      positions: [
        {id: 0, title: "beer", assigned_to: 1, paid_by: 0 },
        {id: 1, title: "meat", assigned_to: 0, paid_by: null }
      ]
    }
  ],
  participants: [
    {
      user_id: 0,
      is_admin: true,
      box_id: 0
    },
    {
      user_id: 1,
      is_admin: false,
      box_id: 0
    },

  ]
};


export default db;