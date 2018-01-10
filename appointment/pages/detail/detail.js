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
        let seatInfo = wx.getStorageSync('seatInfo');
        let seatIndex = wx.getStorageSync('seatIndex');

        seatInfo[seatIndex] -= this.data.seat;

        wx.setStorageSync('seatInfo', seatInfo);
        console.log(this.data.seat);

        setTimeout(function () {
            wx.showToast({
                title: '成功',
                icon: 'success',
                duration: 2000
            }), 0
        })
        wx.navigateBack({
            delta: 1, // 回退前 delta(默认为1) 页面
        })
    }
})