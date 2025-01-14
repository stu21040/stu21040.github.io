var map = L.map('map').setView([25.025672786913358, 121.52732861261022], 15);
        
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// 添加標記點
var marker = L.marker([25.025672786913358, 121.52732861261022]).addTo(map)
     .bindPopup('這裡是臺灣師大校本部!')

// 添加第一個 Marker 並設置自定義 id
var marker1 = L.marker([25.025672786913358, 121.52732861261022], { id: 'ntnu' }).addTo(map);
marker1.bindPopup('臺灣師大校本部');
marker1.on('click', function () {
    alert('你點擊了: 臺灣師大校本部, ID: ' + this.options.id);
});

// 添加第二個 Marker 並設置自定義 id
var marker2 = L.marker([25.02796383248559, 121.5284036267153], { id: 'ntnu-library' }).addTo(map);
marker2.bindPopup('臺灣師大圖書館校區');
marker2.on('click', function () {
    alert('你點擊了: 臺灣師大圖書館校區, ID: ' + this.options.id);
});

// 添加第三個 Marker 並設置自定義 id
var marker3 = L.marker([25.008664259223508, 121.53729507272521], { id: 'ntnu-gongwan' }).addTo(map);
marker3.bindPopup('臺灣師大公館校區');
marker3.on('click', function () {
    alert('你點擊了: 臺灣師大公館校區, ID: ' + this.options.id);
});
