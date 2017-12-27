Page({
    data: {
        flag: [{
                tab: 0,
                isChoosed: false,
                content: '星期一'
            },
            {
                tab: 1,
                isChoosed: false,
                content: '星期二'
            },
            {
                tab: 2,
                isChoosed: false,
                content: '星期三'
            },
            {
                tab: 3,
                isChoosed: false,
                content: '星期四'
            },
            {
                tab: 4,
                isChoosed: false,
                content: '星期五'
            },
            {
                tab: 5,
                isChoosed: false,
                content: '星期六'
            },
            {
                tab: 6,
                isChoosed: false,
                content: '星期日'
            },
        ],
        itemArr: [{idx: 1}, {idx: 3}, {idx: 2}, {idx: 0}, {idx: 0}, {idx: 0}, {idx: 3}, {idx: 3}, {idx: 1},],
        array: ['1位', '2位', '3位'],
        index: 0,
    },
    onLoad: function (e) {
        let temp = this.data.flag;
        temp[0].isChoosed = true;
        this.setData({
            flag: temp
        })
    },

    detail: function(e) {
        wx.navigateTo({
            url: '../detail/detail'
        });
    },
    
    week: function (e) {
        let idx = e.currentTarget.dataset.index;
        let temp = this.data.flag;
        let i = 0;
        for (; i < 7; i++)
            temp[i].isChoosed = false;
        temp[idx].isChoosed = true;
        this.setData({
            flag: temp
        })
    },

    title: function (e) {
        wx.navigateTo({
            url: '../jsy/jsy'
        });
    },

    bindPickerChange: function (e) {
        this.setData({
            index: e.detail.value
        })
    },
})