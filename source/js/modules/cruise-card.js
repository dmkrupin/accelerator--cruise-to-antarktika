const cruiseCardElementsCollection = document.querySelectorAll('.cruise-card');

const initCruiseCards = () => {
    for (let card of cruiseCardElementsCollection) {
        const cardCover = card.querySelector('.cruise-card__cover');
        const cardCoverHeading = card.querySelector('.cruise-card__heading');
        const cardButton = card.querySelector('.cruise-card__button');

        const hideCover = () => {
          cardCover.style.height = '0';
          cardCoverHeading.style.display = 'none';
        };

        const showCover = () => {
          cardCover.style.height = '100%';
          cardCoverHeading.style.display = 'block';
        };

        card.addEventListener('mouseenter', hideCover);
        card.addEventListener('mouseleave', showCover);

        cardButton.addEventListener('focus', hideCover);
        cardButton.addEventListener('blur', showCover);
    }
};

export { initCruiseCards };
