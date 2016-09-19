# Kero依赖

通过设计使程序模块化，做到模块内部的高聚合和模块之间的低耦合，这是引入设计模式的优点，实现了View层和数据层的分离。

Kero的模型层以knockout为基础来做数据的双向绑定，数据模型也是以knockout为核心，构建出来的多维数据模型。

## 选用Knockout

在项目中，我们做数据分离，需要满足以下基本需求：

* 实现需求：数据双向绑定
* 版本支持：支持低版本浏览器（如：ie8）
* 轻量：原生无依赖

以上，Knockout都做了很好的支持:

* 高效简洁的双向绑定
* 浏览器支持友好：ie6及以上
* 原生javascript
* 紧凑：gzip压缩后13kb

##  Ko实现数据绑定




<div class="example-content"><!-- ko通过data-bind绑定数据 -->
<p>First name: <input data-bind="value: firstName" /></p>
<p>Last name: <input data-bind="value: lastName" /></p>
<h2>Hello, <span data-bind="text: fullName"> </span>!</h2></div>
<div class="example-content ex-hide"><script>// 定义ViewModel
var ViewModel = function(first, last) {
	// ko.observable可实时监听数据，实现绑定
    this.firstName = ko.observable(first);
    this.lastName = ko.observable(last);
 
    this.fullName = ko.pureComputed(function() {
    	// ko.pureComputed用于执行计算，实时返回改变后的结果
        return this.firstName() + " " + this.lastName();
    }, this);
};
 
ko.applyBindings(new ViewModel("Planet", "Earth")); // 通过ko.applyBindings执行knockout
</script></div>
<div class="examples-code"><pre><code>&lt;!-- ko通过data-bind绑定数据 -->
&lt;p>First name: &lt;input data-bind="value: firstName" />&lt;/p>
&lt;p>Last name: &lt;input data-bind="value: lastName" />&lt;/p>
&lt;h2>Hello, &lt;span data-bind="text: fullName"> &lt;/span>!&lt;/h2></code></pre>
</div>
<div class="examples-code"><pre><code>// 定义ViewModel
var ViewModel = function(first, last) {
	// ko.observable可实时监听数据，实现绑定
    this.firstName = ko.observable(first);
    this.lastName = ko.observable(last);
 
    this.fullName = ko.pureComputed(function() {
    	// ko.pureComputed用于执行计算，实时返回改变后的结果
        return this.firstName() + " " + this.lastName();
    }, this);
};
 
ko.applyBindings(new ViewModel("Planet", "Earth")); // 通过ko.applyBindings执行knockout</code></pre>
</div>


## Ko学习
了解基本的Knockout可查看由刘绍振同学写的[Knockout入门](https://github.com/iuap-design/blog/issues/26)，涵盖了绑定常用的API。

Ko的官网除了提供[Live examples](http://knockoutjs.com/examples/),还提供了交互式学习的[快速入门](http://learn.knockoutjs.com/),很容易轻松上手。

## 其他Ko学习资料

- 中文文档下载：[KnockoutJS.chm](http://design.yyuap.com/dist/static/handbook/KnockoutJS.chm)
  (如果有下载打不开，请进行如下操作。）
  * 先关闭文件，右键点击文件--》选择“属性”
  
 ![](../../static/img/kero/ko1.png)

  * 点击“解除锁定”，重新打开就可以了
 
 ![](../../static/img/kero/ko2.png)
  