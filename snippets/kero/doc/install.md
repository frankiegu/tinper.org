# 获取 `Kero` 资源

kero资源已打包在`u.js`中，配合`u.css` ， 依赖`jquery`、`knockout`实现完整前端UI方案。

页面结构如下：

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

  <!-- 整体样式u.css,必须引入 -->
  <link rel="stylesheet" href="//design.yyuap.com/static/uui/latest/css/u.css">
  
</head>
<body>
  <h1> Hi, iuap design </h1>

  <!-- 你的代码 -->

  <!-- 依赖jQuery,必须在核心js加载前引入 -->
  <script src="//design.yyuap.com/static/jquery/jquery-1.11.2.js"></script>

  <!--引入knockout依赖-->
  <script src="http://design.yyuap.com/static/knockout/knockout-3.2.0.debug.js"></script>

  <!--[if lte IE 8 ]>
  <!-- 针对ie8,Polyfill -->
  <script src="//design.yyuap.com/static/uui/latest/js/u-polyfill.js"></script>
  <![endif]-->

  <!-- 核心js 必须引入 -->
  <script src="//design.yyuap.com/static/uui/latest/js/u.js"></script>
  
 
</body>
</html>
```
完整资源可通过以下方式获取

## 1.直接下载资源包

可通过官网首页点击下载资源，获得完整资源包(包含空页面及所需样式)，下载地址

```
http://design.yyuap.com/static/download/iuap-design-3.0.6.zip
```
核心文件`u.js`可通过以下方式获取

## 1.通过CDN引用

```
<script src="http://design.yyuap.com/static/uui/latest/js/u.js"></script>
```

## 2.获取Kero源码

```
$ git clone git@github.com:iuap-design/kero.git
```

## 3.NPM

```
$ npm install kero --save
```
