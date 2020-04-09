
//把防抖功能函数打包引出
export function debounce(func, delay) {
    let timer = null
    return function (...args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        },delay)
    }
}