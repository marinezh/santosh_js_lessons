const getNavbarElement = () => {
    let navBar = document.querySelector('#navbar');
    return navBar;

    // TODO: get the element with id navbar
}

const getMainElement = () => {
    const main = document.querySelector('#main');
    return main;
    // TODO: get the element with id main
}

const getAboutFromFooter = () => {

    return document.querySelector('footer a[href="about.html"]')


    // TODO: get the the about link that's in the footer

}

const getAboutFromFooter2 = () => {

    return document.querySelector('#footer-wrapper a')
    // TODO: get the the about link that's in the footer
}

const getTheParagraphElement = () => {
    const paragraph = document.querySelector('p');
    return paragraph;
    // TODO: get the first paragraph element

}


// Sample usage - do not modify
console.log(getNavbarElement());
console.log(getMainElement());
console.log(getAboutFromFooter());
console.log(getAboutFromFooter2());
console.log(getTheParagraphElement());
