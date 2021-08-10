//Task_1---How do you find the missing number in a given integer array of 1 to 100?
{
    console.log("");
    console.log("Task_1---How do you find the missing number in a given integer array of 1 to 100?");
    console.log("-------------------------------------------------------------------------------------------");
    let num_array = [1,3,4,6,7,8,9,10,11,13,14,16,17,18,19,21,22,24,25,26,28,29,30,32,33,34,35,36,
                    37,38,40,41,43,44,46,47,48,49,50,52,53,55,57,58,60,61,62,63,64,66,
                    67,68,69,70,71,73,74,75,76,78,80,81,82,83,86,87,88,89,90,91,92,93,94,95,98,100];
    let num_missing = [];
 
    for(let i=1;i<=100;i++){
        if(num_array.indexOf(i) == -1){
            num_missing.push(i);
        }
    }
    console.log("Numbers missing in array are: [" +num_missing +"]");
    console.log("");
}

//Task_2---How do you find the largest and smallest number in an unsorted integer array? 
{
    console.log("Task_2---How do you find the largest and smallest number in an unsorted integer array?");
    console.log("-------------------------------------------------------------------------------------------");
    let num_array = [721,98,2324,7,34,245,7879,24,233,567,996,34,2,5576,34,656,35,88,2335,8798,4535,2335,5773,24,54,3434,677];
    
    console.log("Smallest number in given array is: " +Math.min(...num_array));
    console.log("Largest number in given array is: " +Math.max(...num_array));
    console.log("");
}

//Task_3---How do you find all pairs of an integer array whose sum is equal to a given number?
{
    console.log("Task_3---How do you find all pairs of an integer array whose sum is equal to a given number?");
    console.log("-------------------------------------------------------------------------------------------");
    let num_array = [10,20,10,40,50,60,70,30];
    let sum = 50;
    let hashMap = {}, pair = [];
 
    for(let i=0;i<num_array.length;i++){
        if(hashMap[num_array[i]]){
            pair.push([hashMap[num_array[i]], num_array[i]]);
        }else{
            hashMap[sum - num_array[i]] = num_array[i];
        }
    }
    console.log("Array is: ");
    console.log(num_array);
    console.log("Sum: " +sum);
    if(pair.length != 0){
        console.log("Pairs are: ");
        console.log(pair);
    }else{
        console.log("No pair");
    }
    console.log("");
}

//Task_4---How do you find duplicate numbers in an array if it contains multiple duplicates?
{
    console.log("Task_4---How do you find duplicate numbers in an array if it contains multiple duplicates?");
    console.log("-------------------------------------------------------------------------------------------");
    let num_array = [10,20,10,10,40,50,50,60,70,70,30];
    let hashMap = {};
    let duplicates = [];
    console.log("Array is: ");
    console.log(num_array);

    for(let i=0;i<num_array.length;i++){
        if(hashMap[num_array[i]]){
            duplicates.push(num_array[i]);
        }else{
            hashMap[num_array[i]] = true;
        }
    }
    console.log("Duplicate numbers in given arrays are: " +[...new Set(duplicates)]);
    console.log("");
}

//Task_5---Find the Union and Intersection of the two sorted arrays
{
    console.log("Task_5---Find the Union and Intersection of the two sorted arrays");
    console.log("-------------------------------------------------------------------------------------------");
    let num_array_1 = [1,22,33,44,77];
    let num_array_2 = [22,44,77,242,878];

    console.log("Union: " +Array.from(new Set([...num_array_1,...num_array_2])));
    console.log("Intersection: " +num_array_1.filter(element => num_array_2.includes(element)));
    console.log("");
}

//Task_6---Generates 10 Random 3 Digit number
{
    console.log("Task_6---Generates 10 Random 3 Digit number");
    console.log("-------------------------------------------------------------------------------------------");
    for(let i=0;i<10;i++){
        console.log(Math.floor(Math.random()*1000));
    }
    console.log("");
}

let random_array = [];
//Store this random numbers into a array.
{
    console.log("Task_7---Store this random numbers into a array.");
    console.log("-------------------------------------------------------------------------------------------");
    for(let i=0;i<10;i++){
        random_array.push(Math.floor(Math.random()*(900-100+1)+100));
    }
    console.log("Array is: " +random_array);
    console.log("");
}

//Task_8---Find the 2nd largest and the 2nd smallest element without sorting the array.
{
    console.log("Task_8---Find the 2nd largest and the 2nd smallest element without sorting the array.");
    console.log("-------------------------------------------------------------------------------------------");

    let working_array = random_array;
    working_array = working_array.filter(item => item !== Math.min(...working_array));
    working_array = working_array.filter(item => item !== Math.max(...working_array));
    console.log("Array is: " +random_array);
    console.log("Second smallest number\t:\t" +Math.min(...working_array));
    console.log("Second largest number\t:\t" +Math.max(...working_array));
    console.log("");
}

//Task_9---Program to sort the array and then find the 2nd largest and the 2nd smallest element.
{
    console.log("Task_9---Program to sort the array and then find the 2nd largest and the 2nd smallest element.");
    console.log("-------------------------------------------------------------------------------------------");
    random_array.sort();
    console.log("Array is: " +random_array);
    console.log("Second smallest number\t:\t" +random_array[1]);
    console.log("Second largest number\t:\t" +random_array[random_array.length-2]);
    console.log("");
}

//Task_10---Display prime factors of given number and store it in array
{
    console.log("Task_10---Display prime factors of given number and store it in array");
    console.log("-------------------------------------------------------------------------------------------");
    function primeFactors(n) {
        const factors = [];
        let divisor = 2;
      
        while (n >= 2) {
          if (n % divisor == 0) {
            factors.push(divisor);
            n = n / divisor;
          } else {
            divisor++;
          }
        }
        console.log("Prime factors of " +n +" are: " +factors);
    }
    primeFactors(100);
    console.log("");
}

//Task_11---Write a Program to show Sum of three Integer adds to ZERO
{
    console.log("Task_11---Write a Program to show Sum of three Integer adds to ZERO");
    console.log("-------------------------------------------------------------------------------------------");
    
    let pairs = {};
    let num_array = [-1,-1,2,3,-3,7,8,-4,-4,7,-7];
    let isfound = false;
    let key = 1;
    for(let i=0;i<num_array.length-2;i++){
        for(let j=i+1;j<num_array.length-1;j++){
            for(let k=j+1;k<num_array.length;k++){
                if(num_array[i] + num_array[j] + num_array[k] === 0){
                    let pair_array = [];
                    pair_array.push(num_array[i]);
                    pair_array.push(num_array[j]);
                    pair_array.push(num_array[k]);
                    pairs["Pair: " +key] = pair_array;
                    key += 1;
                    isfound = true;
                }
            }
        }
    }
    if(isfound){
        console.log("Thare are: " +(key-1) +" pairs");
        console.log(pairs);
    }else{
        console.log("No pairs");
    }
    console.log("");
}

//Task_12---Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,etc and store them in an array
{
    console.log("Task_12---Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,etc and store them in an array");
    console.log("-------------------------------------------------------------------------------------------");

    let num_array = [];
    let resulted_array = [];
    for(let i=1;i<=100;i++){
        num_array.push(i);
    }
    for(let i=0;i<num_array.length;i++){
        if(num_array[i]%11 == 0){
            resulted_array.push(num_array[i]);
        }
    }
    console.log("Numbers that repeat twice are: ");
    console.log(resulted_array);
    console.log("");
}