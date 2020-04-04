# school

### Development

```bash
$ 导入数据库 outbreak.sql
$ 修改/config/config.default.js 中关于数据库的配置（config.mysql）
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### Test
```
$ ./bin/jmeter -n -t 文件路径1/疫情填报系统测试.jmx -l 文件路径2/html.csv -e -o 文件路径
$ 注：测试使用的技术为-> jmeter
```

使用到的技术
```
$ "node": ">=10.10.0"
$ "MariaDB": ">=10.0.38"
```

### 功能
- 后台管理
    + 教师管理
- 教师客户端
    + 体温填报
    + 学生管理
    + 学习资源管理
- 学生客户端
    + 体温填报
    + 学习资源的下载
- 待续(欢迎PR)

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

### 问题
- 修改当前的系和班级名称：/app/global/clasdepartment.js
- 学生数据很多时候都需要一次性导入(直接使用代码或者工具导入即可)
- 如果遇到问题或者需求请联系我qq：2833324528@qq.com

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
