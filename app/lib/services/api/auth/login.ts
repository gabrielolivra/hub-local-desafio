import api from '../api';

export const login = async (params: {
  registration: string;
  password: string;
}): Promise<{ accessToken: string }> => {
  const { registration, password } = params;
  const response = await api.post('/auth/login', {
    email: registration,
    password,
  });

  return {
    accessToken: response.data.access_token,
  };
};


export const createUser = async (data: any) => {
  const response = await api.post('/users', {
    ...data,
  });

  return response.data
}