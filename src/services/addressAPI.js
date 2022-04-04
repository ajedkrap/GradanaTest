import http from '_helpers/http';

const addressUrl = 'https://dev.farizdotid.com/api/daerahindonesia/';
const kodePosUrl = 'https://kodepos.vercel.app/search';

export const getAddress = query => http().get(addressUrl + query);
export const getPostalCode = query => http().get(kodePosUrl + query);
