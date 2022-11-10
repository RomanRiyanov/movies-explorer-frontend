export const addedFilmCounter = (width) => {
    let count = 0;
        if (width > 1180) {
            count = 3;
        }
        else if (width <= 1180 && width > 767) {
            count = 2;
        }
        else if (width <= 767) {
            count = 2;
        }
    return count;
}