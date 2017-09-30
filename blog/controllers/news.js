// 创建对象
var news = {};

// 挂载方法
news.index = function(req, res) {
	res.render('news');
}

// 向外导出
module.exports = news;

