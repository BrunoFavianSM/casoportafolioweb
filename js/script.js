/**
 * Portafolio Web - Script Principal
 * Este archivo contiene todas las funcionalidades JavaScript del portafolio
 */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar todas las funcionalidades
    initNavigation();
    initScrollAnimation();
    initProjectFilter();
    initFaqAccordion();
    initContactForm();
    initScrollToTop();
});

/**
 * Inicializa la navegación responsive
 */
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    
    // Toggle del menú móvil
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Cambiar estilo del header al hacer scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**
 * Inicializa las animaciones al hacer scroll
 */
function initScrollAnimation() {
    // Detectar elementos para animar
    const animateElements = document.querySelectorAll('.animate');
    
    // Función para verificar si un elemento está en el viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    };
    
    // Función para animar elementos visibles
    const animateOnScroll = () => {
        animateElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('animated');
            }
        });
    };
    
    // Ejecutar al cargar y al hacer scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
}

/**
 * Inicializa el filtro de proyectos
 */
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    if (filterButtons.length && projectItems.length) {
        // Agregar evento a cada botón de filtro
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remover clase active de todos los botones
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Agregar clase active al botón clickeado
                button.classList.add('active');
                
                // Obtener categoría a filtrar
                const filterValue = button.getAttribute('data-filter');
                
                // Filtrar proyectos
                projectItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        // Agregar animación
                        setTimeout(() => {
                            item.classList.add('show');
                        }, 50);
                    } else {
                        item.classList.remove('show');
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
        
        // Activar el filtro 'all' por defecto
        const allFilter = document.querySelector('.filter-btn[data-filter="all"]');
        if (allFilter) {
            allFilter.click();
        }
    }
}

/**
 * Inicializa el acordeón de preguntas frecuentes
 */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Cerrar todos los otros items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    otherAnswer.style.maxHeight = null;
                }
            });
            
            // Toggle del item actual
            item.classList.toggle('active');
            
            // Animar la apertura/cierre
            const answer = item.querySelector('.faq-answer');
            const toggle = item.querySelector('.faq-toggle i');
            
            if (item.classList.contains('active')) {
                answer.style.display = 'block';
                toggle.className = 'fas fa-minus';
            } else {
                answer.style.display = 'none';
                toggle.className = 'fas fa-plus';
            }
        });
    });
}

/**
 * Inicializa la validación del formulario de contacto
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Obtener valores del formulario
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validación simple
            if (name === '' || email === '' || subject === '' || message === '') {
                showFormMessage('Por favor, completa todos los campos', 'error');
                return;
            }
            
            // Validar formato de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Por favor, ingresa un email válido', 'error');
                return;
            }
            
            // Simulación de envío exitoso
            // En un caso real, aquí se enviaría el formulario a un servidor
            showFormMessage('¡Mensaje enviado con éxito! Te responderé pronto.', 'success');
            contactForm.reset();
        });
    }
}

/**
 * Muestra un mensaje en el formulario
 */
function showFormMessage(text, type) {
    // Verificar si ya existe un mensaje y eliminarlo
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Crear nuevo mensaje
    const message = document.createElement('div');
    message.className = `form-message ${type}`;
    message.textContent = text;
    
    // Insertar después del formulario
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(message, form.nextSibling);
    
    // Eliminar después de 5 segundos
    setTimeout(() => {
        message.classList.add('fade-out');
        setTimeout(() => {
            message.remove();
        }, 500);
    }, 5000);
}

/**
 * Inicializa el botón de volver arriba
 */
function initScrollToTop() {
    // Crear el botón dinámicamente
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTopBtn);
    
    // Mostrar/ocultar botón según la posición del scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    // Acción de scroll al hacer clic
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Agregar estilos CSS para elementos creados dinámicamente
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    .form-message {
        padding: 1rem;
        margin-top: 1rem;
        border-radius: var(--border-radius-md);
        text-align: center;
        transition: opacity 0.5s ease;
    }
    
    .form-message.success {
        background-color: rgba(40, 167, 69, 0.1);
        color: var(--success-color);
        border: 1px solid var(--success-color);
    }
    
    .form-message.error {
        background-color: rgba(220, 53, 69, 0.1);
        color: var(--danger-color);
        border: 1px solid var(--danger-color);
    }
    
    .form-message.fade-out {
        opacity: 0;
    }
    
    .scroll-top-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: var(--white);
        font-size: 1.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: var(--shadow-md);
    }
    
    .scroll-top-btn.show {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
    
    .scroll-top-btn:hover {
        background-color: var(--primary-dark);
        transform: translateY(-5px);
    }
    
    /* Animaciones para elementos con clase .animate */
    .animate {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate.animated {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Animación para los proyectos filtrados */
    .project-item {
        transition: all 0.3s ease;
        opacity: 0;
    }
    
    .project-item.show {
        opacity: 1;
    }
    
    /* Estilo para header al hacer scroll */
    header.scrolled {
        box-shadow: var(--shadow-md);
        background-color: rgba(255, 255, 255, 0.95);
    }
    
    /* Estilo para hamburger activo */
    .hamburger.active span:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
`;

document.head.appendChild(dynamicStyles);