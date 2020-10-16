const DOG = 'DOG';

export function saveDog(dog) {
    const stringyDog = JSON.stringify(dog);

    localStorage.setItem(DOG, stringyDog);
}

export function getDog() {
    const stringyDog = localStorage.getItem(DOG);

    return JSON.parse(stringyDog);
} 