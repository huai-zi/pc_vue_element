import service from '../index';
import requestUrl from '../requestUrl';

export function login(data = {}) {
  return service({
    url: requestUrl('/cardStat/queryCardStatList'),
    method: 'post',
    data
  })
}
