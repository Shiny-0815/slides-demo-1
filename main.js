初始化()
let n = 1
let k=5  //轮播图片数量
setInterval(() => {
    makeLeave(getImage(n))
        .one('transitionend', (e) => {
            makeEnter($(e.currentTarget))
        })
    makeCurrent(getImage(n+1))
    n += 1
}, 3000);

//函数
function x(n) {
    if (n > k) {
        n = n % k
        if (n === 0) {
            n = k
        }
    }
    return n
}

//初始化
function 初始化() {
    $('.images >img:nth-child(1)').addClass('current').siblings().addClass('enter')
}
//获取图片
function getImage(n) {
    return $(`.images >img:nth-child(${x(n)})`)
}
//状态转换
function makeCurrent($node) {
    return $node.removeClass('enter').addClass('current')
}
function makeLeave($node) {
    return $node.removeClass('current').addClass('leave')
}
function makeEnter($node) {
    return $node.removeClass('leave').addClass('enter')
}
