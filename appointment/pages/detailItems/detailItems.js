Page({
    data: {
        minusStatus: 'disabled',
        items: [{'num': 0,  'name': '中医全身经络'}, {'num': 0,  'name': '全身淋巴排毒'}, {'num': 0,  'name': '尤兰乳腺滋养'}, {'num': 0,  'name': '背部三焦舒缓'}, {'num': 0,  'name': '腿部淋巴排毒'},
        {'num': 0,  'name': '头部疏通松筋'}, {'num': 0,  'name': '面部微雕松筋'}, {'num': 0,  'name': '肩筋护理松筋'}, {'num': 0,  'name': '腰臀护理松筋'}, {'num': 0,  'name': '肠胃调整松筋'},
        {'num': 0,  'name': '脉能头部调整'}, {'num': 0,  'name': '脉能面部紧致提升'}, {'num': 0,  'name': '脉能腰臀调理'}, {'num': 0,  'name': '脉能肩筋调理'}, {'num': 0,  'name': '脉能腿部调理'}, {'num': 0,  'name': '脉能肠胃调理'},
        {'num': 0,  'name': '拔罐'}, {'num': 0,  'name': '刮痧'},],
    },

    /* 点击减号 */
    bindMinus: function(e) {
        let temp = this.data.items;
        let num = temp[e.currentTarget.dataset.index].num;
        if (num > 0) {
            temp[e.currentTarget.dataset.index].num--;
        }

        let minusStatus = num > 0 ? 'normal' : 'disabled';
        this.setData({
            items: temp,
            minusStatus: minusStatus
        });
    },

    /* 点击加号 */
    bindPlus: function(e) {
        let temp = this.data.items;
        temp[e.currentTarget.dataset.index].num++;

        this.setData({
            items: temp,
        });
    },

    /* 输入框事件 */
    bindManual: function(e) {
        let temp = this.data.items;
        let number = e.detail.value;
        
        temp[e.currentTarget.dataset.index].num = number;
        this.setData({
            items: temp
        });
    },

    description: function(e) {
        wx.navigateTo({
            url: '../description/description'
        });
    }
})