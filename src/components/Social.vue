<template>
    <nav class="header">
        <a href="https://www.linkedin.com/in/matt-bidewell-a4578790/">
            <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/MattBidewell">
            <i class="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/MattyDev_">
            <i class="fab fa-twitter"></i>
        </a>
        <a href="https://dev.to/mattbidewell">
            <i class="fab fa-dev"></i>
        </a>
    </nav>
</template>

<script>
export default {
  name: 'Social'
}
</script>
<style scoped>

    .header {
        text-align: right;
        padding:1rem;
    }

    .header a {
        text-decoration: none;
        padding: 0 25px;
    }

    i {
        text-decoration: none;
        font-size: 25px;
        color: aliceblue;
    }

    i::after {
        content: none;
    }

    .dev {
        background:white;
        color:black;
    }
    
</style>