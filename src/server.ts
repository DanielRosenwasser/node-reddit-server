import { httpRequest, readFile } from "./promisified-io";
import * as express from "express";

async function getRedditFeed(subreddit: string) {
    try {
        return await httpRequest(`http://reddit.com/r/${subreddit}.json`);
    }
    catch (e) {
        return await readFile("../data.json");
    }
}

let app = express();

app.get("/r/aww.json", (req, res) => {
    getRedditFeed("aww")
        .then(body => {
            res.setHeader("Content-Type", "application/json");
            res.send(body);
        })
        .catch(err => console.error(err));
});

//app.use("/", express.static(/*"../SIBLING_FOLDER"*/));

const server = app.listen(8000, () => {
    console.log("Server listening on port 8000");
});




