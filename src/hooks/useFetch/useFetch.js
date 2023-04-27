import {useEffect, useState} from 'react';
import axios from 'axios';

export default function fetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setloading(false);
    } catch (err) {
      setError(err.message);
      setloading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {data, loading, error};
}
