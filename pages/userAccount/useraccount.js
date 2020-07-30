// pages/userAccount/useraccount.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    content:"情感类博主",
    name: "Lucy",//回答者姓名
   userimg: "../../images/people1.jpeg",//回答者头像
   fans:"10",
   c_user_name:"Bob",
   c_time:"2020.07.07 17:17",
   c_content:"答主非常专业。。。。",
   c_user_img:"../../images/people2.jpeg"
  },

  

  onShow: function () {
    this.refresh();
  },

  searchPerson:function(e) {
    var that = this;
    this.setData({
      person: e.detail.value
    })
    /**
   * 检索用户
   */
    if (this.data.person != null && this.data.person!=''){
      wx.request({
        url: 'https://stupidant.cn/queswerServer/searchPerson',
        data: {
          person: this.data.person
        },
        header: {
          "Content-Type": "applciation/json"
        },
        method: "GET",
        success: function (e) {
          that.setData({
            newMasters: e.data
          });
          console.log(e);
        },
      })
    }else{
      this.refresh();
    }
  },
  /**
   * 发送请求，从服务端返回名人信息
   */
  refresh: function () {
    var that = this;
    wx.request({
      url: 'https://stupidant.cn/queswerServer/listFamous',
      data: {},
      header: {
        "Content-Type": "applciation/json"
      },
      method: "GET",
      success: function (e) {
        that.setData({
          hotMasters: e.data
        });
        console.log(e);
      },
    })
    /**
   * 发送请求，从服务端返回关注的用户信息
   */
    wx.getUserInfo({
      success: function (res) {
        wx.request({
          url: 'https://stupidant.cn/queswerServer/listliked',
          data: {
            'user.username': res.userInfo.nickName,
            'user.avatarUrl': res.userInfo.avatarUrl,
          },
          header: {
            "Content-Type": "applciation/json"
          },
          method: "GET",
          success: function (e) {
            console.log(e)
            that.setData({
              newMasters: e.data
            });
          },
        })
      }
    })
  },

  toPerson: function (e) {
    var $data = e.currentTarget.dataset
    wx.navigateTo({
      url: '../quest/quest?img=' + $data.img + '&name=' + $data.name
    })
  },

  toastHidden: function () {
    var that = this;
    that.setData({
      hiddenToast: true
    })
  },
  freshPerson: function (e) {
    var that = this;
    wx.request({
      url: 'https://stupidant.cn/queswerServer/listFamous',
      data: {},
      header: {
        "Content-Type": "applciation/json"
      },
      method: "GET",
      success: function (e) {
        that.setData({
          hotMasters: e.data
        });
        console.log(e);
      },
    })
  },
  /**
   * 关注用户情况
   */
  followPerson: function (e) {
    var that = this;
    var $data = e.currentTarget.dataset
    if ($data.isfam == 1){
      that.setData({
        isf:1
      })
    }
    /**
   * 添加关注
   */
    wx.getUserInfo({
      success: function (res) {
        wx.request({
          url: 'https://stupidant.cn/queswerServer/addFollow',
          data: {
            'hisname': $data.name,
            'myname': res.userInfo.nickName,
          },
          header: {//请求头
            "Content-Type": "applciation/json"
          },
          method: "GET",
          success: function (e) {
            that.setData({
              hiddenToast: false,
              follow:"已关注"
            })
          },
        })
      }
    })
  },
  /**
   * 取消关注用户
   */
  deleteFollow: function (e) {
    var that = this;
    var $data = e.currentTarget.dataset
    wx.getUserInfo({
      success: function (res) {
        wx.request({
          url: 'https://stupidant.cn/queswerServer/deleteFollow',
          data: {
            'hisname': $data.name,
            'myname': res.userInfo.nickName,
          },
          header: {
            "Content-Type": "applciation/json"
          },
          method: "GET",
          success: function (e) {
            that.refresh();
          },
        })
      }
    })
  }
})