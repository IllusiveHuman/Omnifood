const date = document.querySelector('.year');
const header = document.querySelector('.header')
const sectionHero = document.querySelector('.section-hero')

const btn = document.querySelector('.btn-mobile-nav');

const currentYear = new Date().getFullYear();

date.textContent = currentYear;


btn.addEventListener('click', () => {
    header.classList.toggle('nav-open');
})


const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href)
            sectionEl.scrollIntoView({ behavior: "smooth" })

        }
        if (link.classList.contains('main-nav-link')) {
            header.classList.toggle('nav-open');
        }
    })

})

const observer = new IntersectionObserver(function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
        document.body.classList.add('stiky')
    }
    if (ent.isIntersecting) {
        document.body.classList.remove('stiky')
    }
}, {
    root: null,
    threshold: 0,
    rootMargin: '-80px',

})

observer.observe(sectionHero)

