// ===========================
// カードデータ（仮データ 44枚）
// スプレッドシートの内容をここに入れ替えてください
// ===========================

const CARDS = [
{
id: "00",
titleEn: "The Map of Light",
titleJa: "光の地図",
affirmationEn: "I walk the path drawn on my soul’s map of light.",
affirmationJa: "私は魂の光の地図に描かれた道を歩みます。",
message: ""
},
{
id: "01",
titleEn: "The Lantern of Trust",
titleJa: "信頼の灯火",
affirmationEn: "I trust the universe and share my light with others.",
affirmationJa: "私は宇宙を信頼し、自らの光を分かち合います。",
message: "これまで、たくさんのことを自分ひとりで抱えてきたのかもしれません。誰かに迷惑をかけないように、失敗しないように、先回りして考えて、できるだけ自分で何とかしようとしてきた。その頑張りは、あなた自身や大切な人を守るためだったのでしょう。でも、何もかも自分で背負おうとすると、心はいつの間にか休めなくなってしまいます。<br>今、両手をぎゅっと握っているような感覚があれば、ほんの少し力をゆるめてみましょう。「これは私が背負うこと？」「これは相手に委ねても大丈夫？」と、自分の課題と相手の課題を静かに分けてみてください。すべてを自分の力で動かさなくても、世界はちゃんと動いていきます。<br>手をゆるめることは、自分を無防備にすることではありません。自分で背負うものと、相手に委ねるものを分けながら、自分の内側に「ここにいて大丈夫」と思える安心をつくっていくことです。思考の癖に気づき、それを少しずつ癒していくことで、信じる力も育っていきます。<br>もう、ひとりですべてを抱えなくて大丈夫。自分で握りしめなくても、必要なものは必要な場所で動いています。少し力をゆるめたその余白に、今まで気づかなかった新たな安心が芽吹きます。"
},
{
id: "02",
titleEn: "The Crystal of Earth",
titleJa: "大地のクリスタル",
affirmationEn: "I am grounded and safe, rooted deeply in the earth.",
affirmationJa: "私は大地に根を張り、安心してここにいます",
message: ""
},
{
id: "03",
titleEn: "The Compass of Truth",
titleJa: "真実のコンパス",
affirmationEn: "I stand in my truth and let it guide my way.",
affirmationJa: "私は真実の軸に立ち、それを道しるべとします",
message: ""
},
{
id: "04",
titleEn: "The Flame of Release",
titleJa: "浄化の炎",
affirmationEn: "I release what no longer serves me and welcome freedom.",
affirmationJa: "私は不要なものを手放し、自由に羽ばたきます。",
message: "変化は終わりではなく、新しい始まりです。手放すことへの恐れを、信頼へと変えてください。宇宙はあなたをより美しい場所へ連れて行こうとしています。"
},
{
id: "05",
titleEn: "The Feather of Truth",
titleJa: "真実の羽根",
affirmationEn: "I write and speak my heart’s truth with clarity.",
affirmationJa: "私は心の真実をありのままに言葉にします。",
message: ""
},
{
id: "06",
titleEn: "The Drop of Connection",
titleJa: "絆のしずく",
affirmationEn: "I heal my relationships and return to love.",
affirmationJa: "私はつながりを癒し、愛へ還ります。",
message: ""
},
{
id: "07",
titleEn: "The Harp of the Stars",
titleJa: "星々のハープ",
affirmationEn: "I am in harmony with the universe, and my heart sings with the stars.",
affirmationJa: "私は宇宙と調和し、星々と共に心の歌を奏でます。",
message: ""
},
{
id: "08",
titleEn: "The Golden Key",
titleJa: "黄金の鍵",
affirmationEn: "I open the door to abundance and love.",
affirmationJa: "私は愛と豊かさの扉を開きます。",
message: ""
},
{
id: "09",
titleEn: "The Akashic Gate",
titleJa: "アカシックの扉",
affirmationEn: "I open the Akashic gate and remember my soul’s wisdom.",
affirmationJa: "私はアカシックの扉を開き、魂の叡智を思い出します。",
message: ""
},
{
id: "10",
titleEn: "The Mirror Drop",
titleJa: "鏡の雫",
affirmationEn: "I accept myself as I am and reflect my pure light.",
affirmationJa: "私はあるがままの自分を受け入れ、自らの光を映します。",
message: ""
},
{
id: "11",
titleEn: "The Hourglass of Now",
titleJa: "砂時計",
affirmationEn: "I return to the present moment with calm and clarity.",
affirmationJa: "私は穏やかさと澄んだ心で、今この瞬間に戻ります。",
message: ""
},
{
id: "12",
titleEn: "The Wand of Light",
titleJa: "光の杖",
affirmationEn: "I align my energy and shine as pure light.",
affirmationJa: "私はエネルギーを整え、私らしい光で輝きます。",
message: ""
},
{
id: "13",
titleEn: "Breathe Deeply",
titleJa: "神殿に入る深く息をする",
affirmationEn: "With every breath, I return to myself.",
affirmationJa: "一息ごとに、私は私へ還ります。",
message: `あなたは、長い間、誰かのために心を尽くしてきました。家族や周囲のことを優先して、自分の心や体を後回しにしてきたかもしれません。その優しさは尊い宝物ですが、知らず知らずのうちに息も浅くなり、緊張や疲れを抱え込んでしまっていることもあります。

今、静かに目を閉じて、深く息を吸い込みましょう。息を吸うたびに、あなたの内側に柔らかな光が流れ込み、生命のエネルギーが体の隅々まで巡っていきます。吐くときには、重みや緊張、もう必要のない思いをそっと手放します。大樹の根のようにあなたを支える安心感を感じ、光の粒子が周囲を優しく包み込むのを思い描いてください。あなたは一人ではありません。見えないサポートが、静かにあなたを見守っています。

過去に抱え込んできた迷いや疲れも、深呼吸とともに少しずつ溶けていきます。昨日の心配や不安は今ここで解放され、心の奥に静けさが広がっていくのを感じるでしょう。呼吸を意識するたびに、あなたは自分の中心に戻り、心と体が優しく整えられていきます。朝日が森を柔らかく照らすように、毎日の新しい始まりが自然と訪れます。

小さな深呼吸を重ねるたびに、あなたの魂のリズムはゆっくりと整い、心に軽やかさと安心感が広がります。深く息を吸い、光とともに吐き出す時間は、ただの呼吸ではなく、あなた自身を優しく抱きしめ、魂を思い出させる魔法の瞬間です。今日も明日も、まずは一息ごとに、自分の内側に戻ってみましょう。`
},
  
{
id: "14",
titleEn: "Plant the Seed",
titleJa: "種を植える",
affirmationEn: "I plant new intentions and nurture them with love.",
affirmationJa: "私は新しい意図の種を植え、愛で育てます。",
message: `あなたの手のひらに小さな種をそっとのせると、心の奥で静かな希望が芽吹くのを感じます。この種は、ただの植物ではなく、あなたの想い、願い、未来への意図の象徴です。土に落とし、優しく覆い、光や水を与えるように、あなたは自分の内なる願いに寄り添い、育てていくことができます。
  
  種を植える瞬間、長く抱えてきた不安や迷いをそっと手放せます。まだ形になっていない小さな一歩ですが、それは未来へ続く冒険の始まりです。奥に延びる道が薄く見えるときも、安心してください。見えない世界で種は確実に根を張り、やがて芽を出し、花を咲かせます。土の中の小さな命のように、あなたの内側でも奇跡が静かに育まれているのです。
  
  日々の中で少しずつ意図に向き合うことで、心のワクワクや好奇心が広がり、願いが自然と形になっていきます。遊園地のように色とりどりの世界を想像しながら、新しい挑戦や冒険を楽しんでください。小さな種の中には、無限の可能性が眠っています。今日、あなたの手のひらから植えたその小さな命が、静かに未来をつむぎ出していくのを感じてみましょう。

  一歩ずつ、自分のペースで、でも確実に。小さな希望の種は、あなたの心と魂を育て、やがて花開く日を待っています。呼吸を整えながら、この瞬間を大切にしてください。`
},
  
{
id: "15",
titleEn: "Stand for Your Dream",
titleJa: "夢を引き受ける",
affirmationEn: "I stand firmly for the dream my soul whispers.",
affirmationJa: "私は自らの夢を引き受け、揺るがず立ちます。",
message: ""
},
{
id: "16",
titleEn: "Create Boundaries",
titleJa: "境界線をつくる",
affirmationEn: "I honor my space and create healthy boundaries.",
affirmationJa: "私は自分と他者の境界線を健やかに引きます。",
message: ""
},
{
id: "17",
titleEn: "Hear the Silence",
titleJa: "静寂を聴く",
affirmationEn: "In silence, I hear my soul’s voice.",
affirmationJa: "静けさの中で、私は魂の声を聴きます。",
message: ""
},
{
id: "18",
titleEn: "Return to Yourself",
titleJa: "私に還る",
affirmationEn: "I return to sacred balance within my mind, body, and spirit.",
affirmationJa: "私は心と体と魂の調和へ、静かに戻ります",
message: ""
},
{
id: "19",
titleEn: "Flow with Life",
titleJa: "流れに委ねる",
affirmationEn: "I surrender to life’s flow with trust and ease.",
affirmationJa: "私は人生の流れを信頼し、穏やかに身を委ねます。",
message: ""
},
{
id: "20",
titleEn: "Step into Courage",
titleJa: "勇気を持って踏み出す",
affirmationEn: "I take one step forward with courage and faith.",
affirmationJa: "私は勇気とともに一歩を踏み出します。",
message: ""
},
{
id: "21",
titleEn: "Heal Yourself",
titleJa: "自分を癒す",
affirmationEn: "I embrace myself with love and healing light.",
affirmationJa: "私は愛と癒しの光で、自分自身を癒します。",
message: ""
},
{
id: "22",
titleEn: "Face the Shadow",
titleJa: "影と向き合う",
affirmationEn: "I welcome my shadow and transform it into power.",
affirmationJa: "私は自分の影を受け入れ、それを力に変えていきます。",
message: ""
},
{
id: "23",
titleEn: "Trust Yourself",
titleJa: "自分を信じる",
affirmationEn: "I trust my intuition and inner wisdom.",
affirmationJa: "私は自らの直感を信じます。",
message: ""
},
{
id: "24",
titleEn: "Find the Center",
titleJa: "中心に戻る",
affirmationEn: "I return to my center, calm and strong.",
affirmationJa: "私は中心に戻り、静かに真実を見極めます。",
message: ""
},
{
id: "25",
titleEn: "Shine Your Light",
titleJa: "光を放つ",
affirmationEn: "I shine my unique light fearlessly into the world.",
affirmationJa: "私は、私だけの光を恐れず世界へ放ちます。",
message: ""
},
{
id: "26",
titleEn: "Follow the Moon",
titleJa: "月に従う",
affirmationEn: "I flow with the cycles of the moon and my soul.",
affirmationJa: "私は月と魂のリズムに合わせて流れます。",
message: ""
},
{
id: "27",
titleEn: "Cross the Bridge",
titleJa: "橋を渡る",
affirmationEn: "I cross beyond fear into freedom.",
affirmationJa: "私は恐れを越えて自由への橋を渡ります。",
message: ""
},
{
id: "28",
titleEn: "Open the Door",
titleJa: "扉を開く",
affirmationEn: "I open new doors and welcome opportunities.",
affirmationJa: "私は自ら扉を開き、その先へ進みます。",
message: ""
},
{
id: "29",
titleEn: "Choose Freedom",
titleJa: "自由を選ぶ",
affirmationEn: "I choose freedom over fear and limitation.",
affirmationJa: "私は恐れや制限ではなく、自由を選びます。",
message: ""
},
{
id: "30",
titleEn: "Unite with Others",
titleJa: "仲間とつながる",
affirmationEn: "I unite with others in love and shared vision.",
affirmationJa: "私は想いを分かち合い、ともに創ります。",
message: ""
},
{
id: "31",
titleEn: "Reach for the Stars",
titleJa: "星に手を伸ばす",
affirmationEn: "I transcend all boundaries, holding infinite stars in my hands.",
affirmationJa: "私は境界を越え、無限の星々をこの手に抱きます。",
message: ""
},
{
id: "32",
titleEn: "Walk Your Path",
titleJa: "自分の道を歩く",
affirmationEn: "I walk my unique path with confidence and grace.",
affirmationJa: "私は自分だけの道を、焦らず歩みます。",
message: ""
},
{
id: "33",
titleEn: "Abundance",
titleJa: "豊かさを受け取る",
affirmationEn: "I allow abundance to flow easily into my life.",
affirmationJa: "私の人生は、豊かさで満ちています。",
message: ""
},
{
id: "34",
titleEn: "Call in your guardian",
titleJa: "守護者を招く",
affirmationEn: "I allow myself to be supported.",
affirmationJa: "私は支えられることを許します。",
message: ""
},
{
id: "35",
titleEn: "Rise as Phoenix",
titleJa: "不死鳥のように蘇る",
affirmationEn: "I rise from the ashes renewed and stronger.",
affirmationJa: "私は灰の中から蘇り、新たな強さを得ます。",
message: ""
},
{
id: "36",
titleEn: "Enter the Temple",
titleJa: "魂の記憶に触れる",
affirmationEn: "I step into the sacred temple of my soul.",
affirmationJa: "私は魂の記憶へと深く潜ります。",
message: ""
},
{
id: "37",
titleEn: "Hidden Sanctuary",
titleJa: "忘れられた聖域",
affirmationEn: "I unlock the ancient wisdom hidden within the sanctuary.",
affirmationJa: "私は聖域に眠る古代の記憶に触れます。",
message: ""
},
{
id: "38",
titleEn: "Awaken the Dragon",
titleJa: "龍を呼び覚ます",
affirmationEn: "I awaken the dragon of power and wisdom within me.",
affirmationJa: "私は自らの中に眠る力と知恵の龍を目覚めさせます。",
message: ""
},
{
id: "39",
titleEn: "Ignite the Flame",
titleJa: "炎を灯す",
affirmationEn: "I ignite the sacred flame of transformation.",
affirmationJa: "私は灯した炎を守り育てます。",
message: ""
},
{
id: "40",
titleEn: "Download the Library",
titleJa: "宇宙の叡智を受け取る",
affirmationEn: "I download divine wisdom and awaken inner knowing.",
affirmationJa: "私は宇宙の記憶を受け取り、光を思い出します。",
message: ""
},
{
id: "41",
titleEn: "Wear the Crown",
titleJa: "王冠をかぶる",
affirmationEn: "I wear the crown of my soul’s sovereignty.",
affirmationJa: "私は自らの人生の主として、王冠をかぶります。",
message: "",
},
{
id: "42",
titleEn: "Align with the Divine",
titleJa: "宇宙と一つに溶け合う",
affirmationEn: "I am one with the cosmic flow of light and infinite wisdom.",
affirmationJa: "私は星々がつなぐ光の流れの中にいます。",
message: "",
},
{
id: "43",
titleEn: "Become the Light",
titleJa: "光になる",
affirmationEn: "I become pure light and radiate love endlessly.",
affirmationJa: "私は光となり、自らの光を世界へ放ちます。",
message: "",
}
  
];

// =========================== 
// キラキラパーティクル生成
// =========================== 
function createStars() {
  const container = document.getElementById('stars');

  // 丸い粒子（50個）
  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2 + 1;
    star.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size}px;
      --dur: ${Math.random() * 4 + 2}s;
      --delay: ${Math.random() * 8}s;
    `;
    container.appendChild(star);
  }

  // 十字キラキラ（20個）
  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    const size = Math.random() * 7 + 4;
    sparkle.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      --size: ${size}px;
      --dur: ${Math.random() * 6 + 4}s;
      --delay: ${Math.random() * 12}s;
    `;
    container.appendChild(sparkle);
  }

  // 流れ星（1本）
 //  const shooting = document.createElement('div');
 //  shooting.className = 'shooting-star';
 //  shooting.style.cssText = `
  //   left: ${Math.random() * 70 + 10}%;
   //  top: ${Math.random() * 30}%;
   //  --len: ${Math.random() * 60 + 60}px;
   //  --dur: ${Math.random() * 8 + 8}s;
   //  --delay: ${Math.random() * 20 + 5}s;
  // `;
 //  container.appendChild(shooting);
}


// ===========================
// ハンバーガーメニュー
// ===========================
const hamburgerBtn = document.getElementById('hamburgerBtn'); const sideMenu = document.getElementById('sideMenu');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');

function openMenu() {
  sideMenu.classList.add('active');
  menuOverlay.classList.add('active');
}

function closeMenu() {
  sideMenu.classList.remove('active');
  menuOverlay.classList.remove('active');
}

hamburgerBtn.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

// ===========================
// プルダウン生成(00~43)
// ===========================
const cardSelect = document.getElementById('cardSelect');
CARDS.forEach(card => {
  const option = document.createElement('option');
  option.value = card.id;
  option.textContent = `${card.id}  ${card.titleEn}`;
  cardSelect.appendChild(option);
});

// =========================== 
// カード表示関数(フリップ演出付き) 
// =========================== 
function showCard(card) {
  const display = document.getElementById('cardDisplay');
  const flipInner = document.getElementById('cardFlipInner');
  const cardContent = document.getElementById('cardContent');

  // テキストを隠す
  cardContent.style.transition = 'none';
  cardContent.style.opacity = '0';
  cardContent.style.transform = 'translateY(12px)';

  // データをセット
  document.getElementById('cardNumber').textContent = card.id;
  document.getElementById('cardImage').src = `images/${parseInt(card.id)}.png`;
  document.getElementById('cardImage').alt = card.titleEn;
  document.getElementById('cardTitleEn').textContent = card.titleEn;
  document.getElementById('cardTitleJa').textContent = card.titleJa;
  document.getElementById('affirmationEn').textContent = card.affirmationEn;
  document.getElementById('affirmationJa').textContent = card.affirmationJa;
  document.getElementById('cardMessage').textContent = card.message;

  // カードエリア表示
  display.style.display = 'flex';

  // スクロール
  setTimeout(() => {
    display.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);

  // フリップ
  setTimeout(() => {
    flipInner.classList.add('flipped');
  }, 700);

  // テキストフェードイン
  setTimeout(() => {
    cardContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    cardContent.style.opacity = '1';
    cardContent.style.transform = 'translateY(0)';
  }, 2000);
}


// =========================== 
// ランダムにカードを引く
// ===========================
document.getElementById('drawBtn').addEventListener('click', () => {
  const randomCard = CARDS[Math.floor(Math.random() * CARDS.length)];
  document.querySelector('.draw-section').style.display = 'none';
  showCard(randomCard);
});

document.getElementById('drawBtn').addEventListener('touchend', (e) => {
  e.preventDefault();
  const randomCard = CARDS[Math.floor(Math.random() * CARDS.length)];
  document.querySelector('.draw-section').style.display = 'none';
  showCard(randomCard);
});

// ===========================
// 番号から選ぶ
// =========================== 
document.getElementById('selectBtn').addEventListener('click', () => {
  const selectedId = cardSelect.value;
  if (!selectedId) {
    alert('カードを選んでください');
    return;
  }
  const card = CARDS.find(c => c.id === selectedId);
  if (card) {
    closeMenu();
    const flipInner = document.getElementById('cardFlipInner');
    const cardContent = document.getElementById('cardContent');
    flipInner.classList.remove('flipped');
    cardContent.style.transition = 'none';
    cardContent.style.opacity = '0';
    cardContent.style.transform = 'translateY(12px)';
    setTimeout(() => {
      showCard(card);
    }, 1600);
  }
});


// ===========================
// もう一度引く
// =========================== 
// document.querySelector('.draw-section').style.display = 'flex';
document.getElementById('againBtn').addEventListener('click', () => {
  const flipInner = document.getElementById('cardFlipInner');
  const cardContent = document.getElementById('cardContent');

  // テキストを隠す
  cardContent.style.transition = 'none';
  cardContent.style.opacity = '0';
  cardContent.style.transform = 'translateY(12px)';

  // まず裏面に戻す
  flipInner.classList.remove('flipped');

  // 完全に裏返ってから新カードを引く
  setTimeout(() => {
    const randomCard = CARDS[Math.floor(Math.random() * CARDS.length)];
    showCard(randomCard);
  }, 1200);
});


// =========================== 
// 初期化
// =========================== 
createStars();
