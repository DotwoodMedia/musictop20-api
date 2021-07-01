const fetch = require("node-fetch");

async function getStats() {
    const result = await fetch('https://api.dotwood.media/musictop20/stats');

    const data = await result.json();
    
    if (data.error == true) {
        throw new Error(data.message);
    }
    else {
        return data;
    }
}

async function getStatsUsers() {
    const result = await fetch('https://api.dotwood.media/musictop20/stats/users');

    const data = await result.json();
    
    if (data.error == true) {
        throw new Error(data.message);
    }
    else {
        return data;
    }
}

async function getStatsNominations() {
    const result = await fetch('https://api.dotwood.media/musictop20/stats/nominations');

    const data = await result.json();

    if (data.error == true) {
        throw new Error(data.message);
    }
    else {
        return data;
    }
}

async function getStatsVotes() {
    const result = await fetch('https://api.dotwood.media/musictop20/stats/votes');

    const data = await result.json();
    
    if (data.error == true) {
        throw new Error(data.message);
    }
    else {
        return data;
    }
}

async function getStatsViews() {
    const result = await fetch('https://api.dotwood.media/musictop20/stats/views');

    const data = await result.json();
    
    if (data.error == true) {
        throw new Error(data.message);
    }
    else {
        return data;
    }
}

async function getNominations() {
    const result = await fetch('https://api.dotwood.media/musictop20/nominations');

    const data = await result.json();
    
    if (data.error == true) {
        throw new Error(data.message);
    }
    else {
        return data;
    }
}

async function getEdition1() {
    const result = await fetch('https://api.dotwood.media/musictop20/edition1');

    const data = await result.json();
    
    if (data.error == true) {
        throw new Error(data.message);
    }
    else {
        return data;
    }
}

async function register(api, username, email, pwd) {
    if (!api) throw new Error(`Please enter a api key!`)
    if (!username) throw new Error(`Please give a username!`)
    if (!email) throw new Error(`Please give a email!`)
    if (!pwd) throw new Error(`Please give a password!`)
    const result = await fetch(`https://api.dotwood.media/musictop20/register?key=${api}?username=${username}&email=${email}&pwd=${pwd}`);

    const data = await result.json();

    if (data.error == true) {
        throw new Error(data.message);
    }
    else {
        return data;
    }
}

async function mynominations(api) {
    if (!api) throw new Error(`Please enter a api key!`);
    const result = await fetch(`https://api.dotwood.media/musictop20/mynominations?key=${api}`);

    const data = await result.json();

    if (data.error == true) {
        throw new Error(data.message);
    }
    else {
        return data;
    }
}

module.exports = { getStats, getNominations, getStatsUsers, getStatsNominations, getStatsVotes, getStatsViews, getEdition1, register, mynominations };