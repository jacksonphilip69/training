let totalcandi = 3
let totaltime = 8
let candi1 = [2,2,4,3,5,2,6,2,3]
let candi2 = [3,5,7,4,3,9,3,2,2]
let candi3 = [1,2,4,2,7,5,3,2,4]


let perseccandi1 =candi1.slice(0,totaltime)
let perseccandi2 =candi2.slice(0,totaltime)
let perseccandi3 =candi3.slice(0,totaltime)
let candistep1 = candi1.slice(-1)
let candistep2 = candi2.slice(-1)
let candistep3 = candi3.slice(-1)

let a1 = 0
let a2 = 0
let a3 = 0
let k = 2
let count1 = 0
let count2 = 0
let count3 = 0

do{
for(let i = 0 ; i < k ; i++)
{
    a1 += (perseccandi1[i] * candistep1)
}

for(let i = 0 ; i < k ; i++)
{
    a2 +=(perseccandi2[i] * candistep2)
}

for(let i = 0 ; i < k ; i++)
{
    a3 += (perseccandi3[i] * candistep3)
}

{
if(a1 > a2 && a1 > a3)
{ count1++ }
else if(a2 > a3 && a2 > a1)
{ count2++ }
else
{ count3++ }
}

k += 2

}while(k<totaltime)

if(count1 > count2 && count1 > count3)
{ console.log('Candidate 1st wins') }
else if(count2 > count3 && count2 > count1)
{ console.log('Candidate 2nd wins') }
else
{ console.log('Candidate 3rd wins') }