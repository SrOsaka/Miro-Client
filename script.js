document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.product-showcase-section');

    sections.forEach(section => {
        const tags = section.querySelectorAll('.quad');
        const slider = section.querySelector('.splide');

        const splide = new Splide(slider, {
            type: 'slide',
            perPage: 1,
            perMove: 1,
            arrows: false,
            pagination: false,
            drag: false,
            speed: 400,
            easing: 'ease',
        });

        splide.mount();

        tags.forEach(tag => {
            tag.addEventListener('click', () => {
                const slideIndex = Number(tag.dataset.slide);

                tags.forEach(btn => btn.classList.remove('active'));
                tag.classList.add('active');

                splide.go(slideIndex);
            });
        });
    });
});