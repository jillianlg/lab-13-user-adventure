function scoreAdventure(choice, adventureId, dog) {
    // add baddog to dog according to the choice's consequences
    dog.baddog += choice.baddog;
    // add treats to the dog according to the choices consqencuewbnf
    dog.treats += choice.treats;
    // set this adventure id to completed in the dog
    dog.completed[adventureId] = true;
}

export default scoreAdventure;