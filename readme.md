# Postcss-px2rem-hsr

## 使用方法

.postcssrc.js :

```
module.exports = () => ({
    plugins: {
        "postcss-px2rem": {remUnit: 72, custom: {75: ['index']}}
    }
})

```