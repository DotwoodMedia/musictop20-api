# Musictop20-API
Show the statistics on your own site/bot with this handy package!

[![downloadsBadge](https://img.shields.io/npm/dt/themusictop20-api?style=for-the-badge)](https://npmjs.com/themusictop20-api)
[![versionBadge](https://img.shields.io/npm/v/themusictop20-api?style=for-the-badge)](https://npmjs.com/themusictop20-api)

# 💻 Installation

1. Install module: `npm install themusictop20-api`
2. Load the module
```
const musictop20 = require('themusictop20-api');
```

# ⚙ All functions
## getStats()
See all the statistics of the site
```
const data = await musictop20.getStats();
console.log(data)
```

## getStatsUsers()
See the site's user statistics
```
const data = await musictop20.getStatsUsers();
console.log(data)
```

## getStatsNominations()
See the site's nomination statistics
```
const data = await musictop20.getStatsNominations();
console.log(data)
```

## getStatsVotes()
See the site's vote statistics
```
const data = await musictop20.getStatsVotes();
console.log(data)
```

## getStatsViews()
See the site's views statistics
```
const data = await musictop20.getStatsViews();
console.log(data)
```

## getNominations()
View all nominations from the website
```
var data = await musictop20.getNominations();

let list = "";
for (let i = 0; i < data.response.length; i++) {
    list += `https://open.spotify.com/embed/track/${data.response[i].songid} \n`;
}
        
console.log(list);
```

## getEdition1()
View the results of edition 1
```
var data = await musictop20.getEdition1();

let list = "";
for (let i = 0; i < data.response.length; i++) {
    list += `https://open.spotify.com/embed/track/${data.response[i].songid} \n`;
}
        
console.log(list);
```

## register()
Create a new account
```
var data = await musictop20.register(key, username, email, password);
console.log(`Verify yourself on: https://music.dotwood.media/verify with the code: ${data.response}`)
```

## mynominations()
Show your nominations
```
var data = await musictop20.mynominations(key);
console.log(data)
```

# 📑 License
This project has an <a href="https://github.com/DotwoodMedia/musictop20-api/blob/main/LICENSE">Apache 2.0</a> license