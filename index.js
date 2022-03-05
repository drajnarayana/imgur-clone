clientId="fada7c960778152";

clientSecret="eafd7c01ccab5ad51914556357688a269ed8f382"

// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Client-ID {{clientId}}");

// var formdata = new FormData();


//API request
var requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Client-ID ${clientId}`,
    },
    redirect: "follow",
  };
  
fetch("https://api.imgur.com/3/gallery/top", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result.data))
  .catch(error => console.log('error', error));