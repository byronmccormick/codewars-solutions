function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zero = 0;
    
    for(let item of arr){
        if(item===0){
            zero++;
        }else if(item>0){
            pos++;
        }else{
            neg++;
        }
    }
    const posRatio=(pos/arr.length).toFixed(6);
    const negRatio=(neg/arr.length).toFixed(6);
    const zeroRatio=(zero/arr.length).toFixed(6);
    console.log(`${posRatio}\n${negRatio}\n${zeroRatio}`)
}