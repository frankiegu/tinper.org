# loading插件

loading 组件以一个圆环顺时针方向运动，用来传达某一事件已经开始但尚未完成的。圆环的颜色可以是单一的或者变化的。

# 插件依赖


首先依赖于 http://design.yonyoucloud.com/static/uui/latest/js/u.js

再引入js: http://design.yonyoucloud.com/static/uui/latest/js/u-date.js

# 用法

定义样式为`u-loading is-active u-loading-single-color `的div父元素

```
<div class="u-loading is-active u-loading-single-color"></div>

```

js会根据`u-loading`来定位dom，然后绑定事件。


# 示例










<div class="example-content"><div class="u-loading is-active u-loading-single-color"></div></div>



<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div class="u-loading is-active u-loading-single-color">&lt;/div></code></pre>
</div>



</div>