import {crawlerController} from './crawler';

export const register = (appObject) => {
    appObject.use('/crawl', crawlerController);
}