Page({

    /**
     * 页面的初始数据
     */
    data: {
        orders: {
            "user_name": "张六六",
            "user_phone": "13900009999",
            "address": "住院楼9层普通病区20床",
            "order_count": 7,
            "order_preferential_amount": 25.4,
            "order_subtotal_amount": 91.6,
            "details": [{
                "order_date": "2020-03-10",
                "order_meal": "早餐",
                "meal_subtotal_amount": 5,
                "meal_details": [{
                        "goods_id": 1,
                        "goods_name": "小米粥",
                        "current_price": 2.00,
                        "goods_count": 1,
                        "goods_subtotal_amount": 2.00
                    },
                    {
                        "goods_id": 2,
                        "goods_name": "馒头",
                        "current_price": 1.50,
                        "goods_count": 2,
                        "goods_subtotal_amount": 3.00
                    }
                ],
            }, {
                "order_date": "2020-03-10",
                "order_meal": "午餐",
                "meal_subtotal_amount": 33.60,
                "meal_details": [{
                        "goods_id": 4,
                        "goods_name": "米饭",
                        "current_price": 2.00,
                        "goods_count": 1,
                        "goods_subtotal_amount": 2.00
                    },
                    {
                        "goods_id": 5,
                        "goods_name": "紫苏土豆牛肉碎",
                        "current_price": 31.6,
                        "original_price": 40,
                        "discount": 7.9,
                        "goods_count": 1,
                        "goods_subtotal_amount": 31.60
                    }
                ]
            }, {
                "order_date": "2020-03-10",
                "order_meal": "晚餐",
                "meal_subtotal_amount": 53.00,
                "meal_details": [{
                        "goods_id": 4,
                        "goods_name": "米饭",
                        "current_price": 2.00,
                        "goods_count": 1,
                        "goods_subtotal_amount": 2.00
                    },
                    {
                        "goods_id": 5,
                        "goods_name": "土豆炖牛肉",
                        "current_price": 51,
                        "original_price": 68,
                        "discount": 7.5,
                        "goods_count": 1,
                        "goods_subtotal_amount": 51
                    }
                ]
            }]

        }

    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        wx.setNavigationBarTitle({
            title: '确认订单'
        })

        // this.setData({
        //     constants: constants
        // })

        //高度大小
        let that = this;
        let res = wx.getSystemInfoSync();
        let windowHeight = res.windowHeight;
        let query = wx.createSelectorQuery();
        query.select('.header').boundingClientRect();
        query.select('.footer').boundingClientRect();
        query.exec(function(rect) {
            if (rect[0] === null || rect[1] === null) return;
            that.setData({
                windowHeight: windowHeight - rect[0].height - rect[1].height - 10
            })
        });

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})