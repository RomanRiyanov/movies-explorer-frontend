import { widthCounter1320, widthCounter1180, widthCounter767 } from "../constants/constants";

export const addedFilmCounter = (width) => {
    let count = 0;
        if (width > 1180) {
            count = widthCounter1320;
        }
        else if (width <= 1180 && width > 767) {
            count = widthCounter1180;
        }
        else if (width <= 767) {
            count = widthCounter767;
        }
    return count;
}
