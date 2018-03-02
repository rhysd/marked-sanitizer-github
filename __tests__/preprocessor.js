const tsc = require('typescript');
const tsConfig = require('../tsconfig.json');

throw 'hey';
module.exports = {
    process(src, path) {
        tsc.transpile(src, tsConfig.compilerOptions, path, []);
        return src;
    },
};
