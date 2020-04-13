// roughly put together to test out an idea. Could probably be alot neater.

const chars = "ABCDEFGHIJKLMNOPQRSTUVWYZXabcdefghijklmnopqrstuvwyzx1234567890-=!£$%^&*()_+`¬_+[];'#,./<>?:@~{}Ü¥";

const parentElements = this.document.getElementsByClassName("par");

for(let j = 0; j < parentElements.length; j++) {
  const parent = parentElements[j];
  const words = parent.innerHTML.split(" ");
  const newWords = words.map((word)=> {
    const letters = word.split("");
    return letters.map((letter)=>`<span class="cp">${letter}</span>`).join("");
  });
  parent.innerHTML = newWords.join(" ");
}



const cryptoElements = this.document.getElementsByClassName("cp");

for(let i = 0; i < cryptoElements.length; i++) {
   const element = cryptoElements[i];
   const originalText = element.textContent;
   const cryptoText = getCryptoWord(originalText.length);
   element.textContent = cryptoText;
   setOrignal(element,originalText);
}

function getCryptoWord(numOfChars) {
  const word = [];
  while(numOfChars > 0) {
      const random = Math.floor(Math.random() * Math.floor(chars.length));
      word.push(chars[random]);
      numOfChars = numOfChars - 1;
  }
  return word.join("");
} 

function setOrignal(element, originalText) {
  const time = Math.random() * Math.floor(3000);
  setTimeout((element, originalText) => {
     element.innerHTML = originalText;
     element.style.color = "#d6d6d6";
  }, time, element, originalText);  
}