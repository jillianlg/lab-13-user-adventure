

function createAdventureLink(quest) {
    const span = document.createElement('span');
    span.classList.add('adventure');
    span.classList.add('completed');

    span.style.top = quest.map.top;
    span.style.left = quest.map.left;

    span.textContent = quest.title;
    return span;
}

export default createAdventureLink;