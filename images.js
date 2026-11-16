/* images.js —— 配图配置
   自动扫描模式：清单留空，图片由 images 文件夹按 bodyN-M 命名自动加载 */

/* 手动清单（可选）。留空 {} 表示完全交给自动扫描。
   若某张想手动指定，也可以填回来，两种会叠加（清单在前，扫描在后）：
   window.IMAGES = { 0: ["images/body1-1.jpg"] };            */
window.IMAGES = {};

/* true = 按 images/bodyN-M 顺序自动探测（会产生 404 记录）
   false = 只认上面的清单                                     */
window.AUTO_SCAN = true;