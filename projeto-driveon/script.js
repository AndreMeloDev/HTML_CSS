

let count = 0;

function show() {

        if(count === 0) {
            document.querySelector(".show-menu").style.display = "initial";

            count = 1
        }
        else{
            document.querySelector(".show-menu").style.display = "none";

            count = 0;
        }
    }
