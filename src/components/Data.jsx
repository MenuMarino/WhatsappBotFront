import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table';

export default function Data() {
  const [values, setValues] = useState({
    headers: [],
    data: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data');
        setValues((v) => ({
          ...v,
          headers: response.data.data.headers,
          data: response.data.data.data,
        }));
      } catch (e) {}
    };
    fetchData();
  }, []);

  return (
    <>
      {values.headers.length > 0 && values.data.length > 0 && (
        <Table products={values.data} headers={values.headers} />
      )}
    </>
  );
}
