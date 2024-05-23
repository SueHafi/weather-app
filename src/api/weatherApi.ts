import { apiKey } from "../config";
import {
  currentConditionData,
  locationData,
  forecastData,
} from "./fallbackData";
import {
  CurrentConditionData,
  ForecastData,
  LocationData,
} from "./weatherApiTypes";

export type WeatherApiData = {
  locationData: LocationData;
  currentConditionData: CurrentConditionData;
  forecastData: ForecastData;
  isMockData: boolean;
};

export async function weatherApi(locationText: string): Promise<WeatherApiData> {
  try {
    const locationData = await locationApiCall(locationText);
    const locationKey = locationData[0].Key;
    const currentConditionData = await currentConditionApiCall(locationKey);
    const forecastData = await forecast(locationKey);
    const data = {
      locationData,
      currentConditionData,
      forecastData,
      isMockData: false,
    };

    return data;
  } catch (error) {
    const data = {
      locationData,
      currentConditionData,
      forecastData,
      isMockData: true,
    };
    return data;
  }
}

async function locationApiCall(locationText: string): Promise<LocationData> {
  const response = await fetch(
    `https://dataservice.accuweather.com/locations/v1/search?apikey=${apiKey}&q=${locationText}`
  );
  return await response.json();
}

async function currentConditionApiCall(
  locationKey: string
): Promise<CurrentConditionData> {
  const response = await fetch(
    `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`
  );
  return await response.json();
}

async function forecast(locationKey: string): Promise<ForecastData> {
  const response = await fetch(
    `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`
  );
  return await response.json();
}
