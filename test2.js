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
                    var score = test(input.value);
                    console.log("everything is okay!" + score);
                    console.log(score);
                    if (score < 0.5){
                        error("rgb(189, 87, 87");
                    } else {
                        error("rgb(87, 189, 139");
                    }
                    //nextSlide(parent, nextForm);
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
function nextSlide(parent, nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');

}

function error(color){
    document.body.style.backgroundColor = color;
}





// ------------------------------- tf model ------------------------------ //
function review_encode(text) {
    var arr = string_to_arr(text);
    var encoded = [1];
    var count = 0;
    for (word of arr) {
        encoded.push(word_index[word]);
        if (count >= 250) {
            break;
        }
        count++;
    }
    if (encoded.length < 250) {
        for (var i = 0; i < (249 - count); i++) {
            encoded.push(word_index["<PAD>"]);
        }
    }
    return encoded;

}
function string_to_arr(s) {
    return s.replace(/[\W_]+/g, " ").split(" ");
}

async function test(my_input){
    var encoded = review_encode(my_input);
    const model = await tf.loadLayersModel('./projects/tf_start/jsModel/model.json');
    console.log(encoded);
    var result = model.predict(tf.tensor([encoded])).array().then(function(score){
        score = score[0];
        var value = score.pop();

        console.log(value);
        if (value < 0.5){
            error("rgb(189, 87, 87");
        } else {
            error("rgb(87, 189, 139");
        }
        return true;
    });
    //result.then(value => console.log(value[0]));
    
}

// ---------------------------- end tf model --------------------------------- //

console.log("update6");
animatedForm();