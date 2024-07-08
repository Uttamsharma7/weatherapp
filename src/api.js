 export const geoApiOptions = {        //this api is for searching cities by typing in search-bar.
	method: 'GET',
	headers: {
		'x-rapidapi-key': '224ed1ff6amsha32b814124a24f6p1b76c4jsn6f5ef0a950a8',
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	},
};

 export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';  //we take api in variable and export to seach.js.

 export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";   //this api used for extracting the data like temp,humidity,feelslike,pressure etc.
export const WEATHER_API_KEY = "000fd80cc2603c6ded94b9d4e96bb5c3"; 