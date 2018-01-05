let util = require('../../utils/util.js');

Page({
    data: {
        flag: [{
                tab: 0,
                isChoosed: false,
                content: '星期一',
                day: ''
            },
            {
                tab: 1,
                isChoosed: false,
                content: '星期二',
                day: ''
            },
            {
                tab: 2,
                isChoosed: false,
                content: '星期三',
                day: ''
            },
            {
                tab: 3,
                isChoosed: false,
                content: '星期四',
                day: ''
            },
            {
                tab: 4,
                isChoosed: false,
                content: '星期五',
                day: ''
            },
            {
                tab: 5,
                isChoosed: false,
                content: '星期六',
                day: ''
            },
            {
                tab: 6,
                isChoosed: false,
                content: '星期日',
                day: ''
            },
        ],
        itemArr: [{
                id: 0,
                idx: 1,
                time: '8:00-9:00'
            }, {
                id: 0,
                idx: 3,
                time: '9:00-10:00'
            }, {
                id: 0,
                idx: 2,
                time: '10:00-11:00'
            },
            {
                id: 1,
                idx: 0,
                time: '11:00-12:00'
            }, {
                id: 1,
                idx: 0,
                time: '13:00-14:00'
            }, {
                id: 1,
                idx: 0,
                time: '14:00-15:00'
            },
            {
                id: 2,
                idx: 3,
                time: '15:00-16:00'
            }, {
                id: 2,
                idx: 3,
                time: '16:00-17:00'
            }, {
                id: 2,
                idx: 1,
                time: '17:00-18:00'
            },
        ],
        id: [{
            id: 0
        }, {
            id: 1
        }, {
            id: 2
        }],
        array: ['1位', '2位', '3位'],
        index: 0,
        leapYear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        norYear: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    },
    onLoad: function (e) {
        let flag = this.data.flag;

        let date = new Date()
        let week = date.getDay();
        let year = date.getFullYear();
        let month = date.getMonth() + 1
        let day = date.getDate()

        // let monthLength = 0;
        // if(year % 400 == 0 || (year % 400 != 0 && year % 4 == 0)) {
        //     monthLength = leapYear[month - 1]
        // } else {
        //     monthLength = norYear[month - 1]
        // }

        let weekTemp = (week - 1) % 7;
        let monthTemp = month % 13;
        let j = 0;

        flag[weekTemp].day = year + '-' + month + '-' + 'day';
        // for(; j < 7; j++, i++){
        //     if(day ==  monthLength){
        //         day = 1;
        //     }
        // }
        

        flag[week - 1].isChoosed = true;
        this.setData({
            // day: time,
            flag: temp
        })
    },

    detail: function (e) {
        let index = e.currentTarget.dataset.index;
        let timeTemp = this.data.itemArr[index].time;
        try {
            wx.setStorageSync('time', timeTemp);
        } catch (e) {
            console.log(e);
        }
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
        let temp = e.detail.value;
        let seatTemp = this.data.array[temp];
        this.setData({
                index: e.detail.value
            }),
            wx.setStorageSync('seat', seatTemp);
    },
})