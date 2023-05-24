let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);
let kaisu = 0;
hantei();
function hantei() {
    
    kaisu = kaisu+1;
    let e1 = document.querySelector('span#kaisu');
    e1.textContent = kaisu;
    let yoso = 4; 
    let e2 = document.querySelector('span#answer');
    e2.textContent = yoso;

    let e3 = document.querySelector('p#result');
    if(kaisu<3){
        if(yoso<kotae){
            e3.textContent = 'まちがい.答えはもっと大きいですよ';
        }else if(yoso>kotae){
            e3.textContent = 'まちがい.答えはもっと小さいですよ';
        }if((kaisu-1)&&yoso==kotae){
            e3.textContent = '答えは '+kotae+' でした. すでにゲームは終わっています';
        }else if(yoso===kotae){
            e3.textContent = '正解です.おめでとう!';
        }
    }if(kaisu===3){
        if((kaisu-1)&&yoso===kotae){
            e3.textContent = '答えは '+kotae+' でした. すでにゲームは終わっています';
        }else if(yoso===kotae){
            e3.textContent = '正解です.おめでとう!';
        }else{
            e3.textContent = 'まちがい.残念でした答えは '+kotae+' です.';
        }
    }if(kaisu>=4){
        e3.textContent = '答えは '+kotae+' でした. すでにゲームは終わっています';
    } 
}