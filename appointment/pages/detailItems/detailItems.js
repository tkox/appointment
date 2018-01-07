Page({
    data: {
        minusStatus: 'disabled',
        title: ['手工舒缓', '牛角松筋', '生命之脉', '其他项目'],
        items: [{'id': 0, 'minusStatus': 'disabled', 'num': 0,  'name': '中医全身经络'}, 
        {'id': 0, 'minusStatus': 'disabled', 'num': 0,  'name': '全身淋巴排毒'}, 
        {'id': 0, 'minusStatus': 'disabled', 'num': 0,  'name': '尤兰乳腺滋养'}, 
        {'id': 0, 'minusStatus': 'disabled', 'num': 0,  'name': '背部三焦舒缓'}, 
        {'id': 0, 'minusStatus': 'disabled', 'num': 0,  'name': '腿部淋巴排毒'},
        {'id': 1, 'minusStatus': 'disabled', 'num': 0,  'name': '头部疏通松筋'}, 
        {'id': 1, 'minusStatus': 'disabled', 'num': 0,  'name': '面部微雕松筋'}, 
        {'id': 1, 'minusStatus': 'disabled', 'num': 0,  'name': '肩筋护理松筋'}, 
        {'id': 1, 'minusStatus': 'disabled', 'num': 0,  'name': '腰臀护理松筋'}, 
        {'id': 1, 'minusStatus': 'disabled', 'num': 0,  'name': '肠胃调整松筋'},
        {'id': 2, 'minusStatus': 'disabled', 'num': 0,  'name': '脉能头部调整'}, 
        {'id': 2, 'minusStatus': 'disabled', 'num': 0,  'name': '脉能面部紧致提升'}, 
        {'id': 2, 'minusStatus': 'disabled', 'num': 0,  'name': '脉能腰臀调理'}, 
        {'id': 2, 'minusStatus': 'disabled', 'num': 0,  'name': '脉能肩筋调理'}, 
        {'id': 2, 'minusStatus': 'disabled', 'num': 0,  'name': '脉能腿部调理'}, 
        {'id': 2, 'minusStatus': 'disabled', 'num': 0,  'name': '脉能肠胃调理'},
        {'id': 3, 'minusStatus': 'disabled', 'num': 0,  'name': '拔罐'}, 
        {'id': 3, 'minusStatus': 'disabled', 'num': 0,  'name': '刮痧'}], 
    },

    onShow: function(){
        let i = 0;
        let items = this.data.items;
        let number = wx.getStorageSync('number_sto') || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let count = wx.getStorageSync('count_sto') || [0, 0, 0, 0];

        for(; i < 18; i++){
            items[i].num = number[i];
        };

        this.setData({
            items: items,
        });
        wx.setStorageSync('count_sto', count);
        wx.setStorageSync('number_sto', number);
    },

    bindMinus: function(e) {
        let temp = this.data.items;
        let index = e.currentTarget.dataset.index;
        let num = temp[index].num;
        let count = wx.getStorageSync('count_sto');
        let number = wx.getStorageSync('number_sto');
        if (num > 0) {
            temp[index].num--;
            number[index]--;
            count[temp[index].id]--;
        }

        temp[index].minusStatus = num === 0 ? 'normal' : 'disabled';
        this.setData({
            items: temp,
        });
        wx.setStorageSync('count_sto', count);
        wx.setStorageSync('number_sto', number);
    },

    bindPlus: function(e) {
        let temp = this.data.items;
        let index = e.currentTarget.dataset.index;
        let count = wx.getStorageSync('count_sto');
        let number = wx.getStorageSync('number_sto');

        temp[index].num++;
        number[index]++;
        temp[index].minusStatus = temp[index].num > 0 ? 'normal' : 'disabled';

        count[temp[index].id]++;

        this.setData({
            items: temp,
        });
        wx.setStorageSync('count_sto', count);
        wx.setStorageSync('number_sto', number);
    },

    description: function(e) {
        console.log(e);
        let idx = e.currentTarget.dataset.index;
        let id = e.currentTarget.dataset.id
        wx.setStorageSync('curIndex', id);
        wx.setStorageSync('toViewItem', idx);
        wx.navigateTo({
            url: '../description/description'
        });
    }
})