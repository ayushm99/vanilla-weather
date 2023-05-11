const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-button');

// by default using Farenheit and similar units of measurement (mi, mph)
let tempUnits = 'I';


searchBtn.addEventListener('click', function() {
    // Get the value from the search input field
    let userInput = searchInput.value;

    console.log(userInput);
    
    // Use the userInput to perform further actions, such as making an API request
    let apiUrl = 'https://api.weatherbit.io/v2.0/current?';
    let apiKey = 'f943111cb5f543a88f015d144317e1d0';

    let requestUrl = (typeof userInput === 'number') ? `${apiUrl}zipcode=${userInput}&key=${apiKey}&units=${tempUnits}` : 
        `${apiUrl}city=${userInput}&key=${apiKey}&units=${tempUnits}`;

    fetch(requestUrl)
    .then(function(response) {
        if (response.ok) {
            if (response.status === 204) return null;  // No content, return null or handle it according to your needs
            
            else return response.json();  // Parse the response body as JSON
        } 
        else throw new Error("HTTP status code: " + response.status);
    })
    .then(function(data) {
        if (data !== null) {
        console.log(data);  // Process the response data
        } else {
        console.log("No content available.");  // Handle the case of no content
        }
    })
    .catch(function(error) {
        console.log(error);  // Handle any errors
    });
    
  });