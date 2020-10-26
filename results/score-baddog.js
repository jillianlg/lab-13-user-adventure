function scoreBaddog(baddog) {
    if (baddog <= 25) {
        return 'naughty';
    }
    if (baddog < 15) {
        return 'ruffday';
    }
    return 'gooddog';
}

export default scoreBaddog;