// 타입스크립트 기본 타입

// string,number,boolean,tuple,enum,any,void

let str:string='hi';

let num:number=10;

let isLoggeIn:boolean=false;

let arr:number[] = [1,2,3];
let arr1:Array<number> = [1,2,3];

let arr2:[string,number] = ['hi',10];

enum Avengers {Capt, IronMan, Thor};
let hero:Avengers = Avengers.Capt;

// enum Avengers2 {Capt, IronMan, Thor};
// let hero2:Avengers2 = Avengers2[0];

let any:any = 'hi';
let any2:any = 10;
let any3:any = ['a',2,true];

let unuser:void = undefined;
function notuse():void {
    console.log('sth');
}

function neverEnd():never {
    while(true){
        
    }
}
