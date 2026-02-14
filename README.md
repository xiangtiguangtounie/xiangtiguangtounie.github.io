# Photography Portfolio

个人摄影作品集网站 | Personal Photography Portfolio

🌐 在线预览: https://xiangtiguangtounie.github.io/portfolio

## 功能 | Features

- 🖼️ 作品集展示 | Portfolio showcase
- 🌏 中英文切换 | Bilingual support (Chinese/English)
- 📱 响应式设计 | Responsive design
- ⚡ 静态页面，加载快速 | Fast static site

## 使用方法 | How to Use

### 1. 修改个人信息 | Edit Your Info

打开 `index.html`，修改以下内容：

```html
<!-- 导航栏 -->
<div class="logo" data-zh="你的名字" data-en="Your Name">你的名字</div>

<!-- 联系信息 -->
<p>📧 <a href="mailto:your@email.com">your@email.com</a></p>
<p>📱 +86 xxx xxxx xxxx</p>
```

### 2. 替换作品图片 | Replace Images

将你的作品图片放入 `assets/images/` 文件夹，然后在 `index.html` 中更新图片路径：

```html
<img src="assets/images/your-photo.jpg" alt="Your Photo">
```

### 3. 部署到 GitHub Pages | Deploy to GitHub Pages

```bash
# 1. 创建 GitHub 仓库
# Create a new GitHub repository named: xiangtiguangtounie.github.io

# 2. 上传文件
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/xiangtiguangtounie/xiangtiguangtounie.github.io.git
git push -u origin main

# 3. 启用 GitHub Pages
# Settings → Pages → Source: main → Save
```

网站将在 `https://xiangtiguangtounie.github.io` 上线！

## 自定义域名 | Custom Domain

在 GitHub 仓库的 **Settings → Pages** 中添加你的域名，然后去域名服务商处添加 DNS：

```
Type: CNAME
Name: @
Value: xiangtiguangtounie.github.io
```

## 目录结构 | Structure

```
portfolio/
├── index.html      # 主页面
├── style.css       # 样式
├── script.js       # 语言切换脚本
├── assets/
│   └── images/     # 作品图片
└── README.md       # 说明文档
```

## 技术栈 | Tech Stack

- 纯 HTML/CSS/JavaScript
- 无需后端
- 免费托管于 GitHub Pages

---

💡 提示：随时可以修改样式和内容来匹配你的风格！
