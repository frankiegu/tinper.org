# message插件

用于即时信息的提示，消息背景色取决于消息类型，也可添加相对应的`icon`

# 插件依赖

http://design.yyuap.com/static/uui/latest/js/u.js

http://design.yyuap.com/static/uui/latest/css/u.css
# 用法

1.定义触发弹出事件的DOM

```
<button id="msgBtn" class="u-button" >Success</button>

```
2.定义弹出信息的具体内容

```
var rightInfo='<i class="uf uf-checkedsymbol margin-r-5"></i>成功信息!!!';

```

3.js 获取dom

```
var msgBtn = document.body.querySelector("#msgBtn");

```

4.绑定弹框事件

```
u.on(msgBtn,'click', function(){ 
    u.showMessage({msg:rightInfo,position:"center"})
})

```

# 示例


点击 Success 弹出提示消息
<div class="example-content"><button id="msgBtn" class="u-button" >Success</button>
</div>
<div class="example-content ex-hide"><script>var msgBtn = document.body.querySelector("#msgBtn");
var rightInfo='<i class="uf uf-checkedsymbol margin-r-5"></i>成功信息!!!';
u.on(msgBtn,'click', function(){ 
    u.showMessage({msg:rightInfo,position:"center"})
})
</script></div>
<div class="examples-code"><pre><code>&lt;button id="msgBtn" class="u-button" >Success&lt;/button>
</code></pre>
</div>
<div class="examples-code"><pre><code>var msgBtn = document.body.querySelector("#msgBtn");
var rightInfo='&lt;i class="uf uf-checkedsymbol margin-r-5">&lt;/i>成功信息!!!';
u.on(msgBtn,'click', function(){ 
    u.showMessage({msg:rightInfo,position:"center"})
})</code></pre>
</div>



# API

##js参数
<table>
  <tbody>
  	  <tr>
	    <td>名称</td>
	    <td>类型</td>
	    <td>默认值</td>
	    <td>描述</td>
	    <td></td>
	  </tr>
	  <tr>
	    <td>msg</td>
	    <td>html片段</td>
	    <td>无</td>
	    <td><i class="uf uf-checkedsymbol margin-r-5"></i>成功信息!!!';</td>
	    <td></td>
	  </tr>
	  <tr>
	    <td>position</td>
	    <td>string</td>
	    <td>center</td>
	    <td>取值范围：center,top,right,left,bottom.定义弹框显示位置</td>
	    <td></td>
	  </tr>
	</tbody>
</table>


