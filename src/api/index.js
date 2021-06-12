import axios from '@/axios';

export const loadPackages = () => axios.get('/stats/packages');

export const loadPackageDetails = (type, name) =>
  axios.get(`/package/${type}/${name}/stats`);
