'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();
// app.use(express.static(__dirname))
app.use(_express2.default.static(_path2.default.join(__dirname, '../css')));
app.use(_express2.default.static(_path2.default.join(__dirname, '../js')));
app.use(_express2.default.static(_path2.default.join(__dirname, '../views')));

app.get('/', (req, res) => {
    // 直接加载静态的html界面
    res.sendFile(_path2.default.join(__dirname, '../views/learn_1.html'));
});

app.listen(3005, () => {
    console.log('servive is start');
});