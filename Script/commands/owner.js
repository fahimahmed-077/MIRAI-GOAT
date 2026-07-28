const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "owner",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "🔰𝐑𝐀𝐇𝐀𝐓 𝐈𝐒𝐋𝐀𝐌🔰",
  description: "Show Owner Info with styled box & random photo",
  commandCategory: "Information",
  usages: "owner",
  cooldowns: 2
};

module.exports.run = async function ({ api, event }) {

  
  const info = `
╔═══════════════✿
║ ✨ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 ✨
╠═══════════════✿
║ 👑 𝗡𝗮𝗺𝗲 : 𝗙𝗔𝗛𝗜𝗠 𝗜𝘀𝗹𝗮𝗺
║ 🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲 : 𝗙𝗔𝗛𝗜𝗠
║ 🎂 𝗔𝗴𝗲 : 16
║ 💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 : 𝗦𝗶𝗻𝗴𝗹𝗲
║ 🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻 : 𝗦𝘁𝘂𝗱𝗲𝗻𝘁
║ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : 𝗗𝗛𝗔𝗞𝗔
╠═══════════════✿
║ 🔗 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦
╠═══════════════✿
║ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :
║ fb.com/61591571863767
║ 💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 :
║ m.me/61591571863767
╚═══════════════✿
`;

  const images = [
    "https://i.imgur.com/kAvKTFG.jpeg",
    "https://i.imgur.com/IdfQxpN.jpeg",
    "https://i.imgur.com/BiBaoK8.jpeg",
    "https://i.imgur.com/WFWVQsI.jpeg"
  ];

  const randomImg = images[Math.floor(Math.random() * images.length)];

  const callback = () => api.sendMessage(
    {
      body: info,
      attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
    },
    event.threadID,
    () => fs.unlinkSync(__dirname + "/cache/owner.jpg")
  );

  return request(encodeURI(randomImg))
    .pipe(fs.createWriteStream(__dirname + "/cache/owner.jpg"))
    .on("close", () => callback());
};
