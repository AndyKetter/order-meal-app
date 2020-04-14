// pages/orderDetail/orderDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        orderList: {
            'order_number': '200310000003',
            'order_status': '已完成',
            'order_address': '住院楼9层10病区20床',
            'order_time': '2020-03-10 15:30:50',
            'order_payment_type': '微信支付',
            'order_subtotal': '138.00',
            'order_details': [{
                'order_date': '2020-03-02',
                'order_meal': '早餐',
                'meal_subtotal': '134.00',
                'goods_details': [{
                    'goods_id': '100001200302000001',
                    'goods_name': '铁板牛肉',
                    'goods_image': 'http://image.tupian114.com/20141114/11060276.jpg',
                    'goods_price': '65.00',
                    'goods_count': '2',
                    'goods_unit': '份',
                    'goods_subtotal': '130.00'
                }, {
                    'goods_id': '100001200302000002',
                    'goods_name': '米饭',
                    'goods_image': 'http://img0.imgtn.bdimg.com/it/u=3544460254,578632934&fm=26&gp=0.jpg',
                    'goods_price': '2.00',
                    'goods_count': '2',
                    'goods_unit': '份',
                    'goods_subtotal': '4.00'
                }]
            }, {
                'order_date': '2020-03-02',
                'order_meal': '晚餐',
                'meal_subtotal': '4.00',
                'goods_details': [{
                    'goods_id': '100001200302000002',
                    'goods_name': '米饭',
                    'goods_image': 'http://img0.imgtn.bdimg.com/it/u=3544460254,578632934&fm=26&gp=0.jpg',
                    'goods_price': '2.00',
                    'goods_count': '2',
                    'goods_unit': '份',
                    'goods_subtotal': '4.00'
                }]
            }]
        },
        refundList: {
            'refund_total': '69.00',
            'refund_count': '2',
            'refund_details': [{
                'refund_number': '200310000003-01',
                'refund_time': '2020-03-10 16:30:50',
                'refund_subtotal': '67.00',
                'meal_details': [{
                    'refund_date': '2020-03-02',
                    'refund_meal': '早餐',
                    'refund_meal_subtotal': '67.00',
                    'goods_details': [{
                        'goods_id': '100001200302000001',
                        'goods_name': '铁板牛肉',
                        'goods_image': 'http://image.tupian114.com/20141114/11060276.jpg',
                        'goods_price': '65.00',
                        'goods_count': '1',
                        'goods_unit': '份',
                        'goods_subtotal': '65.00'
                    }, {
                        'goods_id': '100001200302000002',
                        'goods_name': '米饭',
                        'goods_image': 'http://img0.imgtn.bdimg.com/it/u=3544460254,578632934&fm=26&gp=0.jpg',
                        'goods_price': '2.00',
                        'goods_count': '1',
                        'goods_unit': '份',
                        'goods_subtotal': '2.00'
                    }]
                }]
            }, {
                'refund_number': '200310000003-02',
                'refund_time': '2020-03-10 18:10:30',
                'refund_subtotal': '2.00',
                'meal_details': [{
                    'refund_date': '2020-03-02',
                    'refund_meal': '晚餐',
                    'refund_meal_subtotal': '2.00',
                    'goods_details': [{
                        'goods_id': '100001200302000002',
                        'goods_name': '米饭',
                        'goods_image': 'http://img0.imgtn.bdimg.com/it/u=3544460254,578632934&fm=26&gp=0.jpg',
                        'goods_price': '2.00',
                        'goods_count': '1',
                        'goods_unit': '份',
                        'goods_subtotal': '2.00'
                    }]
                }]
            }]
        }

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        wx.setNavigationBarTitle({
            title: '订单详情'
        })

        // wx.setNavigationBarColor({
        //     frontColor: '#000000',
        //     backgroundColor: '#f2f3f4'
        // })

        console.log(this.data.orderList.order_details)
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