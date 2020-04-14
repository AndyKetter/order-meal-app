
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //模拟 数据
        constants: [{
            "order_date": "2020-03-10",
            "order_meal": "早餐",
            "meal_subtotal": 3.50,
            "goods_details": [{
                "goods_id": 1,
                "goods_name": "小米粥",
                "current_price": 2.00,
                "order_count": 1,
                "refund_count": 0
            },
            {
                "goods_id": 2,
                "goods_name": "馒头",
                "current_price": 1.50,
                "order_count": 2,
                "refund_count": 0
            }],
        }, {
            "order_date": "2020-03-10",
            "order_meal": "午餐",
            "meal_subtotal": 33.60,
            "goods_details": [{
                "goods_id": 4,
                "goods_name": "米饭",
                "current_price": 2.00,
                "order_count": 1,
                "refund_count": 0
            },
            {
                "goods_id": 5,
                "goods_name": "紫苏土豆牛肉碎",
                "current_price": 31.6,
                "original_price": 40,
                "discount": 7.9,
                "order_count": 1,
                "refund_count": 0
            }]
        }, {
            "order_date": "2020-03-10",
            "order_meal": "晚餐",
            "meal_subtotal": 53.00,
            "goods_details": [{
                "goods_id": 4,
                "goods_name": "米饭",
                "current_price": 2.00,
                "order_count": 1,
                "refund_count": 0
            },
            {
                "goods_id": 5,
                "goods_name": "土豆炖牛肉",
                "current_price": 51,
                "original_price": 68,
                "discount": 7.5,
                "order_count": 1,
                "refund_count": 0
            }]
        }]


    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '修改订单'
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
        query.exec(function (rect) {
            if (rect[0] === null || rect[1] === null) return;
            that.setData({
                windowHeight: windowHeight - rect[0].height - rect[1].height - 20
            })
        });

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})