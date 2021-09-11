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
function add(){
    for(var i=0; i<urls.length; i++){
    if(nameInput.value==""||urlInput.value==""){
      errorName.classList.replace("d-none","d-flex");
      errorName.innerHTML="Name is requiredt";
      errorurl.classList.replace("d-none","d-flex");
      errorurl.innerHTML="Url Field is required";
      break;
    }else if(nameInput.value==urls[i].username&&urlInput.value==urls[i].userurl){
        errorName.classList.replace("d-none","d-flex");
        errorName.innerHTML="This Name Is Already Exist";
        errorurl.classList.replace("d-none","d-flex");
        errorurl.innerHTML="This URL Is Alraedy Exist";
        break;
    }
    else{
        
        var urlobject={
            username:nameInput.value,
            userurl:urlInput.value
        }
        urls.push(urlobject);
        localStorage.setItem("userWebsites",JSON.stringify(urls));
        console.log(urls);
        break;}}
    nameInput.addEventListener("click",function(){
        errorName.classList.replace("d-flex","d-none");
    })
    urlInput.addEventListener("click",function(){
        errorurl.classList.replace("d-flex","d-none");
    })
    clearInput();
  display();
 
}



function display(){
    var str="";
 for(var i=0; i<urls.length; i++){
     str+=`<tr class=" mb-5 bg-image:bg-secondary bg-gradient">
     <td class="fs-4">${urls[i].username}</td>
     <td><div class="w-50 float-start">
    <div> <buttun class="m-1 btn btn-info float-start"><a class="text-decoration-none text-white" target="_blank" href="${urls[i].userurl}">Visit<a></button> </div>
    <div><buttun class="btn btn-danger float-start m-1" onclick="deletelink(${i})">delete</buttun>
</div><div> <buttun class="btn btn-secondary float-start m-1" onclick="update(${i})" >Update</buttun></div>
   </td></tr>`;
 }
 tbody.innerHTML=str;
}

function clearInput(){
    nameInput.value="";
    urlInput.value="";
}
function deletelink(i){
    urls= JSON.parse(localStorage.getItem("userWebsites"));
        urls.splice(i,1);
        localStorage.setItem("userWebsites",JSON.stringify(urls));
        display();
}

function update(k){
    nameInput.value=urls[k].username;
    urlInput.value=urls[k].userurl;

   submit.innerHTML="updat ";
   submit.classList.add("btn-secondary", "text-white");
   submit.onclick=function(){
    urls= JSON.parse(localStorage.getItem("userWebsites"));
    urls[k].username =nameInput.value;
    urls[k].userurl=urlInput.value;
    localStorage.setItem("userWebsites",JSON.stringify(urls));
    display();
    clearInput();
    submit.innerHTML="Submit";
    submit.classList.remove("btn-secondary")
    submit.onclick=function(){
      addProduct();
    }
   } 
  }

