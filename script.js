
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
    'https://images.unsplash.com/photo-1521747116042-5a810fda9664',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    'https://images.unsplash.com/photo-1608571427036-94d62c7f47b2',
    'https://images.unsplash.com/photo-1500534623283-312aade485b7',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
    'https://images.unsplash.com/photo-1516849841032-97e8e515c605',
    'https://images.unsplash.com/photo-1532673466406-0565e5e843b9',
    'https://images.unsplash.com/photo-1470770903676-69b98201ea1c',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
    'https://images.unsplash.com/photo-1490730141103-6cac27aaab94',
    'https://images.unsplash.com/photo-1469406396016-013b0f5e4c81',
    'https://images.unsplash.com/photo-1473447517481-15a94b36b7ec',
    'https://images.unsplash.com/photo-1513829693384-125b494f44be',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5',
    'https://images.unsplash.com/photo-1496875278409-022e7bc6f27a',
    'https://images.unsplash.com/photo-1471623432079-b009d30b6729'
];

const defaultBackground = 'https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2';

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
    