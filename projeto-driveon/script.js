
// função que ativa e desativa menu hamburguer
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

    // função para as animações na viewport

        const observer = new IntersectionObserver(entries => {
            console.log(entries)

            Array.from(entries).forEach(entry => {
                if (entry.intersectionRatio >= 0.005) {
                    entry.target.classList.add('hidden-off')
                }
            })

        }, {
            threshold: [0, .5, 1]
        })

        Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
            observer.observe(element)
        })
