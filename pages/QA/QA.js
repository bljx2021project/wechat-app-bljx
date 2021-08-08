Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{id:1}],
    isA:true,
    isB: true,
    isC: true,
    isD: true,
  },

  aa: function() {
    this.setData({
      isA: !this.data.isA,
    })
  },

  bb: function() {
    this.setData({
      isB: !this.data.isB,
    })
  },
  cc: function() {
    this.setData({
      isC: !this.data.isC,
    })
  },

  dd: function() {
    this.setData({
      isD: !this.data.isD,
    })
  },
  toShowItem(e) {
    let that = this;
    let id = e.currentTarget.dataset.id,
      show = e.currentTarget.dataset.show;
    that.data.list.forEach(function (v) {
      if (v.id == id) {
        v.show = !show;//这里污染原始数组数据
      }
    })
    //利用污染，对列表设置值
    this.setData({
      list: this.data.list
    })
  },
go: function()
{
  wx.navigateTo({
    url: "../index/index"
  })
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

  }
})