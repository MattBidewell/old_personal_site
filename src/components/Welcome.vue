<template>
  <div class="welcome">
    <h1 class="crypto">I'm Matthew Bidewell ICON</h1>
    <br/>
    <p class= "crypto">I'm a Software engineer with yearsHOLD years of experience in creating well crafted SAAS solutions using AWS. I'm part of the team over at A_Million_Ads where I help build high performing, low latancy services.</p> <br/>
    <p class= "crypto">When I'm not programming, my distractions include drone cinematography 🎥, cyber security and browsing record stores 🎧.</p> <br/>
    <p class= "crypto">You can find me on Twitter, scrutinise my code at Github or get in touch via LinkedIn.</p><br/>
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
                  return `<a id="amillionads" href="https://www.amillionads.com/">${text}</a>`;
              } else if(word === "Twitter,") {
                  const letters = word.split("");
                  const text = letters.map((letter)=>`<span class="cp">${letter}</span>`).join("");
                  return `<a id="twitter" href="https://twitter.com/MatthewDev_">${text}</a>`
              } else if(word === "Github") {
                  const letters = word.split("");
                  console.log(letters);
                  const text = letters.map((letter)=>`<span class="cp">${letter}</span>`).join("");
                  return `<a id="github" href="https://github.com/MattBidewell">${text}</a>`;
              } else if(word === "LinkedIn."){
                const letters = word.split("");
                  console.log(letters);
                  const text = letters.map((letter)=>`<span class="cp">${letter}</span>`).join("");
                  return `<a id="linkedin" href="https://www.linkedin.com/in/matt-bidewell-a4578790/">${text}</a>`;
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


    #amillionads *, #amillionads *:hover {
        color: #f77f26;
    }
    
    #amillionads:link, #linkedin:link, #twitter:link, #github:link {
        text-decoration: none;
    }

    #amillionads *:hover, #linkedin:hover, #twitter:hover, #github:hover {
        background-color: transparent;
        text-decoration: underline;
    }

    #linkedin *, #linkedin:hover, #linkedin:visited{
        color: #0077B5; /* linkedIn blue */
    }

    #github *, #github:hover, #github:visited{
        color:#6a737d; /* github blue?*/
    }

    #twitter *, #twitter:hover, #twitter:visited{
        color: #1DA1F2; /* Twitter blue */
    }
</style>
