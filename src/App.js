import React, { useEffect } from 'react';
import axios from 'axios';

export default function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data');
        console.log(response);
      } catch (e) {}
    };
    fetchData();
  }, []);

  return <div>App</div>;
}
