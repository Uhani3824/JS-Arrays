//Task 1
let numArray=[]

for(let i=1;i<6;i++)
{
    let num=Number(prompt(`Enter ${i}st number:`));
    numArray.push(num);
}

console.log(numArray);

let sum=0;

for(i=0;i<numArray.length;i++)
{
    sum=sum+numArray[i];
}

console.log("The sum of array elements is:",sum);

//Task 2
function findMax(numbers)
{
    max=array[0];
  for(i =0;i<array.length;i++)
  {
    if(max<array[i])
    {
        max=array[i];
    }
  }
  return max;
}

let array=[2,4,6];
var maxElement=findMax(array);

console.log("The largest number in the array is:",maxElement);

//Task 3
let userInput=prompt("Type a sentence:");
let words=userInput.split(' ');

console.log(`This sentence have ${words.length} words`)

//Task 4
array=[2,4,6];
sum=0;

for(i=0;i<array.length;i++)
{
  sum+=array[i]
}

let avg=sum/array.length;

console.log("The average of the elements in the array is:",avg);

//Task 5
array=[1,2,3,4,5,6,7,8,9,10];

for(i=0;i<array.length;i++)
{
  if(array[i]%3==0 ||array[i]%5==0 )
  {
    console.log(array[i])
  }
}