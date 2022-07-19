
const form = document.querySelector("form"),
eField = form.querySelector(".email"),
eInput = eField.querySelector(".input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector(".input");

form.onsubmit = (e)=>{
    e.preventDefault(); // preveninting form fro submitting
    // if(eInput.value == ""){ // if email is empty
    //     eField.classList.add("shake" ,"error");
    // }
    // if(pInput.value == ""){ // if password is empty
    //     pField.classList.add("shake", "error");
    // }
    (eInput.value == "") ? eField.classList.add("shake") : checkEmail();
    (pField.value == "") ? eField.classList.add("shake") : checkPass();

        
    setTimeout(()=>{ // Remove shake class after 500ms
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    // let's work on input keyup

    eInput.onKeup = ()=>{
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // pattern to validate email
    if(!eInput.value.match(pattern)){ // If pattern not matched when the user entered value
        eField.classList.add("error");
    }else{
        eField.classList.remove("error");
    }
    }

    
    pInput.onKeup = ()=>{
    if(pInput.value == ""){ // If password is empty
        pField.classList.add("error");
    }else{
        pField.classList.remove("error");
    }
    }
}


