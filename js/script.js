let theInput=document.querySelector(".add-task input");
let theAddbuton=document.querySelector(".add-task .plus");
let taskContainer=document.querySelector(".tasks-content");
let notasksMsg=document.querySelector(".no-task-mesage");
let taskcontent=document.querySelector(".tasks-content span");
let taskcompleted=document.querySelector(".task-completed span");

///focus in input

window.onload=()=>{
    theInput.focus();
}

theAddbuton.onclick=()=>{
    //// if input is empty
    if(theInput.value === "")
    {
    alert(" flue in field");
    }
    else{
        notasksMsg.remove();

        // create span element 
        let mainspan=document.createElement("span");

        //create delete button 
        let deletebutton =document.createElement("span");

      //Add inputvalue to span 
   
      mainspan.innerHTML=theInput.value;


       // add class to span
       mainspan.className="task-box";

      // add text to deletebutton      
      deletebutton.innerHTML="Delete"
       // add class to delete button
       deletebutton.className="delete";

       // Add delete button to main span
        mainspan.appendChild(deletebutton);

         // add the task to the container
         taskContainer.appendChild(mainspan);
         
         //Emty the input
         theInput.value ="";

         // foucs in field
         theInput.focus();
        // console.log(deletebutton)
         mainspan.onclick=()=>{
            mainspan.style.textDecoration="line-through"
         }
         deletebutton.onclick=()=>{
            mainspan.remove()
         }
    }
}

