// pages/inside-card/inside-card.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        personnelType: "职工1",
        personnelNumberTitle: "",
        departmentTitle: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let numberTitle = ""
        let deptTitle = ""
        if (this.data.personnelType == "职工") {
            numberTitle = "工    号"
            deptTitle = "科  室"
        } else {
            numberTitle = "住 院 ID"
            deptTitle = "病  区"
        }

        this.setData({
            personnelNumberTitle: numberTitle,
            departmentTitle: deptTitle
        })

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // 设置导航栏为对应导航
        wx.setNavigationBarTitle({
            title: '我的餐卡'
        })
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