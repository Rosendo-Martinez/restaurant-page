import GithubIcon from './icons/GitHub-Mark-Light-120px-plus.png';

export default function footer() {
    const footer = document.createElement('div')
    footer.classList.add('footer')

    footer.innerHTML = `
        <p class='copyright-text'>Copycat © 2022 Rose <span><a href='#'><image class='icon github-icon' src='${GithubIcon}'></a></span></p>
    `

    return footer;
}