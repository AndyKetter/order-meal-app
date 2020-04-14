// pages/help/help.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        problem_type_list: [
            {
                'problem_type_id': '100000200402000001',
                'problem_type_name': '支付问题'
            }, {
                'problem_type_id': '100000200402000002',
                'problem_type_name': '订单问题'
            },{
                'problem_type_id': '100000200402000003',
                'problem_type_name': '其他问题'
            }
        ],
        problem_list: {
            'problem_type_id': '100000200402000001',
            'contents': [
                {
                    'id': '100000200402000001',
                    'question': 'Q：为什么提示我"账户存在异常，无法下单"？',
                    'answer': '包含（但不仅限于）以下行为者，系统将自动予以封禁（客服无权解封）： \n1、有过虚假交易（编造不存在真实买卖的订单）；\n2、有过恶意下单行为；'
                }, {
                    'id': '100000200402000002',
                    'question': 'Q：在线支付取消订单后钱怎么返还？',
                    'answer': '订单取消后，款项会在一个工作日内原途径返还至您的账户。'
                }
            ]
        }

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '常见问题'
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