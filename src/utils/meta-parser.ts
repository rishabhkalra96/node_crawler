import * as metaParser from 'html-metadata-parser';

interface CrawlResponse {
    meta?: object;
    og?: object;
}
export const crawlURL = async (url: string) => {
        try {
            const response = await metaParser.parser(url)
            return parseCrawlerResponse(response);
        } catch (e) {
            throw new Error('An error occured while parsing the url --> ' + e.message);
        }
    }

export async function parseCrawlerResponse(response: CrawlResponse | any) {
    try {
        const crawlerResponse = {...response};
        if (response) {
            let formattedResponse = {};
            if (crawlerResponse.meta) {
                formattedResponse = JSON.parse(JSON.stringify(response.meta));
                delete crawlerResponse.meta;
            }
            if (crawlerResponse.og) {
                formattedResponse = {...formattedResponse, ...JSON.parse(JSON.stringify(crawlerResponse.og))};
                delete crawlerResponse.og;
            }
            // add leftovers from orignial response object
            return {...formattedResponse, ...crawlerResponse};
        }
    } catch (e) {
        throw new Error('An error occured while parsing crawler response --> '+ e.message);
    }
}