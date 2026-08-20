
document.addEventListener("DOMContentLoaded", () => {
    
    
    const tarjetas = document.querySelectorAll('.card');
    
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                
                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 }); 

    
    tarjetas.forEach(tarjeta => {
        tarjeta.style.opacity = "0";
        tarjeta.style.transform = "translateY(50px)";
        tarjeta.style.transition = "all 0.6s ease-out";
        observador.observe(tarjeta);
    });

});