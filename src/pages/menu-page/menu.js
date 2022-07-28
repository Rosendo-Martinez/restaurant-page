import bbqImg1 from './food-imgs/barbecue-36318.png';
import bbqImg2 from './food-imgs/barbecue-36348.png';
import bbqImg3 from './food-imgs/barbecue-36388.png';
import bbqImg4 from './food-imgs/barbecue-36440.png';
import bbqImg5 from './food-imgs/kindpng_1212086.png';
import burgerImg1 from './food-imgs/fast-food-png-41600.png';
import burgerImg2 from './food-imgs/fast-food-png-41602.png';
import burgerImg3 from './food-imgs/food-png-2953.png';
import cakeImg from './food-imgs/PngItem_6316973.png';
import icon from './icons/restaurant.png';

export default function menu() {

    function menuItem(img, name, cost, description) {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item');
        itemContainer.innerHTML = `
            <div class='item-image'>
                <img src='${img}'>
            </div>
            <div class='item-info'>
                <h2 class='item-title'>${name} <span class='item-cost'>$${cost}</span></h2>
                <p class='item-description'>${description}</p>
            </div>
        `
        return itemContainer;
    }

    const item1 = menuItem(bbqImg1, 'Char Wood Smoked Kebabs', '19.99', 'These juicy meats and fresh vegetables were slow cooked with charred apple wood smoke.');
    const item2 = menuItem(bbqImg2, 'Vegetables and Sausages', '35.99', 'Vegetable kebabs, corn, and sausages all grilled with freshly cut apple wood.');
    const item3 = menuItem(bbqImg3, 'Texan Style Ribs', '24.99', 'These overnight, slow cooked, dripping with bbq sauce ribs come with a side of beans, seasoned fries, and a large drink.');
    const item4 = menuItem(bbqImg4, 'Chared Chipotle Wings', '19.99', 'These wings were char grilled and drenched in chipotle sauce.');
    const item5 = menuItem(bbqImg5, 'Classic Texan BBQ Plate', '19.99', 'Brown sugar baked beans, buttered smashed potatoes, 2 large texas toasts, and an assortment of smoked meats.');
    const item6 = menuItem(burgerImg1, 'Texas Smash Burgers', '15.99', 'Burgers with smoked and grilled patties, fries cooked and seasoned to perfection, and a texas styled hot dog with an apple wood charred sausage.');
    const item7 = menuItem(burgerImg2, 'McTexan', '19.99', 'This texas take on the McMac has two patties that were slow cooked in cherry wood smoke, saused with classic BBQ sauce, and topped of with onions, tomatos, and pickles.');
    const item8 = menuItem(burgerImg3, 'Meat Lovers Burger', '15.99', 'A burger with grilled bacon, charred chicken, smoked beef patties, and a healthy dose of texas scourced sharp cheddar cheese.');
    const item9 = menuItem(cakeImg, 'Texan Cake', '29.99', 'This Texas cake is stuffed with freshly cut strawberries, organic vanilla, and 100% texas ground mill flour.');

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuItemsContainer = document.createElement('div');
    menuItemsContainer.classList.add('menu-items-container');

    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');
    menuHeader.innerHTML = `
        <h1>Menu <span><img class='menu-icon' src=${icon}></span></h1>
    `

    menuItemsContainer.append(item1, item2, item3, item4, item5, item6, item7, item8, item9);
    menu.append(menuHeader, menuItemsContainer);

    return menu;
}