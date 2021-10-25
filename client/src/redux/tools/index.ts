import axios from 'axios';
import { ITodo } from '../../types';

export async function getData(url: string) {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (e: any) {
    throw e.response.data;
  }
}

export async function editData(url: string, body: any) {
  try {
    await axios.put(`${url}/${body.id}`, body);
    return true;
  } catch (e: any) {
    throw e.response.data;
  }
}

export async function deleteData(url: string, id: number) {
  try {
    await axios.delete(`${url}/${id}`);
    return true;
  } catch (e: any) {
    throw e.response.data;
  }
}

export async function postData(url: string, body: any) {
  try {
    const { data } = await axios.post(url, body);
    return data;
  } catch (e: any) {
    throw e.response.data;
  }
}
