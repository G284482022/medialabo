let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);
let kaisu = 0;
let a = document.querySelector('#print');
a.addEventListener('click',hantei);
let cnt = 0;
function hantei() {
    kaisu = kaisu+1;
    let e1 = document.querySelector('span#kaisu');
    e1.textContent = kaisu;
    let yoso1 = document.querySelector('input[name="answer"]');
    let yoso = Number(yoso1.value);
    
    let yoso2=0;
    let e2 = document.querySelector('span#answer');
    e2.textContent = yoso;
    let e3 = document.querySelector('p#result');
    if(yoso === kotae){
        cnt = cnt+1;
        if(kaisu === 1 && cnt === 1){
            e3.textContent = '正解です.おめでとう!';
        }else if(kaisu === 2 && cnt === 1){
            e3.textContent = '正解です.おめでとう!';
        }else if(kaisu === 2 && cnt === 2){
            e3.textContent = '答えは '+kotae+' でした. すでにゲームは終わっています';
        }else if(kaisu === 3 && cnt ===1){
            e3.textContent = '正解です.おめでとう!';
        }else if(kaisu >= 3&&cnt > 3){
            e3.textContent = '答えは '+kotae+' でした. すでにゲームは終わっています';
        }
    }else if(kaisu === 3){
        if(kotae !== yoso){
        e3.textContent = 'まちがい.残念でした答えは'+kotae+'です.';
        }
    }else if(kotae > yoso){
        e3.textContent = 'まちがい.答えはもっと大きいですよ';
    }else if(yoso > kotae){
        e3.textContent = 'まちがい.答えはもっと小さいですよ';
    }else if(kaisu >= 4){
        e3.textContent = '答えは '+kotae+' でした. すでにゲームは終わっています';
    } 
}