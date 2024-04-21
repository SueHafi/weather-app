// fallback data for api being offline
export const locationData = [
  {
    Version: 1,
    Key: "49299_PC",
    Type: "PostalCode",
    Rank: 52,
    LocalizedName: "Milton Keynes",
    EnglishName: "Milton Keynes",
    PrimaryPostalCode: "MK10 9",
    Region: {
      ID: "EUR",
      LocalizedName: "Europe",
      EnglishName: "Europe",
    },
    Country: {
      ID: "GB",
      LocalizedName: "United Kingdom",
      EnglishName: "United Kingdom",
    },
    AdministrativeArea: {
      ID: "MIK",
      LocalizedName: "Milton Keynes",
      EnglishName: "Milton Keynes",
      Level: 1,
      LocalizedType: "Unitary Authority",
      EnglishType: "Unitary Authority",
      CountryID: "GB",
    },
    TimeZone: {
      Code: "BST",
      Name: "Europe/London",
      GmtOffset: 1.0,
      IsDaylightSaving: true,
      NextOffsetChange: "2024-10-27T01:00:00Z",
    },
    GeoPosition: {
      Latitude: 52.041,
      Longitude: -0.705,
      Elevation: {
        Metric: {
          Value: 69.0,
          Unit: "m",
          UnitType: 5,
        },
        Imperial: {
          Value: 226.0,
          Unit: "ft",
          UnitType: 0,
        },
      },
    },
    IsAlias: false,
    ParentCity: {
      Key: "324866",
      LocalizedName: "Milton Keynes",
      EnglishName: "Milton Keynes",
    },
    SupplementalAdminAreas: [
      {
        Level: 0,
        LocalizedName: "England",
        EnglishName: "England",
      },
      {
        Level: 3,
        LocalizedName: "Middleton",
        EnglishName: "Middleton",
      },
    ],
    DataSets: [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyPollenForecast",
      "ForecastConfidence",
      "FutureRadar",
      "MinuteCast",
      "Radar",
    ],
  },
];

export const currentConditionData = [
  {
    LocalObservationDateTime: "2024-04-03T17:06:00+01:00",
    EpochTime: 1712160360,
    WeatherText: "Mostly cloudy",
    WeatherIcon: 6,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 11.8,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 53.0,
        Unit: "F",
        UnitType: 18,
      },
    },
    MobileLink:
      "http://www.accuweather.com/en/gb/milton-keynes/mk9-2/current-weather/49299_pc?lang=en-us",
    Link: "http://www.accuweather.com/en/gb/milton-keynes/mk9-2/current-weather/49299_pc?lang=en-us",
  },
];

export const forecastData = {
  Headline: {
    EffectiveDate: "2024-04-04T02:00:00+01:00",
    EffectiveEpochDate: 1712192400,
    Severity: 4,
    Text: "Expect showery weather late Wednesday night through Thursday afternoon",
    Category: "rain",
    EndDate: "2024-04-04T20:00:00+01:00",
    EndEpochDate: 1712257200,
    MobileLink:
      "http://www.accuweather.com/en/gb/milton-keynes/mk9-2/daily-weather-forecast/49299_pc?lang=en-us",
    Link: "http://www.accuweather.com/en/gb/milton-keynes/mk9-2/daily-weather-forecast/49299_pc?lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2024-04-03T07:00:00+01:00",
      EpochDate: 1712124000,
      Temperature: {
        Minimum: {
          Value: 46.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 56.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/gb/milton-keynes/mk9-2/daily-weather-forecast/49299_pc?day=1&lang=en-us",
      Link: "http://www.accuweather.com/en/gb/milton-keynes/mk9-2/daily-weather-forecast/49299_pc?day=1&lang=en-us",
    },
    {
      Date: "2024-04-04T07:00:00+01:00",
      EpochDate: 1712210400,
      Temperature: {
        Minimum: {
          Value: 52.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 59.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/gb/milton-keynes/mk9-2/daily-weather-forecast/49299_pc?day=2&lang=en-us",
      Link: "http://www.accuweather.com/en/gb/milton-keynes/mk9-2/daily-weather-forecast/49299_pc?day=2&lang=en-us",
    },
    {
      Date: "2024-04-05T07:00:00+01:00",
      EpochDate: 1712296800,
      Temperature: {
        Minimum: {
          Value: 54.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 63.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 6,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 38,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/gb/milton-keynes/mk9-2/daily-weather-forecast/49299_pc?day=3&lang=en-us",
      Link: "http://www.accuweather.com/en/gb/milton-keynes/mk9-2/daily-weather-forecast/49299_pc?day=3&lang=en-us",
    },
    {
      Date: "2024-04-06T07:00:00+01:00",
      EpochDate: 1712383200,
      Temperature: {
        Minimum: {
          Value: 49.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 66.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 6,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 39,
        IconPhrase: "Partly cloudy w/ showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/gb/milton-keynes/mk9-2/daily-weather-forecast/49299_pc?day=4&lang=en-us",
      Link: "http://www.accuweather.com/en/gb/milton-keynes/mk9-2/daily-weather-forecast/49299_pc?day=4&lang=en-us",
    },
    {
      Date: "2024-04-07T07:00:00+01:00",
      EpochDate: 1712469600,
      Temperature: {
        Minimum: {
          Value: 46.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 61.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 3,
        IconPhrase: "Partly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 38,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/gb/milton-keynes/mk9-2/daily-weather-forecast/49299_pc?day=5&lang=en-us",
      Link: "http://www.accuweather.com/en/gb/milton-keynes/mk9-2/daily-weather-forecast/49299_pc?day=5&lang=en-us",
    },
  ],
};
