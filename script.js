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
message: "あなたの魂は新しい旅の始まりを告げています。完璧な準備が整うのを待つ必要はありません。今この瞬間、あなたはすでに十分です。一歩踏み出すその勇気が、道を照らす星になります。"
},
{
id: "01",
titleEn: "TRUST YOURSELF",
titleJa: "自分を信じる",
affirmationEn: "I trust my intuition and inner wisdom.",
affirmationJa: "私は自分の直感と内なる知恵を信じる。",
message: "あなたの内側には、すべての答えがあります。外の世界に答えを求めるより、静かに内なる声に耳を傾けてください。その声はいつもあなたを正しい方向へ導いています。"
},
{
id: "02",
titleEn: "OPEN YOUR HEART",
titleJa: "心を開く",
affirmationEn: "I open my heart to love and infinite possibility.",
affirmationJa: "私は愛と無限の可能性に心を開く。",
message: "心を開くことは、無防備になることではありません。それは、宇宙からの贈り物を受け取る準備ができたということ。あなたの心の扉を、そっと開いてみてください。"
},
{
id: "03",
titleEn: "FIND YOUR PATH",
titleJa: "道を見つける",
affirmationEn: "I return to my center and find my true path.",
affirmationJa: "私は中心に戻り、真の道を見つける。",
message: "迷いを感じているとき、それは新しい道が開こうとしているサインです。焦らず、あなたのペースで進んでください。魂はすでに目的地を知っています。"
},
{
id: "04",
titleEn: "EMBRACE CHANGE",
titleJa: "変化を受け入れる",
affirmationEn: "I welcome change as a sacred gift of growth.",
affirmationJa: "私は変化を成長の聖なる贈り物として歓迎する。",
message: "変化は終わりではなく、新しい始まりです。手放すことへの恐れを、信頼へと変えてください。宇宙はあなたをより美しい場所へ連れて行こうとしています。"
},
{
id: "05",
titleEn: "GROUND YOUR ROOTS",
titleJa: "根を張る",
affirmationEn: "I am rooted in the earth and open to the sky.",
affirmationJa: "私は大地に根ざし、空へと開かれている。",
message: "木が高く伸びるためには、深く根を張る必要があります。今は静かに自分の基盤を整える時。安定した土台があるから、あなたは思い切り花を咲かせることができます。"
},
{
id: "06",
titleEn: "RECEIVE ABUNDANCE",
titleJa: "豊かさを受け取る",
affirmationEn: "I allow abundance to flow freely into my life.",
affirmationJa: "私は豊かさが自由に流れ込むことを許す。",
message: "豊かさはすでにあなたのもとへ向かっています。受け取ることへの罪悪感を手放してください。あなたが満たされることで、周りの人たちも輝くことができます。"
},
{
id: "07",
titleEn: "IGNITE THE FLAME",
titleJa: "炎を灯す",
affirmationEn: "I ignite the sacred flame of transformation within.",
affirmationJa: "私は内なる変容の聖なる炎を灯す。",
message: "あなたの中に、消えることのない炎があります。それは情熱であり、創造力であり、魂の核心です。その炎を怖れず、そっと育ててください。"
},
{
id: "08",
titleEn: "WALK YOUR PATH",
titleJa: "自分の道を歩む",
affirmationEn: "I walk my unique path with confidence and grace.",
affirmationJa: "私は自信と優雅さで自分だけの道を歩む。",
message: "誰かの道を羨む必要はありません。あなたの道はあなただけのもの。その独自性こそが、この世界であなたが輝ける理由です。"
},
{
id: "09",
titleEn: "HEAR THE SILENCE",
titleJa: "静寂を聴く",
affirmationEn: "In silence, I hear my soul’s gentle voice.",
affirmationJa: "静寂の中で、私は魂の優しい声を聴く。",
message: "日常の喧騒から離れ、静かな時間を作ってください。沈黙の中にこそ、宇宙からのメッセージが届きます。あなたの魂はいつも、あなたと話したがっています。"
},
{
id: "10",
titleEn: "SET YOUR BOUNDARIES",
titleJa: "境界線を引く",
affirmationEn: "I honor myself and create loving boundaries.",
affirmationJa: "私は自分を大切にし、愛ある境界線を作る。",
message: "境界線は壁ではなく、自分を愛するための形です。「ノー」と言える勇気が、あなたをより深く人と繋がれる存在にします。"
},
{
id: "11",
titleEn: "DOWNLOAD THE VISION",
titleJa: "ビジョンを受け取る",
affirmationEn: "I download divine wisdom and inspired vision.",
affirmationJa: "私は神聖な知恵とインスピレーションを受け取る。",
message: "あなたの夢やビジョンは、宇宙からのギフトです。それが今は荒唐無稽に見えても、魂はその可能性を知っています。まずは信じることから始めましょう。"
},
{
id: "12",
titleEn: "RISE AS PHOENIX",
titleJa: "フェニックスとして蘇る",
affirmationEn: "I rise from the ashes renewed and stronger.",
affirmationJa: "私は灰の中から再生し、より強くなって蘇る。",
message: "終わりだと思っていたものが、実は新しい始まりでした。あなたはもう一度、美しく蘇ることができます。その再生の力はあなたの中にすでにあります。"
},
{
id: "13",
titleEn: "Breathe Deeply",
titleJa: "神殿に入る深く息をする",
affirmationEn: "With every breath, I return to myself.",
affirmationJa: "一息ごとに、私は自分へ戻ります。",
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
affirmationJa: "私は意図の種を植え、愛で育てます。",
message: `あなたの手のひらに小さな種をそっとのせると、心の奥で静かな希望が芽吹くのを感じます。この種は、ただの植物ではなく、あなたの想い、願い、未来への意図の象徴です。土に落とし、優しく覆い、光や水を与えるように、あなたは自分の内なる願いに寄り添い、育てていくことができます。
  
  種を植える瞬間、長く抱えてきた不安や迷いをそっと手放せます。まだ形になっていない小さな一歩ですが、それは未来へ続く冒険の始まりです。奥に延びる道が薄く見えるときも、安心してください。見えない世界で種は確実に根を張り、やがて芽を出し、花を咲かせます。土の中の小さな命のように、あなたの内側でも奇跡が静かに育まれているのです。
  
  日々の中で少しずつ意図に向き合うことで、心のワクワクや好奇心が広がり、願いが自然と形になっていきます。遊園地のように色とりどりの世界を想像しながら、新しい挑戦や冒険を楽しんでください。小さな種の中には、無限の可能性が眠っています。今日、あなたの手のひらから植えたその小さな命が、静かに未来をつむぎ出していくのを感じてみましょう。

  一歩ずつ、自分のペースで、でも確実に。小さな希望の種は、あなたの心と魂を育て、やがて花開く日を待っています。呼吸を整えながら、この瞬間を大切にしてください。`
},
  {
id: "15",
titleEn: "HARP OF THE STARS",
titleJa: "星々のハープ",
affirmationEn: "I am in harmony with the universe and all that is.",
affirmationJa: "私は宇宙と全存在と調和している。",
message: "あなたの存在そのものが、宇宙の音楽の一部です。今感じている不調和も、より大きな調和のプロセス。すべてはうまくいっています。"
},
{
id: "16",
titleEn: "HONOR YOUR GIFTS",
titleJa: "才能を讃える",
affirmationEn: "I honor and share the gifts I came here to give.",
affirmationJa: "私はここに持ってきた才能を讃え、分かち合う。",
message: "あなたが当たり前だと思っていることが、誰かにとっては奇跡かもしれません。あなたの才能を世界と分かち合う時が来ています。"
},
{
id: "17",
titleEn: "STAND IN YOUR TRUTH",
titleJa: "真実の中に立つ",
affirmationEn: "I stand fully in my truth with love and clarity.",
affirmationJa: "私は愛と明晰さの中で真実に完全に立つ。",
message: "あなたの真実は、あなただけのものです。周りの期待より、自分の魂の声を信じてください。本当の自分でいることが、最も美しい生き方です。"
},
{
id: "18",
titleEn: "RELEASE AND FLOW",
titleJa: "手放して流れる",
affirmationEn: "I release what no longer serves me and flow freely.",
affirmationJa: "私はもう必要のないものを手放し、自由に流れる。",
message: "手放すことへの恐れがありますか？でも、川は岩を掴み続けることで前に進めません。手放すことで、あなたは本当に自由になれます。"
},
{
id: "19",
titleEn: "WEAVE YOUR DREAM",
titleJa: "夢を紡ぐ",
affirmationEn: "I weave my dreams into beautiful reality.",
affirmationJa: "私は夢を美しい現実へと紡いでいく。",
message: "夢を持つことは、未来への祈りです。その夢を大切に、毎日少しずつ形にしていきましょう。あなたの夢は、現実になる力を持っています。"
},
{
id: "20",
titleEn: "CONNECT WITH NATURE",
titleJa: "自然と繋がる",
affirmationEn: "I am one with nature and all living beings.",
affirmationJa: "私は自然とすべての生きものと一つになる。",
message: "自然はあなたの最も古い友人です。木々、水、風の声に耳を傾けてください。地球はあなたをいつも、温かく迎え入れています。"
},
{
id: "21",
titleEn: "ILLUMINATE YOUR SHADOW",
titleJa: "影を照らす",
affirmationEn: "I embrace all parts of myself with gentle compassion.",
affirmationJa: "私はすべての自分の部分を優しい慈愛で抱きしめる。",
message: "影は光があるからこそ生まれます。自分の影の部分を否定せず、好奇心を持って向き合ってください。そこにこそ、あなたの最大の宝が眠っています。"
},
{
id: "22",
titleEn: "AWAKEN YOUR SENSES",
titleJa: "感覚を目覚めさせる",
affirmationEn: "I am fully awake, present, and alive in this moment.",
affirmationJa: "私は今この瞬間に完全に目覚め、存在している。",
message: "今、この瞬間の美しさに気づいていますか？五感を全開にして、今ここにある命の豊かさを感じてください。"
},
{
id: "23",
titleEn: "CRYSTAL CLARITY",
titleJa: "クリスタルの明晰さ",
affirmationEn: "My mind and heart are clear as crystal.",
affirmationJa: "私の心と魂はクリスタルのように澄み渡っている。",
message: "混乱の中にも、クリスタルのような純粋な核心があります。静かに内側を見つめると、答えは驚くほど明確に見えてきます。"
},
{
id: "24",
titleEn: "DANCE WITH JOY",
titleJa: "喜びと踊る",
affirmationEn: "I allow joy to move through me freely and fully.",
affirmationJa: "私は喜びが自由に私の中を流れることを許す。",
message: "喜びはあなたの魂の本来の状態です。日常の小さな喜びを見逃さないでください。喜びを選ぶことは、宇宙への感謝の表れです。"
},
{
id: "25",
titleEn: "PLANT YOUR SEEDS",
titleJa: "種を蒔く",
affirmationEn: "I plant seeds of intention with love and patience.",
affirmationJa: "私は愛と忍耐で意図の種を蒔く。",
message: "今は見えなくても、あなたが蒔いた種は確かに育っています。結果を焦らず、愛情を持って育て続けてください。"
},
{
id: "26",
titleEn: "HONOR YOUR BODY",
titleJa: "身体を讃える",
affirmationEn: "I cherish my body as the sacred home of my soul.",
affirmationJa: "私は身体を魂の聖なる家として大切にする。",
message: "あなたの体は、この世界で魂が宿る神聖な場所。体の声に耳を傾け、必要な休息と栄養を与えてください。"
},
{
id: "27",
titleEn: "FLOW WITH GRACE",
titleJa: "優雅に流れる",
affirmationEn: "I move through life with ease, flow, and grace.",
affirmationJa: "私は人生をやすらぎと流れと優雅さで歩む。",
message: "無理に押し進もうとすると、かえって遠回りになることがあります。川の流れのように、自然な流れに乗ってみましょう。"
},
{
id: "28",
titleEn: "OPEN THE GATEWAY",
titleJa: "門を開く",
affirmationEn: "I open the gateway to new possibilities and dimensions.",
affirmationJa: "私は新しい可能性と次元への門を開く。",
message: "目の前の扉が重く感じても、その先には想像を超えた世界が待っています。恐れではなく好奇心を持って、扉を開いてみてください。"
},
{
id: "29",
titleEn: "FEEL YOUR FEELINGS",
titleJa: "感情を感じる",
affirmationEn: "I honor my emotions as sacred messengers of my soul.",
affirmationJa: "私は感情を魂の聖なるメッセンジャーとして大切にする。",
message: "感情を押し込める必要はありません。感情はあなたの魂からのメッセージ。その感情が何を伝えようとしているのか、優しく聞いてみてください。"
},
{
id: "30",
titleEn: "REMEMBER YOUR ORIGIN",
titleJa: "起源を思い出す",
affirmationEn: "I remember who I truly am beyond time and space.",
affirmationJa: "私は時間と空間を超えた真の自分を思い出す。",
message: "あなたは偶然ここにいるのではありません。深い意図と愛の中でここに来ました。あなたの本当の姿と使命を、今ゆっくり思い出してください。"
},
{
id: "31",
titleEn: "SPEAK YOUR TRUTH",
titleJa: "真実を語る",
affirmationEn: "I express my truth with clarity, love, and courage.",
affirmationJa: "私は明晰さと愛と勇気で真実を語る。",
message: "あなたの言葉には力があります。心の中にある言葉を、勇気を持って声に出してください。あなたの声は世界を変える力を持っています。"
},
{
id: "32",
titleEn: "NURTURE YOUR SOUL",
titleJa: "魂を育てる",
affirmationEn: "I lovingly nurture my soul with care and tenderness.",
affirmationJa: "私は愛を持って魂を優しく丁寧に育てる。",
message: "自分自身への愛情を忘れていませんか？魂を育てることは、自分をケアすること。今日、自分に優しくする時間を作ってください。"
},
{
id: "33",
titleEn: "SEEK THE SACRED",
titleJa: "神聖さを求める",
affirmationEn: "I find the sacred in every moment and every breath.",
affirmationJa: "私はすべての瞬間と呼吸の中に神聖さを見出す。",
message: "神聖さは特別な場所にだけあるのではありません。日常のすべての瞬間に、聖なるものが宿っています。"
},
{
id: "34",
titleEn: "WEAVE WITH STARS",
titleJa: "星と共に紡ぐ",
affirmationEn: "I am woven from starlight and ancient love.",
affirmationJa: "私は星の光と古い愛から紡がれている。",
message: "あなたの細胞には宇宙の歴史が刻まれています。星から来て、星へ帰る存在として、今ここでの輝きを信じてください。"
},
{
id: "35",
titleEn: "BUILD YOUR SANCTUARY",
titleJa: "聖域を作る",
affirmationEn: "I create a sacred sanctuary of peace within myself.",
affirmationJa: "私は内側に平和の聖域を作る。",
message: "外の世界がどんなに騒がしくても、あなたの内側には静かな聖域があります。そこへいつでも戻れることを覚えておいてください。"
},
{
id: "36",
titleEn: "LEAP INTO FAITH",
titleJa: "信頼の中へ跳ぶ",
affirmationEn: "I leap forward in faith, knowing I am always held.",
affirmationJa: "私はいつも守られていると知りながら信頼の中へ跳ぶ。",
message: "見えない橋を信じて一歩踏み出す時、足元に橋が現れることがあります。今がその時かもしれません。"
},
{
id: "37",
titleEn: "UNCOVER THE HIDDEN",
titleJa: "隠されたものを明かす",
affirmationEn: "I unveil the ancient wisdom hidden within me.",
affirmationJa: "私は内側に隠された古代の知恵を明らかにする。",
message: "あなたはすでに多くを知っています。意識の表層より深い場所に、膨大な知恵が眠っています。直感というその扉を、信じて開いてください。"
},
{
id: "38",
titleEn: "RETURN TO LOVE",
titleJa: "愛に戻る",
affirmationEn: "I always return to love as my natural home.",
affirmationJa: "私は愛を自然な家として、いつもそこへ戻る。",
message: "迷いや恐れを感じた時、愛へ戻ることを思い出してください。愛こそがあなたの本来の場所であり、すべての答えがある場所です。"
},
{
id: "39",
titleEn: "IGNITE YOUR PASSION",
titleJa: "情熱を燃やす",
affirmationEn: "I ignite my passion and let it light the way.",
affirmationJa: "私は情熱に火を灯し、それを道の光にする。",
message: "何があなたをときめかせますか？その感覚を大切にしてください。情熱はあなたの魂が「これだ！」と言っているサインです。"
},
{
id: "40",
titleEn: "SOFTEN AND RECEIVE",
titleJa: "柔らかく受け取る",
affirmationEn: "I soften my heart and gracefully receive all blessings.",
affirmationJa: "私は心を柔らかくし、すべての祝福を優雅に受け取る。",
message: "受け取ることは、宇宙の流れを信頼することです。今日は力を抜いて、やってくるものをそっと受け取ってみてください。"
},
{
id: "41",
titleEn: "CONNECT YOUR SOULS",
titleJa: "魂と繋がる",
affirmationEn: "I attract and nurture deep, soulful connections.",
affirmationJa: "私は深い魂レベルの繋がりを引き寄せ、育てる。",
message: "魂の深い部分で繋がれる人との出会いは、宇宙からの贈り物です。本当の自分を見せることがそのような縁を引き寄せます。",
},
{
id: "42",
titleEn: "EXPAND YOUR VISION",
titleJa: "ビジョンを広げる",
affirmationEn: "I expand my vision beyond what I can currently see.", affirmationJa: "私は今見えている以上にビジョンを広げる。",
message: "今見えている景色が、すべてではありません。一歩高い場所に立つと、まったく違う世界が広がっていきます。あなたの可能性は、あなたが思う以上に広大です。",
},
{
id: "43",
titleEn: "COMPLETE THE CYCLE",
titleJa: "循環を完成させる",
affirmationEn: "I honor the sacred cycles of endings and beginnings.", affirmationJa: "私は終わりと始まりの聖なる循環を讃える。",
message: "すべてには終わりがあり、すべての終わりに新しい始まりが宿っています。今あなたが経験していることも、大きな循環の一部。信頼して、次の章へ進みましょう。",
}
  
];

// =========================== 
// キラキラパーティクル生成
// =========================== 
  function createStars() {
  const container = document.getElementById('stars');
    
// 丸い粒子(40個)
for (let i = 0; i < 40; i++) {
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
    
// 十字キラキラ(20個・小さめ)
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
    
// 流れ星(1本)
for (let i = 0; i < 1; i++) {
    const shooting = document.createElement('div');
    shooting.className = 'shooting-star';
    shooting.style.cssText = `
      left: ${Math.random() * 80}%;
      top: ${Math.random() * 60}%;
      --len: ${Math.random() * 60 + 40}px;
      --dur: ${Math.random() * 6 + 5}s;
      --delay: ${Math.random() * 20 + 5}s;
      --angle: ${Math.random() * -40 - 10}deg;
`;
    container.appendChild(shooting);
  }
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
  
// まずフリップをリセット 
  flipInner.classList.remove('flipped');
  
// データをセット
document.getElementById('cardNumber').textContent = card.id; 
  document.getElementById('cardImage').src = `images/${parseInt(card.id)}.png`; 
  document.getElementById('cardImage').alt = card.titleEn; 
  document.getElementById('cardTitleEn').textContent = card.titleEn; 
  document.getElementById('cardTitleJa').textContent = card.titleJa; 
  document.getElementById('affirmationEn').textContent = card.affirmationEn; 
  document.getElementById('affirmationJa').textContent = card.affirmationJa; 
  document.getElementById('cardMessage').textContent = card.message;
  
// カードエリア表示(テキストは非表示で) 
  display.style.display = 'flex'; 
  display.style.animation = 'none'; 
  requestAnimationFrame(() => {
    display.style.animation = 'fadeUp 0.5s ease forwards';
  });
  
// テキストを一旦隠す
cardContent.style.opacity = '0'; 
  cardContent.style.transform = 'translateY(12px)';
  
// スクロール 
  setTimeout(() => {
    display.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
  
// 少し待ってからフリップ 
  setTimeout(() => {
    flipInner.classList.add('flipped');
  }, 700);
  
// フリップ完了後にテキストをフェードイン 
  setTimeout(() => {
    cardContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    cardContent.style.opacity = '1';
    cardContent.style.transform = 'translateY(0)';
}, 2000); }

// =========================== 
// ランダムにカードを引く
// ===========================
document.getElementById('drawBtn').addEventListener('click', () => {
  const randomCard = CARDS[Math.floor(Math.random() * CARDS.length)];
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
    showCard(card);
    closeMenu();
  }
});

// ===========================
// もう一度引く
// =========================== 
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
  }, 1800);
});


// =========================== 
// 初期化
// =========================== 
createStars();
