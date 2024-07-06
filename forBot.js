import { Bot } from "grammy";


const bot = new Bot("7352192152:AAGtPkRZGqvzcIyVHkEteO0iS4ti8FvNxN4");


bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));


bot.on("message", (ctx) => ctx.reply("Got another message!"));


bot.start();
