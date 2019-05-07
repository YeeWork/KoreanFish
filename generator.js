var whats = [
    '自經區', '自貿區',
    '摩天輪', '愛情摩天輪', '愛情產業鏈',
    '發大財', '愛河的水甘甘', '選總統',
    '迪士尼',
    'F1', 'F1賽車場', 'F1 賽車場',
    '賭馬', '賽馬',
    '九二共識', '一中各表', '一國兩制', '兩岸統一',
];
/*
function randomInt( min: number, max: number ) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
*/
function checkWhats(word) {
    for (var _i = 0, whats_1 = whats; _i < whats_1.length; _i++) {
        var what = whats_1[_i];
        if (word == what) {
            return true;
        }
    }
    return false;
}
function sayFadachia(word) {
    if (checkWhats(word)) {
        return '總目標是高雄要發大財，這個' + word + '只是其中一部份，好不好？謝謝。';
    }
    else {
        return '你說的不是重點，重點是高雄要發大財。';
    }
}
function btnSayFadachia() {
    var inputText = document.getElementsByName('word')[0].value;
    console.log(inputText);
    document.getElementsByName('fadachia')[0].innerText = sayFadachia(inputText);
}
