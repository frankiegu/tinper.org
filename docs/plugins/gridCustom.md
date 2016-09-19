# 表格插件扩展说明

在使用表格控件过程中会存在需要修改css、调整div布局的情况，本文档针对目前表格控件支持的几类扩展机制进行说明。

## css覆盖

如果只是简单修改css的样式，可以将需要修改的css样式写入单独文件并且保证编写的文件在grid.css之后引用，这样就会通过编写的css来覆盖默认的样式。

## 切换主题

通过引用不同的主题文件的方式来修改当前表格的主题。

**注：后续提供**

## afterCreate

表格参数afterCreate对应一个自定义的function，在表格每次渲染完成之后都会调用此方法，可以再此方法中对表格的div布局以及css样式进行调整。
详见[API](http://design.yyuap.com/dist/pages/plugins/grid.html#aftercreate)

## 扩展表格方法

此方法要求对表格控件源码有一定了解，直接通过插件扩展方式对表格控件的默认方法进行重写。具体实现方式可参考源码库中js下除gridComp.js之外的js文件。
源码库：https://github.com/iuap-design/neoui-grid.git