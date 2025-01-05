# Mayday Land - 五月天歌词 API

一个提供五月天歌词随机获取的 API 服务，基于 Next.js 和 MongoDB 构建。

## 功能特点

- 随机获取五月天歌词
- RESTful API 设计
- TypeScript 支持
- MongoDB 数据存储

## 技术栈

- Next.js 13+
- MongoDB
- TypeScript
- React

## 快速开始

### 环境要求

- Node.js 18+
- MongoDB Atlas 账号

### 安装

1. 克隆项目
```bash
git clone [项目地址]
```
2. 安装依赖
```bash 
npm install
# 或
yarn install
```
3. 环境配置
``` bash
# 创建 .env.local 文件
MONGODB_URI=你的MongoDB连接串
```
4. 运行项目
```bash
npm run dev
# 或
yarn dev
```
API 使用
1.随机获取歌词

``` bash
GET /api/lyrics/random
```

