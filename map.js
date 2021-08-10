//Task_13---Role a die
{
    console.log("");
    console.log("\t\tTask_13---Role a die");
    console.log("-------------------------------------------------------------------------------------------");

    let result = {'1':0,'2':0,'3':0,'4':0,'5':0,'6':0};
    let isfound = false;

    //Roll a die and find the number between 1 to 6
    function roleADie() {
        return Math.floor(Math.random()*10%6)+1;
    }

    //Repeat the Die roll and find the result each time
    function storeResult() {
        while(!isfound){
            let current = roleADie();
            if(result[current] == 10){      //Repeat till any one of the number has reached 10 times
                isfound = true;
                break;
            }
                let val = result[current];
                result[current] = val+1;    //Store the result in a dictionary
        }
        return result;
    }

    //Find the number that reached maximum times and the one that was for minimum times
    function maxMinTimes() {
        let min = 15;
        let max = -1;
        let min_num = 0;
        let max_num = 0;
        for(let i=1;i<=6;i++){
            if(result[Object.keys(result)[i]] > max){
                max = result[Object.keys(result)[i]];
                max_num = Object.keys(result)[i];
            }
            if(result[Object.keys(result)[i]] < min){
                min = result[Object.keys(result)[i]];
                min_num = Object.keys(result)[i];
            }
        }
        console.log("number that reached maximum times\t:\t" +min_num);
        console.log("number that reached maximum times\t:\t" +max_num);
    }
    console.log(storeResult());
    console.log("");
    maxMinTimes();
    console.log("");
}