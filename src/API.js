import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000/api' });

export const sendOTP = (email) => API.post('/send-otp', { email });
export const verifyOTP = (email, otp) => API.post('/verify-otp', { email, otp });
export const updateProfile = (data) => API.put('/update-profile', data);
export const signup = (data) => API.post('/signup', data);
export const login=(data)=>API.post('/signin', data);