const card = [...document.querySelectorAll('.card')];

function flipElement(element) {
    const elementClasses = element.classList;

    elementClasses.toggle('card--flipped');
    
    if(!elementClasses.contains('card--flipped')) {
        elementClasses.add('card--flipped-back');
    } else {
        elementClasses.remove('card--flipped-back');
    }
}

for(let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', () => flipElement(card[i]));
}