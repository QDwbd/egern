var tlist = {
  1: ["元旦", "2026-01-01", "新年到来万象新，愿君福寿常在心。事业腾飞皆如意，家和万事喜盈门。"],
  2: ["春节", "2026-02-17", "春风送暖福临门，家家户户庆团圆。欢声笑语声声响，迎来新岁乐开颜。"],
  3: ["元宵", "2026-03-03", "花灯辉映夜空明，元宵节庆乐盈门。愿你事事如愿意，家圆人圆梦圆心。"],
  4: ["清明", "2026-04-05", "清明时节思故人，缅怀先祖泪满巾。祭扫先人铭恩德，怀念永驻心中深。"],
  5: ["劳动", "2026-05-01", "春光明媚劳动节，辛勤耕耘得实惠。愿君幸福常相伴，事业兴旺展宏图。"],
  6: ["端午", "2026-06-19", "龙舟竞渡水花飞，粽香四溢飘千里。端午佳节共团圆，平安喜乐到人间。"],
  7: ["中秋", "2026-09-25", "明月高悬照大地，心随月圆思亲情。愿你此时共团圆，幸福安康如意行。"],
  8: ["国庆", "2026-10-01", "祖国大地山河壮，欢庆盛世庆华诞。愿国强民富安康，万民同庆乐无疆。"],
  9: ["元旦", "2027-01-01", "新春新岁喜盈门，愿君福运常如意。事业顺利步步高，家和万事安康地。"],
  10: ["春节", "2027-02-06", "红灯高挂喜气浓，辞旧迎新万象新。愿君春风得意行，岁岁年年皆安宁。"],
  11: ["元宵", "2027-02-20", "花灯璀璨照夜空，元宵团圆庆丰收。愿你事事如意顺，家人团聚乐悠悠。"],
  12: ["清明", "2027-04-05", "清明时节思亲人，远在他乡泪满巾。祭祖扫墓怀敬意，感恩先人永铭心。"],
  13: ["劳动", "2027-05-01", "春光明媚劳动节，辛勤耕耘得实惠。愿君幸福常相伴，事业兴旺展宏图。"],
  14: ["端午", "2027-06-09", "龙舟竞渡水花飞，粽香四溢飘千里。端午佳节共团圆，平安喜乐到人间。"],
  15: ["中秋", "2027-09-15", "明月高悬照大地，心随月圆思亲情。愿你此时共团圆，幸福安康如意行。"],
  16: ["国庆", "2027-10-01", "祖国大地山河壮，欢庆盛世庆华诞。愿国强民富安康，万民同庆乐无疆。"],
  17: ["元旦", "2028-01-01", "新年到来万象新，愿君福寿常在心。事业腾飞皆如意，家和万事喜盈门。"],
  18: ["春节", "2028-01-26", "春风送暖入屠苏，万象更新福满门。阖家欢乐迎新岁，欢天喜地庆团圆。"],
  19: ["元宵", "2028-02-09", "花灯高照夜如水，月圆人圆情意浓。团团圆圆心相系，喜庆佳节共此时。"],
  20: ["清明", "2028-04-04", "清明时节雨纷纷，思念故人泪满巾。扫墓祭祖凭哀思，感恩不忘报亲恩。"]
};
let tnow = new Date();
let tnowf =
  tnow.getFullYear() + "-" + (tnow.getMonth() + 1) + "-" + tnow.getDate();
function dateDiff(startDateString, endDateString) {
  var separator = "-";
  var startDates = startDateString.split(separator);
  var endDates = endDateString.split(separator);
  var startDate = new Date(startDates[0], startDates[1] - 1, startDates[2]);
  var endDate = new Date(endDates[0], endDates[1] - 1, endDates[2]);
  return parseInt(
    (endDate - startDate) / 1000 / 60 / 60 / 24
  ).toString();
}
function tnumcount(num) {
  let dnum = num;
  return dateDiff(tnowf, tlist[dnum][1]);
}
function now() {
  for (var i = 1; i <= Object.getOwnPropertyNames(tlist).length; i++) {
    if (Number(dateDiff(tnowf, tlist[i.toString()][1])) >= 0) {
      return i;
    }
  }
}
let nowlist = now();
function today(day) {
  let daythis = day;
  if (daythis == "0") {
    datenotice();
    return "🎉";
  } else {
    return daythis+"天";
  }
}
function datenotice() {
  if ($persistentStore.read("timecardpushed") != tlist[nowlist][1] && tnow.getHours() >= 6) {
    $persistentStore.write(tlist[nowlist][1], "timecardpushed");
    $notification.post("🎉今天是"+tlist[nowlist][1] + "日 " + tlist[nowlist][0],"", tlist[nowlist][2])
  } else if ($persistentStore.read("timecardpushed") == tlist[nowlist][1]) {
  }
}
function icon_now(num){
  if(num<=7 && num>3 ){
    return "hare"
  }else if(num<=3 && num>0){
    return "timer"
  }else if(num==0){
    return "gift"
  }else{
    return "tortoise"
  }
}
const calendar = {
    lunarInfo: [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
        0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
        0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
        0x06566, 0x0d4a0, 0x0ea50, 0x16a95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
        0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
        0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,
        0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
        0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,
        0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
        0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0,
        0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
        0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
        0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
        0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
        0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,
        0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0,
        0x092e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4,
        0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,
        0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160,
        0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252,
        0x0d520],
    solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    Gan: ["\u7532", "\u4e59", "\u4e19", "\u4e01", "\u620a", "\u5df1", "\u5e9a", "\u8f9b", "\u58ec", "\u7678"],
    Zhi: ["\u5b50", "\u4e11", "\u5bc5", "\u536f", "\u8fb0", "\u5df3", "\u5348", "\u672a", "\u7533", "\u9149", "\u620c", "\u4ea5"],
    Animals: ["\u9f20", "\u725b", "\u864e", "\u5154", "\u9f99", "\u86c7", "\u9a6c", "\u7f8a", "\u7334", "\u9e21", "\u72d7", "\u732a"],
    festival: {
        '1-1': {title: '元旦节'},
        '2-14': {title: '情人节'},
        '5-1': {title: '劳动节'},
        '5-4': {title: '青年节'},
        '6-1': {title: '儿童节'},
        '9-10': {title: '教师节'},
        '10-1': {title: '国庆节'},
        '12-25': {title: '圣诞节'},
        '3-8': {title: '妇女节'},
        '3-12': {title: '植树节'},
        '4-1': {title: '愚人节'},
        '5-12': {title: '护士节'},
        '7-1': {title: '建党节'},
        '8-1': {title: '建军节'},
        '12-24': {title: '平安夜'},
    },
    lFestival: {
        '12-30': {title: '除夕'},
        '1-1': {title: '春节'},
        '1-15': {title: '元宵节'},
        '2-2': {title: '龙抬头'},
        '5-5': {title: '端午节'},
        '7-7': {title: '七夕节'},
        '7-15': {title: '中元节'},
        '8-15': {title: '中秋节'},
        '9-9': {title: '重阳节'},
        '10-1': {title: '寒衣节'},
        '10-15': {title: '下元节'},
        '12-8': {title: '腊八节'},
        '12-23': {title: '北方小年'},
        '12-24': {title: '南方小年'},
    },
    getFestival() {
        return this.festival
    },
    getLunarFestival() {
        return this.lFestival
    },
    setFestival(param = {}) {
        this.festival = param
    },
    setLunarFestival(param = {}) {
        this.lFestival = param
    },
    solarTerm: ["\u5c0f\u5bd2", "\u5927\u5bd2", "\u7acb\u6625", "\u96e8\u6c34", "\u60ca\u86f0", "\u6625\u5206", "\u6e05\u660e", "\u8c37\u96e8", "\u7acb\u590f", "\u5c0f\u6ee1", "\u8292\u79cd", "\u590f\u81f3", "\u5c0f\u6691", "\u5927\u6691", "\u7acb\u79cb", "\u5904\u6691", "\u767d\u9732", "\u79cb\u5206", "\u5bd2\u9732", "\u971c\u964d", "\u7acb\u51ac", "\u5c0f\u96ea", "\u5927\u96ea", "\u51ac\u81f3"],
    sTermInfo: ['9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f',
        '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
        '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa',
        '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f',
        'b027097bd097c36b0b6fc9274c91aa', '9778397bd19801ec9210c965cc920e', '97b6b97bd19801ec95f8c965cc920f',
        '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd197c36c9210c9274c91aa',
        '97b6b97bd19801ec95f8c965cc920e', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2',
        '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bcf97c3598082c95f8e1cfcc920f',
        '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e',
        '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
        '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722',
        '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f',
        '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
        '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
        '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd07f595b0b6fc920fb0722',
        '9778397bd097c36b0b6fc9210c8dc2', '9778397bd19801ec9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f',
        '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',
        '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',
        '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bd07f1487f595b0b0bc920fb0722',
        '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
        '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
        '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
        '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722',
        '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
        '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
        '97b6b97bd19801ec9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
        '9778397bd097c36b0b6fc9210c91aa', '97b6b97bd197c36c9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722',
        '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',
        '97b6b7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',
        '9778397bd097c36b0b70c9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',
        '7f0e397bd097c35b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',
        '7f0e27f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
        '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
        '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
        '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',
        '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
        '97b6b7f0e47f531b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
        '9778397bd097c36b0b6fc9210c91aa', '97b6b7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
        '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '977837f0e37f149b0723b0787b0721',
        '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c35b0b6fc9210c8dc2',
        '977837f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',
        '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
        '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd',
        '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
        '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
        '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
        '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd',
        '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
        '977837f0e37f14998082b0723b06bd', '7f07e7f0e37f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
        '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721',
        '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5',
        '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f531b0b0bb0b6fb0722',
        '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
        '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',
        '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35',
        '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
        '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721',
        '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd',
        '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35',
        '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e37f14998083b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
        '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14898082b0723b02d5', '7f07e7f0e37f14998082b0787b0721',
        '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66aa89801e9808297c35', '665f67f0e37f14898082b0723b02d5',
        '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66a449801e9808297c35',
        '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
        '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',
        '7f07e7f0e47f531b0723b0b6fb0721', '7f0e26665b66a449801e9808297c35', '665f67f0e37f1489801eb072297c35',
        '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722'],
    nStr1: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d", "\u5341"],
    nStr2: ["\u521d", "\u5341", "\u5eff", "\u5345"],
    nStr3: ["\u6b63", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d", "\u5341", "\u51ac", "\u814a"],
    lYearDays: function (y) {
        let i, sum = 348;
        for (i = 0x8000; i > 0x8; i >>= 1) {
            sum += (this.lunarInfo[y - 1900] & i) ? 1 : 0;
        }
        return (sum + this.leapDays(y));
    },
    leapMonth: function (y) {
        return (this.lunarInfo[y - 1900] & 0xf);
    },
    leapDays: function (y) {
        if (this.leapMonth(y)) {
            return ((this.lunarInfo[y - 1900] & 0x10000) ? 30 : 29);
        }
        return (0);
    },
    monthDays: function (y, m) {
        if (m > 12 || m < 1) {
            return -1
        }
        return ((this.lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29);
    },
    solarDays: function (y, m) {
        if (m > 12 || m < 1) {
            return -1
        }
        const ms = m - 1;
        if (ms === 1) {
            return (((y % 4 === 0) && (y % 100 !== 0) || (y % 400 === 0)) ? 29 : 28);
        } else {
            return (this.solarMonth[ms]);
        }
    },
    toGanZhiYear: function (lYear) {
        var ganKey = (lYear - 3) % 10;
        var zhiKey = (lYear - 3) % 12;
        if (ganKey === 0) ganKey = 10;
        if (zhiKey === 0) zhiKey = 12;
        return this.Gan[ganKey - 1] + this.Zhi[zhiKey - 1];
    },
    toAstro: function (cMonth, cDay) {
        const s = "\u6469\u7faf\u6c34\u74f6\u53cc\u9c7c\u767d\u7f8a\u91d1\u725b\u53cc\u5b50\u5de8\u87f9\u72ee\u5b50\u5904\u5973\u5929\u79e4\u5929\u874e\u5c04\u624b\u6469\u7faf";
        const arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
        return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "\u5ea7";
    },
    toGanZhi: function (offset) {
        return this.Gan[offset % 10] + this.Zhi[offset % 12];
    },
    getTerm: function (y, n) {
        if( y < 1900 || y > 2100 || n < 1 || n > 24) {
            return -1;
        }
        const _table = this.sTermInfo[y - 1900];
        const _calcDay = []
        for (let index = 0; index < _table.length; index += 5) {
            const chunk = parseInt('0x' + _table.substr(index, 5)).toString()
            _calcDay.push(
              chunk[0],
              chunk.substr(1, 2),
              chunk[3],
              chunk.substr(4, 2)
            )
        }
        return parseInt(_calcDay[n - 1]);
    },
    toChinaMonth: function (m) {
        if (m > 12 || m < 1) {
            return -1
        }
        let s = this.nStr3[m - 1];
        s += "\u6708";
        return s;
    },
    toChinaDay: function (d) {
        let s;
        switch (d) {
            case 10:
                s = '\u521d\u5341';
                break;
            case 20:
                s = '\u4e8c\u5341';
                break;
            case 30:
                s = '\u4e09\u5341';
                break;
            default :
                s = this.nStr2[Math.floor(d / 10)];
                s += this.nStr1[d % 10];
        }
        return (s);
    },
    getAnimal: function (y) {
        return this.Animals[(y - 4) % 12]
    },
    solar2lunar: function (yPara, mPara, dPara) {
        let y = parseInt(yPara);
        let m = parseInt(mPara);
        let d = parseInt(dPara);
        if (y < 1900 || y > 2100) {
            return -1;
        }
        if (y === 1900 && m === 1 && d < 31) {
            return -1;
        }
        let objDate;
        if (!y) {
            objDate = new Date();
        } else {
            objDate = new Date(y, parseInt(m) - 1, d);
        }
        let i, leap = 0, temp = 0;
        y = objDate.getFullYear();
        m = objDate.getMonth() + 1;
        d = objDate.getDate();
        let offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
        for (i = 1900; i < 2101 && offset > 0; i++) {
            temp = this.lYearDays(i);
            offset -= temp;
        }
        if (offset < 0) {
            offset += temp;
            i--;
        }
        let isTodayObj = new Date(),
            isToday = false;
        if (isTodayObj.getFullYear() === y && isTodayObj.getMonth() + 1 === m && isTodayObj.getDate() === d) {
            isToday = true;
        }
        let nWeek = objDate.getDay(),
            cWeek = this.nStr1[nWeek];
        if (nWeek === 0) {
            nWeek = 7;
        }
        const year = i;
        leap = this.leapMonth(i);
        let isLeap = false;
        for (i = 1; i < 13 && offset > 0; i++) {
            if (leap > 0 && i === (leap + 1) && isLeap === false) {
                --i;
                isLeap = true;
                temp = this.leapDays(year);
            } else {
                temp = this.monthDays(year, i);
            }
            if (isLeap === true && i === (leap + 1)) {
                isLeap = false;
            }
            offset -= temp;
        }
        if (offset === 0 && leap > 0 && i === leap + 1) {
            if (isLeap) {
                isLeap = false;
            } else {
                isLeap = true;
                --i;
            }
        }
        if (offset < 0) {
            offset += temp;
            --i;
        }
        const month = i;
        const day = offset + 1;
        const sm = m - 1;
        const gzY = this.toGanZhiYear(year);
        const firstNode = this.getTerm(y, (m * 2 - 1));
        const secondNode = this.getTerm(y, (m * 2));
        let gzM = this.toGanZhi((y - 1900) * 12 + m + 11);
        if (d >= firstNode) {
            gzM = this.toGanZhi((y - 1900) * 12 + m + 12);
        }
        let isTerm = false;
        let Term = null;
        if (firstNode === d) {
            isTerm = true;
            Term = this.solarTerm[m * 2 - 2];
        }
        if (secondNode === d) {
            isTerm = true;
            Term = this.solarTerm[m * 2 - 1];
        }
        const dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
        const gzD = this.toGanZhi(dayCyclical + d - 1);
        const astro = this.toAstro(m, d);
        const solarDate = y + '-' + m + '-' + d;
        const lunarDate = year + '-' + month + '-' + day;
        const festival = this.festival;
        const lFestival = this.lFestival;
        const festivalDate = m + '-' + d;
        let lunarFestivalDate = month + '-' + day;
        if (month === 12 && day === 29 && this.monthDays(year, month) === 29) {
            lunarFestivalDate = '12-30';
        }
        return {
            date: solarDate,
            lunarDate: lunarDate,
            festival: festival[festivalDate] ? festival[festivalDate].title : null,
            lunarFestival: lFestival[lunarFestivalDate] ? lFestival[lunarFestivalDate].title : null,
            'lYear': year,
            'lMonth': month,
            'lDay': day,
            'Animal': this.getAnimal(year),
            'IMonthCn': (isLeap ? "\u95f0" : '') + this.toChinaMonth(month),
            'IDayCn': this.toChinaDay(day),
            'cYear': y,
            'cMonth': m,
            'cDay': d,
            'gzYear': gzY,
            'gzMonth': gzM,
            'gzDay': gzD,
            'isToday': isToday,
            'isLeap': isLeap,
            'nWeek': nWeek,
            'ncWeek': "\u661f\u671f" + cWeek,
            'isTerm': isTerm,
            'Term': Term,
            'astro': astro
        };
    },
    lunar2solar: function (y, m, d, isLeapMonth) {
        y = parseInt(y)
        m = parseInt(m)
        d = parseInt(d)
        isLeapMonth = !!isLeapMonth;
        const leapOffset = 0;
        const leapMonth = this.leapMonth(y);
        const leapDay = this.leapDays(y);
        if (isLeapMonth && (leapMonth !== m)) {
            return -1;
        }
        if (y === 2100 && m === 12 && d > 1 || y === 1900 && m === 1 && d < 31) {
            return -1;
        }
        const day = this.monthDays(y, m);
        let _day = day;
        if (isLeapMonth) {
            _day = this.leapDays(y, m);
        }
        if (y < 1900 || y > 2100 || d > _day) {
            return -1;
        }
        let offset = 0;
        let i;
        for (i = 1900; i < y; i++) {
            offset += this.lYearDays(i);
        }
        let leap = 0, isAdd = false;
        for (i = 1; i < m; i++) {
            leap = this.leapMonth(y);
            if (!isAdd) {
                if (leap <= i && leap > 0) {
                    offset += this.leapDays(y);
                    isAdd = true;
                }
            }
            offset += this.monthDays(y, i);
        }
        if (isLeapMonth) {
            offset += day;
        }
        const strap = Date.UTC(1900, 1, 30, 0, 0, 0);
        const calObj = new Date((offset + d - 31) * 86400000 + strap);
        const cY = calObj.getUTCFullYear();
        const cM = calObj.getUTCMonth() + 1;
        const cD = calObj.getUTCDate();
        return this.solar2lunar(cY, cM, cD);
    }
};
var lunar = calendar.solar2lunar();
var nowsolar = lunar.cMonth +  '月' + lunar.cDay +'日（'+lunar.astro+'）';
var nowlunar = lunar.IMonthCn+lunar.IDayCn+' '+lunar.gzYear+lunar.gzMonth+lunar.gzDay+' '+lunar.Animal+'年';
function title_random(num){
  let r = Math.floor((Math.random()*20)+1);
  let dic = {
    1: "夜月一帘幽梦，春风十里柔情",
    2: "桃花一簇开无主，可爱深红爱浅红",
    3: "暮云收尽溢清寒，银汉无声转玉盘",
    4: "花谢花飞花满天，红消香断有谁怜",
    5: "柳垂垂翠影如梦，花落落红满地愁",
    6: "细雨轻风愁绪浓，梦回何处共谁同",
    7: "岁月如梭人如梦，花谢花开空余恨",
    8: "落花无言人自泪，空余香气寄长天",
    9: "天阶夜色凉如水，卧看牵牛织女星",
    10: "梦中徐来旧游地，想得愁眉也自随",
    11: "月上重城翠影长，碧海青天夜夜心",
    12: "衣带渐宽终不悔，为伊消得人憔悴",
    13: "深知身在情长在，怅望千秋一合照",
    14: "小楼一夜听春雨，深巷明朝卖杏花",
    15: "谁教孤雁奈何天，一片愁心上断肠",
    16: "花自飘零水自流，一种相思，两处闲愁",
    17: "此情无计可消除，才下眉头，却上心头",
    18: "红藕香残玉簟秋，轻解罗裳，独上兰舟",
    19: "云中谁寄锦书来？雁字回时，月满西楼",
    20: "寂寞空庭春欲晚，梨花满地不开门"
};
  return num==0?"节日快乐，万事大吉":dic[r]
}
$done({
  title: title_random(tnumcount(Number(nowlist))),
  icon: icon_now(tnumcount(Number(nowlist))),
  content: 
    `⭐️ 星期: ${lunar.ncWeek}\n` +
    `🌝 公历: ${nowsolar}\n` +
    `🌛 农历: ${lunar.IMonthCn}${lunar.IDayCn} (${lunar.gzYear}年, ${lunar.Animal}年)\n` +
    `⛩ 节气: ${lunar.isTerm ? lunar.Term : '无'}\n` +
    `🌸 公历节日: ${lunar.festival || '无'}\n` +
    `🀄️ 农历节日: ${lunar.lunarFestival || '无'}\n` +
    `🌕 ${tlist[nowlist][0]}: ${today(tnumcount(Number(nowlist)))}\n` +
    `🌑 ${tlist[Number(nowlist) + 1][0]}: ${tnumcount(Number(nowlist) + 1)}天\n`
})
