Page({
    data: {
        seat: '1位',
        day: '',
        time: '',
    },

    onShow() {
        let seat = wx.getStorageSync('seat');
        let day = wx.getStorageSync('date');
        let time = wx.getStorageSync('time');
        this.setData({
            seat: seat,
            day: day,
            time: time,
        })
    },

    detailItems: function(e) {
        wx.navigateTo({
            url: '../detailItems/detailItems'
        });
    }
})