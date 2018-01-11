Page({
    data: {
        minusStatus: 'disabled',
        title: ['手工舒缓', '牛角松筋', '生命之脉', '其他项目'],
        items: []
    },

    onShow: function () {
        let items = this.data.items;
        let title = this.data.title;
        let number = wx.getStorageSync('number_sto') || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let count = wx.getStorageSync('count_sto') || [0, 0, 0, 0];
        wx.setStorageSync('count_sto', count);
        wx.setStorageSync('number_sto', number);

        //从缓存读出
        items = wx.getStorageSync('itemData');
        for (let i = 0; i < items.length; i++) {
            items[i] = {
                'id': items[i].item_id,
                'minusStatus': 'disabled',
                'num': 0,
                'name': items[i].item_name,
            }
        }
        this.setData({
            items: items,
        })
        
    },

    onLoad: function () {
         //请求获取数据

         wx.request({
            url: 'http://120.79.152.109/api.php',
            data: {
                a: 'getItemData',
            },
            method: 'GET',
            success: res => {
                console.log(res.data)
                wx.setStorageSync('itemData', res.data.data);
            }
        })
    },



    bindMinus: function (e) {
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

    bindPlus: function (e) {
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

    description: function (e) {
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