# 复选框

checkbox提供了基础复选框、不同色彩复选框、图片复选框、个性复选框



##基础checkbox
在复选框中input元素添加`checked`、`disabled`来实现选中和不可用效果
<div class="example-content">
<label  class="u-checkbox">
    <input type="checkbox" class="u-checkbox-input" checked>
    <span class="u-checkbox-label">Checkbox</span>
</label>
<label  class="u-checkbox">
    <input type="checkbox" class="u-checkbox-input" >
    <span class="u-checkbox-label">Checkbox</span>
</label>
<label  class="u-checkbox"  >
    <input type="checkbox" class="u-checkbox-input" disabled>
    <span class="u-checkbox-label">Checkbox</span>
</label>
<label  class="u-checkbox">
    <input type="checkbox" class="u-checkbox-input" disabled checked>
    <span class="u-checkbox-label">Checkbox</span>
</label>
</div>
<div class="examples-code"><pre><code>&lt;label  class="u-checkbox">
    &lt;input type="checkbox" class="u-checkbox-input" checked>
    &lt;span class="u-checkbox-label">Checkbox&lt;/span>
&lt;/label></code></pre>
</div>

##不同颜色的checkbox
在复选框中label里面添加`u-checkbox-success`、`u-checkbox-info`、`u-checkbox-warning`、`u-checkbox-danger`、`u-checkbox-dark`样式来实现不同色彩的复选框
<div class="example-content"><label  class="u-checkbox u-checkbox-success w-xs">
    <input type="checkbox" class="u-checkbox-input"  checked>
    <span class="u-checkbox-label">green</span>
</label>

<label  class="u-checkbox u-checkbox-info w-xs">
    <input type="checkbox" class="u-checkbox-input"  checked>
    <span class="u-checkbox-label">blue</span>
</label>
<label  class="u-checkbox u-checkbox-warning w-xs">
    <input type="checkbox" class="u-checkbox-input"  checked>
    <span class="u-checkbox-label">yellow</span>
</label>
<label  class="u-checkbox u-checkbox-danger w-xs">
    <input type="checkbox" class="u-checkbox-input"  checked>
    <span class="u-checkbox-label">red</span>
</label>
<label  class="u-checkbox u-checkbox-dark w-xs">
    <input type="checkbox" class="u-checkbox-input"  checked>
    <span class="u-checkbox-label">grey</span>
</label></div>
<div class="examples-code"><pre><code>&lt;label  class="u-checkbox u-checkbox-success w-xs">
    &lt;input type="checkbox" class="u-checkbox-input"  checked>
    &lt;span class="u-checkbox-label">green&lt;/span>
&lt;/label></code></pre>
</div>



[试一试](http://design.yyuap.com/dist/pages/webIDE/index.html#/demos/ui/checkbox)



# API

## \# checkbox对象

* 类型：`Object`
* 说明： 获取radio对象
* 用法：

获取方式：1、获取绑定radio的dom元素 ； 2、读取dom元素上的属性'u.Radio'

```

var checkboxObject = document.getElementById('domId')['u.Checkbox'];

```

## \# check

* 类型：`Function`
* 说明： 调用checkbox对象的check方法，选中复选框
* 用法：

```

checkboxObject.check();

```

## \# uncheck

* 类型：`Function`
* 说明： 调用checkbox对象的uncheck方法，取消选中复选框
* 用法：

```

checkboxObject.uncheck();

```

## \# disable

* 类型：`Function`
* 说明： 调用checkbox对象的disable方法，使复选框不可用
* 用法：

```

checkboxObject.disable();

```
## \# enable

* 类型：`Function`
* 说明： 调用checkbox对象的enable方法，使复选框可用
* 用法：

```

checkboxObject.enable();

```

## \# toggle

* 类型：`Function`
* 说明： 调用checkbox对象的toggle方法，反选复选框可用
* 用法：

```

radioObject.toggle();

```

相关内容：

[复选框在kero中使用](http://design.yyuap.com/dist/pages/kero/ex_checkbox.html)    

[复选框在grid中使用](http://design.yyuap.com/dist/pages/webIDE/index.html#/demos/grids/edit)
