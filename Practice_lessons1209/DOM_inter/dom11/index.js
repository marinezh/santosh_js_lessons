const getShortTextParagraphs = () => {
    const paragraphs = document.querySelectorAll('p')
    const res = [...paragraphs].filter(paragraph => paragraph.textContent.length < 10)
    return res
}

// Sample usage - do not modify
console.log(getShortTextParagraphs());


// not done, can not recive textContent