
const pages = [...document.querySelectorAll('.page')];
const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menu-btn');

function showPage(pageId) {
    pages.forEach(page => page.classList.toggle('active', page.id === pageId));
    document.querySelectorAll('data-page').forEach(btn => btn.classList.toggle('active', btn.dataset.page === pageId));
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded','false');
    window.scrollTo({top: 0, behavior: 'smooth'});
}


menuBtn.addEventListener('click',() =>{
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
})