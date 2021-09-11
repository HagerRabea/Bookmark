var nameInput=document.getElementById("name");
var urlInput=document.getElementById("url");
var errorName=document.getElementById("error1");
var errorurl=document.getElementById("error2");
var submit=document.getElementById("submit");
var divSection=document.getElementById("divs");
var alldiv=document.getElementById("color");

if(localStorage.getItem("userWebsites")==null){
    var urls=[];
  }else{
    var urls= JSON.parse(localStorage.getItem("userWebsites"));
  }
  display();
submit.addEventListener("click",function(){
    if(nameInput.value==""||urlInput.value==""){
      errorName.classList.replace("d-none","d-flex");
      errorurl.classList.replace("d-none","d-flex");
    }else{
        var urlobject={
            username:nameInput.value,
            userurl:urlInput.value
        }
        urls.push(urlobject);
        localStorage.setItem("userWebsites",JSON.stringify(urls));
        console.log(urls);
    }
    nameInput.addEventListener("click",function(){
        errorName.classList.replace("d-flex","d-none");
    })
    urlInput.addEventListener("click",function(){
        errorurl.classList.replace("d-flex","d-none");
    })
    display();

})

function display(){
    var str="";
 for(var i=0; i<urls.length; i++){
     str+=`<tr class="bg-light mb-5">
     <td class="fs-4">${urls[i].username}</td>
     <td><div class="w-25 float-start">
     <buttun class="m-1 btn btn-info"><a class="text-decoration-none text-white" target="_blank" href="${urls[i].userurl}">Visit<a></button> </div>
    <div><buttun class="btn btn-danger hager" onclick="deletelink(${i})">delete</buttun>
</div>
   </td></tr>`;
// i=0;


{/* <td>
<buttun class="m-1 btn btn-info"><a class="text-decoration-none text-white" target="_blank"
 href="${urls[i].userurl}">Visit<a></button> 
 </td>
 <td>
<buttun class="btn btn-danger hager" onclick="deletelink(${i})">delete</buttun>
</td> */}









//   var div=document.createElement("div");
//   var smalldiv=document.createElement("div");
//   var p=document.createElement("p");
//   p.innerHTML=urls[i].username;
//   p.classList.add("w-25","fw-bold","fs-4")
//   var del=document.createElement("button");
//   var visit=document.createElement("button");
//   visit.innerHTML=`<a class="text-decoration-none text-white" target="_blank" href=${urls[i].userurl}>Visit<a>`;
//   visit.classList.add("btn","btn-info");
//   del.classList.add("btn","btn-danger");
//   del.innerHTML="delete";
//   div.classList.add("w-100","d-flex","justify-content-start","align-items-center","p-2","container","mb-3");
//   div.style.backgroundImage="linear-gradient(rgb(238, 238, 238),white)";
//   divSection.appendChild(div);
//   div.appendChild(p);
//   smalldiv.classList.add("w-25");
//   visit.classList.add("m-1")
//   div.appendChild(smalldiv);
//   smalldiv.appendChild(visit);
//   smalldiv.appendChild(del);
//   i++;
// str+=`  <div class="w-100 d-flex justify-content-start align-items-center p-2 container mb-3 color bg-secondary">
// <p class="w-25 fw-bold fs-4">${urls[i].username}</p>
{/* <div class="w-25">
     <buttun class="m-1 btn btn-info"><a class="text-decoration-none text-white" target="_blank" href="${urls[i].userurl}">Visit<a></button> 
    <buttun class="btn btn-danger hager" onclick="delete(${i})">delete</buttun>

</div> */}
// </div>`
// }
// divSection.innerHTML=str;
 }
 tbody.innerHTML=str;
}




function deletelink(i){
    urls= JSON.parse(localStorage.getItem("userWebsites"));
        urls.splice(i,1);
        localStorage.setItem("userWebsites",JSON.stringify(urls));
        display();
}

