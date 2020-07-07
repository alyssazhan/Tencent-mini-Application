// pages/testorder4/testorder4.js

Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    currtab: 0,
    swipertab: [
     {
     id: 0,
     name: '全部'
    },
    {
    id: 1,
    name: '待付款'
    },
    {
    id: 2,
    name: '待发货'
    },
    {
    id: 3,
    name: "待收货"
    },
    {
    id: 4,
    name: '待评价'
    }
   ]
    
    
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  
  /**
 * @Explain：选项卡点击切换
 */
  tabSwitch: function (e) {
    var that = this
    if (this.data.currtab === e.target.dataset.current) {
      return false
    } else {
      that.setData({
        currtab: e.target.dataset.current
      })
    }
  },
 
  tabChange: function (e) {
    this.setData({
      currtab: e.detail.current
    })
    this.orderShow()
  },
  orderShow: function () {
    let _this = this;
    switch (this.data.currtab) {
      case 0:
        _this.alreadyShow()
        break
      case 1:
        _this.waitPayShow()
        break
      case 2:
        _this.lostShow()
      case 3:
        _this.waitShow()
      case 4:
        _this.evaluatedShow()
    }
  },
  alreadyShow: function () {
    this.setData({
      alreadyOrder: [{ name: "跃动体育运动俱乐部(圆明园店)", state: "交易成功", time: "2018-09-30 14:00-16:00", status: "已完成", url: "../../../img/shangpin.jpg", money: "132" }, { name: "跃动体育运动俱乐部(圆明园店)", state: "交易成功", time: "2018-10-12 18:00-20:00", status: "已完成", url: "../../../img/shangpin.jpg", money: "205" }]
    })
  },
 
  waitPayShow: function () {
    this.setData({
      waitPayOrder: [{ name: "跃动体育运动俱乐部(圆明园店)", state: "待付款", time: "2018-10-14 14:00-16:00", status: "待付款", url: "../../../img/shangpin.jpg", money: "186" }],
    })
  },
 
  lostShow: function () {
    this.setData({
      lostOrder: [{ name: "跃动体育运动俱乐部(圆明园店)", state: "待发货", time: "2018-10-4 10:00-12:00", status: "待发货", url: "../../../img/shangpin.jpg", money: "122" }],
    })
  },
  waitShow: function () {
    this.setData({
      lostOrder: [{ name: "跃动体育运动俱乐部(圆明园店)", state: "待收货", time: "2018-10-4 10:00-12:00", status: "待收货", url: "../../../img/shangpin.jpg", money: "122" }],
    })
  },
  evaluatedShow: function () {
    this.setData({
      lostOrder: [{ name: "跃动体育运动俱乐部(圆明园店)", state: "待评价", time: "2018-10-4 10:00-12:00", status: "待评价", url: "../../../img/shangpin.jpg", money: "122" }],
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