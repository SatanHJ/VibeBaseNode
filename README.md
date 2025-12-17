# VibeBaseNode

该仓库是一个包含 **`api/` 后端服务** 与 **`web/` 客户端页面** 的起始项目，后续会继续扩展更多模块。

## 目录结构

- `api/`：Node.js + TypeScript 后端服务（MidwayJS / cool-admin 生态）
- `web/`：Vue 3 + Vite 前端项目（Vitesse Lite 风格的工程化模板）

## 环境要求

- Node.js：`>= 18`
- 包管理器：`pnpm`（本仓库已调整为 monorepo/workspace 方式管理依赖）

## 安装依赖

在仓库根目录执行：

```bash
pnpm i
```

> 说明：`api/` 本身仍保留原有 `npm run ...` 脚本，但在 workspace 下推荐统一使用 `pnpm --filter` 调用。

## 开发启动

### 1) 一键启动（推荐）

在仓库根目录执行：

```bash
pnpm dev
```

会并行启动 `api` 与 `web`。

### 2) 分别启动

- 启动后端（api）：

```bash
pnpm dev:api
```

启动后访问：`http://localhost:8001/`

后端数据库相关配置位于 `api/src/config/config.local.ts`（参见 `api/README.md` 的运行说明）。

- 启动前端（web）：

```bash
pnpm dev:web
```

默认会在浏览器打开，端口为 `3333`（见 `web/package.json`）。

## 常用脚本

### api

- `npm run dev`：开发模式
- `npm run build`：构建
- `npm run lint`：代码检查
- `npm run test`：运行测试（项目文档提示：自动化路由与官方 Jest 集成存在兼容性问题，详见 `api/test/README.md`）

### web

- `pnpm dev`：开发模式
- `pnpm build`：构建
- `pnpm preview`：预览构建产物
- `pnpm lint`：代码检查
- `pnpm test`：运行 Vitest

## 参考文档

- 后端：`api/README.md`
- 前端：`web/README.md`
