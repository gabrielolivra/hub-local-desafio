import api from '../api';

export const login = async (params: {
  registration: string;
  password: string;
}): Promise<{ accessToken: string; refreshToken: string }> => {
  const { registration, password } = params;
  const response = await api.post('/auth/login', {
    email: registration,
    password,
  });
  console.log(response.data)
  return {
    accessToken: response.data.access_token,
    refreshToken: response.data.refresh_token,
  };
};
