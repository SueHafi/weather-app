describe("template spec", () => {
  it("passes", () => {
    cy.intercept(
      {
        method: "GET",
        url: "https://dataservice.accuweather.com/locations/**",
      },
      {
        statusCode: 503,
      }
    );
    cy.visit("/");
    cy.findByText("Milton Keynes");
  });

  it("loads data after user search", () => {
    cy.intercept(
      {
        method: "GET",
        url: "https://dataservice.accuweather.com/locations/**",
      },
      {
        statusCode: 503,
      }
    );
    cy.visit("/");
    cy.intercept(
      {
        method: "GET",
        url: "https://dataservice.accuweather.com/locations/**",
      },
      {
        fixture: "locationData.json",
      }
    );
    cy.intercept(
      {
        method: "GET",
        url: "https://dataservice.accuweather.com/currentconditions/**",
      },
      {
        fixture: "currentConditionData.json",
      }
    );
    cy.intercept(
      {
        method: "GET",
        url: "https://dataservice.accuweather.com/forecasts/**",
      },
      {
        fixture: "forecastData.json",
      }
    );
    cy.findByRole('searchbox').type('Leeds{enter}');
    cy.findByText('Leeds');
  });
});
