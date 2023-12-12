const inputBox = document.querySelector("#input-box");

const listContainer = document.querySelector(".list-container");

let btnAdd = document.querySelector(".add-btn");

// add the task
btnAdd.addEventListener("click",()=>{

    if(inputBox.value.trim()===""){
        alert("Enter the task!");
    }else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.append(li);
        
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML="delete";
        li.append(deleteBtn);

        inputBox.value="";
        saveData();
    
    } 
});

// add the task by entering enter key
inputBox.addEventListener("keypress", (e)=> {
    if (e.key === "Enter") {
      e.preventDefault();
      btnAdd.click();
    }
  });

// delete the task
listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="BUTTON"){
        e.target.parentElement.remove();
    }else if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
   
    saveData();
});


// save the data to local storage
function saveData(){
    localStorage.setItem("data1",listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data1");
}
showData();