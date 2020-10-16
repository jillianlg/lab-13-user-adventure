export function findById(someArray, id) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        
        if (item.id === id) {
            return item;
        }
    }
} 

export function hasCompletedAllAdventures(_dog, adventures) {
    for (let i = 0; i < adventures.length; i++) {
        const quest = quest[i];

        if (!_dog.completed[adventures.id]) {
            return false;
        }
    }
    return true;
}