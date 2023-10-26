import axios from 'axios';

const URL = 'http://localhost:3000';

export const createGrupo = async (grupoData) => {
  try {
    const response = await axios.post(`${URL}/api/grupos`, grupoData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getGrupos = async () => {
  try {
    const response = await axios.get(`${URL}/api/grupos`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
