// 由于postcss 是运行在nodejs中，所以使用nodejs 模块化规范
module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 37.5,
      // 所有htlm属性都要 px 转rem
      propList: ["*"],
    },
  },
};

// 注意：自己写的px也会转成rem，但如果是行内样式则不会转,如果运行报错，  require 8/9/ 类似的，降低版本
// postcss 非常强，兼容浏览器等，建议深度学习

// 再次不用引入浏览器兼容性插件，vue-cli默认已经配置好了 详情见文件 .browserslistrc
