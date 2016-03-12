import * as fs from "fs";
import * as request from "request";

export function httpRequest(url: string) {
    return new Promise<string>((resolve, reject) => {
        request(url, (error, response, body) => {
            if (error) {
                reject(error);
            }
            
            if (response.statusCode !== 200) {
                reject(response.statusCode);
            }

            resolve(body);
        });
    });
}

export function readFile(fileName: string) {
	return new Promise<string>((resolve, reject) => {
		fs.readFile(fileName, 'utf8', (error, data) => {
			error ? reject(error) : resolve(data);
		});
	});
}