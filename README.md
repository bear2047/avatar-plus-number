# 一款可以在头像上加数字的微信小程序
# 前言
    这个世界，装逼的需要永远有！
    我们搞技术的人，不需求人，自己撸。
    在一个风雨交加的夜晚，我打开电脑，准备开发一款装逼的小程序。
    我把它取名为「我的头像加数字」，因为其他的好名字都被占了。

## 页面

![17.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/74aac4578457415dbc015d371f7a9716~tplv-k3u1fbpfcp-watermark.image?)

    就一个页面
    一个放头像的框框
    一个放数字的地方
    一个选择头像的按钮
    一个保存编辑好的头像的按钮
    是不是很简单？
    
 ## 扫码看真实效果   

![gh_30419cc55ee9_258.jpg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9213fc3d590e45d9a49e7e72b045cc98~tplv-k3u1fbpfcp-watermark.image?)
## 开发思路
    跟真实的作画很类似。
   
1. 准备一块白纸（canvas画板）
```js
ctx = wx.createCanvasContext('myCanvas')
```
2. 画头像

```js
ctx.drawImage(imgPath, 0, 0, 300, 300)
```
3. 在头像右上角画一个红色的小圆

```js
ctx.fillStyle = "red"
ctx.arc(260, 40, 40, 0, 2 * Math.PI)
ctx.fill()
```
4. 在小圆上写一个数字

```js
ctx.font = "50px system-ui"
ctx.fillStyle = "#FFFFFF"
ctx.textAlign = "center"
ctx.fillText(num, 260, 60)
ctx.draw()
```

# 结语
   不管在头像上画一个啥，都是一个路子，你不来玩一把？
