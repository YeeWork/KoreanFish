/**
 * Question answer module.
 */
/**
 * Array of search target string.
 */
var targets = [
    '自經區', '自貿區',
    '摩天輪', '愛情摩天輪', '愛情產業鏈',
    '發大財', '愛河的水', '選總統',
    '迪士尼',
    'F1', 'F1賽車場', 'F1 賽車場',
    '賭馬', '賽馬',
    '九二共識', '一中各表', '一國兩制', '兩岸統一',
];
/**
 * Search target in query string and return a tuple [isFound, foundTarget].
 * @param query
 */
function checkWhats(query) {
    for (var _i = 0, targets_1 = targets; _i < targets_1.length; _i++) {
        var searchTarget = targets_1[_i];
        if (query.indexOf(searchTarget) != -1) {
            return [true, searchTarget];
        }
    }
    return [false, null];
}
/**
 * Check input string and return answer.
 * @param word
 */
function sayFadachia(word) {
    var returnTup = checkWhats(word);
    if (returnTup[0]) {
        return '總目標是高雄要發大財, 這個' + returnTup[1] + '只是其中一部份, 好不好? 謝謝.';
    }
    else {
        return '你說的不是重點, 重點是高雄要發大財.';
    }
}
/**
 * Button event handler.
 */
function btnSayFadachia() {
    var inputText = document.getElementsByName('word')[0].value;
    console.log(inputText);
    document.getElementsByName('fadachia')[0].innerText = sayFadachia(inputText);
}
