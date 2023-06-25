
function addAllZerosAtEnd(arr){

        let i=0; 
        let j=arr.length-1;
        while(i<j)
        {
            if(arr[i]==0)
            {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++;
            }
            else if(arr[j]==0)
            {
                j--;
            }
            else{
                i++;
            }
        }
   }

        
let nums = [1,0,1,1,4,2,0,0,0,0,3,12];
addAllZerosAtEnd(nums);
console.log(nums);

