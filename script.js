
const bibleQuotes = [
    "主是我的牧者，我必不至缺乏。— 诗篇 23:1",
    "神是我们的避难所，是我们的力量。— 诗篇 46:1",
    "凡等候耶和华的，必重新得力。— 以赛亚书 40:31",
    "不要怕，只要信。— 马可福音 5:36",
    "你们要刚强壮胆，不要害怕。— 申命记 31:6",
    "耶和华靠近伤心的人，拯救灵性痛悔的人。— 诗篇 34:18",
    "耶和华是我的力量，是我的盾牌。— 诗篇 28:7",
    "凡劳苦担重担的人，可以到我这里来，我就使你们得安息。— 马太福音 11:28",
    "不要忧虑，因耶和华是你的倚靠。— 箴言 3:26",
    "疲乏的，他赐能力。软弱的，他加力量。— 以赛亚书 40:29",
    "你当刚强壮胆，耶和华与你同在。— 约书亚记 1:9",
    "愿主赐平安给你们。— 民数记 6:26",
    "你要默然倚靠耶和华，耐性等候他。— 诗篇 37:7",
    "神能照着运行在我们心里的大力成就一切。— 以弗所书 3:20",
    "祂医好伤心的人，裹好他们的伤处。— 诗篇 147:3",
    "主耶和华是日头，是盾牌，赐下恩惠和荣耀。— 诗篇 84:11",
    "耶和华是我的力量和诗歌，也成了我的拯救。— 诗篇 118:14",
    "信靠耶和华的人，像锡安山，永不动摇。— 诗篇 125:1",
    "义人的脚步被耶和华立定。— 诗篇 37:23",
    "神必看顾你们。— 出埃及记 3:16",
    "敬畏耶和华是智慧的开端。— 箴言 9:10",
    "义人必因信得生。— 加拉太书 3:11",
    "你们要靠主常常喜乐。— 腓立比书 4:4",
    "耶和华所赐的福使人富足，并不加上忧虑。— 箴言 10:22",
    "他必将你隐藏在他帐幕的隐密处。— 诗篇 27:5",
    "你不要害怕，因为我与你同在。— 以赛亚书 41:10",
    "万事都互相效力，叫爱神的人得益处。— 罗马书 8:28",
    "耶和华是我的避难所，你已将至高者当你的居所。— 诗篇 91:9",
    "愿你们在盼望中喜乐，在患难中忍耐，祷告要恒切。— 罗马书 12:12",
    "神赐给我们不是胆怯的心，乃是刚强、仁爱、自律的心。— 提摩太后书 1:7",
    "耶和华必在你前面行，与你同在，必不撇下你，也不丢弃你。— 申命记 31:8",
    "你要专心仰赖耶和华，不可倚靠自己的聪明。— 箴言 3:5",
    "耶和华是我性命的保障，我还怕谁呢？— 诗篇 27:1",
    "我留下平安给你们，我所赐的，不像世人所赐的。— 约翰福音 14:27",
    "他赐人出人意外的平安，保守你们的心怀意念。— 腓立比书 4:7",
    "你们要将一切的忧虑卸给神，因为他顾念你们。— 彼得前书 5:7",
    "耶和华必为你争战，你们只管静默。— 出埃及记 14:14",
    "要以感恩的心度日。— 歌罗西书 3:15",
    "他必在患难之日隐藏我，在他亭子里藏我。— 诗篇 27:5",
    "义人必像黎明的光，越照越明。— 箴言 4:18",
    "神所应许的，必要成就。— 罗马书 4:21",
    "我总不撇下你，也不丢弃你。— 希伯来书 13:5",
    "神靠近伤心的人，拯救灵性痛悔的人。— 诗篇 34:18",
    "主的恩典够你用的，因为他的能力是在人的软弱上显得完全。— 哥林多后书 12:9",
    "义人的祈祷是大有功效的。— 雅各书 5:16",
    "凡等候耶和华的，必不致羞愧。— 诗篇 25:3",
    "他必用自己的羽毛遮蔽你，你要投靠在他的翅膀底下。— 诗篇 91:4",
    "耶和华所定的日子，我们要高兴欢喜。— 诗篇 118:24",
    "你不要害怕，因为我救赎了你。— 以赛亚书 43:1"
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
    
