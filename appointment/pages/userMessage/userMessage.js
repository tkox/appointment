// pages/userMessage/userMessage.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {  
    userName:'',
    userSex:'',
    userAge:'',
    userMarriage:'',
    userNumber:'',
    userHealth:'',
    rNumber:'',
    userRemark:'',
  },

  userNameInput:function(e){   
    this.setData({userName: e.detail.value});  
    console.log(this.data.userName);
  },
  sexRadioChange:function(e){  
    this.setData({userSex: e.detail.value});  
    console.log(this.data.userSex);
  },
  userAgeInput:function(e){   
    this.setData({userAge: e.detail.value});  
    console.log(this.data.userAge);
  },
  marriageRadioChange:function(e){  
    this.setData({userMarriage: e.detail.value});  
    console.log(this.data.userMarriage);
  },
  userNumberInput:function(e){   
    this.setData({userNumber: e.detail.value});  
    console.log(this.data.userNumber);
  },
  userHealthInput:function(e){   
    this.setData({userHealth: e.detail.value});  
    console.log(this.data.userHealth);
  },
  rNumberInput:function(e){   
    this.setData({rNumber: e.detail.value});  
    console.log(this.data.rNumber);
  },
  userRemarkInput:function(e){   
    this.setData({userRemark: e.detail.value});  
    console.log(this.data.userRemark);
  },

  saveTab:function(e){ 
    wx.request({
      url: 'http://localhost/kuibutang/api.php',
      data: {
        a: 'save',
        member_id: '62218000',
        name: this.data.userName,
        sex: this.data.userSex,
        birthdate: this.data.userAge,
        martial_status: this.data.userMarriage,
        phone: this.data.userNumber,
        status: this.data.userHealth,
        referee: this.data.userrNumber,
        commet: this.data.userRemark
      },
      method: 'GET',
      success: res => {
          console.log("保存成功")
          console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.request({
      url: 'http://localhost/kuibutang/api.php',
      data: {
        a: 'info',
        member_id: '62218000'
      },
      method: 'GET',
      success:res=> {
        console.log(res.data)
          this.setData({
            userName: res.data.data.name,
            userSex: res.data.data.sex,
            userAge: res.data.data.birthdate,
            userMarriage: res.data.data.marital_status,
            userNumber: res.data.data.phone,
            userHealth: res.data.data.status,
            userrNumber: res.data.data.referee,
            userRemark: res.data.data.commet
                      })
      }
    })

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