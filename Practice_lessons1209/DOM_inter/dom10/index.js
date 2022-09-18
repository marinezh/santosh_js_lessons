const getSelectedCurrencies = () => {

    let res = []
    let cards = document.querySelectorAll('.cards .card.active');
    cards.forEach((card) => {
        res.push(card.textContent);
    })
    return res;
}

// Sample usage - do not modify
document.querySelectorAll(".cards .card")
    .forEach(card => {
        card.addEventListener("click", event => {
            event.currentTarget.classList.toggle("active");
            console.log(getSelectedCurrencies());
        });
    })

    // done


// const getSelectedCurrencies2 = () => {

//     let cards = document.querySelectorAll('.cards .card.active');
//     cards.forEach(card => {
//         let text = card.textContent
//         let res = [...text];
//     })
//     return res


//     return res;

// }

// // Sample usage - do not modify
// document.querySelectorAll(".cards .card")
//     .forEach(card => {
//         card.addEventListener("click", event => {
//             event.currentTarget.classList.toggle("active");
//             console.log(getSelectedCurrencies2());
//         });
//     })

// using spread doesn't work