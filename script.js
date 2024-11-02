function add(a,b)
{
    return a+b;
}
function  sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    if(a == 0){
        return "cannot zero";
    }
    return a/b;
}
console.log(add(6,8));
console.log(sub(6,8));
console.log(mul(6,8));
console.log(div(6,8));