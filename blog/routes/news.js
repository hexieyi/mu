// 加载模块
var express = require('express');
// 定义路由
var router = express.Router();

// 加载新闻对应的控制器
var news = require('../controllers/news');

router.get('/', news.index);

// 向外暴露
module.exports = router;
