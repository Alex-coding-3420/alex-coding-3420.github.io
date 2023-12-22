fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    // Display the fetched data in the console
    console.log(data);
    console.log(data[0]);
  })
  .catch((error) => {
    // Handle any errors that occur during the fetch
    console.error('Error fetching the data:', error);
  });
