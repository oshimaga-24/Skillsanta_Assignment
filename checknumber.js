function check_number(x,y){
    if((x>=50 && x<=100)|| (y>=50 && y<=100)){
        return("true");
    }
    else{
        return("false");
    }
}
console.log(check_number(53,65));
document.write(check_number(53,65));