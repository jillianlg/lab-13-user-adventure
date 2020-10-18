function scoreTreats(treats) {
    if (treats === 0) {
        return 'tomorrow.';   
    }
    else if (treats < 12) {
        return 'average';   
    }
    return 'spoiled';
}

export default scoreTreats;