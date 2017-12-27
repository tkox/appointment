Page({
    data: {
        category: [{
                name: '手工舒缓',
                id: 'hand'
            },
            {
                name: '牛角松筋',
                id: 'horn'
            },
            {
                name: '生命之脉',
                id: 'vita'
            },
            {
                name: '其他',
                id: 'other'
            },
        ],
        detail: [],
        curIndex: 0,
        isScroll: false,
        toView: 'hand'
    },
    onLoad() {
        var self = this;
        wx.request({
            url: 'http://localhost/www/test.json',
            success(res) {
                self.setData({
                    detail: res.data
                })
            }
        });
    },
    switchTab(e) {
        const self = this;
        this.setData({
            isScroll: true
        })
        setTimeout(function () {
            self.setData({
                toView: e.target.dataset.id,
                curIndex: e.target.dataset.index
            })
        }, 0)
        setTimeout(function () {
            self.setData({
                isScroll: false
            })
        }, 1)
    }

})