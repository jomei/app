import { createSelector } from 'reselect'

const getPositions = (state) => state.box.positions;
const getParticipants = (state) => state.box.participants;
const getUser = (state) => state.account.user;

export const getMyParticipant = createSelector(
  [getParticipants],
  (participants) => participants.find((p) => { return p.user.id === getUser().id })
);

