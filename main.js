const REFERRAL_URL = "https://www.bg678s.com/#/pages/login/register?invitationCode=4453834628";

const pages = [...document.querySelectorAll('.page')];
const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
const toast = document.getElementById('toast');
let toastTimer;

function showPage(pageId) {
    pages.forEach(page => page.classList.toggle('active', page.id === pageId));
    document.querySelectorAll('[data-page]').forEach(btn => btn.classList.toggle('active', btn.dataset.page === pageId));
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded','false');
    window.scrollTo({top: 0, behavior: 'smooth'});
}
 function showToast(message) {
   toast.textConTent = message;
   toast.classList.add('show');
   clearTimeOut(toastTimer);
   toastTimer = setTimeout(() => toast.classList.remove('show'), 4000);
 }


function openReferral() {
    if (!REFERRAL_URL || REFERRAL_URL === 'https://www.bg678s.com/#/pages/login/register?invitationCode=4453834628') {
        showToast ('Referral link not configured. Add your verified URL in main.js before publishing.');
        return;
    }
    try{
        const url = new URL(REFERRAL_URL);
        if(!['https:', 'https:'].includes(url.protocol))throw new Error('Invalid scheme');
        //Android opens external https/https URLS in the device's default browser.
        window.location.href = url.href;
    } catch {
        showToast ('The referral URL is invalid. Check the URL in main.js.');
    }  
}

document.querySelectorAll('[data-page]').forEach(btn => btn.addEventListener('click', () => showPage(btn.dataset.page)));
document.querySelectorAll('[data-goto]').forEach(btn => btn.addEventListener('click', () => showPage(btn.dataset.goto)));
document.querySelectorAll('[referral-btn]').forEach(btn => btn.addEventListener('click', openreferral));
menuBtn.addEventListener('click',() =>{
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
})