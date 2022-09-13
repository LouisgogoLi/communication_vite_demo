import herokuappRequest from '@/api/axios/herokuappRequest';

//herokuapp
//取得照片
export const apiGetHerokuappImageList = () => herokuappRequest.get('/photo/list');
//註冊會員
export const apiPostHerokuappRegistered = (data) => herokuappRequest.post('/auth/registered', data);
