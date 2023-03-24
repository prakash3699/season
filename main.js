
let date= new Date();
let month=date.getMonth();

if(month<4){
	b="it's Summer Season";
}
else if(month<8){
	b="it's Fall Season";
}
else{
	b="it's Winter Season";
}
document.write("<h2>"+b);
