# progress插件

常用于跟踪进度

# 插件依赖

http://design.yyuap.com/static/uui/latest/js/u.js

http://design.yyuap.com/static/uui/latest/css/u.css

# 用法

1.详情见示例

# 示例


##基本Progress
<div class="example-content"><div id="p1" class="u-progress"></div></div>
<div class="example-content ex-hide"><script>u.on(window, 'load', function() {
    'use strict';
    document.querySelector('#p1')['u.Progress'].setProgress(33);

});
</script></div>
<div class="examples-code"><pre><code>u.on(window, 'load', function() {
    'use strict';
    document.querySelector('#p1')['u.Progress'].setProgress(33);

});</code></pre>
</div>
<div class="examples-code"><pre><code>&lt;div id="p1" class="u-progress">&lt;/div></code></pre>
</div>

##不确定Progress
<div class="example-content"><div id="p2" class="u-progress u-progress__indeterminate"></div>
</p></div>
<div class="examples-code"><pre><code>&lt;div id="p2" class="u-progress u-progress__indeterminate">&lt;/div>
&lt;/p></code></pre>
</div>

##缓冲Progress

有缓冲标识的进度条
<div class="example-content"><div id="p3" class="u-progress"></div></div>
<div class="example-content ex-hide"><script>u.on(window, 'load', function() {
    'use strict';
    document.querySelector('#p3')['u.Progress'].setProgress(33).setBuffer(87);

});
</script></div>
<div class="examples-code"><pre><code>&lt;div id="p3" class="u-progress">&lt;/div></code></pre>
</div>
<div class="examples-code"><pre><code>u.on(window, 'load', function() {
    'use strict';
    document.querySelector('#p3')['u.Progress'].setProgress(33).setBuffer(87);

});</code></pre>
</div>


# API

## JS 方法参数

<table>
  <tbody>
  	  <tr>
	    <td>名称</td>
	    <td>参数</td>
	    <td>描述</td>
	    <td></td>
	  </tr>
	  <tr>
	    <td>setProgress(para)</td>
	    <td>para:比例数据</td>
	    <td>初始化滚动条并设置比例</td>
	    <td></td>
	  </tr>
	  <tr>
	    <td>setBuffer(para)</td>
	    <td>para:设置缓冲比例</td>
	    <td>缓冲滚动条</td>
	    <td></td>
	  </tr>
	</tbody>
</table>

## css 参数

<table>
  <tbody>
  	  <tr>
	    <td>名称</td>
	    <td>参数</td>
	    <td>描述</td>
	    <td></td>
	  </tr>
	  <tr>
	    <td>颜色</td>
	    <td>1.u-progress-primary 2.u-progress-danger 3.u-progress-info 4.u-progress-warning 5.u-progress-dark</td>
	    <td>加在父元素的类后面 设置不同的色值</td>
	    <td></td>
	  </tr>
	  <tr>
	    <td>大小</td>
	    <td>1.u-progress-lg 2.u-progress-md 3.u-progress-sm</td>
	    <td>父元素的类后面 设置不同的尺寸</td>
	    <td></td>
	  </tr>
	</tbody>
</table>

