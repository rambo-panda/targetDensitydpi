## 低版本(<=4.1)android手机对viewport的适配兼容

###viewport 是什么?

简而言之就是针对手机浏览器，虚化出来的一个“电脑屏幕”。
    <meta content="width=device-width, initial-scale=1,minimum-scale=1,maxmum-scale=1” name="viewport"/>
        
* width：控制 viewport 的大小，可以指定的一个值或者特殊的值，如 device-width,（默认宽度为980:推理） 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。
* initial-scale：初始缩放比例
* minimum-scale：最小缩放比例
* maxmum-scale：最大缩放比例
* user-scalable：是否允许缩放 值为[yes | no] | [0 | 1]， no和0为禁止缩放。
* target-densitydpi：设置屏幕像素密度，可以是具体的某个值或者device-dpi，改变其值可以对页面进行缩放。


###二、现在主流定宽适配方案
原理是将viewport的width值设置为UI-width,通过修改target-densitydpi值来进行全屏展示，改变屏幕的像素密度，其页面没有进行缩放。

手机的target-densitydpi是什么？ 有什么作用?
* 一个屏幕像素密度是由屏幕分辨率决定的，通常定义为**每英寸点的数量（dpi）。** 
[详情关注android官方说法](http://developer.android.com/guide/webapps/targeting.html)

* 知道了`target-densitydpi`是什么了，那么他的作用想必都知道了。 对 **天奥杰每英寸点(像素)的数量**


* `target-densitydpi` 如何调节? 
总结公式:
target-densitydpi = UI-width / device-width * window.devicePixelRatio * 160;
* UI_width : 你的设计稿基于多少设计的？
* device-width : 你手机的设备宽度
* window.devicePixelRatio ： 你手机的设备像素比
* [后面的160是什么意思？前辈已经告诉我们了](http://www.cnblogs.com/plums/archive/2013/01/10/WebApp-fixed-width-layout-of-multi-terminal-adapter-since.html)


###三 target-densitydpi 被废弃？
是的 你没有看错，这个属性一开始就不被高傲的苹果支持，其后webkit规范组织，也声明 `我们不再支持他` [webkit放弃target-densitydpi](https://lists.webkit.org/pipermail/webkit-dev/2012-June/020914.html)

#### 但是别忘了，前端工程师很大程度上来说就是跟兼容性斗争的一个苦逼而兴奋的职业。 规范是规范，执行时执行。 你以为我们的oppo vivo会听话？ 你以为我们小米会听话？ 别逗了，FE们，我们还是得靠代码去解决真正的兼容吧

> "I will postpone using this shiny new framework until my peers have validated the proposed benefits with rigorous scientific experiments." —— a qualified programmer
> “在我的同行用严格科学的试验证明这个牛逼哄哄技术真的有那么好之前，我是不会用这个玩意的。”   这也是ES6始终坚持的宗旨：凡是新加入的特性，势必已在其它语言中得到强有力的实用性证明  “能工摹形，巧匠窃意。”——巴勃罗·毕卡索
