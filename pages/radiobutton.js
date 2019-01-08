// pages/radiobutton.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    one: '100元',
    two: '200元',
    three: '500元',
    four: '1000元',
    five: '2000元',
    six: '其他金额',
    apaymoney: 100,
    getmoney: 1,
    allmoney: 101,
    inputValue: null,
    isChecked: "1",
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

  },
  // 充值点击时间
  btnoneclick: function (event) {
    var tid = event.target.id;
    switch (tid) {
      case "1":
        var money = 100;
        var getm = 1;
        this.setData({
          apaymoney: money,
          allmoney: money + getm,
          isChecked: "1",
        })
        break;
      case "2":
        console.log(event)
        var m = 200;
        var getm = this.data.getmoney;
        this.setData({
          apaymoney: m,
          allmoney: m + getm,
          isChecked: "2",
        })
        break;
      case "3":
        var m = 500;
        var getm = this.data.getmoney;
        this.setData({
          apaymoney: m,
          allmoney: m + getm,
          isChecked: "3",
        })
        break;
      default:
        console.log('---' + "error");
        break;
    }
  },
  inputChange: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  /**
   * 弹窗
   */
  showDialogBtn: function () {
    this.setData({
      showModal: true
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () { },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function (detail) {
    console.log(detail),
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000,
      })
    let value = parseInt(this.data.inputValue);
    let getnum = this.data.getmoney;
    this.setData({
      apaymoney: value,
      allmoney: value + getnum
    })
    this.hideModal();
  },
  btntwoclick: function (event) {
    switch (event.target.id) {
      case "4":
        var m = 1000;
        var getm = this.data.getmoney;
        this.setData({
          apaymoney: m,
          allmoney: m + getm,
          isChecked: "4",
        })
        break;
      case "5":
        var m = 2000;
        var getm = this.data.getmoney;
        this.setData({
          apaymoney: m,
          allmoney: m + getm,
          isChecked: "5",
        })
        break;
      case "6":
        this.showDialogBtn()
        break;
    }
  },

})