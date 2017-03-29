# 项目说明

## 项目结构

/app： 前端开发目录

- /static： 静态文件目录（依赖库，图片，字体等）
- /api： 前端数据请求api
- /components： 所有应用组件
- /views： 页面入口组件（路由组件）
- /containers： 容器型组件
- /layouts： 布局相关的组件和样式
- /redux： Redux Store相关配置（包括store，reducers，sagas）
- /routes： 前端路由配置


/server：服务器端开发目录

- /middleware ：中间件目录——供服务器调用，形成处理流，降低具体业务逻辑的耦合度
  - router.js ：从/routes目录中提取对应路由的处理方法，组装后交由koa-router中间件接管
  - staticFiles.js ：前端静态文件传输模块
- /routes ：服务端路由（主要处理前端api数据请求）
- /api ：存放服务端api配置文件 
- /utils： 服务器自定义工具
  - routeHandlerGenerator.js ：根据传入的API配置封装路由处理函数

/logs：服务器运行日志（输出日志及错误日志）

app.js：服务器端主代码文件（配置服务器，装载中间件，启动服务器）

start.js：服务端代码转码（Babel - ES6），包含转码配置

ecosystem.config.js：pm2配置文件

webpack.config.js：webpack配置文件

package.json：项目依赖管理文件

.babelrc：babel配置文件（js代码编译规则）

.eslintrc：eslint配置文件（js代码格式规则）

.gitignore：配置文件以排除于git的管理



## 项目开发配置说明

### 安装项目依赖

```shell
  npm install				   # 根据package.json自动安装项目依赖
  npm install pm2@latest -g		# 全局安装pm2
```

### 开发环境

1. 服务器添加webpack-dev-middleware及webpack-hot-middleware中间件，为前端开发提供热加载支持。当添加或修改前端代码时启动代码编译并告知浏览器以实现浏览器的无刷新更新。（配置文件为webpack.config.js）

2. 引入pm2对服务器进程进行控制，为后端开发提供自动重启支持。当添加或修改后端代码时，由pm2监听文件变化并重启服务器进程，同时维护服务器日志文件。（配置文件为ecosystem.config.js）

### 脚本命令

```shell
npm start					# 编译前端代码并启动开发服务器，显示log数据（dev）
npm restart					# 重新启动服务器进程（dev）
npm run kill				# 关闭服务器并结束进程
npm run status				# 显示服务器进程状态
npm run build:webpack		 # 编译前端代码并生成文件至BUILD_PATH（prod）
npm run build				# 清理前端目录并编译生成新的目录（prod）
npm run clean:build			# 清理前端编译目录（prod）
npm run clean:logs			# 清理服务器日志文件夹
npm run produce				# 编译生成前端目录并启动发布服务器（prod）
npm run api					# 启动API服务器
```

### 服务器地址

开发&发布： http://localhost:3000

