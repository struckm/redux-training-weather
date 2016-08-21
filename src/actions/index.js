import axios from 'axios';

const WEATHER_API_KEY = 'b0864eb736aa11b7f717fe17ce53de7e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`

export const GET_WEATHER = 'GET_WEATHER';

export function getWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: GET_WEATHER,
        payload: request
    }
}