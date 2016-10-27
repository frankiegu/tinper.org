# message控件

用于即时信息的提示，消息背景色取决于消息类型，易可添加相对应的`icon`

# 如何使用

给父元素添加`.u-message`类

自定义类型背景  例如消息内容为`!new`的父元素添加`.u-mesnews`类

# 示例

replaceExamp

<!--### 示例1

示例1说明

### 示例2

示例2说-->,
##基础message

消息类型对应不同class属性则显示不同的背景色

<div class="example-content"><div class="example">
    <div class="u-message u-mesnews active" >    
        <span class="u-msg-close uf uf-removesymbol"></span>
        News!
    </div>
    <div class="u-message u-mesinfo active">
        <span class="u-msg-close uf uf-removesymbol"></span>
        Info!
    </div>
    <div class="u-message u-messuccess active">    
        <span class="u-msg-close uf uf-removesymbol"></span>
        Success!
    </div>
    <div class="u-message u-mesdanger active">
        <span class="u-msg-close uf uf-removesymbol"></span>
        Danger!
    </div>
    <div class="u-message u-meswarning active">
        <span class="u-msg-close uf uf-removesymbol"></span>
        Warning!
    </div>
</div></div>

<div class="example-content ex-hide"><style>
.margin-r-10{
    margin-right: 10px; 
}
.example .u-message{
    position: inherit;
}
</style></div>

<div class="examples-code"><pre><code>
<div class="example">
    <div class="u-message u-mesnews active" >    
        <span class="u-msg-close uf uf-removesymbol"></span>
        News!
    </div>
    <div class="u-message u-mesinfo active">
        <span class="u-msg-close uf uf-removesymbol"></span>
        Info!
    </div>
    <div class="u-message u-messuccess active">    
        <span class="u-msg-close uf uf-removesymbol"></span>
        Success!
    </div>
    <div class="u-message u-mesdanger active">
        <span class="u-msg-close uf uf-removesymbol"></span>
        Danger!
    </div>
    <div class="u-message u-meswarning active">
        <span class="u-msg-close uf uf-removesymbol"></span>
        Warning!
    </div>
</div></code></pre>
</div>

<div class="examples-code"><pre><code>
.margin-r-10{
    margin-right: 10px; 
}
.example .u-message{
    position: inherit;
}</code></pre>
</div>




##带`icon`的加深颜色版message

背景色加深 `.dark`类提供了选择

消息类型对应相应的icon

<div class="example-content"><div class="example">
    <div class="u-message dark u-mesnews active" >    
        <span class="u-msg-close uf uf-removesymbol"></span>
        <i class="uf uf-bellmusicaltool margin-r-10"></i>News!
    </div>
    <div class="u-message dark u-mesinfo active">
        <span class="u-msg-close uf uf-removesymbol"></span>
        <i class="uf uf-informationbutton margin-r-10"></i>Info!
    </div>
    <div class="u-message dark u-messuccess active">    
        <span class="u-msg-close uf uf-removesymbol"></span>
        <i class="uf uf-checkedsymbol margin-r-10"></i>Success!
    </div>
    <div class="u-message dark u-mesdanger active">
        <span class="u-msg-close uf uf-removesymbol"></span>
        <i class="uf uf-crossmarkonablackcirclebackground margin-r-10"></i>Danger!
    </div>
    <div class="u-message dark u-meswarning active">
        <span class="u-msg-close uf uf-removesymbol"></span>
        <i class="uf uf-warningmd margin-r-10"></i>Warning!
    </div>
</div></div>

<div class="example-content ex-hide"><style>
.margin-r-10{
    margin-right: 10px; 
}
.example .u-message{
    position: inherit;
}
</style></div>

<div class="examples-code"><pre><code>
<div class="example">
    <div class="u-message dark u-mesnews active" >    
        <span class="u-msg-close uf uf-removesymbol"></span>
        <i class="uf uf-bellmusicaltool margin-r-10"></i>News!
    </div>
    <div class="u-message dark u-mesinfo active">
        <span class="u-msg-close uf uf-removesymbol"></span>
        <i class="uf uf-informationbutton margin-r-10"></i>Info!
    </div>
    <div class="u-message dark u-messuccess active">    
        <span class="u-msg-close uf uf-removesymbol"></span>
        <i class="uf uf-checkedsymbol margin-r-10"></i>Success!
    </div>
    <div class="u-message dark u-mesdanger active">
        <span class="u-msg-close uf uf-removesymbol"></span>
        <i class="uf uf-crossmarkonablackcirclebackground margin-r-10"></i>Danger!
    </div>
    <div class="u-message dark u-meswarning active">
        <span class="u-msg-close uf uf-removesymbol"></span>
        <i class="uf uf-warningmd margin-r-10"></i>Warning!
    </div>
</div></code></pre>
</div>

<div class="examples-code"><pre><code>
.margin-r-10{
    margin-right: 10px; 
}
.example .u-message{
    position: inherit;
}</code></pre>
</div>








<script>
var msgBtn = document.body.querySelector("#msgBtn");
var errorBtn = document.body.querySelector("#errorBtn");
var warnBtn = document.body.querySelector("#warnBtn");
var rightInfo='<i class="uf uf-checkedsymbol margin-r-5"></i>成功信息!!!';
u.on(msgBtn,'click', function(){ 
    u.showMessage({msg:rightInfo,position:"center"})
})

var errorInfo='<i class="uf uf-crossmarkonablackcirclebackground margin-r-5"></i>错误信息!!!'
u.on(errorBtn,'click', function(){ 
    u.showMessage({msg:errorInfo,position:"center",msgType:"error"})
})

var warningInfo='<i class="uf uf-exclamationsign margin-r-5"></i>警告信息!!!';
u.on(warnBtn,'click', function(){ 
    u.showMessage({msg:warningInfo,position:"center",msgType:"warning"})
})
</script>



<div class="examples-code"><pre><code>
var msgBtn = document.body.querySelector("#msgBtn");
var errorBtn = document.body.querySelector("#errorBtn");
var warnBtn = document.body.querySelector("#warnBtn");
var rightInfo='<i class="uf uf-checkedsymbol margin-r-5"></i>成功信息!!!';
u.on(msgBtn,'click', function(){ 
    u.showMessage({msg:rightInfo,position:"center"})
})

var errorInfo='<i class="uf uf-crossmarkonablackcirclebackground margin-r-5"></i>错误信息!!!'
u.on(errorBtn,'click', function(){ 
    u.showMessage({msg:errorInfo,position:"center",msgType:"error"})
})

var warningInfo='<i class="uf uf-exclamationsign margin-r-5"></i>警告信息!!!';
u.on(warnBtn,'click', function(){ 
    u.showMessage({msg:warningInfo,position:"center",msgType:"warning"})
})</code></pre>
</div>

