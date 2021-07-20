import { request } from 'ice';

async function getPageList(data) {
  const res = await request.post('', data);

  return {
    total: res.totalElements,
    list: res.list,
  };
}

export {
  getPageList,
}