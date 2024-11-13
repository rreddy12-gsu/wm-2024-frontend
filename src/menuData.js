export default function getData() {
    const data = require("./data.json");
    return data["items"];    
}