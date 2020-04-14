// pages/bind-card/bind-card.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        radioSeleted: "",
        personnelNumberTitle: "工号"
    },

    radioChange: function (evt) {
        console.log('radio发生change事件，携带value值为：', evt.detail.value)
        let value = evt.detail.value;
        let title = this.personnelNumberTitle;
        if (value == "1") {
            title = "工号"
        } else {
            title = "住院ID"
        }
        this.setData({
            radioSeleted: "选中的value：" + value,
            personnelNumberTitle: title
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 设置导航栏为对应导航
        wx.setNavigationBarTitle({
            title: '绑定餐卡'
        })
        
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