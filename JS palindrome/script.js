var string=parseInt(prompt("enter the text"))
const len = string.length;  
  
 
 for (let i = 0; i < len / 2; i++) 
 {  

      if (string[i] !== string[len - 1 - i]) 
      {  
            console.log('not a palindrome');  
        }  
    }  