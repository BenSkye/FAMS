import axios from 'axios';
const ENDPOINT = 'https://65444ee25a0b4b04436c3f2c.mockapi.io';

export const getAllUser = async () => {
  return await axios.get(
    `${ENDPOINT}/user`
  )
}