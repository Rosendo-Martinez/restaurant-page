import homePage from "./pages/home-page/home-page.js";
import menu from "./pages/menu-page/menu.js";
import contactUs from "./pages/contact-us-page/contact-us.js";
import navBar from "./components/nav-bar/nav-bar.js";
import footer from "./components/footer/footer.js";
import './styles.css';

const content = document.querySelector('#content');
content.append(navBar(), homePage(), footer());

window.handleNavClick = function(page) {
    loadPage(page);
}

function clearPage() {
    content.innerHTML = '';
}

function loadPage(page) {
    clearPage();
    if (page === 'home') {
        content.append(navBar(), homePage(), footer());
    } else if (page === 'menu') {
        content.append(navBar(), menu(), footer());
    } else if (page === 'contact') {
        content.append(navBar(), contactUs(), footer());
    }
}

