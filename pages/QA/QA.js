Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeName: '1',
    activeNames: ['1'],
    activeNames2: ['1'],
    activeNames3: ['1'],
  },
  onChange(event) {
    this.setData({
      activeName: event.detail,
    });
  },
  onChange2(event) {
    this.setData({
      activeNames: event.detail,
    });
  },
  onChange3(event) {
    this.setData({
      activeNames2: event.detail,
    });
  },
  onChange4(event) {
    this.setData({
      activeNames3: event.detail,
    });
  }

})