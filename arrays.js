let num_array = [1,3,4,6,7,8,9,10,11,13,14,16,17,18,19,21,22,24,25,26,28,29,30,32,33,34,35,36,
                    37,38,40,41,43,44,46,47,48,49,50,52,53,55,57,58,60,61,62,63,64,66,
                    67,68,69,70,71,73,74,75,76,78,80,81,82,83,86,87,88,89,90,91,92,93,94,95,98,100];
let num_missing = [];

//Task_1---How do you find the missing number in a given integer array of 1 to 100? 
for(let i=1;i<=100;i++){
    if(num_array.indexOf(i) == -1){
        num_missing.push(i);
    }
}
console.log("Numbers missing in array are: [" +num_missing +"]");