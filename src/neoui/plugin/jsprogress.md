# progress控件

常用于跟踪进度

# 插件依赖

依赖于 http://design.yonyoucloud.com/static/uui/latest/js/u.js

# 用法

1.详情见示例

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

# 示例




## 基本Progress
<div class="example-content"><div id="p1" class="u-progress"></div></div>



<script>
u.on(window, 'load', function() {
    'use strict';
    document.querySelector('#p1')['u.Progress'].setProgress(33);

});
</script>

<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="p1" class="u-progress">&lt;/div></code></pre>
</div>


<pre class="examples-code"><code>
u.on(window, 'load', function() {
    'use strict';
    document.querySelector('#p1')['u.Progress'].setProgress(33);

});</code></pre>

</div>

## 不确定Progress
<div class="example-content"><div id="p2" class="u-progress u-progress__indeterminate"></div></div>



<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="p2" class="u-progress u-progress__indeterminate">&lt;/div></code></pre>
</div>



</div>

## 缓冲Progress

有缓冲标识的进度条
<div class="example-content"><div id="p3" class="u-progress"></div></div>



<script>
u.on(window, 'load', function() {
    'use strict';
    document.querySelector('#p3')['u.Progress'].setProgress(33).setBuffer(87);

});
</script>

<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;div id="p3" class="u-progress">&lt;/div></code></pre>
</div>


<pre class="examples-code"><code>
u.on(window, 'load', function() {
    'use strict';
    document.querySelector('#p3')['u.Progress'].setProgress(33).setBuffer(87);

});</code></pre>

</div>