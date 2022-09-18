const getDivElements = () => {
    return document.querySelectorAll('div')
    // TODO: return all the div elements

}

const getFooterLinks = () => {
    return document.querySelectorAll('#footer-wrapper a')
    // TODO: return all the links that are in the footer-wrapper

}

const getAboutLinks = () => {
    return document.querySelectorAll('.about')
    // TODO: return all the links that point to the About Us page

}


// Sample usage - do not modify
console.log(getDivElements());
console.log(getFooterLinks());
console.log(getAboutLinks());

// done
