//API  credentials

clientId="fada7c960778152";

clientSecret="eafd7c01ccab5ad51914556357688a269ed8f382"



//API request


// var requestOptions = {
//     method: "GET",
//     headers: {
//       Authorization: `Client-ID ${clientId}`,
//     },
//     redirect: "follow",
//   };
  
// fetch("https://api.imgur.com/3/gallery/t/pokemon", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


// For more Tags displaying the block

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

  
//header sticky functionality

var header = document.getElementById("header");
var sticky = header.offsetTop;

window.onscroll = function() {myFunction()};

function myFunction() {

  if (window.pageYOffset >= sticky) {
    
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
    
  }
}


document.querySelector("#return-to-top").addEventListener("click", scrollTop);

function scrollTop() {
  console.log("Yes")
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function debounce(){
  let input=document.getElementById("input").value;
  let name1=document.getElementsByClassName("name_1")
  for(var i=0;i<name1.length;i++){
    name1[i].textContent=`${input}`
  }
  
}