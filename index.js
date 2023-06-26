
let input = document.getElementById('input');


const handlecallBack=()=>{
    alert('I was clicked')      
}

function addingEventListener() {
    input.addEventListener('click', handlecallBack)
}

addingEventListener();









































