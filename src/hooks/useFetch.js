import { useEffect, useState } from 'react';

const useFetch = (url, dependency) => {
	const [data, setData] = useState([]);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchFromApi = async () => {
			const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
			const options = {
				headers: {
					'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
					'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
				},
			};
			try {
				const response = await fetch(`${BASE_URL}/${url}`, options);
				const result = await response.json();
				if (!response.ok) {
					throw new Error({ status: response.status, message: result.message });
				}
				setData(result.items);
			} catch (error) {
				setError(error);
			} finally {
				setIsPending(false);
			}
		};
		fetchFromApi();
	}, [dependency]);

	return {
		data,
		isPending,
		error,
	};
};
export default useFetch;
