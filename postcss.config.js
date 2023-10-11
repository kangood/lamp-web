module.exports = {
    plugins: {
        'postcss-import': {}, // 可以让一个css文件导入其它css文件
        'postcss-nesting': {}, // 可以编写postcss-nesting规范的嵌套css
        'tailwindcss/nesting': {}, // 可以编写scss规范的嵌套css
        tailwindcss: {},
        autoprefixer: {}, // 自动为css样式添加浏览器适配前缀
        'postcss-mixins': {}, // 编写css样板代码，使一段css代码供多个地方使用
    },
};
