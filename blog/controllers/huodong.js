// 创建对象
var huodong = {};

// 挂载方法
news.index = function(req, res) {
	res.render('huodong');
}

// 向外导出
module.exports = huodong;

