/*File name: Assignment1
Student’s Name: Alley Chaggar
StudentID: 301194572 
Date: 2022-09-29*/

// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger'); 
        
        for(button of deleteButtons)
        {			
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) // confirms if user is sure when deleting a buisness contact 
                {
                    event.preventDefault();
                    window.location.assign('/user-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();