let soundList = [
    {"id": "anata", "src":"/maimero/sound/anata.mp3", "label":"あなた、好きな人が振り向いてくれないんですって？"},
    {"id": "anatano", "src":"/maimero/sound/anatano.mp3", "label":"あなたの馴染みのお店ね"},
    {"id": "irunoyone", "src":"/maimero/sound/irunoyone.mp3", "label":"いるのよねぇ"},
    {'id': 'anatatte', 'src': '/maimero/sound/anatatte.mp3', 'label': 'あなたって彼女いない歴が年と同じタイプ？'},
    {'id': 'ara', 'src': '/maimero/sound/ara.mp3', 'label': 'あら、夫婦がいちゃついてどこが悪いのかしら？'},
    {'id': 'axtu', 'src': '/maimero/sound/axtu.mp3', 'label': 'あっ'},
    {'id': 'buttemoiinoyo', 'src': '/maimero/sound/buttemoiinoyo.mp3', 'label': 'ぶってもいいのよ'},
    {'id': 'daikyouha', 'src': '/maimero/sound/daikyouha.mp3', 'label': '大凶は大吉より数が少ないから、ある意味ラッキーだって言うけど？'},
    {'id': 'dakara', 'src': '/maimero/sound/dakara.mp3', 'label': 'だからもう来ないでって言われちゃうのよ'},
    {'id': 'dousitano', 'src': '/maimero/sound/dousitano.mp3', 'label': 'どうしたの偉そうなこと言ってたのに'},
    {'id': 'dousite', 'src': '/maimero/sound/dousite.mp3', 'label': 'どうして私がリアカーを引いているのかしら'},
    {'id': 'ha-i', 'src': '/maimero/sound/ha-i.mp3', 'label': 'はーい（マイメロ）'},
    {'id': 'hanasinasai', 'src': '/maimero/sound/hanasinasai.mp3', 'label': 'はなしなさいっ！（マイメロパパ）'},
    {'id': 'hitottene', 'src': '/maimero/sound/hitottene.mp3', 'label': '人ってね、権力を手に入れると'}, 
    {'id': 'hontoune', 'src': '/maimero/sound/hontoune.mp3', 'label': '本当ね'},
    {'id': 'huhuhu', 'src': '/maimero/sound/huhuhu.mp3', 'label': 'ふふふ'},
    {'id': 'hu-n', 'src': '/maimero/sound/hu-n.mp3', 'label': 'ふーーーーーん'},
    {'id': 'huxtu', 'src': '/maimero/sound/huxtu.mp3', 'label': 'ふっ'},
    {'id': 'iiwake', 'src': '/maimero/sound/iiwake.mp3', 'label': '崖っぷちでもとことん言い訳する女々しい男って'},
    {'id': 'ikudinasi', 'src': '/maimero/sound/ikudinasi.mp3', 'label': '意気地なしね'},
    {'id': 'irunoyone', 'src': '/maimero/sound/irunoyone.mp3', 'label': 'いるのよねぇ'},
    {'id': 'issyouno', 'src': '/maimero/sound/issyouno.mp3', 'label': '一生の不覚よ'},
    {'id': 'itidoya', 'src': '/maimero/sound/itidoya.mp3', 'label': '一度や二度の失敗でくよくよするような男を掴んだら'},
    {'id': 'ittawayone', 'src': '/maimero/sound/ittawayone.mp3', 'label': 'いったわよね'},
    {'id': 'iyaxa', 'src': '/maimero/sound/iyaxa.mp3', 'label': 'いやぁ、、これは、、（マイメロパパ）'},
    {'id': 'kagayakiwo', 'src': '/maimero/sound/kagayakiwo.mp3', 'label': '輝きを失う男って'},
    {'id': 'kekkou', 'src': '/maimero/sound/kekkou.mp3', 'label': '結構いるのよねぇ'},
    {'id': 'koinibukiyou', 'src': '/maimero/sound/koinibukiyou.mp3', 'label': '恋に不器用な男ほど'},
    {'id': 'kokodemo', 'src': '/maimero/sound/kokodemo.mp3', 'label': 'ここでもあなた、女の子に説教して回っているんでしょう？'},
    {'id': 'komonohodo', 'src': '/maimero/sound/komonohodo.mp3', 'label': '小物ほど大きく見せたがるって言うけど'},
    {'id': 'kutihodonimo', 'src': '/maimero/sound/kutihodonimo.mp3', 'label': '口ほどにもないじゃない'},
    {'id': 'maimero', 'src': '/maimero/sound/maimero.mp3', 'label': 'マイメロ、駆け落ちなんてやめておくれ（マイメロパパ）'},
    {'id': 'mamagaitteta', 'src': '/maimero/sound/mamagaitteta.mp3', 'label': 'ってママが言ってたわ（マイメロ）'},
    {'id': 'manuke', 'src': '/maimero/sound/manuke.mp3', 'label': 'ま、ぬ、けー！（モブ）'},
    {'id': 'mottootokowo', 'src': '/maimero/sound/mottootokowo.mp3', 'label': 'もっと男を選びなさいっていつも言ってるでしょう！？'},
    {'id': 'mukasibanasi', 'src': '/maimero/sound/mukasibanasi.mp3', 'label': '昔話ばかりしてる男ほど、将来を期待できないものよ。'},
    {'id': 'mukutina', 'src': '/maimero/sound/mukutina.mp3', 'label': '無口な自分をかっこいいと思っているのよ'},
    {'id': 'nandesutte', 'src': '/maimero/sound/nandesutte.mp3', 'label': 'なんですって？'},
    {'id': 'naniitteru', 'src': '/maimero/sound/naniitteru.mp3', 'label': 'なにいってるのこの子'},
    {'id': 'onegai', 'src': '/maimero/sound/onegai.mp3', 'label': 'お願い（マイメロパパ）'},
    {'id': 'onnanokoga', 'src': '/maimero/sound/onnanokoga.mp3', 'label': '女の子が気にしていることを言う男は'},
    {'id': 'onnnattene', 'src': '/maimero/sound/onnnattene.mp3', 'label': '女ってね、だめな男ほど愛しく思える時があるのよ'},
    {'id': 'onoreno', 'src': '/maimero/sound/onoreno.mp3', 'label': '己の器もわきまえず'},
    {'id': 'otokoha', 'src': '/maimero/sound/otokoha.mp3', 'label': '男は先手必勝よ'},
    {'id': 'otokotte', 'src': '/maimero/sound/otokotte.mp3', 'label': '男って、プライドを傷つけられるのが一番こたえるのよ'},
    {'id': 'otomodati', 'src': '/maimero/sound/otomodati.mp3', 'label': 'お友達はちゃんと選ばないと、後で後悔するのは自分自身よ'},
    {'id': 'papaha', 'src': '/maimero/sound/papaha.mp3', 'label': 'パパは野菜を育てて、ママはパパを育ててるのよ'},
    {'id': 'sonna', 'src': '/maimero/sound/sonna.mp3', 'label': 'そんな、、、'},
    {'id': 'sonnakoto', 'src': '/maimero/sound/sonnakoto.mp3', 'label': 'そんなことに文句を言うなんて'},
    {'id': 'sorya', 'src': '/maimero/sound/sorya.mp3', 'label': 'そんなに怖い顔で迫られたら誰だって逃げ出すわよ'},
    {'id': 'soune', 'src': '/maimero/sound/soune.mp3', 'label': 'そうね、この先もずっとラブラブが続くといいわね'},
    {'id': 'tasika', 'src': '/maimero/sound/tasika.mp3', 'label': '確か結婚するとき'},
    {'id': 'tippoke', 'src': '/maimero/sound/tippoke.mp3', 'label': '対して何もしてない男ほど自分の小さな栄光を形にしたがるものよ'},
    {'id': 'tukattemitaku', 'src': '/maimero/sound/tukattemitaku.mp3', 'label': 'つかってみたくなるものよ'},
    {'id': 'tyoutenni', 'src': '/maimero/sound/tyoutenni.mp3', 'label': '頂点に立った途端'},
    {'id': 'urusaina', 'src': '/maimero/sound/urusaina.mp3', 'label': 'うるさいな（マイメロパパ）'},
    {'id': 'utinopapa', 'src': '/maimero/sound/utinopapa.mp3', 'label': ' うちのぱぱでさえ、できたのよ'},
    {'id': 'yononaka', 'src': '/maimero/sound/yononaka.mp3', 'label': '世の中知っていいことと、知らないほうがいいことがあるのよ。'},
    {'id': 'zibunga', 'src': '/maimero/sound/zibunga.mp3', 'label': '自分が持てないからひがんでいるとしか思えないわね'},
    {'id': 'zibunha', 'src': '/maimero/sound/zibunha.mp3', 'label': '自分はたいしたことないくせに'},
    {'id': 'zubatto', 'src': '/maimero/sound/zubatto.mp3', 'label': 'どうしてズバッと告れないの？'}
]

let soundResource = new Object();
var soundLoadedcount = 0;

window.onload = init();

function init(){
    $("h3.state").text("状態：開始待機中...");
}

function play(id) {
    var sound = soundResource[id];
    if(sound){
        try{
            sound.currentTime = 0;
            sound.play();
        }catch(e){

        }
    }
}

function loadSound(){
    $("h3.state").text("状態：読込開始中...");
    $("button.soundLoadbutton").hide();
    for (var i=0; i< soundList.length; i++){
        var audio = new Audio(soundList[i].src);
        soundResource[soundList[i].id] = audio;
        audio.load();
        soundLoadedcount++;
        $("h3.state").text("状態："+soundLoadedcount+" / "+soundList.length);
    }
    $("h3.state").text("状態：読込完了");
    $("div.soundLoadbackground").hide();
    $("h3.state").hide();
    $("h3.soundLoadTitle").hide();
    placeButton();
}
function placeButton(){
    let html = "";
    for (var i=0; i < soundList.length; i++){
        html += "<button class='player' onclick=play('"+soundList[i].id+"')>"+soundList[i].label+"</button>";
    }
    $("div.soundButton").html(html);
}
