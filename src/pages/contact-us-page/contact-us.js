import callIcon from './icons/call_FILL0_wght400_GRAD0_opsz48.svg';
import locationIcon from './icons/location_on_FILL0_wght400_GRAD0_opsz48.svg';
import mailIcon from './icons/mail_FILL0_wght400_GRAD0_opsz48.svg';
import clockIcon from './icons/schedule_FILL0_wght400_GRAD0_opsz48.svg';

export default function contactUs() {
    
    const contactUsHeader = document.createElement('div');
    contactUsHeader.classList.add('contact-us-header');
    contactUsHeader.innerHTML = `
        <h1>Contact Us</h1>
    `;

    const contactUsContentContainer = document.createElement('div');
    contactUsContentContainer.classList.add('contact-us-content-container');

    contactUsContentContainer.innerHTML = `
        <div>
            <h2>Location <span><image class='icon location-icon'src='${locationIcon}'</span></h2>
            <p class='street-address'>666 AppleWood Smoked St</p>
            <p class='city-address'>Houston, Texas 6666</p>
        </div>
        <div>
            <h2>Schedule <span><img class='icon clock-icon' src='${clockIcon}'></span></h2>
            <ul class='schedule'>
                <div>
                    <li>Monday: 11am-11:30pm</li>
                    <li>Tuesday: 11am-11:30pm</li>
                    <li>Wednesday: 11am-11:30pm</li>
                </div>
                <div>
                    <li>Thursday: 11am-11:30pm</li>
                    <li>Friday: 11am-1:30am</li>
                    <li>Sunday: 7am-11:30pm</li>
                </div>
            </ul>
        </div>
        <div>
            <h2>Phone Number <span><image class='icon phone-number-icon' src='${callIcon}'></span></h2>
            <p class='phone-number'>(666) - 123 - 4567</p>
        </div>
        <div>
            <h2>Message Us <span><image class='icon email-icon' src='${mailIcon}'></span></h2>
            <form>
                <input type='text' placeholder='Full Name'>
                <input type='text' placeholder='Email'>
                <input type='text' placeholder='Your Message'>
                <button>Submit</button>
            </form>
        </div>
        <div>
            <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=1201%20Richmond%20Ave.,%20Houston,%20TX%2077006&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-a.com"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">embedding maps in website</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>
        </div>
    `

    const contactUs = document.createElement('div');
    contactUs.classList.add('contact-us');
    contactUs.append(contactUsHeader, contactUsContentContainer);

    return contactUs;
}