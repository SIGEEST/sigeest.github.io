// Back to top button.

const btnScrolltop = document.querySelector(".btnScrolltop")

btnScrolltop.addEventListener('click', () => window.scrollTo(0, 0))

window.addEventListener('scroll', () => {
    if (window.scrollY < 300) 
    {
        btnScrolltop.classList.remove("btnScrolltopOn")
        return;
    }
    btnScrolltop.classList.add("btnScrolltopOn")
})

// FAQ buttons.

const faqButtons = document.querySelectorAll('.buttonCard')

faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!button.nextElementSibling.classList.contains('cardHide'))
        {
            button.nextElementSibling.classList.remove('cardShow')
            button.nextElementSibling.classList.add('cardHide')

            button.children[0].classList.remove('fa-angle-down')
            button.children[0].classList.add('fa-angle-right')
            return;
        }

        button.nextElementSibling.classList.remove('cardHide')
        button.nextElementSibling.classList.add('cardShow')

        button.children[0].classList.remove('fa-angle-right')
        button.children[0].classList.add('fa-angle-down')
    })
})

// Mobile navbar.

const checkBox = document.querySelector('.check')
const navItems = document.querySelector('.navItems')

let navItemsWidth;

checkBox.addEventListener('click', () => {
    if (!checkBox.checked)
    {
        navItemsWidth = navItems.offsetWidth
        navItems.style.right = `${-navItemsWidth}px`

        checkBox.nextElementSibling.classList.remove('fa-close')
        checkBox.nextElementSibling.classList.add('fa-bars')
        return;
    }

    navItems.style.right = "0";

    checkBox.nextElementSibling.classList.remove('fa-bars')
    checkBox.nextElementSibling.classList.add('fa-close')
})

// Onscroll animations.

const presentationObserver = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        const cardArray = entry.target.querySelectorAll('.cardPresentation')
        cardArray.forEach(card => {
            if (entry.isIntersecting) 
            {
                card.style.scale = '1 1';
                return;
            }
            card.style.scale = '0 0';
        })
    })
})

const cardsContainer = document.querySelector('.cardsPresentation')
presentationObserver.observe(cardsContainer)

const workObserver = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        const articleArray = entry.target.querySelectorAll('.work')
        articleArray.forEach(article => {
            if (entry.isIntersecting) 
            {
                article.style.transform = 'rotateY(0)';
                return;
            }
            article.style.transform = 'rotateY(180deg)';
        })
    })
})

const articlesContainer = document.querySelector('.works')
workObserver.observe(articlesContainer)

// Text to voice.

const speech = document.querySelectorAll('.speech')
const slideArticle = document.querySelectorAll('.slideArticle')

speech.forEach((element, i) => {
    element.addEventListener('click', () => {
        const textContent = slideArticle[i].textContent
        
        const msg = new SpeechSynthesisUtterance(textContent)
        msg.lang = 'es-AR'

        speechSynthesis.speak(msg)
    })
})
