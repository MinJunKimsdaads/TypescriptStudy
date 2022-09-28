function sum(a:number, b:number):number{
    return a+b;
}

function sum2(a:number,b?:number):number{
    return a+b;
}

// function test(a:number, b?:number):number{
//     return a+b;
// }

function sum3(a:number, b='100'):number{
    return a+b;
}

function sum4(a:number, ...nums:number[]):number{
    const totalOfNums = 0;
    for(let key in nums){
        totalOfNums += nums[key];
    }
    return a + totalOfNums;
}