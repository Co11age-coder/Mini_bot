import { Bot } from "grammy";

let botBoken = process.env.BOT_TOKEN
const bot = new Bot(botBoken);


bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));


bot.on("message", (ctx) => ctx.reply("Got another message!"));
  

bot.start();
