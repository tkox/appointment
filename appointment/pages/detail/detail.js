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
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}

function getNowFormatDateDay() {
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

Page({
    data: {
        detail: [{
                name: '手工舒缓',
                id: 0,
                count: 0
            },
            {
                name: '牛角松筋',
                id: 1,
                count: 0
            },
            {
                name: '生命之脉',
                id: 2,
                count: 0
            },
            {
                name: '其他项目',
                id: 3,
                count: 0
            },
        ],
        day: '',
        time: '',
        seat: '',
    },

    onShow() {
        let detail = this.data.detail;
        let seat = wx.getStorageSync('seat') || 1;
        let day = wx.getStorageSync('date');
        let time = wx.getStorageSync('time');
        let temp = wx.getStorageSync('count_sto') || [0, 0, 0, 0];
        
        let number = wx.getStorageSync('number_sto') || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        console.log(number);
        // console.log(temp);
        let i = 0;
        for (; i < 4; i++) {
            detail[i].count = temp[i];
        }

        this.setData({
            seat: seat,
            day: day,
            time: time,
            detail: detail,
        });
    },

    detailItems: function (e) {
        wx.navigateTo({
            url: '../detailItems/detailItems'
        });
    },

    submit: function (e) {
        //请求获取数据
        wx.request({
            url: 'http://120.79.152.109/api.php',
            data: {
                a: 'submitOrderData',
                member_id: '62218000',
                item_1: '00000',
                item_2: '00100',
                item_3: '00300',
                orderTime: this.data.time,
                addTime: getNowFormatDate(),
                date: this.data.day

            },
            method: 'GET',
            success: res => {
                console.log(res.data)
                this.setData({
                    itemArr: []
                })
            }
        })
            setTimeout(function () {
                wx.showToast({
                    title: '预约成功',
                    icon: 'success',
                    duration: 2000
                }), 0
            })
            wx.navigateBack({
                delta: 1, // 回退前 delta(默认为1) 页面
            })
        }
})