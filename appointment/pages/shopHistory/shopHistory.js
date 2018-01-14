// pages/shopHistory/shopHistory.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopHistoryA:[
      {
      "shopValue":200,
      "storeName":"跬步堂积玉桥店",
      "discountValue":0,
      "discount":"无",
      "time":"2017-06-05 14:00",
      },
      {
        "shopValue":300,
        "storeName":"跬步堂积玉桥店",
        "discountValue":50,
        "discount":"无",
        "time":"2017-10-05 12:00",
      },
      {
        "shopValue":400,
        "storeName":"跬步堂积玉桥店",
        "discountValue":100,
        "discount":"无",
        "time":"2017-11-05 09:00",
      },
    ]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.data.clubCardA[0].shopNum= this.data.shopHistoryA.length;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})