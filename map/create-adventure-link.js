

function createAdventureLink(adventure) {
    const link = document.createElement('a');
    link.classList.add('adventure');

    // link.href = '../adventures/?id=' + adventure.id;
    link.href = `../adventures/?id=${adventure.id}`;

    link.style.top = adventure.map.top;
    link.style.left = adventure.map.left;
    link.textContent = adventure.title;

    return link;
}

export default createAdventureLink;