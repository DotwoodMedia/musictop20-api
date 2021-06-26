const fetch = require("node-fetch");

async function getStats() {
    const result = await fetch('https://api.dotwood.media/musictop20/stats');

    const data = await result.json();
    return data;
}

async function getStatsUsers() {
    const result = await fetch('https://api.dotwood.media/musictop20/stats/users');

    const data = await result.json();
    return data;
}

async function getStatsNominations() {
    const result = await fetch('https://api.dotwood.media/musictop20/stats/nominations');

    const data = await result.json();
    return data;
}

async function getStatsVotes() {
    const result = await fetch('https://api.dotwood.media/musictop20/stats/votes');

    const data = await result.json();
    return data;
}

async function getStatsViews() {
    const result = await fetch('https://api.dotwood.media/musictop20/stats/views');

    const data = await result.json();
    return data;
}

async function getNominations() {
    const result = await fetch('https://api.dotwood.media/musictop20/nominations');

    const data = await result.json();
    return data;
}

async function getEdition1() {
    const result = await fetch('https://api.dotwood.media/musictop20/edition1');

    const data = await result.json();
    return data;
}

async function register(username, email, pwd) {
    if (!username) return console.log("Please give a username!");
    if (!email) return console.log("Please give a email!");
    if (!pwd) return console.log("Please give a password!");
    const result = await fetch(`https://api.dotwood.media/musictop20/register?username=${username}&email=${email}&pwd=${pwd}`);

    const data = await result.json();
    return data;
}

module.exports = { getStats, getNominations, getStatsUsers, getStatsNominations, getStatsVotes, getStatsViews, getEdition1, register };