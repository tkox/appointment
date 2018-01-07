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
        itemArr: [{
                idx: '0',
                name: '中医全身经络'
            }, {
                idx: '0',
                name: '全身淋巴排毒'
            }, {
                idx: '0',
                name: '尤兰乳腺滋养'
            }, {
                idx: '0',
                name: '背部三焦舒缓'
            }, {
                idx: '0',
                name: '腿部淋巴排毒'
            }, {
                idx: '1',
                name: '头部疏通松筋'
            },
            {
                idx: '1',
                name: '面部微雕松筋'
            }, {
                idx: '1',
                name: '肩筋护理松筋'
            }, {
                idx: '1',
                name: '腰臀护理松筋'
            }, {
                idx: '1',
                name: '肠胃调整松筋'
            }, {
                idx: '2',
                name: '脉能头部调整'
            }, {
                idx: '2',
                name: '脉能面部紧致提升'
            },
            {
                idx: '2',
                name: '脉能腰臀调理'
            }, {
                idx: '2',
                name: '脉能肩筋调理'
            }, {
                idx: '2',
                name: '脉能腿部调理'
            }, {
                idx: '2',
                name: '脉能肠胃调理'
            }, {
                idx: '3',
                name: '拔罐'
            }, {
                idx: '3',
                name: '刮痧'
            }
        ],
        itemArrTemp: [{
                idx: '0',
                name: '中医全身经络'
            },
            {
                idx: '1',
                name: '面部微雕松筋'
            },
            {
                idx: '2',
                name: '脉能腰臀调理'
            },
            {
                idx: '3',
                name: '刮痧'
            }
        ],
        detail: [],
        curIndex: 0,
        isScroll: false,
        toView: 'hand'
    },
    onShow() {
        wx.request({
            url: 'http://localhost/www/test.json',
            success(res) {
                this.setData({
                    detail: res.data
                })
            }
        });
    },
    switchTab(e) {
        console.log(e);
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