const prompt = require("prompt");
const fs = require("fs");
const chalk = require("chalk");
const axios = require("axios");
const {clearInterval} = require("timers");
const config = require("./config.json");
const {exit} = require("process");
const app = {name: "robacena'#6875", version: "3.0", author: "Deobfuscated by robacena'#6875", discord: "robacena'#6875"};
const data = {index: 0, max: 0, results: []};
const keys = ["Tralha#1533"];
async function generateAccount(juliane) {
  var artist = await axios(`${"https://opengen.dpkghub.com/api/generate.php?type="}${juliane}${""}`);
  artist = artist.data;
  if (!data.results.includes(artist)) {
    return data.results.push(artist) + data.index++;
  }
}
async function saveFile(tanea) {
  fs.writeFileSync(`${"./gerador-contas/Tralha-"}${tanea.name}${".txt"}`, data.results.join("\n"), "utf8");
}
var options = [{key: 1, name: "DisneyPlus", value: "Disney"}, {key: 2, name: "ExpressVPN", value: "ExpressVPN"}, {key: 3, name: "Minecraft", value: "Minecraft"}, {key: 4, name: "NBA League Pass", value: "NBA League Pass"}, {key: 5, name: "Netflix", value: "Netflix"}, {key: 6, name: "NordVPN", value: "NordVPN"}, {key: 7, name: "Spotify", value: "Spotify"}, {key: 8, name: "Spotify Family Invitation Link", value: "SpotifyFamily"}, {key: 9, name: "Valorant", value: "NordVPN"}];
function defaultMessage() {
  console.clear();
  console.log(`${" \\n\\ "}`);
  console.log(chalk.hex("#FF0000")(`${"   ████████╗██████╗  █████╗ ██╗     ██╗  ██╗ █████╗      ██████╗ ███████╗███╗   ██╗"}`));
  console.log(chalk.hex("#FF0000")(`${"   ╚══██╔══╝██╔══██╗██╔══██╗██║     ██║  ██║██╔══██╗    ██╔════╝ ██╔════╝████╗  ██║"}`));
  console.log(chalk.hex("#FF0000")(`${"      ██║   ██████╔╝███████║██║     ███████║███████║    ██║  ███╗█████╗  ██╔██╗ ██║"}`));
  console.log(chalk.hex("#FF0000")(`${"      ██║   ██╔══██╗██╔══██║██║     ██╔══██║██╔══██║    ██║   ██║██╔══╝  ██║╚██╗██║"}`));
  console.log(chalk.hex("#FF0000")(`${"      ██║   ██║  ██║██║  ██║███████╗██║  ██║██║  ██║    ╚██████╔╝███████╗██║ ╚████║"}`));
  console.log(chalk.hex("#FF0000")(`${"      ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝     ╚═════╝ ╚══════╝╚═╝  ╚═══╝"}`));
  console.log("\n" + chalk.hex("#FF0000")("Created by: ") + app.author);
  console.log(chalk.hex("#FF0000")("Nome: ") + app.name);
  console.log(chalk.hex("#FF0000")("Versão: ") + app.version);
  console.log(chalk.hex("#FF0000")("Discord: ") + app.discord);
  console.log("\n");
}
function login() {
  defaultMessage();
  console.log(chalk.hex("#ff0000")("[-] ") + "Validando key...");
  setTimeout(() => {
    const shahd = keys.filter(tracyann => {
      return tracyann == config.key;
    })[0];
    if (!shahd) {
      return exit();
    }
    ;
    questions();
  }, 5e3);
}
function question_1() {
  defaultMessage();
  console.log(chalk.hex("#FF0000")("Opções: "));
  options.forEach(jonmarc => {
    console.log(chalk.hex("#ff0000")("[" + jonmarc.key + "] ") + jonmarc.name);
  });
}
function question_2() {
  defaultMessage();
  console.log(chalk.hex("#ff0000")("Quantidade: ") + "Escolha a quantidade de contas que você deseja gerar!");
}
function question_3(anissa) {
  defaultMessage();
  console.log(chalk.hex("#ff0000")("[-]") + `${" Gerando contas "}${anissa}${" "}`);
  console.log(chalk.hex("#ff0000")("[-]") + `${" Contas geradas: "}` + (data.results.length + 1));
}
const questions = async () => {
  question_1();
  const bradlee = await prompt.get(["option"]);
  if (!bradlee.option || !options.find(abdulahi => {
    return abdulahi.key == bradlee.option;
  })) {
    return console.clear() + console.log(chalk.hex("#ff0000")("Erro: ") + "Escolha uma opção válida!");
  }
  ;
  question_2();
  const leecy = await prompt.get(["quantity"]);
  if (!leecy.quantity || leecy.quantity > 1e3) {
    return console.clear() + console.log(chalk.hex("#ff0000")("Erro: ") + "O limite máximo de contas é 1000!");
  }
  ;
  data.max = leecy.quantity;
  const omarian = options.find(ariahnna => {
    return ariahnna.key == bradlee.option;
  });
  const ivo = setInterval(() => {
    if (data.results.length >= data.max) {
      return clearInterval(ivo) + saveFile(omarian);
    }
    ;
    generateAccount(omarian.value);
    question_3(omarian.name);
  }, 1e3);
};
login();
