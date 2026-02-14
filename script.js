// 语言切换功能
const langToggle = document.getElementById('lang-toggle');
let currentLang = 'zh';

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
    updateLanguage();
});

function updateLanguage() {
    // 更新所有带 data-zh 和 data-en 的元素
    document.querySelectorAll('[data-zh][data-en]').forEach(el => {
        // 如果是 title 属性
        if (el.hasAttribute('data-en')) {
            el.setAttribute('title', el.getAttribute(`data-${currentLang}`));
            el.textContent = el.getAttribute(`data-${currentLang}`);
        }
    });
    
    // 更新页面标题
    const titleEl = document.querySelector('title');
    if (titleEl) {
        titleEl.textContent = titleEl.getAttribute(`data-${currentLang}`);
    }
    
    // 更新语言按钮文本
    langToggle.textContent = currentLang === 'zh' ? 'Switch to English' : '切换中文';
    
    // 保存语言偏好
    localStorage.setItem('preferred-lang', currentLang);
}

// 页面加载时恢复语言偏好
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-lang');
    if (savedLang) {
        currentLang = savedLang;
        document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
        updateLanguage();
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
