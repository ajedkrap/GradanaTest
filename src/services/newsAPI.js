import http from '_helpers/http';

const headers = {'X-Api-Key': '057c2912a50048288403599d05721c6d'};
const newsURL = 'https://newsapi.org/v2/everything';

export const getNews = query => http(null, '', headers).get(newsURL + query);
