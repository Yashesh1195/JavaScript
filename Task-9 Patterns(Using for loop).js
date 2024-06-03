// *
// **
// ***
// ****
// *****


// let i,j;
// for(i=1;i<=5;i++)
// {
//     for(j=1;j<=i;j++)
//     {
//         document.getElementById("demo").innerHTML += "*"; 
//         // document.write("<br>");
//     }
//     document.getElementById("demo").innerHTML += "<br>";
// }


// 1
// 12
// 123
// 1234
// 12345


// let i,j;
// for(i=1;i<=5;i++)
// {
//     for(j=1;j<=i;j++)
//     {
//         document.getElementById("demo").innerHTML += j; 
//         // document.write("<br>");
//     }
//     document.getElementById("demo").innerHTML += "<br>";
// }


// 1
// 22
// 333
// 4444
// 55555


// let i,j;
// for(i=1;i<=5;i++)
// {
//     for(j=1;j<=i;j++)
//     {
//         document.getElementById("demo").innerHTML += i; 
//         // document.write("<br>");
//     }
//     document.getElementById("demo").innerHTML += "<br>";
// }


// A
// AB
// ABC
// ABCD
// ABCDE


// let i,j;
// for(i=1;i<=5;i++)
// {
//     for(j=1;j<=i;j++)
//     {
//         document.getElementById("demo").innerHTML += String.fromCharCode(j+64); 
//         // document.write("<br>");
//     }
//     document.getElementById("demo").innerHTML += "<br>";
// }


// A
// BB
// CCC
// DDDD
// EEEEE


let i,j;
for(i=1;i<=5;i++)
{
    for(j=1;j<=i;j++)
    {
        document.getElementById("demo").innerHTML += String.fromCharCode(i+64); 
        // document.write("<br>");
    }
    document.getElementById("demo").innerHTML += "<br>";
}