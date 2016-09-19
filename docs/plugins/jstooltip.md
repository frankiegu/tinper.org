# tooltip插件

当您想要描述一个链接的时候，提示工具（Tooltip）就显得非常有用。

# 插件依赖

 http://design.yyuap.com/static/uui/3.0.6/js/u.js
 
 http://design.yyuap.com/static/uui/latest/css/u.css

# 用法

##创建tooltip对象
```
var toptip=new u.Tooltip(toptoolEle,{
title:'默认向上显示'
});

```
##参数设置
创建对象时，添加显示内容title、显示位置placement、显示颜色级别colorLevel

# 示例

##基础tooltip
<div class="example-content"><style>.ws{
	width: 60px;
	display: inline-block;
	border: 1px solid #ddd;
	height:30px;
	line-height: 30px;
	text-align: center;
	margin-left: 60px;
	margin-top: 10px;
}
#example{
	margin-left: 60px;
}
#example label:first-child,#example1 label:first-child{
	margin-left: 0px;
}
 
</style></div>
<div class="example-content"><script>var toptoolEle=document.getElementById('top');
var bottomtoolEle=document.getElementById('down');
var lefttoolEle=document.getElementById('left');
var righttoolEle=document.getElementById('right');

var toptip=new u.Tooltip(toptoolEle,{
title:'默认向上显示'
});


var bottomtip=new u.Tooltip(bottomtoolEle,{
title:'向下显示',
placement:'bottom'

});

var leftTip=new u.Tooltip(lefttoolEle,{
title:'向左显示',
placement:'left'
});

var rightTip=new u.Tooltip(righttoolEle,{
title:'向右显示',
placement:'right'
});
</script></div>
<div class="example-content"><div id='example'>
	<label id="top" class="ws">上提示</label>
	<label id="down" class="ws">下提示</label>
	<label id="left" class="ws">左提示</label>
	<label id="right" class="ws">右提示</label>
</div>
</div>
<div class="examples-code"><pre><code>.ws{
	width: 60px;
	display: inline-block;
	border: 1px solid #ddd;
	height:30px;
	line-height: 30px;
	text-align: center;
	margin-left: 60px;
	margin-top: 10px;
}
#example{
	margin-left: 60px;
}
#example label:first-child,#example1 label:first-child{
	margin-left: 0px;
}
 </code></pre>
</div>
<div class="examples-code"><pre><code>var toptoolEle=document.getElementById('top');
var bottomtoolEle=document.getElementById('down');
var lefttoolEle=document.getElementById('left');
var righttoolEle=document.getElementById('right');

var toptip=new u.Tooltip(toptoolEle,{
title:'默认向上显示'
});


var bottomtip=new u.Tooltip(bottomtoolEle,{
title:'向下显示',
placement:'bottom'

});

var leftTip=new u.Tooltip(lefttoolEle,{
title:'向左显示',
placement:'left'
});

var rightTip=new u.Tooltip(righttoolEle,{
title:'向右显示',
placement:'right'
});</code></pre>
</div>
<div class="examples-code"><pre><code>&lt;div id='example'>
	&lt;label id="top" class="ws">上提示&lt;/label>
	&lt;label id="down" class="ws">下提示&lt;/label>
	&lt;label id="left" class="ws">左提示&lt;/label>
	&lt;label id="right" class="ws">右提示&lt;/label>
&lt;/div></code></pre>
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
	    <td>new u.Tooltip()</td>
	    <td>1.title:显示内容 2.placement:显示方向 3.colorLevel:颜色主体</td>
	    <td>
	    	1.colorLevel：取值范围tooltip-primary、tooltip-info、tooltip-warning、tooltip-success、tooltip-danger
			2.placement： 取值范围top、bottom、left、right，默认top</td>
	    <td></td>
	  </tr>
	</tbody>
</table>
