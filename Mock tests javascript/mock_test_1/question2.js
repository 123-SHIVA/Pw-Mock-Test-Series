function nonRepeatingChar(str){

    str = str.toLowerCase();
    let ch = str.split("");
    let isRepeat =false;
    for(let i=0; i<ch.length-1; i++)
    {
        isRepeat=false;
        if(i>0 && ch[i]==ch[i-1])
        {
            continue;
        }
        for(let j=i+1; j<ch.length; j++)
        {
            console.log(ch[i]+" "+ ch[j]);
            if(ch[i]==ch[j])
            {
                isRepeat =true;
            }
        }
        if(!isRepeat)
        {
            return i;
        }
    }
    return -1;
    }

let str = "LoveLeetCode";
let index = nonRepeatingChar(str);

console.log("first non repeating element is present on index : " +index);
   