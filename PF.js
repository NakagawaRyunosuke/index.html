const judge = () =>{
    let divisor=0;
    let answer;
    let number=document.getElementById("inputMessage").value;
    console.log(number);
    if(isNaN(number)==false){
        for(let i=1; i<=number; i++){
            if(number%i==0){
                divisor++;
            }
        }
        if(divisor==2){
        answer="素数です";
        }else{
            answer="素数ではないです";
            pf(number);
        }
        let outputMessage="入力された値「"+number+"」は"+answer+"です<br>約数は"+divisor+"個です";
        document.getElementById("outputMessage").innerHTML=outputMessage;
    }else{
        let outputMessage="数字を入力してください";
        document.getElementById("inputMessage").innerHTML=outputMessage;
    }
}

const pf = (n) =>{
    let sqrtNumber=Math.floor(Math.sqrt(n));
    let index=0;
    let array=[];
    for(let i=2; i<=sqrtNumber; i++){
        if((n%i)==0){
            index=0;
            do{
                index++;
                n=n/i;
            }while((n%i)==0)
            array.push(" "+i+"^"+index+" ");
        }
    }
    if(n<sqrtNumber){
        array.push(" "+n+"^1 ");
    }
    document.getElementById("outputMessage2").innerHTML="素因数分解の結果は<br>"+array.join("X");
}
