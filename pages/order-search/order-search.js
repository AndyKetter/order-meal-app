// pages/order-search/order-search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 设置导航栏为对应导航
        wx.setNavigationBarTitle({
            title: '搜索订单'
        })

        //高度大小
        let that = this;
        let res = wx.getSystemInfoSync();
        let windowHeight = res.windowHeight;
        let query = wx.createSelectorQuery();
        query.select('.header').boundingClientRect();
        query.exec(function (rect) {
            if (rect[0] === null || rect[1] === null) return;
            that.setData({
                windowHeight: windowHeight - rect[0].height
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