var postcss = require('postcss');
var Px2rem = require('px2rem');
var path = require('path');

module.exports = postcss.plugin('postcss-px2rem', function (options) {
    return function (css, result) {
        var froms = result.opts.from.split(path.sep);
        var index = froms.indexOf('vues');
        var from = froms[index + 1];

        if (options.custom) {
            var custom = options.custom
            var customKeys = Object.keys(options.custom)
            if (customKeys.length !== 0
                && custom[customKeys[0]]
                && custom[customKeys[0]].indexOf(from) !== -1
            ) {
                var oldCssText = css.toString();
                var px2remIns = new Px2rem({remUnit: customKeys[0]});
                var newCssText = px2remIns.generateRem(oldCssText);
                var newCssObj = postcss.parse(newCssText);
                result.root = newCssObj;
                return
            }
        }

        var oldCssText = css.toString();
        var px2remIns = new Px2rem(options);
        var newCssText = px2remIns.generateRem(oldCssText);
        var newCssObj = postcss.parse(newCssText);
        result.root = newCssObj;
    };
});
