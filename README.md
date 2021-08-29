# node-ts-lib-demo
a demo to write a simple library with node.js and typescript
> https://basarat.gitbook.io/typescript/library
> https://basarat.gitbook.io/typescript/nodejs

### 关键字

1. node & npm
2. typescript & @types
3. nodemon

### 步骤

1. 初始化node项目：生成默认package.json配置文件

   `$ npm init -y`

2. 安装开发依赖typescript编译器

   `$ npm i -D typescript`

3. 初始化ts项目：生成默认tsconfig.json配置文件

   `$ npx tsc --init`

4. 修改tsconfig.json配置，重点关注target, module, declaration, declarationMap, sourceMap, outDir这几项

```json
{
  "compilerOptions": {
    /* Basic Options */
    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    "outDir": "./lib",                        /* Redirect output structure to the directory. */
    /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */

    /* Module Resolution Options */
    "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */
    /* Advanced Options */
    "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
  },
  "include": [
    "src/index.ts"
  ]
}
```

5. 修改package.json配置`main`, `types`, `scripts`

```json
{
  "name": "node-ts-lib-demo",
  "version": "1.0.0",
  "description": "a demo to write a simple library with node.js and typescript",
  "main": "./lib/index",
  "types": "./lib/index",
  "scripts": {
    "build": "tsc",
    "test:live": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' ./src/test.ts",
    "test": "ts-node ./src/test"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Jor-TR/node-ts-lib-demo.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Jor-TR/node-ts-lib-demo/issues"
  },
  "homepage": "https://github.com/Jor-TR/node-ts-lib-demo#readme",
  "devDependencies": {
    "@types/node": "^16.7.5",
    "nodemon": "^2.0.12",
    "ts-node": "^10.2.1",
    "typescript": "^4.4.2"
  }
}
```

6. 在src目录下书写demo源码即可，`npm run build`命令将源码编译到 lib 目录下，`npm run test:live`监控源码变更并实时执行测试代码