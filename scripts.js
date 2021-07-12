"use strict"; 

document.querySelector("#lettersMenuitem").addEventListener("click", function(event){
        console.log("You clicked the letters");
        event.preventDefault();  
        //show letters
        document.querySelector("#letters").style.display = "block"; 
        // hide numbers
        document.querySelector("#numbers").style.display = "none"; 
        //hide menu
        document.querySelector("#menu").style.display = "none"; 
});
document.querySelector("#lettersMenuitem").addEventListener("click", function(event){
        console.log("You clicked the numbers");
        event.preventDefault();  

        //show numbers 
        document.querySelector("#numbers").style.display = "block"; 
        // hide letters 
        document.querySelector("#letters").style.display = "none";  
        // hide menu
        document.querySelector("#menu").style.display = "none"; 
});


// when clicking hotdog, show menu
document.querySelector("#hotdog").addEventListener("click", function(){
        document.querySelector("#menu").style.display = "block"; 
})