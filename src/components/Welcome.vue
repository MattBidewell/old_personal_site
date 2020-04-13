<template>
  <div class="welcome">
    <h1 class="par">Hello</h1>
    <p class="par">I'm Matt, a software engineer based in London, UK.</p>
    <p class="par">Currently a engineer at A Million Ads</p>
  </div>
</template>

<script>
  export default {
    name: 'Welcome',
    mounted: function() {

      const chars = "ABCDEFGHIJKLMNOPQRSTUVWYZXabcdefghijklmnopqrstuvwyzx1234567890-=!£$%^&*()_+`¬_+[];'#,./<>?:@~{}Ü¥";

      const parentElements = this.$el.getElementsByClassName("par");

      for(const element of parentElements) {
          const words = element.innerHTML.split(" ");
          const newWords = words.map((word)=> {
              const letters = word.split("");
              return letters.map((letter)=>`<span class="cp">${letter}</span>`).join("");
          });
          element.innerHTML = newWords.join(" ");
      };

      const cryptoElements = this.$el.getElementsByClassName("cp");
      
      for(let i = 0; i < cryptoElements.length; i++) {
          const element = cryptoElements[i];
          const originalText = element.textContent;
          const cryptoText = getCryptoWord(originalText.length);
          element.textContent = cryptoText;
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
          const time = Math.random() * Math.floor(3000);
          setTimeout((element, originalText) => {
              element.innerHTML = originalText;
              element.style.color = "#d6d6d6";
          }, time, element, originalText);  
      };

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  .welcome {
    margin-left:25%;
  }

  .par {
    color: #444444;
  }

    
</style>
