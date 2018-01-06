Page({
    data: {
        day: '',
        time: '',
        seat: '1位',
    },

    onShow() {
        let time = wx.getStorageSync('time');
        let seat = wx.getStorageSync('seat');
        this.setData({
            time: time,
            seat: seat
        })
    },

    detailItems: function(e) {
        wx.navigateTo({
            url: '../detailItems/detailItems'
        });
    }
})