document.addEventListener("DOMContentLoaded", () => {
    
    // 1. EFECTO DE MÁQUINA DE ESCRIBIR EN EL TÍTULO
    const titulo = document.querySelector('.hero h1');
    if (titulo) {
        const textoOriginal = titulo.textContent;
        titulo.textContent = ''; // Vaciamos el texto inicial
        let i = 0;
        
        function maquinaDeEscribir() {
            if (i < textoOriginal.length) {
                titulo.textContent += textoOriginal.charAt(i);
                i++;
                setTimeout(maquinaDeEscribir, 100); // Velocidad de las teclas (100ms)
            }
        }
        setTimeout(maquinaDeEscribir, 300); // Espera un poquito antes de empezar
    }

    // 2. APARICIÓN EN CASCADA PARA LAS TARJETAS DE PROYECTOS
    const tarjetas = document.querySelectorAll('.card');
    const observadorTarjetas = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";
                observadorTarjetas.unobserve(entrada.target); // Deja de animar una vez que ya apareció
            }
        });
    }, { threshold: 0.1 }); 

    tarjetas.forEach((tarjeta, index) => {
        tarjeta.style.opacity = "0";
        tarjeta.style.transform = "translateY(50px)";
        // Añade un retraso multiplicando el índice (0s, 0.2s, 0.4s...)
        tarjeta.style.transition = `all 0.6s ease-out ${index * 0.2}s`;
        observadorTarjetas.observe(tarjeta);
    });

    // 3. ANIMACIÓN "POP" PARA LAS ETIQUETAS DE HABILIDADES
    const skills = document.querySelectorAll('.skill-tag');
    const observadorSkills = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "scale(1)";
                observadorSkills.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.1 });

    skills.forEach((skill, index) => {
        skill.style.opacity = "0";
        skill.style.transform = "scale(0.8)"; // Empieza un poco más pequeña
        // Efecto dominó más rápido para las habilidades
        skill.style.transition = `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.1}s`; 
        observadorSkills.observe(skill);
    });

    // 4. SOMBRA DINÁMICA EN EL MENÚ DE NAVEGACIÓN
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
            header.style.transition = "box-shadow 0.3s ease";
        } else {
            header.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
        }
    });

    // 5. DESPLAZAMIENTO SUAVE PARA LOS ENLACES DEL MENÚ
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Evita el salto brusco normal
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});