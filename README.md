# 微信小程序富文本组件，依赖wxParse

#### 项目介绍
#### 使用方式：
1.在需要使用富文本的页面配置
```
{
    "usingComponents":{
        "wxparser" : "/components/wxParser/wxParser"
    }
}
```
2.wxml页面，使用如下：

```
<wxparser level="{{递归的node层级参数}}" rich-text= "{{富文本内容参数}}" />
```
