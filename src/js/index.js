// 載入模組
import '@js/_common.js'
import { selectElement } from '@js/_common.js'

// 圖片
// 推薦文章
import articleImage1 from '@img/featured/featured-1.jpg'
import articleImage2 from '@img/featured/featured-2.jpg'
import articleImage3 from '@img/featured/featured-3.jpg'
selectElement('#articleImage1').src = articleImage1
selectElement('#articleImage2').src = articleImage2
selectElement('#articleImage3').src = articleImage3

// 推薦文章-側邊欄位
import trending1 from '@img/trending/trending_1.jpg'
import trending2 from '@img/trending/trending_2.jpg'
import trending3 from '@img/trending/trending_3.jpg'
import trending4 from '@img/trending/trending_4.jpg'
import trending5 from '@img/trending/trending_5.jpg'
selectElement('#trending1').src = trending1
selectElement('#trending2').src = trending2
selectElement('#trending3').src = trending3
selectElement('#trending4').src = trending4
selectElement('#trending5').src = trending5

// 快速瀏覽
import quickread1 from '@img/quick_read/quick_read_1.jpg'
import quickread2 from '@img/quick_read/quick_read_2.jpg'
import quickread3 from '@img/quick_read/quick_read_3.jpg'
import quickread4 from '@img/quick_read/quick_read_4.jpg'
import quickread5 from '@img/quick_read/quick_read_5.jpg'
import quickread6 from '@img/quick_read/quick_read_6.jpg'
selectElement('#quickread1').src = quickread1
selectElement('#quickread2').src = quickread2
selectElement('#quickread3').src = quickread3
selectElement('#quickread4').src = quickread4
selectElement('#quickread5').src = quickread5
selectElement('#quickread6').src = quickread6

// 最新文章
import olderPost1 from '@img/older_posts/older_posts_1.jpg'
import olderPost2 from '@img/older_posts/older_posts_2.jpg'
import olderPost3 from '@img/older_posts/older_posts_3.jpg'
import olderPost4 from '@img/older_posts/older_posts_4.jpg'
import olderPost5 from '@img/older_posts/older_posts_5.jpg'
import olderPost6 from '@img/older_posts/older_posts_6.jpg'
selectElement('#olderPost1').src = olderPost1
selectElement('#olderPost2').src = olderPost2
selectElement('#olderPost3').src = olderPost3
selectElement('#olderPost4').src = olderPost4
selectElement('#olderPost5').src = olderPost5
selectElement('#olderPost6').src = olderPost6

// 標籤
import travelTag from '@img/tags/travel-tag.jpg'
import foodTag from '@img/tags/food-tag.jpg'
import technologyTag from '@img/tags/technology-tag.jpg'
import healthTag from '@img/tags/health-tag.jpg'
import natureTag from '@img/tags/nature-tag.jpg'
import fitnessTag from '@img/tags/fitness-tag.jpg'
selectElement('#travelTag').src = travelTag
selectElement('#foodTag').src = foodTag
selectElement('#technologyTag').src = technologyTag
selectElement('#healthTag').src = healthTag
selectElement('#natureTag').src = natureTag
selectElement('#fitnessTag').src = fitnessTag

// Swiper
import Swiper from '@js/_swiper-bundle.min.js'
import '@css/_swiper-bundle.min.scss'

function initSwiper() {
    return new Swiper('.swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            700: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    })
}

initSwiper()

// 自定義樣式
import '@css/index.scss'
