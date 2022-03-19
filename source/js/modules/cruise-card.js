const cruiseCardElementsCollection = document.querySelectorAll('.cruise-card');

const initCruiseCards = () => {
    for (let card of cruiseCardElementsCollection) {
        card.addEventListener('mouseenter', () => {
            const cardCover = card.querySelector('.cruise-card__cover');
            const cardCoverHeading = card.querySelector('.cruise-card__heading');
            cardCover.style.height = '0';
            cardCoverHeading.style.display = 'none';
        });
        card.addEventListener('mouseleave', () => {
            const cardCover = card.querySelector('.cruise-card__cover');
            const cardCoverHeading = card.querySelector('.cruise-card__heading');
            cardCover.style.height = '100%';
            cardCoverHeading.style.display = 'block';
        });
    }
};

export { initCruiseCards };
