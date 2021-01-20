// pages/richtext/richtext.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: undefined,
    content: "<p>	极光大数据发布《2018年K12教育用户群体研究报告》，以幼儿园到高三学生的家长群体为研究对象，从K12教育态度、K12教育投入、K12培训班偏好、K12教育app偏好、K12教育用户画像等维度揭秘这一人群的特点。</p><p>	<span style= \"color:#000080; \"><strong>核心观点：</strong></span></p><p>	<span style= \"color:#000080; \"><strong>1.分数不再是王道，K12教育阶段的父母更看重孩子的心理健康、综合素质和道德修养</strong></span></p><p>	<span style= \"color:#000080; \"><strong>2.兴趣班和学习辅导班受K12教育用户欢迎，请家教热度相对低</strong></span></p><p>	<span style= \"color:#000080; \"><strong>3.数学和英语是最主要的培训班科目需求，过半家长更偏爱面对面的线下教学</strong></span></p><p>	<span style= \"color:#000080; \"><strong>4.超九成家长更愿选择中小规模的培训班，其中6-15人中班规模最受欢迎</strong></span></p><p>	<span style= \"color:#000080; \"><strong>5.2小时左右的课时、一周1-2次是家长们更倾向的培训班课时和频率</strong></span></p><p>	<span style= \"color:#000080; \"><strong>6.亲友同事介绍、教育机构的宣传资料和网站是家长们获取培训班信息的主要渠道</strong></span></p><p>	<span style= \"color:#000080; \"><strong>7.选择培训班时，家长们更看重教师水平、上课地点和课程安排</strong></span></p><p>	<span style= \"color:#000080; \"><strong>8.作业答疑类app最受家长欢迎，其次为家长社区类app</strong></span></p><p>	本报告中所称K12教育用户为幼儿园到高三学生的家长群体。本次报告共回收有效样本1019份，其中男性占比52.30%，女性占比47.70%。</p><center>	<img alt= \" \" height= \"1574 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114464377430024.gif \" width= \"1888 \" /></center><p>	一、K12教育态度</p><p>	分数不再是王道。根据极光大数据的调研结果显示，K12教育阶段的父母更看重孩子的心理健康、综合素质及道德修养，反而不太在意成绩分数。幼儿园阶段父母更看重兴趣培养;小学阶段父母更看重学习方法、兴趣培养;初中阶段父母更看重成绩分数;高中阶段看重心理健康、综合素质。</p><center>	<img alt= \" \" height= \"1960 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114465641262064.gif \" width= \"1834 \" /></center><p style= \"text-align: center; \">	<span style= \"color:#808080; \"><em>根据极光大数据的调研结果显示，K12教育阶段的父母们在教育观念上整体比较一致。相比于父亲，母亲们更注重孩子心理健康、学习方法及社交能力方面的教育。</em></span></p><center>	<img alt= \" \" height= \"1954 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114470901915930.gif \" width= \"1822 \" /></center><p style= \"text-align: center; \">	<em><span style= \"color:#808080; \">根据极光大数据的调研结果显示，权威型父母相比于其他类型父母更注重孩子综合素质和学习方法的教育，这可能是因为权威型父母更在意孩子的全面发展;而专制型父母相比于其他类型的父母更不注重孩子体育锻炼方面的教育，这或许与专制型父母会过于管束孩子的体育娱乐有关。</span></em></p><center>	<img alt= \" \" height= \"2064 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114472258661910.gif \" width= \"1866 \" /></center><p style= \"text-align: center; \">	<span style= \"color:#808080; \"><em>根据极光大数据的调研结果显示，幼儿园阶段，父母对孩子的学习成绩&ldquo;非常满意&rdquo;占比均高于其他阶段;相比于其他阶段，高中阶段孩子的父母对孩子学习成绩&ldquo;比较不满意&rdquo;占比高。总体而言，父母对孩子学习成绩&ldquo;比较满意&rdquo;的比例最高，为39.14%，有14.34%的父母对孩子学习成绩不满意。</em></span></p><center>	<img alt= \" \" height= \"1426 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114473472687500.gif \" width= \"1916 \" /></center><p style= \"text-align: center; \">	<span style= \"color:#808080; \"><em>根据极光大数据的调研结果显示，孩子学习排名越靠前，父母对孩子越满意;相应地，孩子学习排名越靠后，父母对孩子越不满意。对于排名中上的孩子，只有六成左右的父母感到满意;对于排名倒数的孩子，除了超半数的父母感到非常不满意外，也有21.43%的父母态度无所谓。</em></span></p><center>	<img alt= \" \" height= \"1616 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114474629567209.gif \" width= \"1880 \" /></center><p>	二、K12教育投入</p><p>	根据极光大数据的调研结果显示，父母对孩子学习的参与度普遍高，对孩子学习参与度低的父母占全部样本量的12.36%;随着孩子升学，父母对孩子学习的时间投入有下降趋势，或因初高中孩子住校或课业逐渐超出父母可辅导范围所致。</p><center>	<img alt= \" \" height= \"1514 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114475933637734.gif \" width= \"1994 \" /></center><p style= \"text-align: center; \">	<em><span style= \"color:#808080; \">根据极光大数据的调研结果显示，超五成的父母为孩子报过兴趣班，亦有近五成的父母给孩子报过学习辅导班；选择投入学习教育工具类（使用学习辅导类app、购买学习机等）的父母占比近三成；而&ldquo;请家教&rdquo;已是极少数父母的选择，或是因为互联网教育的发展带来的结果。</span></em></p><center>	<img alt= \" \" height= \"1716 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114480961696990.gif \" width= \"1630 \" /></center><p style= \"text-align: center; \">	<span style= \"color:#808080; \"><em>根据极光大数据的调研结果显示，小学阶段的课外教育更倾向于兴趣班，而初高中阶段则对兴趣班的投入低于全体样本，或因课业加重而逐渐放弃兴趣班。相比于全体样本，初中阶段对课外学习班/辅导班的倾向高，同时也高于小学和高中阶段。得注意的是，在全体样本对&ldquo;请家教&rdquo;一项投入普遍低的情况下，高中阶段孩子是&ldquo;请家教&rdquo;的主力军。</em></span></p><center>	<img alt= \" \" height= \"1894 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114482473913270.gif \" width= \"1890 \" /></center><p style= \"text-align: center; \">	<span style= \"color:#808080; \"><em>根据极光大数据的调研结果显示，约有四分之一的家长不打算给孩子报培训班。不报班的原因主要有三个：一是孩子学习好，用不着;二是担心辅导效果不好，帮不上;三是孩子不愿参加，由着去。19.20%的家长对培训班价格敏感，因价格高而选择不报班。</em></span></p><center>	<img alt= \" \" height= \"1682 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114483532977543.gif \" width= \"1774 \" /></center><p>	三、K12教育培训班偏好</p><p>	根据极光大数据的调研结果显示，父母为孩子报培训班最主要的原因在于加强孩子学习方法和学习兴趣，希望孩子全面发展。21.20%的家长希望培训班能够提高孩子学习成绩，同时有17.82%的家长希望孩子通过参加培训班补强弱势科目;只有8.58%的家长希望报培训班能够减少自己在孩子学习上花的时间和精力。</p><center>	<img alt= \" \" height= \"1658 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114484544785277.gif \" width= \"1802 \" /></center><p style= \"text-align: center; \">	<span style= \"color:#808080; \"><em>根据极光大数据的调研结果显示，超半数父母在选择培训班时，会选择教学类和兴趣类。其中初中阶段对教学类培训班的倾向高于全体样本;相比于全体样本，小学阶段更倾向于兴趣类培训班;初高中阶段则对考试类培训班需求较高，高中阶段尤甚。</em></span></p><center>	<img alt= \" \" height= \"1802 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114485583945941.gif \" width= \"1988 \" /></center><p style= \"text-align: center; \">	<em><span style= \"color:#808080; \">根据极光大数据的调研结果显示，小学生最弱势的科目是语文，数学占比超三成，英语占比近三成;初中生最弱势的科目是数学，数学和英语的占比差不多;高中生最弱势的科目数学和英语，物理和化学的占比也都接近三成。</span></em></p><center>	<img alt= \" \" height= \"1878 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114490560473578.gif \" width= \"1374 \" /></center><p style= \"text-align: center; \">	<span style= \"color:#808080; \"><em>根据极光大数据的调研结果显示，数学是培训班报班需求最大的科目，小、初、高各阶段均过半数，其中初中阶段需求最大，占比达69.28%;英语紧随数学之后，也具有广泛的培训市场需求，小、初、高各阶段的占比也均超五成;高中物理或因难度较大，也有超四成的培训需求。</em></span></p><center>	<img alt= \" \" height= \"1904 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114491614086854.gif \" width= \"1606 \" /></center><p style= \"text-align: center; \">	<span style= \"color:#808080; \"><em>根据极光大数据的调研结果显示，过半数的父母更倾向于面对面的线下教学形式，可见线下教育的优势还是线上教育无法比拟的;有20.16%的父母选择线上即时教学，远高于占比仅有3.64%的线上视频课程;有13.13%的父母选择&ldquo;&ldquo;双师课堂&rdquo;。</em></span></p><center>	<img alt= \" \" height= \"1830 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114492671082674.gif \" width= \"1852 \" /></center><p style= \"text-align: center; \">	<span style= \"color:#808080; \"><em>根据极光大数据的调研结果显示，超九成父母更倾向中小规模的培训班，其中43.17%的父母倾向6-15人的中班，是占比最高的人群;13.78%的父母倾向一对一的培训班，而高中阶段孩子的父母在这一选项上的占比更高，可见这部分父母对于孩子在培训班上的金钱投入意愿或更强。相比于全体样本，初中阶段孩子的父母更偏好16-30人的大规模培训班。</em></span></p><center>	<img alt= \" \" height= \"1910 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114493724286553.gif \" width= \"1818 \" /></center><p style= \"text-align: center; \">	<span style= \"color:#808080; \"><em>根据极光大数据的调研结果显示，2小时左右的课时是父母们最倾向的选择，但对于线上课程，1小时课时和2小时课时的选择者不相上下，占比分别为37.97%、36.54%;超七成父母希望孩子一周上1-2次培训班，以绝对优势超出其他频次选项。</em></span></p><center>	<img alt= \" \" height= \"1968 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114495349137147.gif \" width= \"1654 \" /></center><p style= \"text-align: center; \">	<span style= \"color:#808080; \"><em>根据极光大数据的调研结果显示，超六成父母通过亲友同事的介绍获取培训班信息，占比61.25%;教育机构的官方渠道(官方资料和网站)和学校渠道也较为受父母们关注;其他线上渠道(如网络社交平台、网络搜索、移动网络广告等)相对不受父母们关注，占比均不足两成。</em></span></p><center>	<img alt= \" \" height= \"1912 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114501376126581.gif \" width= \"1336 \" /></center><p style= \"text-align: center; \">	<span style= \"color:#808080; \"><em>根据极光大数据的调研结果显示，父母们为孩子选择培训班时主要考虑教师水平、上课地点及课程安排，其中教师水平最受关注，占比64.76%；22.24%的父母在选择培训班时更为关注价格;机构口碑和名气反倒不太被看重，占比不足两成，可见在孩子的教育上，父母们不看广告看成效。</em></span></p><center>	<img alt= \" \" height= \"1722 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114502524732923.gif \" width= \"1654 \" /></center><p style= \"text-align: center; \">	<span style= \"color:#808080; \"><em>根据极光大数据的调研结果显示，58.26%的父母希望孩子通过培训班掌握更好的学习方法以提高学习效率，希望培训机构&ldquo;授人以渔&rdquo;。相比于全体样本，初高中阶段父母更看重培训班能够帮助孩子提高成绩，这可能是因为初高中阶段的孩子面临着相对重的升学压力。</em></span></p><center>	<img alt= \" \" height= \"1792 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114503523830513.gif \" width= \"2006 \" /></center><p style= \"text-align: center; \">	<span style= \"color:#808080; \"><em>根据极光大数据的调研结果显示，对于打算/已经给孩子报培训班的父母来说，他们愿意平均每年支付大约3759元人民币在孩子的培训班上;随着孩子的升学，父母每年愿意花在培训班上的费用逐渐增加，到孩子的高中阶段，他们愿意平均每年支付约5175元人民币。</em></span></p><center>	<img alt= \" \" height= \"1816 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114504547477453.gif \" width= \"1886 \" /></center><p>	四、K12教育app偏好</p><p>	根据极光大数据的调研结果显示，87.78%的父母或其孩子使用过学习类app，其中，作业答疑类app以68.17%的高占比俘获这部分父母和孩子的芳心;家长社区类app出现的时间不久，但迅速在父母群体中占有一席之地，以34.80%的比例居于第二名;家教类app和学习视频类app相对占比较低;题库类app在高中阶段的孩子或其父母中占比明显高于总体样本，或因高中阶段学生更注重题海战术。</p><center>	<img alt= \" \" height= \"1886 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114505554162891.gif \" width= \"1960 \" /></center><p style= \"text-align: center; \">	<span style= \"color:#808080; \"><em>根据极光大数据的调研结果显示，《一起小学学生》是父母们最偏好的教育学习app，另外《作业盒子小学学生端》、《爱作业》、《作业帮》也均在top 10榜单中，可见作业类app广受欢迎;《家长通》、《家长帮》双双上榜，针对家长的应用亦有较大的市场需求。</em></span></p><center>	<img alt= \" \" height= \"1842 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114510571137571.gif \" width= \"1786 \" /></center><p style= \"text-align: center; \">	<span style= \"color:#808080; \"><em>根据极光大数据的调研结果显示，家长或孩子使用教育学习类app最主要的诉求是提高学习效率、增强学习趣味性、提高成绩，占比分别为55.73%、48.57%及42.95%;有22.69%的家长希望从学习类app中获取学习资料，但对于名师、名校信息则无甚要求。</em></span></p><center>	<img alt= \" \" height= \"1846 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114511689740939.gif \" width= \"1730 \" /></center><p>	五、K12教育用户画像</p><p>	根据极光大数据的调研结果显示，多数父母属于权威型的教养风格，这类父母对孩子的关爱程度和管束程度均较高;值得注意的是，有20.90%的父母属于放纵型教养风格，这样的父母对孩子关爱有余，管束不足。</p><center>	<img alt= \" \" height= \"1978 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114512625955096.gif \" width= \"1832 \" /></center><p style= \"text-align: center; \">	<span style= \"color:#808080; \"><em>根据极光大数据的调研结果显示，已经/愿意报培训班的的家庭，平均月收入比全体样本的平均月收入高。</em></span></p><center>	<img alt= \" \" height= \"1810 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114513573056528.gif \" width= \"1842 \" /></center><p style= \"text-align: center; \">	<span style= \"color:#808080; \"><em>根据极光大数据的调研结果显示，本科学历的K12教育用户最多，占比28.36%;自由职业者占比最高，单职工家庭占比近半。</em></span></p><center>	<img alt= \" \" height= \"1950 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114514935331129.gif \" width= \"1776 \" /></center><p style= \"text-align: center; \">	<span style= \"color:#808080; \"><em>根据极光大数据的调研结果显示，K12教育用户是一群热爱音乐、美食和旅游的潮父母。</em></span></p><center>	<img alt= \" \" height= \"1668 \" src= \"https://youcai-bos.felink.com.cn/test/res/image/2018110114520133714965.gif \" width= \"1574 \" /></center>",
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