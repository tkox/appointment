Page({
    data: {
        num: 0,
        minusStatus: 'disabled'
    },
    /* 点击减号 */
    bindMinus: function () {
        let num = this.data.num;
        if (num > 0) {
            num--;
        }

        let minusStatus = num > 0 ? 'normal' : 'disabled';
        this.setData({
            num: num,
            minusStatus: minusStatus
        });
    },

    /* 点击加号 */
    bindPlus: function () {
        let num = this.data.num;
        num++;

        let minusStatus = num < 1 ? 'disabled' : 'normal';
        this.setData({
            num: num,
            minusStatus: minusStatus
        });
    },

    /* 输入框事件 */
    bindManual: function (e) {
        let num = e.detail.value;

        this.setData({
            num: num
        });
    },

    description: function(e) {
        wx.navigateTo({
            url: '../description/description'
        });
    }
})