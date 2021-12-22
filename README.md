# toutiao-mobile

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

day01

### 安装 vant 组件库

安装命令:npm i vant -S
官网:https://vant-contrib.oschina.io/vant/v3/#/zh-CN/button

注意:由于 vant 组件库以 px 为单位，所以要进行 rem 适配的相关安装，安装两个模块
1.npm i amfe-flexible //动态设置 rem 基准值 在 main.js 引入模块
2.npm i postcss-pxtorem //将 px 转成 rem 在项目根目录创建文件 postcss.config.js ，然后复制 vant 官网进阶里面的相关代码 链接 https://vant-contrib.oschina.io/vant/v3/#/zh-CN/advanced-usage

### 封装请求模块

安装 axios
npm i axios
