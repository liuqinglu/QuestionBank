/**
 * Created by Administrator on 2016/8/17 0017.
 */
$(function () {
    var json = '[' +
        '{' +
        '"text": "互联网中心",' +
        '"nodes": [' +
        '{' +
        '"text": "前端开发",' +
        '"nodes": [' +
        '{' +
        '"text": "HTML5"' +
        '},' +
        '{' +
        '"text": "JavaScript"' +
        '}' +
        ']' +
        '},' +
        '{' +
        '"text": "UI设计"' +
        '}' +
        ']' +
        '},' +
        '{' +
        '"text": "行政部"' +
        '},' +
        '{' +
        '"text": "法务部"' +
        '},' +
        '{' +
        '"text": "人事部"' +
        '},' +
        '{' +
        '"text": "财务部"' +
        '}' +
        ']';
    var $tree = $('#treeview').treeview({
        data: json
    });
});