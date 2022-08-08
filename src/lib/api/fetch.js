import axios from 'axios';
import client from './client';
const fetch = url => {
  console.log('fetch run ', url);
  return client.post(url).then(res => {
    const resdata = res.data;
    resdata.map(v => (v.rowtype = '1'));
    return resdata;
  });
};
export default fetch;
