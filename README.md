# Panpan Ji — Personal Academic Homepage

个人学术主页，托管于 GitHub Pages：https://panpanji.github.io/

## 结构

```
index.html          页面骨架（只负责加载 CSS / JS）
css/style.css       全部样式
js/content.js       所有中英文内容（改文字只需改这个文件）
js/main.js          渲染与语言切换逻辑（一般不用动）
fonts/              本地字体（Space Grotesk + JetBrains Mono，避免外网依赖）
avatar.jpg          头像（480×480）
```

## 如何修改内容

打开 `js/content.js`，每个条目都有 `en`（英文）和 `zh`（中文）两套字段，直接修改对应字符串即可。

- **研究项目**：编辑 `projects` 数组。每个项目含：`period`（时间）、`role`（角色）、`site`（地点）、`supervisor`（导师/合作者），以及 `en` / `zh` 下的 `title`、`keywords`（关键词数组）、`problem`（解决什么问题）、`approach`（方法与技术路线）、`results`（主要结果）、`output`（产出）。复制一个已有对象再改即可新增项目。
- **其他章节**：`about` / `education` / `interests` / `publications` / `skills` / `field` 等。

## 语言切换

右上角 `EN` / `中文` 按钮切换，偏好会保存在浏览器。也可用 URL 参数强制指定：`?lang=en` 或 `?lang=zh`。

## 本地预览

```bash
python -m http.server 8000
# 打开 http://localhost:8000/
```

## 部署

修改完成后 commit 并 push 到 `main` 分支，GitHub Pages 自动更新。

```bash
git add -A
git commit -m "update homepage"
git push origin main
```
