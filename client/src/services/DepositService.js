import moment from 'moment';
import { normalize, schema } from 'normalizr';

export default class DepositService {
  static parse(participantsList) {
    let deposits = participantsList.reduce((acc, p) => {
      return acc.concat(p.deposits);
    }, []);

    deposits.forEach((d) => {
      d.created_at = moment(d.created_at);
      d.debts = this._normalize(d.debts, 'debt')
    });

    deposits.sort((a, b) => { return !(a.created_at.isAfter(b.created_at))});

    return this._normalize(deposits, 'deposit');
  }

  static _normalize(arr, entity) {
    const s = new schema.Entity(entity);
    return normalize(arr, [s]).entities;
  }
}