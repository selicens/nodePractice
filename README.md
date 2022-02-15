nodePractice 
--- 
###### npm install xx || npm i xx 下载  
###### npm i xx@0.1.0 下载指定版本  
###### npm i xx --global || npm i xx -g 全局安装    
###### npm i xx -S || npm i xx --save 下载到生产环境  
###### npm i xx -D || npm i xx --save-dev 下载到开发环境    
###### npm uninstall xx 卸载  
    
手动切换镜像源
---
###### npm config get registry 查看下载  
###### https://registry.npmjs.org/ 
> 旧版本   
> npm config set registry https://registry.npm.taobao.org 切换  
> npm config get registry 再次查看下载  
> https://registry.npm.taobao.org  
###### 老的 http://npm.taobao.org 和 http://registry.npm.taobao.org 域名将于2022年05月31日零时起停止服务  
###### 新网址：https://npmmirror.com，下载地址：https://registry.npmmirror.com   
> 新版本   
> npm config set registry https://registry.npmmirror.com 切换  
> npm config get registry 再次查看下载  
> https://registry.npmmirror.com  

nrm切换镜像源
---
###### npm i nrm -g 全局安装nrm
###### nrm ls 查看镜像源
> npm ---------- https://registry.npmjs.org/  
> yarn --------- https://registry.yarnpkg.com/  
> tencent ------ https://mirrors.cloud.tencent.com/npm/  
> cnpm --------- https://r.cnpmjs.org/  
> taobao ------- https://registry.npmmirror.com/  
> npmMirror ---- https://skimdb.npmjs.com/registry/  
---
###### nrm use taobao 切换镜像源  
> Registry has been set to: https://registry.npmmirror.com/  
---  
###### nrm test npm 测试源响应速度  
> npm ------ 870ms  
> taobao --- 84ms
