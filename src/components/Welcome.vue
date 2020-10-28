<template>
  <div class="welcome">
    <h1 class="crypto">I'm Matthew Bidewell ICON</h1>
    <p class= "crypto">I'm a Software engineer 👨‍💻 with yearsHOLD years of experience in creating well crafted SAAS solutions. I'm part of the team over at A_Million_Ads where I plan, build and reflect.</p> <br/>
    <p class= "crypto">When I'm not programming, my distractions include cinematography🎥, cyber security and browsing record stores🎧.</p> <br/>
    <p class= "crypto">You can find me on Twitter, scrutinise my code at Github or get in touch via E-mail.</p><br/>
  </div>
</template>

<script>
  export default {
    name: 'Welcome',
    mounted: function() {

      const chars = "ABCDEFGHIJKLMNOPQRSTUVWYZXabcdefghijklmnopqrstuvwyzx1234567890-=!£$%^&*()_+`¬_+[];'#,./<>?:@~{}Ü¥";
      const emojis = ["💀","☠️","💩","🤡","👹","👺","👻","👽","👾","🤖","👋","🤏","🖖","🤘","🤟","🧠","👨‍🎤","🕵️","📷","🐕"];

      const parentElements = this.$el.getElementsByClassName("crypto");

      for(const element of parentElements) {
          const words = element.innerHTML.split(" ");
          const newWords = words.map((word)=> {

              if(word==="ICON"){
                  const random = Math.floor(Math.random() * Math.floor(emojis.length));
                  word = emojis[random];
                  const letters = word.split("");
                  const text = letters.map((letter)=>`<span class="cp">${letter}</span>`).join("");
                  return text;
              } else if(word === "yearsHOLD") {
                  word = `${new Date().getFullYear() - 2015}+`;
                  const letters = word.split("");
                  const text = letters.map((letter)=>`<span class="cp">${letter}</span>`).join("");
                  return text;
              } else if(word === "A_Million_Ads") {
                  const letters = word.split("_");
                  const text = letters.map((letter)=>`<span class="cp">${letter}</span>`).join(" "); // space becuase multiple words
                  return `<a href="https://www.amillionads.com/">${text}</a>`;
              } else if(word === "Twitter,") {
                  const letters = word.split("");
                  const text = letters.map((letter)=>`<span class="cp">${letter}</span>`).join("");
                  return `<a href="https://twitter.com/MatthewDev_">${text}</a>`
              } else if(word === "Github") {
                  const letters = word.split("");
                  const text = letters.map((letter)=>`<span class="cp">${letter}</span>`).join("");
                  return `<a href="https://github.com/MattBidewell">${text}</a>` 
              } else {
                  const letters = word.split("");
                  return letters.map((letter)=>`<span class="cp">${letter}</span>`).join("");
              }
          });
          element.innerHTML = newWords.join(" ");
      };

      const cryptoElements = this.$el.getElementsByClassName("cp");
      
      for(let i = 0; i < cryptoElements.length; i++) {
          const element = cryptoElements[i];
          const originalText = element.textContent;
          const cryptoText = getCryptoWord(originalText.length);
          element.innerHTML = cryptoText;
          setOrignal(element,originalText);
      }

      function getCryptoWord(length) {
          const word = [];
          while(length > 0) {
              const random = Math.floor(Math.random() * Math.floor(chars.length));
              word.push(chars[random]);
              length = length - 1;
          }
          return word.join("");
      }

      function setOrignal(element, originalText) {

        const color = getComputedStyle(element).getPropertyValue("--font");

        const time = Math.random() * Math.floor(3000);
        setTimeout((element, originalText) => {
            element.innerHTML = originalText;
            element.className = "crypto-post";
        }, time, element, originalText);  
      };

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
