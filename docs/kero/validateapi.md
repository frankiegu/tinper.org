
# 校验设置Validate

创建dataTable,field字段中验证字段，基本设置如下：

	new u.DataTable({
	    meta:{
	        field:{
	          required: true,
	          nullMsg: '内容不能为空!',
	          errorMsg: '内容输入错误',
	          placement: 'top'
	          ...
	        }
	    }
	})

*params*:

`meta`: 字段信息集合，其中的key为字段名，value为字段属性信息，属性信息可自定义

---
## required

`required`:指定输入字段是否为必填项，默认为`false`

| Key      | Value | 说明      |
| -------- | ----- | ------- |
| required | true  | 字段为必填项  |
| required | false | 字段为非必填项 |



---


## validType

`validType`:验证输入类型，默认值为`null`

| Key       | Value    | 说明       |
| --------- | -------- | -------- |
| validType | integer  | 输入需为整数   |
| validType | float    | 输入需为浮点数  |
| validType | zipCode  | 输入需为邮编   |
| validType | phone    | 输入需为手机号码 |
| validType | landline | 输入需为座机号码 |
| validType | email    | 输入需为邮箱   |
| validType | url      | 输入需为网址   |
| validType | datetime | 输入需为日期   |



***


## nullMsg/errorMag

`nullMsg`:输入为空时的提示信息

| Key      | Value              | 说明         |
| -------- | ------------------ | ---------- |
| nullMsg  | '内容自定义：输入为空显示的内容'  | 输入为空时的提示信息 |
| errorMsg | '内容自定义：输入错误时显示的内容' | 输入错误时的提示信息 |



---
## regExp

`regExp`:设置正则匹配

| Key    | Value     | 说明         |
| ------ | --------- | ---------- |
| regExp | '/自定义正则/' | 文本框需要匹配的正则 |



---
## notipFlag

`notipFlag`:错误信息提示方式是否为tip,默认为`true`

| Key       | Value | 说明                 |
| --------- | ----- | ------------------ |
| notipFlag | true  | 错误信息提示为tips形式      |
| notipFlag | false | 错误信息提示自定义，不为tips形式 |



---
## tipId
`tipId`:错误或空提示是否选用默认的tip。默认为空，使用默认的`tooltip`

| Key   | Value | 说明                |
| ----- | ----- | ----------------- |
| tipId | ''    | 使用默认的tooltip显示tip |
| tipId | 'id'  | 使用自定义的id元素显示tip   |



---
## hasSuccess
`hasSuccess`:输入正确后是否提示。默认为`false`

| Key        | Value | 说明       |
| ---------- | ----- | -------- |
| hasSuccess | true  | 输入正确后提示  |
| hasSuccess | false | 输入正确后不提示 |



---
## successId
`successId`:错误或空提示是否选用默认的tip。默认为空，使用默认的`tooltip`

| Key       | Value | 说明              |
| --------- | ----- | --------------- |
| successId | 'id'  | 使用自定义的id元素显示tip |

`successId`能正常显示的前提是`hasSuccess:true`



---

## placement

`placement`:提示框位置，默认为`top`

| Key       | Value  | 说明   |
| --------- | ------ | ---- |
| placement | top    | 上部显示 |
| placement | bottom | 底部显示 |
| placement | left   | 左边显示 |
| placement | right  | 右边显示 |

`successId`能正常显示的前提是`hasSuccess:true`



---
## minLength&maxLength

字符串长度，注意`type`类型`string`


| Key       | Value | 说明   |
| --------- | ----- | ---- |
| minLength | num   | 最小长度 |
| maxLength | num   | 最大长度 |



---
## 数值区间

数值区间，注意`type`类型`integer`或`float`


| Key      | Value | 说明        |
| -------- | ----- | --------- |
| min      | num   | 最小数值(包含)  |
| max      | num   | 最大数值(包含)  |
| minNotEq | num   | 最小数值(不包含) |
| maxNotEq | num   | 最大数值(不包含) |



---

校验还可以使用控件校验，方式如下

## 控件校验

API同上，实现方式：

* Step1:`html`内容添加`uvalidate`标签，传入验证字段

```html
<!--HTML-->
<div class="u-form-group" >
	<label for="float1">String:</label>
	<div class="err-info">
		<input type="text" class="u-form-control" id="float1" placeholder="字符串长度大于3小于8"  uvalidate='{"required":true,"maxLength":8,"minLength":3,"hasSuccess": true,"notipFlag": true}'>	</div>
</div>
```

* Step2:`js`内容绑定验证

```javascript
// JS
u.on(window, 'load', function() {
	u.validate('body');
});
```




## 基本示例


##Validate

本例实现如下效果：

* 基本的validate API测试



<div class="example-content"><!-- 
	HTML
	u-meta:框架特有标记，框架通过识别此标记创建对应UI组件，以及进行数据绑定 
	id,type.data,field为必选项
	id:创建组件唯一标识
	type:创建组件对应的类型
	data:指定数据模型中的数据集
	field:绑定数据集中对应的字段
	datasource:绑定数据
-->
<div class="u-form-group">
    <label>验证测试用例</label>
    <div class="u-input-group u-has-feedback" u-meta='{"type":"integer","data":"dt1","field":"base"}'>
        <div class="u-input-group-before" style="color: red;">*</div>
        <input type="text" class="u-form-control">
    </div>
</div>  
</div>
<div class="example-content ex-hide"><script>// JS

    var app,viewModel;
    var metaDt={
        meta: {
            base: {
                required:'true',
                nullMsg:'nullmsg',
                errorMsg:'error',
                validType:'integer',
                hasSuccess:'true',
                placement:'bottom',
                min:100,
                max:999
            }
        }
    };
    viewModel={
        dt1: new u.DataTable(metaDt)
    };

    app=u.createApp({
            el:'body',
            model:viewModel
        });
    var r = viewModel.dt1.createEmptyRow();
    viewModel.dt1.setRowSelect(0);




</script></div>
<div class="examples-code"><pre><code>&lt;!-- 
	HTML
	u-meta:框架特有标记，框架通过识别此标记创建对应UI组件，以及进行数据绑定 
	id,type.data,field为必选项
	id:创建组件唯一标识
	type:创建组件对应的类型
	data:指定数据模型中的数据集
	field:绑定数据集中对应的字段
	datasource:绑定数据
-->
&lt;div class="u-form-group">
    &lt;label>验证测试用例&lt;/label>
    &lt;div class="u-input-group u-has-feedback" u-meta='{"type":"integer","data":"dt1","field":"base"}'>
        &lt;div class="u-input-group-before" style="color: red;">*&lt;/div>
        &lt;input type="text" class="u-form-control">
    &lt;/div>
&lt;/div>  
</code></pre>
</div>
<div class="examples-code"><pre><code>// JS

    var app,viewModel;
    var metaDt={
        meta: {
            base: {
                required:'true',
                nullMsg:'nullmsg',
                errorMsg:'error',
                validType:'integer',
                hasSuccess:'true',
                placement:'bottom',
                min:100,
                max:999
            }
        }
    };
    viewModel={
        dt1: new u.DataTable(metaDt)
    };

    app=u.createApp({
            el:'body',
            model:viewModel
        });
    var r = viewModel.dt1.createEmptyRow();
    viewModel.dt1.setRowSelect(0);



</code></pre>
</div>

##UIValidate

本例实现如下效果：

* UI控件基本的validate API测试



<div class="example-content"><!-- 
	HTML
	u-meta:框架特有标记，框架通过识别此标记创建对应UI组件，以及进行数据绑定 
	id,type.data,field为必选项
	id:创建组件唯一标识
	type:创建组件对应的类型
	data:指定数据模型中的数据集
	field:绑定数据集中对应的字段
-->
<!--HTML-->
<div class="u-form-group" >
	<label for="float1">String:</label>
	<div class="err-info">
		<input type="text" class="u-form-control" id="float1" placeholder="字符串长度大于3小于8"  uvalidate='{"required":true,"maxLength":8,"minLength":3,"hasSuccess": true,"notipFlag": true}'>	</div>
</div>
</div>
<div class="example-content ex-hide"><script>// JS
// 
u.on(window, 'load', function() {
    u.validate('body');
});




</script></div>
<div class="examples-code"><pre><code>&lt;!-- 
	HTML
	u-meta:框架特有标记，框架通过识别此标记创建对应UI组件，以及进行数据绑定 
	id,type.data,field为必选项
	id:创建组件唯一标识
	type:创建组件对应的类型
	data:指定数据模型中的数据集
	field:绑定数据集中对应的字段
-->
&lt;!--HTML-->
&lt;div class="u-form-group" >
	&lt;label for="float1">String:&lt;/label>
	&lt;div class="err-info">
		&lt;input type="text" class="u-form-control" id="float1" placeholder="字符串长度大于3小于8"  uvalidate='{"required":true,"maxLength":8,"minLength":3,"hasSuccess": true,"notipFlag": true}'>	&lt;/div>
&lt;/div>
</code></pre>
</div>
<div class="examples-code"><pre><code>// JS
// 
u.on(window, 'load', function() {
    u.validate('body');
});



</code></pre>
</div>
