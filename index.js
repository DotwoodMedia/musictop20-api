const fetch = require("node-fetch");

function getStats() {
    fetch(`https://api.dotwood.media/musictop20/stats`).then((res) => res.json()).catch({})
        .then(async (json) => {
            return json;
        }).catch({})
}

module.exports = { getStats };