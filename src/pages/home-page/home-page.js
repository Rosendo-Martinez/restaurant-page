import BbqImg from './imgs/home-page-image.jpg';
import bbqPig from './imgs/pngkey.com-barbecue-png-7034922.png';

export default function homePage() {
    const content = document.querySelector('#content');

    const mainImg = document.createElement('img');
    mainImg.src = BbqImg

    const logoImg = document.createElement('img');
    logoImg.src = bbqPig;

    const h1 = document.createElement('h1');
    h1.textContent = `Smokey's BBQ`
    
    const pCTA = document.createElement('p');
    pCTA.classList.add('p-cta');
    pCTA.textContent = `Eat like a real texan!`;

    const pDescription = document.createElement('p');
    pDescription.classList.add('p-description')
    pDescription.textContent = `Smoked meats that make your mouth water.`;

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Discover Menu';
    menuBtn.onclick = () => {handleNavClick("menu")};

    const sideBarSlider = document.createElement('div');
    sideBarSlider.classList.add('side-bar-slider');

    const divLeft = document.createElement('div');
    divLeft.classList.add('div-left');
    const divRight = document.createElement('div');
    divRight.classList.add('div-right');
    const homePageContainer = document.createElement('div');
    homePageContainer.classList.add('home-page-container');

    divLeft.append(logoImg,pCTA, h1, pDescription, menuBtn);
    divRight.append(mainImg);
    homePageContainer.append(divLeft, divRight, sideBarSlider);

    return homePageContainer;
}


