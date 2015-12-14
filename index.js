

var args = process.argv.slice(2);
var media = args[0] || "dev";

// 引入框架
var YF = require('yf');

// 初始化
YF({media:media,root:__dirname}).init();