// pages/userStored/userStored.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storeValue:0,
    remainItemA:[
      {
        "name":"酵素浴",
        "num":10,
      },
      {
        "name":"拔罐",
        "num":5,
      },
      {
        "name":"全身淋巴排毒",
        "num":5,
      },
      {
        "name":"洗脚",
        "num":6,
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      storeValue:app.data.clubCardA[0].storedValue,
    });
    console.log("储值数据载入");
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
    let remainItemA = this.data.remainItemA;
            //请求获取数据
            wx.request({
              url: 'http://120.79.152.109/api.php',
              data: {
                  a: 'getUserStoredData',
                  member_id: '62218000',
              },
              method: 'GET',
              success: res => {
                  console.log(res.data.data);
                  remainItemA = [
                    {
                      "name":"酵素浴",
                      "num":res.data.data['62218000']['basicItem'],
                    },
                    {
                      "name":"中医全身经络",
                      "num":res.data.data['62218000']['00000'],
                    },
                    {
                      "name":"全身淋巴排毒",
                      "num":res.data.data['62218000']['00001'],
                    },
                    {
                      "name":"尤兰乳腺滋养",
                      "num":res.data.data['62218000']['00002'],
                    },
                    {
                      "name":"背部三焦舒缓",
                      "num":res.data.data['62218000']['00003'],
                    },
                    {
                      "name":"腿部淋巴排毒",
                      "num":res.data.data['62218000']['00004'],
                    },
                    {
                      "name":"头部疏通松筋",
                      "num":res.data.data['62218000']['00100'],
                    },
                    {
                      "name":"面部微雕松筋",
                      "num":res.data.data['62218000']['00101'],
                    },
                    {
                      "name":"肩筋护理松筋",
                      "num":res.data.data['62218000']['00102'],
                    },
                    {
                      "name":"腰臀护理松筋",
                      "num":res.data.data['62218000']['00103'],
                    },
                    {
                      "name":"肠胃调整松筋",
                      "num":res.data.data['62218000']['00104'],
                    },
                    {
                      "name":"脉能头部调整",
                      "num":res.data.data['62218000']['00200'],
                    },
                    {
                      "name":"脉能面部紧致提升",
                      "num":res.data.data['62218000']['00201'],
                    },
                    {
                      "name":"脉能腰臀调理",
                      "num":res.data.data['62218000']['00202'],
                    },
                    {
                      "name":"脉能肩筋调理",
                      "num":res.data.data['62218000']['00203'],
                    },
                    {
                      "name":"脉能腿部调理",
                      "num":res.data.data['62218000']['00204'],
                    },
                    {
                      "name":"脉能肠胃调理",
                      "num":res.data.data['62218000']['00205'],
                    },
                    {
                      "name":"拔罐",
                      "num":res.data.data['62218000']['00300'],
                    },
                    {
                      "name":"刮痧",
                      "num":res.data.data['62218000']['00301'],
                    },
                  ];
                  for(let i = 0; i < remainItemA.length; i++)
                  {
                    if(remainItemA[i]["num"] == '0')
                    {
                      remainItemA.splice(i, 1);
                      i--;
                    }
                  }
              
                  this.setData({
                    remainItemA: remainItemA,
                    storeValue: res.data.data['62218000']['user_balance']
                    
                  })
                  app.data.clubCardA[0].storedValue = res.data.data['62218000']['user_balance'];
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