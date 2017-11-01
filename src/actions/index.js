import axios from 'axios'

const API_KEY = '9cb5da1d1f09cac8395ff4f3f8a657e8'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeatcher(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)

  console.log('request', request)
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
