// pages/register/register.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        items: [
            { name: 'men', value: '男' },
            { name: 'women', value: '女' }

            // { name: 'men', value: '男', disabled: true },
            // { name: 'women', value: '女', checked: true },
            // { name: 'BRA', value: '巴西' }
        ],
        seleted: ""
    },
    radioChange: function (evt) {
        console.log('radio发生change事件，携带value值为：', evt.detail.value)
        let value = evt.detail.value;
        this.setData({
            seleted: "选中的value：" + value
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 设置导航栏为对应导航
        wx.setNavigationBarTitle({
            title: '用户注册'
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