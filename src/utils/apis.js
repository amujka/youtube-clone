import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
	},
};
export const fetchFromApi = async (url) => {
	try {
		const response = await fetch(`${BASE_URL}/${url}`, options);
		const result = await response.json();
		if (response.ok) {
			return result;
		}
		throw { status: response.status, message: result.message };
	} catch (error) {
		throw error;
	}
};
