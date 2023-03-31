function time(){
    var jikoku=document.getElementById("jikoku_now");
    var now=new Date();
    var year= now.getFullYear();
    var month=now.getMonth()+1;
    var date=now.getDate();
    var hh=now.getHours();
    var mm=("0"+now.getMinutes()).slice(-2);
    var ss=("0"+now.getSeconds()).slice(-2);
    var ampm=(hh<12)?"午前"+hh:"午後"+(hh-12);
    jikoku.innerHTML=year+"年"+month+"月"+date+"日"+ampm+"時"+mm+"分"+ss+"秒";
        var sale;
            if (10<=hh && hh<12){
                sale=document.getElementById("10ji");
                sale.innerHTML='セール中!';
                sale.style.color="red";
            } else if (13<=hh && hh<15){
                sale=document.getElementById("13ji");
                sale.innerHTML='セール中!';
                sale.style.color="red";
            } else if (15<=hh && hh<17){
                sale=document.getElementById("15ji");
                sale.innerHTML='セール中!';
                sale.style.color="red";
            } else if (17<=hh && hh<19){
                sale=document.getElementById("17ji");
                sale.innerHTML='セール中!';
                sale.style.color="red";
            }
};
window.onload=function(){
    time();
    setInterval('time()',1000);
};