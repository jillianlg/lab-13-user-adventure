export function hasCompletedAllAdventures(_dog, adventures) {
    for (let i = 0; i < adventures.length; i++) {
        const quest = quest[i];

        if (!_dog.completed[adventures.id]) {
            return false;
        }
    }
    return true;
}