// let data = {
//   "coord": {
//     "lon": 116.3972,
//     "lat": 39.9075
//   },
//   "weather": [
//     {
//       "id": 803,
//       "main": "Clouds",
//       "description": "曇りがち",
//       "icon": "04d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 9.94,
//     "feels_like": 8.65,
//     "temp_min": 9.94,
//     "temp_max": 9.94,
//     "pressure": 1022,
//     "humidity": 14,
//     "sea_level": 1022,
//     "grnd_level": 1016
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 2.65,
//     "deg": 197,
//     "gust": 4.84
//   },
//   "clouds": {
//     "all": 53
//   },
//   "dt": 1646542386,
//   "sys": {
//     "type": 1,
//     "id": 9609,
//     "country": "CN",
//     "sunrise": 1646520066,
//     "sunset": 1646561447
//   },
//   "timezone": 28800,
//   "id": 1816670,
//   "name": "北京市",
//   "cod": 200
// };

////////// 課題3-2 ここからプログラムを書こう
// console.log(data.name);
// console.log(data.main.temp_max);
// console.log(data.main.temp_min);
let a = document.querySelector('button#btn');
a.addEventListener('click', showSelectResult);

function showSelectResult(){
  let s = document.querySelector('select#weather');
  let idx = s.selectedIndex;  
  let os = s.querySelectorAll('option');  
  let o = os.item(idx);
  let o1 = o.value;
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+o1+'.json';
  console.log(url);
  axios.get(url)
        .then(showResult)   
        .catch(showError)   
        .then(finish);
} 
function showResult(resp){
  let data = resp.data;
  if(typeof data === 'string'){
    data = JSON.parse(data);
  }
  let e1 = document.querySelector('span#kekka');
    e1.textContent = data.coord.lon;
  let e2 = document.querySelector('span#kekka1');
    e2.textContent = data.coord.lat;
  let e3 = document.querySelector('span#kekka2');
    e3.textContent = data.weather[0].description;
  let e4 = document.querySelector('span#kekka3');
    e4.textContent = data.main.temp_min;
  let e5 = document.querySelector('span#kekka4');
    e5.textContent = data.main.temp_max;
  let e6 = document.querySelector('span#kekka5');
    e6.textContent = data.main.humidity;
  let e7 = document.querySelector('span#kekka6');
    e7.textContent = data.wind.speed;
  let e8 = document.querySelector('span#kekka7');
    e8.textContent = data.wind.deg;
  let e9 = document.querySelector('span#kekka8');
    e9.textContent = data.name;

  let k = document.querySelector('span#kou');
    k.textContent = '緯度:';
  let k1 = document.querySelector('span#kou1');
    k1.textContent = '経度:';
  let k2 = document.querySelector('span#kou2');
    k2.textContent = '天気:';
  let k3 = document.querySelector('span#kou3');
    k3.textContent = '最低気温:';
  let k4 = document.querySelector('span#kou4');
    k4.textContent = '最高気温:';
  let k5 = document.querySelector('span#kou5');
    k5.textContent = '湿度:';
  let k6= document.querySelector('span#kou6');
    k6.textContent = '風速:';
  let k7 = document.querySelector('span#kou7');
    k7.textContent = '風向:';
  let k8 = document.querySelector('span#kou8');
    k8.textContent = '都市名:';

  let d = document.querySelector('span#do');
    d.textContent = '度';
  let d1 = document.querySelector('span#do1');
    d1.textContent = '度';
  let d2 = document.querySelector('span#doc');
    d2.textContent = '°C';
  let d3 = document.querySelector('span#doc1');
    d3.textContent = '°C';
  let d4 = document.querySelector('span#per');
    d4.textContent = '%';
  let d5 = document.querySelector('span#mmai');
    d5.textContent = 'm/s';
  let d6 = document.querySelector('span#kt');
    d6.textContent = 'kt';
   
}
let c1 = document.querySelector('#cell1');
c1.addEventListener('mouseover', changeColor);

let c2 = document.querySelector('#cell2');
c2.addEventListener('mouseover', changeColor);

let c3 = document.querySelector('#cell3');
c3.addEventListener('mouseover', changeColor);

let c4 = document.querySelector('#cell4');
c4.addEventListener('mouseover', changeColor);

let c5 = document.querySelector('#cell5');
c5.addEventListener('mouseover', changeColor);

let c6 = document.querySelector('#cell6');
c6.addEventListener('mouseover', changeColor);

let c7 = document.querySelector('#cell7');
c7.addEventListener('mouseover', changeColor);

let c8 = document.querySelector('#cell8');
c8.addEventListener('mouseover', changeColor);

let c9 = document.querySelector('#cell');
c9.addEventListener('mouseover', changeColor);



function changeColor(event) {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	let color = 'rgb(' + r + ',' + g + ',' + b + ')';

	let col = event.target;
	col.style.backgroundColor = color;
}
function showError(err) {
  console.log(err);
}
function finish() {
  console.log('Ajax 通信が終わりました');
}

