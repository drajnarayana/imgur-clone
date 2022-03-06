clientId="fada7c960778152";

clientSecret="eafd7c01ccab5ad51914556357688a269ed8f382"

// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Client-ID {{clientId}}");

// var formdata = new FormData();


//API request
// var requestOptions = {
//     method: "GET",
//     headers: {
//       Authorization: `Client-ID ${clientId}`,
//     },
//     redirect: "follow",
//   };
  
// fetch("https://api.imgur.com/3/gallery/top", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result.data))
//   .catch(error => console.log('error', error));

let tag=document.getElementsByClassName("moreTags")[0]
let tag2=document.getElementById("lessTags2")
  tag.addEventListener("click",()=>{
   let more=tag.textContent;
   if(more=="MORE TAGS +"){
     tag.textContent= "LESS TAGS x"
    //  tag2.style.display="block"
    //  tag2.classList.toggle("tag2")
    tag2.className="tagContainer2"
    tag2.style.display="flex";
    tag2.style.justifyContent="space-between";
    tag2.style.marginTop="10px";
    // tag2.style.borderRadius="3px"

   }
   else{
     tag.textContent="MORE TAGS +"
    //  tag2.style.display="none"
    tag2.className="raj"
    tag2.style.display="none"
   }
   console.log(tag2)
   tag2.classList.toggle("tagContainer2")
  })