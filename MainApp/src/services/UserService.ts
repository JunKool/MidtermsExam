// UserService.ts
import axios from 'axios';
import { UserModel } from '../models/UserModel'; // Adjust the path accordingly

const baseURL = 'http://localhost:3001/se2132';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'


const userService = axios.create({
  baseURL: `${baseURL}/users`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
  }
});

export const userServiceApi = {
  getAllUsers: () => userService.get<UserModel[]>('/'),
  getUserById: (id: string) => userService.get<UserModel>(`/${id}`),
  createUser: (user: UserModel) => userService.post<UserModel>('/', user),
  updateUser: (id: string, user: UserModel) => userService.put<UserModel>(`/${id}`, user),
  deleteUser: (id: string) => userService.delete(`/${id}`),
};
