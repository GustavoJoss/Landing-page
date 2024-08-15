$(document).ready(function() {
    $('#mobile_btn').click(function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find("i").toggleClass('fa-x');
    });

    const sections = $('.section');
    const navItems = $('#nav_list .nav_item a');

    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop();
        let activeSectionIndex = sections.length - 1; // Padrão: última seção

        if (scrollPosition <= 0) {
            header.css({
                'box-shadow': 'none',
                'transition': 'box-shadow 0.3s ease'
            });
        } else {
            header.css({
                'box-shadow': '5px 1px 5px rgba(0,0,0,0.1)',
                'transition': 'box-shadow 0.3s ease'
            });
        }

        sections.each(function(i) {
            const sectionTop = $(this).offset().top - 100; // Ajuste para altura do cabeçalho
            const sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false; // Para o loop ao encontrar a seção visível
            }
        });

        // Marque o item de navegação ativo
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta',{
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })

    ScrollReveal().reveal('.dish',{
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })

    ScrollReveal().reveal('.testimonial_chef',{
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback',{
        origin: 'right',
        duration: 2000,
        distance: '20%'
    })
});