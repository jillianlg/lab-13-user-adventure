export function findById(someArray, id) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        
        if (item.id === id) {
            return item;
        }
    }
} 
