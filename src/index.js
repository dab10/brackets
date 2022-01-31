module.exports = function check(str, bracketsConfig) {

  const OPEN_BRACKETS = [];
  let bracketsConfig1 = bracketsConfig.map(function (item) {return [...item]});
      
  for (let i = 0; i < bracketsConfig.length; i++) {
    OPEN_BRACKETS.push(bracketsConfig[i][0])
  }   

  const OPEN_BRACKETS1 = [];

  for (let i = 0; i < bracketsConfig1.length; i++) {
    if (bracketsConfig1[i][0] === bracketsConfig1[i][1]){
      OPEN_BRACKETS1.push(bracketsConfig1[i][0])
    }   
  }

  const BRACKETS_PAIR = {}

  for (let i = 0; i < bracketsConfig.length; i++) {
    BRACKETS_PAIR[bracketsConfig[i][1]] = bracketsConfig[i][0];
  } 
        
  let stack = [];
         
  for (let i = 0; i < str.length; i++) {
     let currentSymbol = str[i];
            
    if (OPEN_BRACKETS.includes(currentSymbol) && (!OPEN_BRACKETS1.includes(currentSymbol) || !stack.includes(currentSymbol))) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }

      let topElement = stack[stack.length - 1];
      
        if (BRACKETS_PAIR[currentSymbol] === topElement) {
         stack.pop();
        } else {
          return false;
        }
      }
  }
    return stack.length === 0;
}
