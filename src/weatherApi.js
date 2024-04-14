import { apiKey } from "./config";
import { currentConditionData, locationData, forecastData } from "./testData";

export async function weatherApi(locationText) {
  try {
    const locationData = await locationApiCall(locationText);
    const locationKey = locationData[0].Key;
    const currentConditionData = await currentConditionApiCall(locationKey);
    const forecastData = await forecast(locationKey);
    const data = {
      locationData,
      currentConditionData,
      forecastData,
    };

    return data;
  } catch (error) {
    const data = {
      locationData,
      currentConditionData,
      forecastData,
    };
    return data;
  }
}

async function locationApiCall(locationText) {
  const response = await fetch(
    `http://dataservice.accuweather.com/locations/v1/search?apikey=${apiKey}&q=${locationText}`
  );
  return await response.json();
}

async function currentConditionApiCall(locationKey) {
  const response = await fetch(
    `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`
  );
  return await response.json();
}

async function forecast(locationKey) {
  const response = await fetch(
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`
  );
  return await response.json();
}
