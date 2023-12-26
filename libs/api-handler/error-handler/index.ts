import { handle401defaultError } from "./401";
import { handle404defaultError } from "./404";

export const handleDefaultError = (status) => {
    switch (status) {
        case 401: 
            return handle401defaultError();
        case 404:
            return handle404defaultError();
        default:
            break;
    }
};