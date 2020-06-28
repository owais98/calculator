function getval (val) {
    var res = document.getElementById("res");
    res.value += val;
}
function clearr() {
    res.value = null;
}
function equals(){
    res.value =  eval(res.value);
}