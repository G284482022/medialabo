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
}
function showError(err) {
  console.log(err);
}
function finish() {
  console.log('Ajax 通信が終わりました');
}

