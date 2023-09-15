import axios from "axios";
import { useEffect, useState } from "react";

const rapidApiKey = process.env.RAPID_API_KEY

const useFetch = (endpoint,query ) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const options = {
		method: "GET",
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
		headers: {
			"X-RapidAPI-Key":'16a2062ef4msh3312714f6d2d9afp1aeb9fjsn15e6aac8a289',
			"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
		},
		params: {
			...query,
            // country: 'IN'
		},
	};

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            // console.log('RESPONSE-==--> ', response)
            setData(response.data.data);
            // console.log('DATA----> ', data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            alert('There is an error')
            console.log('ERROR ======> ', error)
        } finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    },[]);

    const refetch = () => {
        setIsLoading(true);
        fetchData()
    }

    return {data, isLoading,error, refetch};
};

export default useFetch;
