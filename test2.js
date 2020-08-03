function animatedForm(){
    const arrows = document.querySelectorAll(".fa-arrow-down")

    arrows.forEach(arrow =>{
        // error cheching=
        arrow.addEventListener('click', () =>{
            // if valid move on to the next box
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;
            console.log(parent);


            // check for validation
                if(input.type === "text" && validateUser(input)){
                    console.log(input.value);
                    console.log("everything is okay!");
                }
        });
    });
}

function validateUser(user){
    if(user.value.length < 3){
        console.log('not enough characters');
        error("rgb(189, 87, 87");
        return false;
    } else {
        error("rgb(87, 189, 139");
        return true;
    }
}

function error(color){
    document.body.style.backgroundColor = color;
}
animatedForm();