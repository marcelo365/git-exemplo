var a = [3 , 4 , 6];

function somarElementosVector(a){
    var res = 0;
    var b = 0;
    for ( b=0 ; b < a.length ; b++){
        res += a[b];
    }
    console.log(res)
    return res;

}

somarElementosVector(a);