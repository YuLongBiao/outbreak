# school

[English](./README-EN.md)

### Development

```开发
$ 导入数据库 outbreak.sql (文件在mariadb目录下)
$ 修改/config/config.default.js 中关于数据库的配置（config.mysql）
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
$ npm stop
```

### 测试
```
$ ./bin/jmeter -n -t 文件路径1/疫情填报系统测试.jmx -l 文件路径2/html.csv -e -o 文件路径
$ 注：测试使用的技术为-> jmeter
$ 本人精力有限,测试更新会慢很多
```

使用到的技术
```
$ "node": ">=10.10.0"
$ "MariaDB": ">=10.0.38"
```

### 功能
- 后台管理
    + 教师管理
    + 系别管理
    + 邮箱管理
    + 文章标签管理
- 教师客户端
    + 体温填报
    + 学生管理
    + 学习资源管理
    + 文章管理(审核)
    + 评论管理(删除)
- 学生客户端
    + 体温填报
    + 学习资源的下载
    + 发布文章
    + 评论功能(文章)
- 其他功能
    + 班级体温查询功能
- 待续(欢迎PR)
- 如果期望新的功能请提交issues

### 测试帐号
- 学生
    - 学号： 1501373434  
    - 密码： 123456   
    - [链接](http://uname.dongkji.com/login)
- 教师   
    - 工号： 123456      
    - 密码： 123456   
    - [链接](http://uname.dongkji.com/teacher/login)
- 后台
    - 帐号： admin       
    - 密码： 123456   
    - [链接](http://uname.dongkji.com/admin/login)

### Docker启动
```bash
$ 先将package.json中scripts下start中的 --daemon 去掉
$ docker-compose up -d
$ open http://localhost:7001/
```


### 问题
- 学生数据很多时候都需要一次性导入(推荐直接使用代码导入数据库即可) [参考](https://github.com/508lab/AutoScript/tree/master/outbreak-dump)
- 如果遇到问题或者需求请联系我qq：2833324528@qq.com

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

### License
采用 [MIT](./LICENSE) 开源许可证，你可以在商业项目中免费使用或者二次开发而不必支付费用。

[egg]: https://eggjs.org
