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

gulp  //启动命令

```
### include使用说明
```javascript
//公用的html片段在template

//使用方法

@@include('template/header.html')

//使用gulp命令进行导入即可
```
### 说明
不同公司开发流程，大同小异，本文件只做参考,
提供打包思路;可根据需要更改 gulpfile 文件

[1]: http://oiukswkar.bkt.clouddn.com/gulpfile.png
