
const bibleQuotes = [
    "主是我的牧者，我必不至缺乏。— 诗篇 23:1",
    "应当一无挂虑，只要凡事藉着祷告。— 腓立比书 4:6",
    "凡事都能做，但不都有益处。— 哥林多前书 10:23",
    "爱是恒久忍耐，又有恩慈。— 哥林多前书 13:4",
    "你们要常常喜乐，不住地祷告，凡事谢恩。— 帖撒罗尼迦前书 5:16-18",
    "凡等候耶和华的，必重新得力。— 以赛亚书 40:31",
    "不要怕，只要信。— 马可福音 5:36"
];

const backgrounds = [
    'https://unsplash.com/photos/sun-light-passing-through-green-leafed-tree-EwKXn5CapA4',
    'https://unsplash.com/photos/clouds-during-golden-hour-hgGplX3PFBg',
    'https://unsplash.com/photos/a-lush-green-forest-filled-with-lots-of-trees-fWBZ9r4vO9M',
    'https://unsplash.com/photos/trees-under-blue-sky-and-stars-during-nighttime-photo-T26KCgCPsCI',
    'https://unsplash.com/photos/a-circle-of-flowers-with-a-sky-in-the-background-FuOfzjxFaV4',
    'https://unsplash.com/photos/a-lake-surrounded-by-mountains-under-a-cloudy-sky-LAyeX0waCDk',
    'https://unsplash.com/photos/a-green-and-blue-sky-filled-with-stars-a6a0aJfzxBQ',
    'https://unsplash.com/photos/low-angle-photography-of-trees-at-daytime-4rDCa5hBlCs',
    'https://unsplash.com/photos/ocean-wave-at-beach-GyDktTa0Nmw',
    'https://unsplash.com/photos/the-sun-is-setting-over-the-ocean-with-rocks-in-the-foreground-Md_-qx-b0-Q',
    'https://unsplash.com/photos/a-road-with-trees-and-mountains-in-the-background--YsC0W2km9I',
    'https://unsplash.com/photos/green-sprout-growing-between-re-bars-nYGVN45DOHg',
    'https://unsplash.com/photos/a-river-with-rocks-and-trees-vb3xwa5WXD4',
    'https://unsplash.com/photos/sun-rays-through-white-cumulus-clouds-yJr1rbbrAGw',
    'https://unsplash.com/photos/green-trees-on-mountain-under-blue-sky-during-daytime-s0WGD6BqLdU',
    'https://unsplash.com/photos/a-sunset-over-a-body-of-water-with-trees-in-the-foreground-dhwDc8TayEE'
];

const defaultBackground = 'https://unsplash.com/photos/low-angle-photography-of-mountain-alps-during-daytime-u5CyQkHRhkQ';

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * bibleQuotes.length);
    const randomBackground = Math.floor(Math.random() * backgrounds.length);
    
    document.getElementById('quote').innerText = bibleQuotes[randomIndex];
    document.getElementById('date').innerText = new Date().toLocaleDateString();
    
    const img = new Image();
    img.src = backgrounds[randomBackground];
    img.onload = function () {
        document.body.style.backgroundImage = `url(${backgrounds[randomBackground]})`;
    };
    img.onerror = function () {
        document.body.style.backgroundImage = `url(${defaultBackground})`;
    };
}

window.onload = getRandomQuote;
    
