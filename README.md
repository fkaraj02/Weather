# Weather App

A responsive weather application built using **React**, **Vite** and **Tailwind CSS**, fetching real-time weather data from the **OpenWeatherMap** free API.


![image_alt](https://github.com/fkaraj02/Weather/blob/58ad73e89ea0213223487df4789701caecd3925c/main.png)


## Features

- **Real-Time Weather Data**: Works for any location around the world.
- **Current Location**: Asks for user permission to access the current location and display the corresponding data.
- **Search Functionality**: Look up weather by place name (city, village, area etc.) or by coordinates (latitude and longitude).
- **Add to Favourites**: Ability to save locations using the browser storage for quick access.
- **Responsive Design**: Optimized for mobile devices, tablet and desktop.
- **Error handling**

## Requirements

- Node.js
- npm
- [OpenWeatherMap Free API Key](https://openweathermap.org/)

## Installation

1. Clone the repository: 
```
git clone https://github.com/fkaraj02/Weather.git
```
2. Navigate to the diectory: 
```
cd Weather
```
3. Install dependencies: 
```
npm install
```
4. Create a `.env` file in the root directory for the API keys. The format **should** be as following:

```
VITE_OPEN_WEATHER_API_KEY="<your_api_key>&units=metric"
VITE_OPEN_WEATHER_API_URL="https://api.openweathermap.org/data/2.5/"
VITE_OPEN_GEOLOCATION_URL="https://api.openweathermap.org/geo/1.0/direct?q="
VITE_OPEN_GEOLOCATION_KEY="&limit=10&appid=<your_api_key>"
```

> [!WARNING]
> Use this exact same format and replace <your_api_key> with your actual API key, otherwise you will get errors.

5. Start the server: 
```
npm run dev
```
## Screenshots

### 1. Home/Weather Page

![image_alt](https://github.com/fkaraj02/Weather/blob/58ad73e89ea0213223487df4789701caecd3925c/Image1.jpeg)


### 2. Favourites Page

![image_alt](https://github.com/fkaraj02/Weather/blob/58ad73e89ea0213223487df4789701caecd3925c/Image2.jpeg)


### 3. Advanced Search Page

![image_alt](https://github.com/fkaraj02/Weather/blob/58ad73e89ea0213223487df4789701caecd3925c/Image3.jpeg)
