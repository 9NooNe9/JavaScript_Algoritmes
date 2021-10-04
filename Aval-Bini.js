function Prime (n){
    let i = 2
    for( i ;  i < n ; i++ )
        if ( n % i === 0) break;
    if ( i === n )
        console.log(n);
}

function interval (a,b){
    for (let i = a+1 ; i< b ; i++)
        Prime (i)
}

interval(10,20)
interval(7,29)