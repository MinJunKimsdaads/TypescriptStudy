// 타입스크립트 기본 타입
// string,number,boolean,tuple,enum,any,void
var str = 'hi';
var num = 10;
var isLoggeIn = false;
var arr = [1, 2, 3];
var arr1 = [1, 2, 3];
var arr2 = ['hi', 10];
var Avengers;
(function (Avengers) {
    Avengers[Avengers["Capt"] = 0] = "Capt";
    Avengers[Avengers["IronMan"] = 1] = "IronMan";
    Avengers[Avengers["Thor"] = 2] = "Thor";
})(Avengers || (Avengers = {}));
;
var hero = Avengers.Capt;
// enum Avengers2 {Capt, IronMan, Thor};
// let hero2:Avengers2 = Avengers2[0];
var any = 'hi';
var any2 = 10;
var any3 = ['a', 2, true];
var unuser = undefined;
function notuse() {
    console.log('sth');
}
function neverEnd() {
    while (true) {
    }
}
