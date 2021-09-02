Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeName: '0',
    activeNames: ['0'],
    activeNames2: ['0'],
    activeNames3: ['0'],
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