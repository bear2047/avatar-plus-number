// index.js
// 获取应用实例
const app = getApp()
let ctx ;
let imgPath = "";
Page({
  data: {},
  onLoad() {
    ctx = wx.createCanvasContext('myCanvas')
    imgPath = "./3.jpeg"
    draw()
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  chooseImage() {
    wx.chooseImage({
      success: function (res) {
        imgPath = res.tempFilePaths[0]
        draw()
      }
    })
  },
  saveImage() {
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 300,
      height: 300,
      destWidth: 300,
      destHeight: 300,
      canvasId: 'myCanvas',
      success(res) {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(res) {
            wx.showModal({
              title: '保存成功',
              content: '请去手机相册查看',
              success(res) {}
            })
          },
          fail(res) {
            wx.showModal({
              title: '保存失败',
              content: '请打开权限后再保存',
              confirmText: '打开权限',
              success(res) {
                if (res.confirm) {
                  wx.openSetting()
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
            })
          },
        })
      }
    })
  },
  changeNum(e) {
    const num = e.currentTarget.dataset.h
    // console.log(e.currentTarget)
    changeNumFunc(num)
  }
})

function draw() {
  ctx.drawImage(imgPath, 0, 0, 300, 300)
  changeNumFunc(1)
}

function changeNumFunc(num) {
  ctx.drawImage(imgPath, 0, 0, 300, 300)
  ctx.fillStyle = "red"
  ctx.arc(260, 40, 40, 0, 2 * Math.PI)
  ctx.fill()
  ctx.font = "50px system-ui";
  ctx.fillStyle = "#FFFFFF";
  ctx.textAlign = "center";
  ctx.fillText(num, 260, 60)
  ctx.draw()
}