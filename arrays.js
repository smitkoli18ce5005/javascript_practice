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