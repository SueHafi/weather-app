import { describe, test, expect } from "vitest";
import { weatherApi } from "./weatherApi";
import {
  locationData,
  currentConditionData,
  forecastData,
} from "./fallbackData";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

export const handlers = [
  http.get(
    "https://dataservice.accuweather.com/locations/v1/search*",
    ({ request }) => {
      const url = new URL(request.url);
      const locationText = url.searchParams.get("q");

      if (locationText === "leeds") {
        return new HttpResponse(null, { status: 429 });
      }

      return HttpResponse.json(locationData);
    }
  ),

  http.get("https://dataservice.accuweather.com/currentconditions/v1/*", () => {
    return HttpResponse.json(currentConditionData);
  }),
  http.get(
    "https://dataservice.accuweather.com/forecasts/v1/daily/5day/*",
    () => {
      return HttpResponse.json(forecastData);
    }
  ),
];

export const server = setupServer(...handlers);
server.listen();

describe("weatherApi", () => {
  test("response with data", async () => {
    const result = await weatherApi("London");
    expect(result).toEqual({
      locationData,
      currentConditionData,
      forecastData,
      isMockData: false,
    });
  });

  test("response with api error", async () => {
    const result = await weatherApi("leeds");
    expect(result).toEqual({
      locationData,
      currentConditionData,
      forecastData,
      isMockData: true,
    });
  });
});
