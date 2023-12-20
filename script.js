let inp = document.getElementById("taskInput");
let list = document.getElementById("list");
let addTask = document.querySelector("button")

addTask.addEventListener('click', function () {
    if (inp.value === '') {
        alert('Please enter a task')
    } else {
        let item = document.createElement("li"); //Creating the li
        item.innerText = inp.value; //Taking the input from the text entered in the input
        list.appendChild(item);//Adding it into the list

        //Adding the delete/cross icon to delete the task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        item.appendChild(span);
    }
    inp.value = ""; //whenever we add a task - The input field still shows the task that we added in the input field - so here we are resetting the string to be empty
    saveData(); //This will save the updated content in the browser
});

//Adding the feature to remove the task with the cross icon and adding the icon when the task is done
list.addEventListener('click', function (e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//Here we are creating a function that will save our data to the browser 
//So even if we refresh the page our data will remain
function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

//And now we are creating a function that will display the data that has been saved in the above function
function displaySavedData(){
    list.innerHTML = localStorage.getItem("data");
}
displaySavedData();