export default function initAnimationScroll() {
    const sections = document.querySelectorAll(".js-scroll");
    const windowMetade = window.innerHeight *0.6;

    function animaScroll(){
        console.log("sim");
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowMetade)<0;
            console.log(sectionTop);
            if(isSectionVisible){
                section.classList.add("ativo");
            } else {
                section.classList.remove("ativo")
            }
        })
    }


    window.addEventListener('scroll',animaScroll);
}

