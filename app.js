function numCounter(text){
    return text.replace(/[^a-z]/gi,"").length;
}
console.log(numCounter("myname is Elvira 2424223@#"));
