// -Favicon
import faviconImg from '@img/favicon.png'
const favicon =
    document.querySelector('link[rel="icon"]') || document.createElement('link')
favicon.type = 'image/x-icon'
favicon.rel = 'icon'
favicon.href = faviconImg
// 將新的 Favicon 插入到 head 元素中
document.head.appendChild(favicon)

// -共同部分
// 獲取元素 Grab elements
// `selectElement`函數提供了一個簡單且可重複使用的方法，可以在整個應用程式中輕鬆地選取元素。
export const selectElement = (selector) => {
    const element = document.querySelector(selector)
    if (element) return element
    throw new Error(`發生錯誤，請確認'${selector}'元素存在或拼寫正確`)
}

// 捲動事件時為header增加actived樣式 Nav styles on scroll
const scrollHeader = () => {
    const headerElement = selectElement('#header')
    if (window.scrollY >= 15) {
        headerElement.classList.add('activated')
    } else {
        headerElement.classList.remove('activated')
    }
}
window.addEventListener('scroll', scrollHeader)

// 開啟菜單和搜尋彈出視窗 Open menu & search pop-up
const menuToggleIcon = selectElement('#menuToggleIcon')
const toggleMenu = () => {
    const mobileMenu = selectElement('.menu')
    mobileMenu.classList.toggle('activated')
    menuToggleIcon.classList.toggle('activated')
}
menuToggleIcon.addEventListener('click', toggleMenu)

// 開啟/關閉搜尋表單彈出視窗 Open/Close search form popup
const formOpenBtn = selectElement('#searchIcon')
const formCloseBtn = selectElement('#formCloseBtn')
const searchFormContainer = selectElement('#searchFormContainer')
formOpenBtn.addEventListener('click', () => {
    searchFormContainer.classList.add('activated')
})
formCloseBtn.addEventListener('click', () => {
    searchFormContainer.classList.remove('activated')
})
// 在按下 ESC 鍵時關閉搜尋表單彈出視窗 Close the search form popup on ESC keypress
window.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
        searchFormContainer.classList.remove('activated')
    }
})

// 切換主題/新增至本地儲存空間 Switch theme/add to local storage
const bodyElement = document.body
const themeToggleBtn = selectElement('#themeToggleBtn')
const currentTheme = localStorage.getItem('currentTheme')

if (currentTheme) {
    bodyElement.classList.add('lightTheme')
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('lightTheme')
    if (bodyElement.classList.contains('lightTheme')) {
        localStorage.setItem('currentTheme', 'themeActive')
    } else {
        localStorage.removeItem('currentTheme')
    }
})
