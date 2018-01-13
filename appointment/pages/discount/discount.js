// pages/discount/discount.js
var app = getApp();

function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var seperator2 = ":";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
  return currentdate;
}

function isDateOverDue(date, now) {
  //2018-01-15 
  //判断年
  if (date.substring(0, 4) < now.substring(0, 4))
    return 1; //已过期
  else if (date.substring(0, 4) > now.substring(0, 4))
    return 0; //未过期
  else {
    // 判断月
    if (date.substring(5, 7) < now.substring(5, 7))
      return 1; //已过期
    else if (date.substring(5, 7) > now.substring(5, 7))
      return 0; //未过期
    else {
      //判断日
      if (date.substring(8, 10) < now.substring(8, 10))
        return 1; //已过期
      else if (date.substring(8, 10) > now.substring(8, 10))
        return 0; //未过期
    }
  }
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    chooseDiscountF: 0,
    discount0A: [],
    discount1A: [],
    discount2A: [],
  },
  chooseDiscountTab: function (e) {
    var ds = e.currentTarget.dataset.tab;
    if (ds == 0) {
      this.setData({
        chooseDiscountF: 0
      })
    } else if (ds == 1) {
      this.setData({
        chooseDiscountF: 1
      })
    } else if (ds == 2) {
      this.setData({
        chooseDiscountF: 2
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.data.clubCardA[0].couponNum = this.data.discount0A.length;
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
    this.setData({
      discount0A: [],
      discount1A: [],
      discount2A: []
    })
    let discount0A = this.data.discount0A;
    let discount1A = this.data.discount1A;
    let discount2A = this.data.discount2A;
    //请求获取数据
    console.log(isDateOverDue('2017-02-13', getNowFormatDate()));
    console.log(getNowFormatDate());
    wx.request({
      url: 'http://120.79.152.109/api.php',
      data: {
        a: 'getUserDiscountData',
        member_id: '62218000',
      },
      method: 'GET',
      success: res => {
        console.log(res.data.data)
        //未过期优惠券处理
        let j = 0,
          k = 0,
          l = 0;
        for (let i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i].isUsed == "no") {
            //是否过期判断
            //未使用
            if (isDateOverDue(res.data.data[i].end_date, getNowFormatDate())) {
              //已过期
              discount2A[k++] = {
                "value": res.data.data[i].value,
                "number": res.data.data[i].coupon_id,
                "itemName": res.data.data[i].useOnly,
                "limitDate": res.data.data[i].start_date + "-" + res.data.data[i].end_date,
              }
            } else {
              //未过期
              discount0A[j++] = {
                "value": res.data.data[i].value,
                "number": res.data.data[i].coupon_id,
                "itemName": res.data.data[i].useOnly,
                "limitDate": res.data.data[i].start_date + "-" + res.data.data[i].end_date,
              }
            }
          } else {
            //已使用
            discount1A[l++] = {
              "value": res.data.data[i].value,
              "number": res.data.data[i].coupon_id,
              "itemName": res.data.data[i].useOnly,
              "limitDate": res.data.data[i].start_date + "-" + res.data.data[i].end_date,
            }
          };
          app.data.clubCardA[0].couponNum = i+1;
        }

        this.setData({
          discount0A: discount0A,
          discount1A: discount1A,
          discount2A: discount2A,
        })
      }
    })
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