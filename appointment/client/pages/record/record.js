// pages/record/record.js
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
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
    " " + date.getHours() + ":00";
  return currentdate;
}

function isDateOverDue(date, now) {
  //2018-01-15 10:00
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
      else {
        //判断hour 8:00-9:00 9:00-10:00 10:00-11:00 2018-10-08 10:00 16 
        if (date.length == 16 && now.length == 16) //10:00-18:00
        {
          if (date.substring(11, 13) <= now.substring(11, 13))
            return 1; //已过期
          else if (date.substring(11, 13) > now.substring(11, 13))
            return 0; //未过期
        } else if (date.length == 15 && now.length == 15) //8:00-9:00
        {
          if (date.substring(11, 12) <= now.substring(11, 12))
            return 1; //已过期
          else if (date.substring(11, 13) > now.substring(11, 13))
            return 0; //未过期
        } else if (date.length == 15 && now.length == 16) //现在时间超过10点
        {
          return 1; //已过期
        }
        else //现在时间没过期
        {
          return 0;
        }
      }
    }
  }
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    consumeFlag: 0,
    consumingA: [],
    consumedA: []
  },

  chooseConsume: function (e) {
    var ds = e.currentTarget.dataset.tab;
    if (ds == 0) {
      this.setData({
        consumeFlag: 0
      })
    } else {
      this.setData({
        consumeFlag: 1
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    //清空数组
    this.setData({
      consumingA: [],
      consumedA: []
    })
    let consumingA = this.data.consumingA;
    let consumedA = this.data.consumedA;
    //初始加载，获取一次数据
    wx.request({
      url: 'http://120.79.152.109/api.php',
      data: {
        a: 'getUserOrderedItem',
        member_id: '62218000'
      },
      method: 'GET',
      success: res => {
        console.log(res.data.data)
        //未过期项目处理
        let j = 0,
          k = 0;
        for (let i = 0; i < res.data.data.length; i++) {
          if (!res.data.data[i].orderItem1)
            res.data.data[i].orderItem1 = " ";
          if (!res.data.data[i].orderItem2)
            res.data.data[i].orderItem2 = " ";
          if (!res.data.data[i].orderItem3)
            res.data.data[i].orderItem3 = " ";

          if (res.data.data[i].isConsumed == "no") {
            //是否过期判断
            if (isDateOverDue(res.data.data[i].orderTime, getNowFormatDate())) {
              consumedA[k++] = {
                "item": "酵素浴 " + res.data.data[i].orderItem1 + " " + res.data.data[i].orderItem2 + " " + res.data.data[i].orderItem3,
                "shop": res.data.data[i].orderStore,
                "time": res.data.data[i].orderTime,
                "explain": res.data.data[i].description,
              }
            }
            else {
              consumingA[j++] = {
                "item": "酵素浴 " + res.data.data[i].orderItem1 + " " + res.data.data[i].orderItem2 + " " + res.data.data[i].orderItem3,
                "shop": res.data.data[i].orderStore,
                "time": res.data.data[i].orderTime,
                "explain": res.data.data[i].description,
              }
            }
          } else {
            consumedA[k++] = {
              "item": "酵素浴 " + res.data.data[i].orderItem1 + " " + res.data.data[i].orderItem2 + " " + res.data.data[i].orderItem3,
              "shop": res.data.data[i].orderStore,
              "time": res.data.data[i].orderTime,
              "explain": res.data.data[i].description,
            }
          }
        }
        this.setData({
          consumingA: consumingA,
          consumedA: consumedA
        })
        console.log(j);
        console.log(k);
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