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
        num: [{'id': '00000', 'num': 0}, {'id': '00001', 'num': 0}, {'id': '00002', 'num': 0},
        {'id': '00003', 'num': 0}, {'id': '00004', 'num': 0}, {'id': '00100', 'num': 0},
        {'id': '00101', 'num': 0}, {'id': '00102', 'num': 0}, {'id': '00103', 'num': 0},
        {'id': '00104', 'num': 0}, {'id': '00200', 'num': 0}, {'id': '00201', 'num': 0},
        {'id': '00202', 'num': 0}, {'id': '00203', 'num': 0}, {'id': '00204', 'num': 0},
        {'id': '00205', 'num': 0}, {'id': '00300', 'num': 0}, {'id': '00301', 'num': 0}]
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
        // let detailtime = this.data.day + ' ' + this.data.time; // from myself
        // console.log(detailtime);

        // console.log(getNowFormatDate());//from hr 
    },

    detailItems: function (e) {
        wx.navigateTo({
            url: '../detailItems/detailItems'
        });
    },

    submit: function (e) {
        let number = wx.getStorageSync('number_sto') || this.data.num;
        // console.log('submit');
        // console.log(wx.getStorageSync('seatInfo'));
        let seatInfo = wx.getStorageSync('seatInfo')
        //请求获取数据
        wx.request({
            url: 'http://120.79.152.109/api.php',
            data: {
                a: 'submitOrderData',
                member_id: '62218000',
                item_1: '00000',
                item_2: '00100',
                item_3: '00300',
                orderTime: this.data.time,
                addTime: this.data.day + ' ' + this.data.time,
                date: this.data.day
            },
            method: 'GET',
            success: res => {
                console.log(res.data)
                this.setData({
                    itemArr: []
                })
            }
        })
            setTimeout(function () {
                wx.showToast({
                    title: '预约成功',
                    icon: 'success',
                    duration: 2000
                }), 0
            })
            wx.navigateBack({
                delta: 1, // 回退前 delta(默认为1) 页面
            })
        }
})