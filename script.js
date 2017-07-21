const button = document.querySelector(".sendbutton");



function validateForm()

{

  let letters = /^[a-z]+$/;  
    let numbers = /^[1-9]+$/;
let text;
//let a = document.forms['sendform'].value;
    //let b = document.forms['sendform'][1].value;
   let a = document.getElementById('name').value ;
   let b = document.getElementById('surname').value;
   var c = document.getElementById('phone').value;
    //let d = document.getElementById('mail').value;
    
    if (a.match(numbers) )
    {
        text = "Proszę poprawić zawartość pola";
         document.querySelector('.valid').innerHTML = text;
   
       
    }
     
  
    else         
    {
            text = "";
             document.querySelector('.valid').innerHTML = text;
   
             
        };
    
    
   
    if (b.match(numbers))
        {
             text = "Proszę poprawić zawartość pola";
             document.querySelector('.valid').innerHTML = text;
        }
    
    else 
        {
            text = "";
             document.querySelector('.valid').innerHTML = text;
        };
    
    if (c.match(letters))
        {
            text = "Proszę poprawić zawartość pola";
             document.querySelector('.valid').innerHTML = text;
}
    
    else{
        
            text = "";
             document.querySelector('.valid').innerHTML = text;
    }; 
}

button.addEventListener('click',validateForm);