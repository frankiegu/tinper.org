# raty插件

评级评分

# 插件依赖

http://design.yyuap.com/static/uui/latest/js/u.js

http://design.yyuap.com/static/uui/latest/css/u.css

http://design.yyuap.com/static/raty/rating.js


# 用法

1.定义类``u-rating`的父元素,并配置属性`data-plugin=rating`

```
<div class="u-rating" data-score="3" data-plugin="rating"></div>

```

2.设置参数

```
	var  defaults= {
        targetKeep: true,
        icon: "font",
        starType: "i",
        starOff: "icon uf uf-star",
        starOn: "icon uf uf-star orange-600",
        cancelOff: "icon uf uf-minussigninsideablackcircle",
        cancelOn: "icon  uf uf-minussigninsideablackcircle orange-600",
        starHalf: "icon uf uf-starhalfempty orange-500"
      };
})

```

3.调用初始raty方法

```
	$('[data-plugin="rating"]').each(function() {
          $(this).raty(options);
     });

```




# 示例


##基础Rating

常用于评级评分
<div class="example-content ex-hide"><style>.content{
    padding: 10px;
}
.example{
    width: 60%;
    margin: 80px;
}
.col-xs-4{
    width: 33.3%;
    float: left;
}
</style></div>
<div class="example-content"> <div class="u-rating" data-score="3" data-plugin="rating"></div></div>
<div class="example-content ex-hide"><script>(function(document, window, $) {
    'use strict';
    
      var  defaults= {
        targetKeep: true,
        icon: "font",
        starType: "i",
        starOff: "icon uf uf-star",
        starOn: "icon uf uf-star orange-600",
        cancelOff: "icon uf uf-minussigninsideablackcircle",
        cancelOn: "icon  uf uf-minussigninsideablackcircle orange-600",
        starHalf: "icon uf uf-starhalfempty orange-500"
      };
      $('[data-plugin="rating"]').each(function() {
          var $this = $(this);
          var options = $.extend(true, {}, defaults, $this.data());

          if (options.hints) {
            options.hints = options.hints.split(',');
          }

          $this.raty(options);
      });
      // }
    // });
  })(document, window, jQuery);
</script></div>
<div class="examples-code"><pre><code>.content{
    padding: 10px;
}
.example{
    width: 60%;
    margin: 80px;
}
.col-xs-4{
    width: 33.3%;
    float: left;
}</code></pre>
</div>
<div class="examples-code"><pre><code> &lt;div class="u-rating" data-score="3" data-plugin="rating">&lt;/div></code></pre>
</div>
<div class="examples-code"><pre><code>(function(document, window, $) {
    'use strict';
    
      var  defaults= {
        targetKeep: true,
        icon: "font",
        starType: "i",
        starOff: "icon uf uf-star",
        starOn: "icon uf uf-star orange-600",
        cancelOff: "icon uf uf-minussigninsideablackcircle",
        cancelOn: "icon  uf uf-minussigninsideablackcircle orange-600",
        starHalf: "icon uf uf-starhalfempty orange-500"
      };
      $('[data-plugin="rating"]').each(function() {
          var $this = $(this);
          var options = $.extend(true, {}, defaults, $this.data());

          if (options.hints) {
            options.hints = options.hints.split(',');
          }

          $this.raty(options);
      });
      // }
    // });
  })(document, window, jQuery);</code></pre>
</div>



# API

详情参见与 http://testweb3.iecworld.com/jsdemo/js/lq_js_point/