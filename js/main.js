gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", function(event) {    

    document.getElementById("loading").classList.toggle("loadings")
    document.getElementById("loading").classList.toggle("esconder")
    document.getElementById("linea").classList.toggle("esconder")

});

gsap.to(".avg", {
    opacity: 0,                  // Opacidad final (visible)
      x: 1500,    
                   // Posición final (opcional: 0 para eliminar el desplazamiento vertical)
      duration: 100,                 // Duración de la animación (en segundos)
      scrollTrigger: {
        trigger: ".conatiner", // Elemento que dispara la animación
        start: "top 2%",         // Comienza la animación cuando el 80% del elemento es visible
        end: "bottom 10%",    // Termina la animación cuando el centro del elemento alcanza el centro de la ventana
        scrub: true,              // Animación suave durante el desplazamiento
        toggleActions: "play none none reverse", // Comportamiento de la animación al desplazar
        // markers:true
        },
        color:"transparent",
    });


    gsap.to(".og", {
        opacity: 0,                  // Opacidad final (visible)
          x: -1500,    
                       // Posición final (opcional: 0 para eliminar el desplazamiento vertical)
          duration: 100,                 // Duración de la animación (en segundos)
          scrollTrigger: {
            trigger: ".og", // Elemento que dispara la animación
            start: "top 2%",         // Comienza la animación cuando el 80% del elemento es visible
            end: "bottom 30%",    // Termina la animación cuando el centro del elemento alcanza el centro de la ventana
            scrub: true,              // Animación suave durante el desplazamiento
            toggleActions: "play none none reverse", // Comportamiento de la animación al desplazar
            markers:true
            },
            color:"transparent",
        });
    

//gsap.from(".avg", { duration: 1.3, fadein: false, x:-680});