function lonelyinteger(a) {
    let seen = {};
    for(let i = 0; i < a.length; i++){
        if(seen[a[i]]){
            seen[a[i]]++;
        }else{
            seen[a[i]]=1;
        }
    }
    for(let item in seen){
        if(seen[item]==1){
            return item;
        };
    }
}