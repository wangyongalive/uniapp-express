// 使用 Mock
var Mock = require("mockjs");
var express = require("express");
var router = express.Router();

/* /hot/tabs */
router.get("/hot/tabs", function (req, res, next) {
  res.json({
    success: true,
    code: 10000,
    data: {
      list: [
        {
          _id: "608b70ecf9d99a7594662466",
          id: "0",
          label: "热榜",
        },
        {
          _id: "608b70ecf9d99a7594662467",
          id: "1",
          label: "前端",
        },
        {
          _id: "608b70ecf9d99a7594662468",
          id: "2",
          label: "JAVA",
        },
        {
          _id: "608b70ecf9d99a7594662469",
          id: "3",
          label: "PHP",
        },
        {
          _id: "608b70ecf9d99a759466246a",
          id: "4",
          label: "Python",
        },
        {
          _id: "608b70ecf9d99a759466246b",
          id: "5",
          label: "程序人生",
        },
        {
          _id: "608b70ecf9d99a759466246c",
          id: "6",
          label: "数据库",
        },
      ],
    },
    message: "执行成功",
  });
});

/* /hot/list */
router.get("/hot/list", function (req, res, next) {
  const id = req.query.type;
  const Random = Mock.Random;

  let i = 10;
  const arr = [];
  while (i--) {
    const template = {
      "_id|+1": "0",
      avatarurl: Random.image("20x20"),
      user_name: Random.cname(),
      created_at: Random.datetime("yyyy-MM-dd"),
      title: Random.ctitle(3, 5),
      nickname: Random.cname(),
      desc: Random.csentence(12, 25),
      type: "0",
      summary: Random.csentence(12, 25),
      shown_time: "1619435402",
      avatar: Random.image("20x20"),
      typeLabel: "home",
      views: Random.natural(0, 1000),
    };
    arr.push(Mock.mock(template));
  }

  res.json({
    success: true,
    code: 10000,
    data: {
      list: arr,
    },
    message: "执行成功",
  });
});

/* /search/default-text */
router.get("/search/default-text", function (req, res, next) {
  res.json({
    success: true,
    code: 10000,
    data: {
      defaultText: "mysql",
    },
    message: "执行成功",
  });
});

// /search/hot-list
router.get("/search/hot-list", function (req, res, next) {
  res.json({
    success: true,
    code: 10000,
    data: {
      list: [
        {
          id: "0",
          label: "python人工智能",
        },
        {
          id: "1",
          label: "程序员离职小技巧",
        },
        {
          id: "2",
          label: "java集合常见面试题",
        },
        {
          id: "3",
          label: "Linux 常用命令大全",
        },
        {
          id: "4",
          label: "spring",
        },
        {
          id: "5",
          label: "程序员如何找对象",
        },
        {
          id: "6",
          label: "前端常用技术",
        },
        {
          id: "7",
          label: "程序员如何接私活",
        },
      ],
    },
  });
});

// /search
router.get("/search", function (req, res, next) {
  // setTimeout(() => {
  res.json({
    success: true,
    code: 10000,
    data: {
      list: [
        {
          pic: "",
          type: "blog",
          body: "<em>uniapp</em>快速入门 一、uni-app简单介绍 **什么是uni-app？** uni-app的优点 二、如何创建<em>uniapp</em>项目 1、安装HBuilderX 2、如何在微信小程序里面跑起来 3、官方提示 三、学习框架 1、项目结构介绍 2、开发规范 2.1 uni-...",
          author_label: "作者",
          id: "110665347",
          blogId: "9999649",
          create_time: "1607083188000",
          level: "0",
          author: "weixin_47592687",
          author_id: "9999649",
          description:
            "<em>uniapp</em>快速入门一、uni-app简单介绍**什么是uni-app？**uni-app的优点二、如何创建<em>uniapp</em>项目1、安装HBuilderX2、如何在微信小程序里面跑起来3、官方提示三、学习框架1、项目结构介绍2、开发规范2.1 uni-app 约定的...",
          created_at: "2020-12-04 19:59:48",
          title: "<em>uniapp</em>快速入门",
          nickname: "祎祎呀",
          digest:
            "<em>uniapp</em>快速入门一、uni-app简单介绍**什么是uni-app？**uni-app的优点二、如何创建<em>uniapp</em>项目1、安装HBuilderX2、如何在微信小程序里面跑起来3、官方提示三、学习框架1、项目结构介绍2、开发规范2.1 uni-app 约定的...",
          updateTime: "2020-12-04 19:59:48",
          url: "https://blog.csdn.net/weixin_47592687/article/details/110665347?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522161943829416780255238009%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=161943829416780255238009&biz_id=0&utm_medium=distribute.wap_search_result.none-task-blog-2~all~top_positive~default-1-110665347.wap_first_rank_v2_rank_v29&utm_term=uniapp",
          create_time_str: "2020-12-04",
          pic_list: [
            "https://img-blog.csdnimg.cn/20201204185747416.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
            "https://img-blog.csdnimg.cn/20201204190018414.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
            "https://img-blog.csdnimg.cn/20201204190203290.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
          ],
        },
        // {
        //   pic: "",
        //   type: "blog",
        //   body: "<em>uniapp</em>快速入门 一、uni-app简单介绍 **什么是uni-app？** uni-app的优点 二、如何创建<em>uniapp</em>项目 1、安装HBuilderX 2、如何在微信小程序里面跑起来 3、官方提示 三、学习框架 1、项目结构介绍 2、开发规范 2.1 uni-...",
        //   author_label: "作者",
        //   id: "110665347",
        //   blogId: "9999649",
        //   create_time: "1607083188000",
        //   level: "0",
        //   author: "weixin_47592687",
        //   author_id: "9999649",
        //   description:
        //     "<em>uniapp</em>快速入门一、uni-app简单介绍**什么是uni-app？**uni-app的优点二、如何创建<em>uniapp</em>项目1、安装HBuilderX2、如何在微信小程序里面跑起来3、官方提示三、学习框架1、项目结构介绍2、开发规范2.1 uni-app 约定的...",
        //   created_at: "2020-12-04 19:59:48",
        //   title: "<em>uniapp</em>快速入门",
        //   nickname: "祎祎呀",
        //   digest:
        //     "<em>uniapp</em>快速入门一、uni-app简单介绍**什么是uni-app？**uni-app的优点二、如何创建<em>uniapp</em>项目1、安装HBuilderX2、如何在微信小程序里面跑起来3、官方提示三、学习框架1、项目结构介绍2、开发规范2.1 uni-app 约定的...",
        //   updateTime: "2020-12-04 19:59:48",
        //   url: "https://blog.csdn.net/weixin_47592687/article/details/110665347?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522161943829416780255238009%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=161943829416780255238009&biz_id=0&utm_medium=distribute.wap_search_result.none-task-blog-2~all~top_positive~default-1-110665347.wap_first_rank_v2_rank_v29&utm_term=uniapp",
        //   create_time_str: "2020-12-04",
        //   pic_list: [
        //     "https://img-blog.csdnimg.cn/20201204185747416.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
        //     "https://img-blog.csdnimg.cn/20201204190018414.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
        //     "https://img-blog.csdnimg.cn/20201204190203290.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
        //   ],
        // },
        // {
        //   pic: "",
        //   type: "blog",
        //   body: "<em>uniapp</em>快速入门 一、uni-app简单介绍 **什么是uni-app？** uni-app的优点 二、如何创建<em>uniapp</em>项目 1、安装HBuilderX 2、如何在微信小程序里面跑起来 3、官方提示 三、学习框架 1、项目结构介绍 2、开发规范 2.1 uni-...",
        //   author_label: "作者",
        //   id: "110665347",
        //   blogId: "9999649",
        //   create_time: "1607083188000",
        //   level: "0",
        //   author: "weixin_47592687",
        //   author_id: "9999649",
        //   description:
        //     "<em>uniapp</em>快速入门一、uni-app简单介绍**什么是uni-app？**uni-app的优点二、如何创建<em>uniapp</em>项目1、安装HBuilderX2、如何在微信小程序里面跑起来3、官方提示三、学习框架1、项目结构介绍2、开发规范2.1 uni-app 约定的...",
        //   created_at: "2020-12-04 19:59:48",
        //   title: "<em>uniapp</em>快速入门",
        //   nickname: "祎祎呀",
        //   digest:
        //     "<em>uniapp</em>快速入门一、uni-app简单介绍**什么是uni-app？**uni-app的优点二、如何创建<em>uniapp</em>项目1、安装HBuilderX2、如何在微信小程序里面跑起来3、官方提示三、学习框架1、项目结构介绍2、开发规范2.1 uni-app 约定的...",
        //   updateTime: "2020-12-04 19:59:48",
        //   url: "https://blog.csdn.net/weixin_47592687/article/details/110665347?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522161943829416780255238009%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=161943829416780255238009&biz_id=0&utm_medium=distribute.wap_search_result.none-task-blog-2~all~top_positive~default-1-110665347.wap_first_rank_v2_rank_v29&utm_term=uniapp",
        //   create_time_str: "2020-12-04",
        //   pic_list: [
        //     "https://img-blog.csdnimg.cn/20201204185747416.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
        //     "https://img-blog.csdnimg.cn/20201204190018414.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
        //     "https://img-blog.csdnimg.cn/20201204190203290.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
        //   ],
        // },
        // {
        //   pic: "",
        //   type: "blog",
        //   body: "<em>uniapp</em>快速入门 一、uni-app简单介绍 **什么是uni-app？** uni-app的优点 二、如何创建<em>uniapp</em>项目 1、安装HBuilderX 2、如何在微信小程序里面跑起来 3、官方提示 三、学习框架 1、项目结构介绍 2、开发规范 2.1 uni-...",
        //   author_label: "作者",
        //   id: "110665347",
        //   blogId: "9999649",
        //   create_time: "1607083188000",
        //   level: "0",
        //   author: "weixin_47592687",
        //   author_id: "9999649",
        //   description:
        //     "<em>uniapp</em>快速入门一、uni-app简单介绍**什么是uni-app？**uni-app的优点二、如何创建<em>uniapp</em>项目1、安装HBuilderX2、如何在微信小程序里面跑起来3、官方提示三、学习框架1、项目结构介绍2、开发规范2.1 uni-app 约定的...",
        //   created_at: "2020-12-04 19:59:48",
        //   title: "<em>uniapp</em>快速入门",
        //   nickname: "祎祎呀",
        //   digest:
        //     "<em>uniapp</em>快速入门一、uni-app简单介绍**什么是uni-app？**uni-app的优点二、如何创建<em>uniapp</em>项目1、安装HBuilderX2、如何在微信小程序里面跑起来3、官方提示三、学习框架1、项目结构介绍2、开发规范2.1 uni-app 约定的...",
        //   updateTime: "2020-12-04 19:59:48",
        //   url: "https://blog.csdn.net/weixin_47592687/article/details/110665347?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522161943829416780255238009%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=161943829416780255238009&biz_id=0&utm_medium=distribute.wap_search_result.none-task-blog-2~all~top_positive~default-1-110665347.wap_first_rank_v2_rank_v29&utm_term=uniapp",
        //   create_time_str: "2020-12-04",
        //   pic_list: [
        //     "https://img-blog.csdnimg.cn/20201204185747416.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
        //     "https://img-blog.csdnimg.cn/20201204190018414.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
        //     "https://img-blog.csdnimg.cn/20201204190203290.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
        //   ],
        // },
        // {
        //   pic: "",
        //   type: "blog",
        //   body: "<em>uniapp</em>快速入门 一、uni-app简单介绍 **什么是uni-app？** uni-app的优点 二、如何创建<em>uniapp</em>项目 1、安装HBuilderX 2、如何在微信小程序里面跑起来 3、官方提示 三、学习框架 1、项目结构介绍 2、开发规范 2.1 uni-...",
        //   author_label: "作者",
        //   id: "110665347",
        //   blogId: "9999649",
        //   create_time: "1607083188000",
        //   level: "0",
        //   author: "weixin_47592687",
        //   author_id: "9999649",
        //   description:
        //     "<em>uniapp</em>快速入门一、uni-app简单介绍**什么是uni-app？**uni-app的优点二、如何创建<em>uniapp</em>项目1、安装HBuilderX2、如何在微信小程序里面跑起来3、官方提示三、学习框架1、项目结构介绍2、开发规范2.1 uni-app 约定的...",
        //   created_at: "2020-12-04 19:59:48",
        //   title: "<em>uniapp</em>快速入门",
        //   nickname: "祎祎呀",
        //   digest:
        //     "<em>uniapp</em>快速入门一、uni-app简单介绍**什么是uni-app？**uni-app的优点二、如何创建<em>uniapp</em>项目1、安装HBuilderX2、如何在微信小程序里面跑起来3、官方提示三、学习框架1、项目结构介绍2、开发规范2.1 uni-app 约定的...",
        //   updateTime: "2020-12-04 19:59:48",
        //   url: "https://blog.csdn.net/weixin_47592687/article/details/110665347?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522161943829416780255238009%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=161943829416780255238009&biz_id=0&utm_medium=distribute.wap_search_result.none-task-blog-2~all~top_positive~default-1-110665347.wap_first_rank_v2_rank_v29&utm_term=uniapp",
        //   create_time_str: "2020-12-04",
        //   pic_list: [
        //     "https://img-blog.csdnimg.cn/20201204185747416.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
        //     "https://img-blog.csdnimg.cn/20201204190018414.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
        //     "https://img-blog.csdnimg.cn/20201204190203290.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
        //   ],
        // },
        // {
        //   pic: "",
        //   type: "blog",
        //   body: "<em>uniapp</em>快速入门 一、uni-app简单介绍 **什么是uni-app？** uni-app的优点 二、如何创建<em>uniapp</em>项目 1、安装HBuilderX 2、如何在微信小程序里面跑起来 3、官方提示 三、学习框架 1、项目结构介绍 2、开发规范 2.1 uni-...",
        //   author_label: "作者",
        //   id: "110665347",
        //   blogId: "9999649",
        //   create_time: "1607083188000",
        //   level: "0",
        //   author: "weixin_47592687",
        //   author_id: "9999649",
        //   description:
        //     "<em>uniapp</em>快速入门一、uni-app简单介绍**什么是uni-app？**uni-app的优点二、如何创建<em>uniapp</em>项目1、安装HBuilderX2、如何在微信小程序里面跑起来3、官方提示三、学习框架1、项目结构介绍2、开发规范2.1 uni-app 约定的...",
        //   created_at: "2020-12-04 19:59:48",
        //   title: "<em>uniapp</em>快速入门",
        //   nickname: "祎祎呀",
        //   digest:
        //     "<em>uniapp</em>快速入门一、uni-app简单介绍**什么是uni-app？**uni-app的优点二、如何创建<em>uniapp</em>项目1、安装HBuilderX2、如何在微信小程序里面跑起来3、官方提示三、学习框架1、项目结构介绍2、开发规范2.1 uni-app 约定的...",
        //   updateTime: "2020-12-04 19:59:48",
        //   url: "https://blog.csdn.net/weixin_47592687/article/details/110665347?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522161943829416780255238009%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=161943829416780255238009&biz_id=0&utm_medium=distribute.wap_search_result.none-task-blog-2~all~top_positive~default-1-110665347.wap_first_rank_v2_rank_v29&utm_term=uniapp",
        //   create_time_str: "2020-12-04",
        //   pic_list: [
        //     "https://img-blog.csdnimg.cn/20201204185747416.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
        //     "https://img-blog.csdnimg.cn/20201204190018414.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
        //     "https://img-blog.csdnimg.cn/20201204190203290.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
        //   ],
        // },
        // {
        //   pic: "",
        //   type: "blog",
        //   body: "<em>uniapp</em>快速入门 一、uni-app简单介绍 **什么是uni-app？** uni-app的优点 二、如何创建<em>uniapp</em>项目 1、安装HBuilderX 2、如何在微信小程序里面跑起来 3、官方提示 三、学习框架 1、项目结构介绍 2、开发规范 2.1 uni-...",
        //   author_label: "作者",
        //   id: "110665347",
        //   blogId: "9999649",
        //   create_time: "1607083188000",
        //   level: "0",
        //   author: "weixin_47592687",
        //   author_id: "9999649",
        //   description:
        //     "<em>uniapp</em>快速入门一、uni-app简单介绍**什么是uni-app？**uni-app的优点二、如何创建<em>uniapp</em>项目1、安装HBuilderX2、如何在微信小程序里面跑起来3、官方提示三、学习框架1、项目结构介绍2、开发规范2.1 uni-app 约定的...",
        //   created_at: "2020-12-04 19:59:48",
        //   title: "<em>uniapp</em>快速入门",
        //   nickname: "祎祎呀",
        //   digest:
        //     "<em>uniapp</em>快速入门一、uni-app简单介绍**什么是uni-app？**uni-app的优点二、如何创建<em>uniapp</em>项目1、安装HBuilderX2、如何在微信小程序里面跑起来3、官方提示三、学习框架1、项目结构介绍2、开发规范2.1 uni-app 约定的...",
        //   updateTime: "2020-12-04 19:59:48",
        //   url: "https://blog.csdn.net/weixin_47592687/article/details/110665347?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522161943829416780255238009%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=161943829416780255238009&biz_id=0&utm_medium=distribute.wap_search_result.none-task-blog-2~all~top_positive~default-1-110665347.wap_first_rank_v2_rank_v29&utm_term=uniapp",
        //   create_time_str: "2020-12-04",
        //   pic_list: [
        //     "https://img-blog.csdnimg.cn/20201204185747416.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
        //     "https://img-blog.csdnimg.cn/20201204190018414.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
        //     "https://img-blog.csdnimg.cn/20201204190203290.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
        //   ],
        // },
        // {
        //   pic: "",
        //   type: "blog",
        //   body: "<em>uniapp</em>快速入门 一、uni-app简单介绍 **什么是uni-app？** uni-app的优点 二、如何创建<em>uniapp</em>项目 1、安装HBuilderX 2、如何在微信小程序里面跑起来 3、官方提示 三、学习框架 1、项目结构介绍 2、开发规范 2.1 uni-...",
        //   author_label: "作者",
        //   id: "110665347",
        //   blogId: "9999649",
        //   create_time: "1607083188000",
        //   level: "0",
        //   author: "weixin_47592687",
        //   author_id: "9999649",
        //   description:
        //     "<em>uniapp</em>快速入门一、uni-app简单介绍**什么是uni-app？**uni-app的优点二、如何创建<em>uniapp</em>项目1、安装HBuilderX2、如何在微信小程序里面跑起来3、官方提示三、学习框架1、项目结构介绍2、开发规范2.1 uni-app 约定的...",
        //   created_at: "2020-12-04 19:59:48",
        //   title: "<em>uniapp</em>快速入门",
        //   nickname: "祎祎呀",
        //   digest:
        //     "<em>uniapp</em>快速入门一、uni-app简单介绍**什么是uni-app？**uni-app的优点二、如何创建<em>uniapp</em>项目1、安装HBuilderX2、如何在微信小程序里面跑起来3、官方提示三、学习框架1、项目结构介绍2、开发规范2.1 uni-app 约定的...",
        //   updateTime: "2020-12-04 19:59:48",
        //   url: "https://blog.csdn.net/weixin_47592687/article/details/110665347?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522161943829416780255238009%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=161943829416780255238009&biz_id=0&utm_medium=distribute.wap_search_result.none-task-blog-2~all~top_positive~default-1-110665347.wap_first_rank_v2_rank_v29&utm_term=uniapp",
        //   create_time_str: "2020-12-04",
        //   pic_list: [
        //     "https://img-blog.csdnimg.cn/20201204185747416.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
        //     "https://img-blog.csdnimg.cn/20201204190018414.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
        //     "https://img-blog.csdnimg.cn/20201204190203290.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NzU5MjY4Nw==,size_16,color_FFFFFF,t_70,image/resize,m_fixed,h_150",
        //   ],
        // },
      ],
    },
    message: "执行成功",
  });
  // }
  // , 1000);
});

// /article/details
router.get("/article/details", function (req, res, next) {
  res.json({
    success: true,
    code: 10000,
    data: {
      data: {
        title: "uniapp快速入门_祎祎呀的博客-CSDN博客_uniapp入门",
        nickName: "祎祎呀",
        username: "weixin_47592687",
        articleTitle: "uniapp快速入门",
        avatar: "https://profile.csdnimg.cn/8/4/5/3_weixin_47592687",
        articleDesc:
          "uniapp快速入门一、uni-app简单介绍**什么是uni-app？**uni-app的优点二、如何创建uniapp项目1、安装HBuilderX2、如何在微信小程序里面跑起来3、官方提示三、学习框架1、项目结构介绍2、开发规范2.1 uni-app 约定的开发规范2.2 uni-app 开发的注意事项3、页面样式与布局（1）尺寸单位三，如何使用组件四、路由跳转1、uni.navigateTo(OBJECT)2、uni.redirectTo(OBJECT)3、uni.reLaunch(OBJECT)4、",
        articleTitles: "uniapp快速入门_祎祎呀的博客-CSDN博客_uniapp入门",
        content:
          '\n        <div id="article_content" class="article_content clearfix">\n        <link rel="stylesheet" href="https://csdnimg.cn/release/blogv2/dist/mdeditor/css/editerView/ck_htmledit_views-b5506197d8.css">\n                <div id="content_views" class="markdown_views prism-atelier-sulphurpool-light">\n                    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n                        <path stroke-linecap="round" d="M5,0 0,2.5 5,5z" id="raphael-marker-block" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>\n                    </svg>\n                    <p></p>\n<div class="toc">\n <h3>uniapp快速入门</h3>\n <ul><li><a href="#uniapp_3">一、uni-app简单介绍</a></li><li><ul><li><a href="#uniapp_5">**什么是uni-app&#xff1f;**</a></li><li><a href="#uniapp_11">uni-app的优点</a></li></ul>\n  </li><li><a href="#uniapp_31">二、如何创建uniapp项目</a></li><li><ul><li><a href="#1HBuilderX_33">1、安装HBuilderX</a></li><li><a href="#2_40">2、如何在微信小程序里面跑起来</a></li><li><a href="#3_43">3、官方提示</a></li></ul>\n  </li><li><a href="#_48">三、学习框架</a></li><li><ul><li><a href="#1_50">1、项目结构介绍</a></li></ul>\n  </li><li><a href="#2_53">2、开发规范</a></li><li><ul><li><a href="#21_uniapp__55">2.1 uni-app 约定的开发规范</a></li><li><a href="#22_uniapp__63">2.2 uni-app 开发的注意事项</a></li></ul>\n  </li><li><a href="#3_81">3、页面样式与布局</a></li><li><ul><li><a href="#1_83">&#xff08;1&#xff09;尺寸单位</a></li></ul>\n  </li><li><a href="#_89">三&#xff0c;如何使用组件</a></li><li><a href="#_95">      </div>\n    ',
        isCollect: false,
        isPraise: false,
      },
    },
    message: "执行成功",
  });
});

// /article/comment/list
router.get("/article/comment/list", function (req, res, next) {
  res.json({
    success: true,
    code: 10000,
    data: {
      count: 5,
      pageCount: 5,
      list: [
        {
          info: {
            commentId: 12464458,
            articleId: 106501992,
            parentId: 0,
            postTime: "2020-06-06 22:08:25",
            content: "用心了，谢谢作者了，支持",
            userName: "qq_45623325",
            digg: 1,
            diggArr: [],
            parentUserName: null,
            parentNickName: null,
            avatar: "https://profile.csdnimg.cn/4/D/3/3_qq_45623325",
            nickName: "格子衫程序范",
            dateFormat: "10 月前",
            tag: "",
            parentTag: null,
            years: null,
            vip: null,
            vipIcon: null,
            companyBlog: null,
            companyBlogIcon: null,
            flag: null,
            flagIcon: null,
            levelIcon: null,
          },
          pointCommentId: null,
        },
      ],
    },
    message: "执行成功",
  });
});

// /sys/login
router.post("/sys/login", function (req, res, next) {
  res.json({
    success: true,
    code: 10000,
    data: {
      token: "Bearer d8c6ed7a-3fd4-46e4-a477-b20d1ce9cda0",
    },
    message: "执行成功",
  });
});

// /user/follow
router.get("/user/follow", function (req, res, next) {
  res.json({
    success: true,
    code: 10000,
    data: null,
    message: "执行成功",
  });
});

// /user/article/comment
router.post("/user/article/comment", function (req, res, next) {
  res.json({
    success: true,
    code: 10000,
    data: {
      articleId: "123",
      content: "评论内容",
      nickName: "LGD_Sunday",
      avatar:
        "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTL0tPwpUVQT510UXOSKw1zoSZ5881SsibKT5THhOkY1PNmxdqCiahMavNlY8PXwrSNb23rukpznN3mg/132",
      date: "2021-04-27T03:39:22.957Z",
    },
    message: "执行成功",
  });
});

// /user/praise
router.get("/user/praise", function (req, res, next) {
  res.json({
    success: true,
    code: 10000,
    data: null,
    message: "执行成功",
  });
});

// /user/collect
router.get("/user/collect", function (req, res, next) {
  res.json({
    success: true,
    code: 10000,
    data: null,
    message: "执行成功",
  });
});

// /user/collect
router.get("/user/collect", function (req, res, next) {
  res.json({
    success: true,
    code: 10000,
    data: null,
    message: "执行成功",
  });
});
module.exports = router;
