import React, { useEffect } from 'react';
import { axiosHandler } from 'api/baseApi';

const useAxiosToken = () => {
  const axiosToken = axiosHandler.source();

  useEffect(() => {
    return () => {
      axiosToken.cancel();
    };
  }, []);

  return axiosToken;
};

export default useAxiosToken;
