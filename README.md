## 项目说明

### 项目整体结构
![][1]
### 全局安装gulp(已安装的忽略本段落)
```javascript
npm install gulp -g
```
### 使用方法
```javascript
git clone https://github.com/BiYuqi/gulp-workflow.git

cd gulp-workflow //进入文件夹

npm install //安装依赖插件
// 本地安装gulp
//如果报错 可能需要本地安装下gulp(上一步 npm install安装了，这应该不会出错)
// npm install gulp --save-dev

gulp  //启动命令

```
### include使用说明
```javascript
//公用的html片段在template

//使用方法

//header1.html footer1.html 专门为index.html文件服务
@@include('template/header1.html')

@@include('template/footer1.html')

//因为html文件夹都是相对路径 所以做了两套首尾
//header.html footer.html 专门为html里面的文件服务
//注意html文件夹的相对路径
@@include('../template/header.html')

@@include('../template/footer.html')

//使用gulp命令进行导入即可
```
### 说明

不同公司开发流程，大同小异，本文件只做参考,
提供打包思路;可根据需要更改 gulpfile 文件

[1]: http://oiukswkar.bkt.clouddn.com/gulpfile.png
