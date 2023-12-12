function getAdvice()
{
    const adviceIDElement = document.getElementById("advice-id");
    const adviceElement = document.getElementById("advice");

    const apiAdress = "https://api.adviceslip.com/advice";


    fetch(apiAdress)
    .then(response => {
        if (response.ok) {
        return response.json(); // Parse the response data as JSON
        } else {
        throw new Error('API request failed');
        }
    })
    .then(data => {
        // Process the response data here
        console.log(data); // Example: Logging the data to the console
        adviceIDElement.innerText = data.slip.id;
        adviceElement.innerText = data.slip.advice;
    })
    .catch(error => {
        // Handle any errors here
        console.error(error); // Example: Logging the error to the console
    });

}