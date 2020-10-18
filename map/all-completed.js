export function hasCompletedAllAdventures(adventures, _dog) {
    for (let i = 0; i < adventures.length; i++) {
        const adventure = adventures[i];

        if (!_dog.completed[adventure.id]) {
            return false;
        }
    }
    return true;
}