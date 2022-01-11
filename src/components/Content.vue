<template>
  <div>
    <nav id="header">
        <p class="crypto">LinkedInLink</p>
        <p class="crypto">GithubLink</p>
        <p class="crypto">TwitterLink</p>
        <p class="crypto">MediumLink</p>
    </nav>
    <section id="content">
        <h1 class="crypto">I'm Matthew Bidewell ICON</h1>
        <br/>
        <p class= "crypto">I'm a Software engineer with yearsHOLD years of experience in creating well crafted SaaS solutions using AWS. I'm a Engineer over at Government_Digital_Services where I help with Digital Identification. 🧑‍💻</p> <br/>
        <p class= "crypto">I'm also passionate about cyber security and you can find me hacking away at Hack the Box. 📦</p> <br/>
        <p class= "crypto">You can find me on Twitter, scrutinise my code at Github or get in touch via LinkedIn.</p><br/>
        <br/>
        <section id="blog">
            <h2 class="crypto">Blog</h2>
            <div class = "post">
                <a class="post_link" href="https://levelup.gitconnected.com/rust-and-its-ownership-model-effc41e3951">
                    <h3 class="crypto">Rust and ownership</h3>
                    <p class="crypto">A high level introduction to Rust and its owership rules. The post talks about heap, stack and ownership.</p>
                </a>
            </div>
            <div class = "post">
                <a class="post_link" href="https://mattbidewell.medium.com/rust-and-its-referencing-and-borrowing-b2e8aefc12d8">
                    <h3 class="crypto">Rust and referencing</h3>
                    <p class="crypto">A look into how rust handles referencing variables as they change scope.</p>
                </a>
            </div>
            <!-- <p class="crypto">More...</p> -->
        </section>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Content',
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
              } else if(word === "Government_Digital_Services") {
                  const letters = "Government Digital Services".split("");
                  const text =  `<span class="cp">Government Digital Services</span>`; // space becuase multiple words
                  return `<a id="gds" href="https://www.gov.uk/government/organisations/government-digital-service">${text}</a>`;
              } else if(word === "Twitter,") {
                  const letters = word.split("");
                  const text = letters.map((letter)=>`<span class="cp">${letter}</span>`).join("");
                  return `<a id="twitter" href="https://twitter.com/MatthewDev_">${text}</a>`
              } else if(word === "Github") {
                  const letters = word.split("");
                  const text = letters.map((letter)=>`<span class="cp">${letter}</span>`).join("");
                  return `<a id="github" href="https://github.com/MattBidewell">${text}</a>`;
              } else if(word === "LinkedIn."){
                  const letters = word.split("");
                  const text = letters.map((letter)=>`<span class="cp">${letter}</span>`).join("");
                  return `<a id="linkedin" href="https://www.linkedin.com/in/matt-bidewell-a4578790/">${text}</a>`;
              } else if(word === "LinkedInLink"){
                  const letters = "Linkedin".split("");
                  const text = letters.map((letter)=>`<span class="cp">${letter}</span>`).join("");
                  return `<a class="base_link" href="https://www.linkedin.com/in/matt-bidewell-a4578790/">${text}</a>`;
              } else if(word === "GithubLink"){
                  const letters = "Github".split("");
                  const text = letters.map((letter)=>`<span class="cp">${letter}</span>`).join("");
                  return `<a class="base_link" href="https://github.com/MattBidewell">${text}</a>`;
              } else if(word === "TwitterLink"){
                  const letters = "Twitter".split("");
                  const text = letters.map((letter)=>`<span class="cp">${letter}</span>`).join("");
                  return `<a class="base_link" href="https://twitter.com/MatthewDev_">${text}</a>`;
              } else if(word === "MediumLink"){
                  const letters = "Medium".split("");
                  const text = letters.map((letter)=>`<span class="cp">${letter}</span>`).join("");
                  return `<a class="base_link" href="https://mattbidewell.medium.com/">${text}</a>`;
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

    h1 {
        font-size: 1.3em;
    }
    
    h2 {
        font-size: 1.2em;
    }

    #content {
        margin-left:15rem;
        margin-right:15rem;
    }

    @media only screen and (max-width: 600px) {
        #content {
            padding-top:5rem;
            margin-left:1.5rem;
            margin-right:1.5rem;
        }

        #header {
            background: var(--bg);
            position: fixed;
            left:0;
            right:0;
            width:100%;
            padding: 0.5rem;

        }

        #header p a {
            padding: 0 10px;
        }
    }

    @media only screen and (min-width:600px) and (max-width: 1200px) {
        #content {
            padding-top:5rem;
            margin-left:7.5rem;
            margin-right:7.5rem;
        }

        #header {
            background: var(--bg);
            position: fixed;
            left:0;
            right:0;
            width:100%;
            padding: 0.5rem;
        }

        #header p a {
            padding: 0 10px;
        }
    }

    #header {
        text-align: right;
        padding:1rem;
        flex:1;
    }

    #header p {
        display: inline;
    }

    #header p a{
        text-decoration: none;
        padding: 0 25px;
    }

    #header p a:link, #header p a:visited, #header p a:active, #haeder *{
        color:var(--font-link);
    }

    #header a:hover, .base_link:hover {
        text-decoration:underline;
        color:var(--link-hover)
    }

    #gds *, #gds *:hover {
        color: #2a9fe2;
    }
    
    #gds:link, #linkedin:link, #twitter:link, #github:link {
        text-decoration: none;
    }

    #gds *:hover, #linkedin:hover, #twitter:hover, #github:hover {
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

    .base_link, .post_link{
        text-decoration: none;
    }

    .base_link *, .base_link:hover, .base_link:visited, .post_link {
        color:var(--font-link);
    }

    .post {
        margin-left: 30px;
        padding-left: 10px;
        border-left: 2px solid var(--font-link);
        padding-bottom: 5px;
        position: relative;
    }

    .post:hover {
        /* border-bottom: 2px solid var(--font-link); */
    }

    .post:after {
        content: '';
        position: absolute;
        width: 0;
        height: 1px;
        display: block;
        margin-top: 5px;
        right:0;
        background: #fff;
        transition: width 1s ease;
    }

    .post:hover:after {
        width: 100%;
        left:0;
    }
</style>
