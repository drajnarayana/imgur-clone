//API  credentials

clientId="fada7c960778152";

clientSecret="eafd7c01ccab5ad51914556357688a269ed8f382"



//API request


var requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Client-ID ${clientId}`,
    },
    redirect: "follow",
  };

  let tags=[]
fetch("https://api.imgur.com/3/tags", requestOptions)
  .then(response => response.json())
  .then(result => {
    tags = [...result.data.tags];
    console.log("tags:", tags);

  })
  .catch(error => console.log('error', error));


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


// document.querySelector("#return-to-top").addEventListener("click", scrollTop);

// function scrollTop() {
//   console.log("Yes")
//   // document.body.scrollTop = 0;
//   // document.documentElement.scrollTop = 0;
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// }

function debounce(){
  let input=document.getElementById("input").value;
  let showSearch=document.getElementById("showSearchBar")
  if(!input){
    showSearch.classList.remove("searchBar")

    showSearch.classList.add("searchBarhide")
  }
  else{
    showSearch.classList.remove("searchBarhide")

    showSearch.classList.add("searchBar")
  }

  let name1=document.getElementsByClassName("name_1")
  let name2=document.getElementsByClassName("name_2")
  // for(var i=0;i<name1.length;i++){
  //   name1[i].textContent=`${input}`
  // }
  let result=tags.filter((item)=>{
    return item.name.startsWith(`${input}`)

  })
  if(result.length!==0){
    for(var i=0;i<name1.length;i++){
      if(!result[i]){
       name1[i].textContent=`${result[0].name}`
      }
      else{
       name1[i].textContent=`${result[i].name}`
      }
     
   }
   for(var i=0;i<name2.length;i++){
     if(!result[i]){
      name2[i].textContent=`${result[0].name}`
     }
     else{
      name2[i].textContent=`${result[i].name}`
     }
    
  }
  }
  else{
    for(var i=0;i<3;i++){
     name1[i].textContent="nothing found"
     name2[i].textContent="nothing found"
   }
  }


 
 
  
}

let name2=document.getElementsByClassName("name_2")
// console.log("name2",name2)
for(let i=0;i<name2.length;i++){
  // console.log(name2[i])
  name2[i].addEventListener("click",()=>{
    let tagName=name2[i].textContent

    fetch(`https://api.imgur.com/3/gallery/t/${tagName}`, requestOptions)
  .then(response => response.json())
  .then(result => {
    // tags = [...result.data.tags];
    console.log("tags:",result);

  })
  .catch(error => console.log('error', error));
  })
}


