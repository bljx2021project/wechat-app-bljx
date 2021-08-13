Page({
  data: {
    name: '姓名   ',
    id: '学号   ',
    class: '班级   ',
    phone: '手机号   ',
    brand: '电脑品牌   ',
    modelnumber: '电脑型号   ',
    description: '故障描述   ',
    fileList: [],
    steps: [
      {
        text: '选择身份',
        desc: '',
      },
      {
        text: '填写信息',
        desc: '',
      },
      {
        text: '申请成功',
        desc: '',
      },
    ],
    active: ['1'],
  },

  onChange(event) {
    this.setData({
      radio: event.detail,
    });
  },
  afterRead(event) {
    const { file } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
      filePath: file.url,
      name: 'file',
      formData: { user: 'test' },
      success(res) {
        // 上传完成需要更新 fileList
        const { fileList = [] } = this.data;
        fileList.push({ ...file, url: res.data });
        this.setData({ fileList });
      },
    });
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
 
})