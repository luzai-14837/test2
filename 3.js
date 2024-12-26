setTimeout(async function() {
    try {
        // 读取txt文件内容
        const response = await fetch('urls.txt'); // 替换为你的txt文件路径
        const text = await response.text();
        
        // 将文件内容按行分割
        const urls = text.split('\n').filter(line => line.trim() !== '');
        
        // 随机选择一个URL
        const randomUrl = urls[Math.floor(Math.random() * urls.length)];
        
        // 追加当前页面的查询参数
        const finalUrl = randomUrl + (randomUrl.indexOf('?') > 0 ? '&' : '?') + (location.href.split('?')[1] || '');
        
        // 重定向
        location.href = finalUrl;
    } catch (error) {
        console.error('链接出问题请重新进入', error);
    }
}, 0);
