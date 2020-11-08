## electron-fe-topics

### electron 常见问题
#### 开发
1. 安装慢
```
// yarn
ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/ yarn add electron -D
// or npm
ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/ npm install electron -D
```
参考官方文档：https://www.electronjs.org/docs/tutorial/installation#proxies
2. 开发环境开启热更新
  - renderer 进程使用webpack 热更新机制
  - main
3. 好用的脚手架工具


### electron 常用的功能
1. BrowserWindow 启动渲染进程
2. Menu 用于管理菜单栏
3. [crashReporter](http://electronjs.org/docs/api/crash-reporter) 用于 crash reports 上报
4. [electron.shell](https://www.electronjs.org/docs/api/shell#shell)用于和原生交互，比如在文件夹中显示文件
5. [Notification](https://www.electronjs.org/docs/api/notification#notification)

### electron 常用npm package
1. [electron-debug](https://github.com/sindresorhus/electron-debug) 开发环境的有用的调试工具
2. [better-npm-run](https://www.npmjs.com/package/better-npm-run)


