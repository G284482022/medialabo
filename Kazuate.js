let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);
let kaisu = 0;
hantei();
hantei();
hantei();
hantei();
function hantei() {
        let yoso = 4;
        kaisu = kaisu+1;
        console.log(kaisu);
        console.log(kaisu+"回目の予想:"+yoso);
        if(kaisu>3){
        if(yoso>kotae){
            console.log("まちがい.答えはもっと大きいですよ");
        }else if(yoso<kotae){
            console.log("まちがい.答えはもっと小さいですよ");
        }else if(yoso===kotae){
            console.log("正解です.おめでとう");
        }if(kaisu===3){
            console.log("まちがい.残念でした答えは"+kotae+"です.");
        }else if(kaisu>=4){
            console.log("答えは"+kotae+"でした. すでにゲームは終わっています")
        }
        }
    }