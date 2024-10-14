//in this part we will study about for loops in javascript
//printing table of 1 tp 20
/*for(let i=1;i<=20;i++)
{
    for(let j=1;j<=10;j++)
    {
        console.log(`${i}*${j}=${i*j}`)
    }
}*/
for(let i=1;i<=10;i++)
{
    if(i==5)
    {
        continue;
    }
    if(i==8)
    {
        break;
    }
    console.log(i);
}