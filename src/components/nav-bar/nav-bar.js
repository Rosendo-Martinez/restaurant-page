import logoImg from './icons/pngkey.com-barbecue-png-7034922.png';

export default function navBar() {
    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');

    navBar.innerHTML = `
        <div class='nav-bar-left'>
            <p class='logo-title'>Smokey's BBQ</p>
            <img class='logo-img' src='${logoImg}'>
        </div>
        <div class='nav-bar-right'>
            <nav>
                <ul class='links'>
                    <li onclick="handleNavClick('home')">Home</li>
                    <li onclick="handleNavClick('menu')">Menu</li>
                    <li onclick="handleNavClick('contact')">Contact</li>
                </ul>
            </nav>
        </div>
    `

    function handleNavClick(page) {
        console.log(page);
    }

    return navBar;
}