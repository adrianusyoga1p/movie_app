import { useEffect, useState } from "react"
import axios from 'axios'

const useFetch = (query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = 'https://movies-api14.p.rapidapi.com'

  const options = {
    headers: {
      'X-RapidAPI-Key': 'd2cdc72621msh4b2c9c51648d2a7p17440ajsn7e202b054f99',
      'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
    },
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${url}/${query}`, options);
        if (query === 'movies' || query === 'shows') {
          setData(res.data.movies)
          return;
        }
        setData(res.data.contents)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    };
    fetchData();
  }, [url])

  return {
    data,
    loading
  }
}

export default useFetch