import axios from 'axios';
import { OfferModel } from '../models/OfferModel';

const baseURL = 'http://localhost:3001/se2132';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'


const offerService = axios.create({
  baseURL: `${baseURL}/offers`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
  }
});

export const offerServiceApi = {
  getAllOffers: () => offerService.get<OfferModel[]>('/'),
  getOfferById: (id: string) => offerService.get<OfferModel>(`/${id}`),
  createOffer: (offer: OfferModel) => offerService.post<OfferModel>('/', offer),
  updateOffer: (id: string, offer: OfferModel) => offerService.put<OfferModel>(`/${id}`, offer),
  deleteOffer: (id: string) => offerService.delete(`/${id}`),
};