
var infoDiv = document.getElementById('info');

let map = L.map('map').setView([25.025199300699633, 121.5274796196783], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([25.025199300699633, 121.5274796196783]).addTo(map)
                .bindPopup('這裡是臺灣師大文學院!');
                //.openPopup();

var marker2 = L.marker([25.02385062316573, 121.52787646966638]).addTo(map)
                .bindPopup('這裡是梁實秋故居!');
                //.openPopup();

var marker3 = L.marker([25.023832509868086, 121.52696036841165]).addTo(map)
                .bindPopup('這裡是臺灣師大臺文系_雲和教學大樓!');
                //.openPopup();


marker.on('click', function () {
    console.log("Click 1");
    infoDiv.textContent = "臺灣師大文學院的介紹：";
    //infoDiv.textContent = '你點擊了: 臺灣師大文學院 ';
    map.panTo([25.025199300699633, 121.5274796196783]); // 平移到臺灣師大文學院
});

marker2.on('click', function () {
    console.log("Click 2");
    infoDiv.textContent = "「梁實秋故居」建於1933年間，日本殖民時期地址為「古亭町204番地」，最早是臺北高等學校英語教授富田義介宿舍。光復後，改制為省立師範學院教職員宿舍，陸續由張儒林、梁實秋、甯杼等人入住使用，梁實秋在1952年入住本宅，1959年1月搬離。「梁實秋故居」為梁實秋先生一生眾多居住空間之一，亦為來臺後安住的第一間職務宿舍，極具歷史價值與意義，2003年臺北市政府市政會議通過「梁實秋故居」為歷史建築。";
    //infoDiv.textContent = '你點擊了: 梁實秋故居 ';
    map.panTo([25.02385062316573, 121.52787646966638]); // 平移到梁實秋故居
});

marker3.on('click', function () {
    console.log("Click 3");
    infoDiv.textContent = "臺灣師大臺文系_雲和教學大樓";
    //infoDiv.textContent = '你點擊了: 臺灣師大臺文系_雲和教學大樓 ';
    map.panTo([25.023832509868086, 121.52696036841165]); // 平移到臺灣師大臺文系_雲和教學大樓
});

function goPage(){
    window.location.href = "./index.html";
}

function goPage1(){
    window.location.href = "./index2.html";
}


function goPage2(){
    window.location.href = "https://mira-ar.n010.app/show/XGJFpE";
}

//25.02628220891764, 121.52756985187678