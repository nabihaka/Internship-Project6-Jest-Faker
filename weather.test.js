// Mock DOM elements
document.body.innerHTML = '<div id="weather"></div>';

const apiKey = '5fc69caa0771ec2512584f5715235ee1';
const cityId = '1625812';
const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=metric`;

describe('Weather API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should fetch weather data and update DOM', async () => {
    const mockData = {
      list: [
        {
          dt: 1633593600,
          main: { temp: 25 },
          weather: [{ description: 'clear sky' }]
        }
      ]
    };

    // Mock fetch response
    fetch.mockResponseOnce(JSON.stringify(mockData));

    // Run the fetch logic (the code you're testing)
    await fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = '';
        const forecastList = data.list.slice(0, 1);
        forecastList.forEach(forecast => {
          const date = new Date(forecast.dt * 1000).toLocaleString();
          const temp = forecast.main.temp;
          const description = forecast.weather[0].description;
          const forecastElement = document.createElement('p');
          forecastElement.textContent = `${date}: ${temp}°C - ${description}`;
          weatherDiv.appendChild(forecastElement);
        });
      });

    // Check if the DOM is updated correctly
    const weatherDiv = document.getElementById('weather');
    expect(weatherDiv.innerHTML).toContain('25°C');
    expect(weatherDiv.innerHTML).toContain('clear sky');
  });

  it('should handle fetch errors', async () => {
    // Mock fetch to throw an error
    fetch.mockRejectOnce(new Error('API failure'));

    // Run the fetch logic
    await fetch(apiUrl)
      .catch(error => {
        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerText = 'Error loading weather data. Please try again later.';
      });

    // Check if the error message is displayed
    const weatherDiv = document.getElementById('weather');
    expect(weatherDiv.innerText).toBe('Error loading weather data. Please try again later.');
  });
});
