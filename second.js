/*
 print this pattern

 * * * * * *
 * * * * * *
 * * * * * *
 * * * * * *
 * * * * * *
 * * * * * *
*/

for(let row = 1; row<=6; row++){
    for(let col=1;col<=6;col++){
      process.stdout.write("* ")
    }
    console.log()
}