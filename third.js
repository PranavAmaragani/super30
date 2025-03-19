/*


* * * * *               rows -> 5
* * * *                 1 ->5
* * *                   2 ->4
* *                     3 ->3
*

*/

for(let row=1;row<6;row++){
    for(let col=6;col>row;col--){
        process.stdout.write("* ")
    }
    console.log()
}

// approach - 2



    