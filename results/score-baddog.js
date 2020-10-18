function scoreBaddog(baddog) {
    if (baddog <= 30) {
        return 'naughty';
    }
    if (baddog < 20) {
        return 'ruffday';
    }
    return 'gooddog';
}

export default scoreBaddog;