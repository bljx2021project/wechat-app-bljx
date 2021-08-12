// 获取应用实例
const app = getApp()

const inf = {
  身份: ['老师', '学生'],
  学院: ['保护区学院', '材料学院', '草原学院', '工学院', '环境学院',
        '经管学院', '理学院', '林学院', '马克思主义学院', '人文学院',
        '生物学院', '水保学院', '外语学院', '信息学院', '艺术学院','园林学院']
};

Page({
  data: {
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
    activeNames: ['1'],

    columns: [
      {
        values: inf['身份'],
        className: 'column1',
      },
      {
        values: inf['学院'],
        className: 'column2',
      },
    ],
    curSelect:[]
  },
  // 事件处理函数
  onChange_collapse(event) {
    this.setData({
      activeNames: event.detail,
    });
  },
  onChange_picker(event) {
    const { picker, value, index } = event.detail;
    this.data.curSelect = value;
  },
  goFrom() {
    wx.navigateTo({
      url: '../form/form'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
})
