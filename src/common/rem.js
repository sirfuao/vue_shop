// 设计稿自定义为375px 利用测量的px大小除以50px 即可得到所需rem值
(function () {
    remLayout();
    function remLayout() {
        // 获取屏幕宽度
        var w = document.documentElement.clientWidth;
        w = w > 768 ? 768 : w;
        w = w <= 320 ? 320 : w;
        // document.documentElement 获取到的html标签
        document.documentElement.style.fontSize = w / 7.5 + 'px';
    }
    // resize 监听页面变化
    window.addEventListener('resize', function () {
        remLayout();
    }, false);
})();