export const config = {
  USERS: [
    {
      // 想要发送的人的名字
      name: "最挣钱的大志",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "omdNB509gtzp_KdXXcmzA6N9k_Ow",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "wx893e804937d2b647",
      // 所在省份
      province: "河南",
      // 所在城市
      city: "南阳",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://wangxinleo.cn"
    }, 
    {
      name: "最可爱的佳佳", 
      id: "omdNB5yfc2xR0uMN4x5fYi429-yY",
      useTemplateId: "wx893e804937d2b647",
      province: "河南",
      city: "南阳",
      openUrl: "https://wangxinleo.cn"
    }, 
  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "A4lEONZgcCiUMnL-Vh6CuOKVTqyUEMg1ITzwsl-hDLg",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "土豆",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "omdNB509gtzp_KdXXcmzA6N9k_Ow",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "河南",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "南阳",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"type": "生日", "name": "最可爱的佳佳", "year": "1998", "date": "12-01"},
    {"type": "节日", "name": "相恋", "year": "2018", "date": "06-25"},
    {"type": "生日", "name": "最赚钱的志志", "year": "1997", "date": "01-13"},
    {"type": "节日", "name": "相识", "year": "2018", "date": "06-04"},
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "相识", date: "2018-06-04"},
    // 结婚纪念日
    {"keyword": "相恋", date: "2018-06-25"},
    // 退伍日, 不用可以删掉
    //{"keyword": "ex_day", date: "2022-08-31"},
    // sakana日
    // {"keyword": "sakana_day", date: "2022-01-06"},
    // ... 
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    //{"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
      "我不知道我还会再遇到谁，我也不知道我将要面对谁，但是我一看到你就觉得人间值得。"
"你知道什么叫意外吗？就是我从没想过会遇见你，但我遇见了，我从没想过会爱你，但我爱了。"
"如果想念有声音，恐怕早已震耳欲聋。"
"无论发生什么事，我都会像现在一样爱你，直到永远。"
"爱你就是这么莫名其妙，就是这么义无返顾，我知道我不会是你今生的唯一，但你却是我一生的最爱！"
"开心的时候想亲你，不开心的时候想被你亲。"
"我爱你，不是因为你是一个怎样的人，而是因为我喜欢与你在一起时的感觉。"
"我们的爱情，希望一直没有句号"
"从前，眼前人是心上人。以后，心上人是枕边人。"
"喜欢你，像云漂泊九万里，不曾歇息。喜欢你，像风走了八千里，不问归期。"

    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""


}
