Page({

    /**
     * 页面的初始数据
     */
    data: {
        itemList: [{
            'order_date': '2020-03-04',
            'order_subtotal': '96.80',
        }, {
            'order_date': '2020-03-03',
            'order_subtotal': '86.00',
        }, {
            'order_date': '2020-03-02',
            'order_subtotal': '56.65',
        }, {
            'order_date': '2020-03-01',
            'order_subtotal': '66.50',
        }]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // 设置导航栏为对应导航
        wx.setNavigationBarTitle({
            title: '我的账单'
        })

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