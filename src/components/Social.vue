<template>
    <nav class="header">
        <a href="https://www.linkedin.com/in/matt-bidewell-a4578790/">
            LinkedIn<!-- <i class="fab fa-linkedin"></i> -->
        </a>
        <a href="https://github.com/MattBidewell">
            Github<!-- <i class="fab fa-github"></i> -->
        </a>
        <a href="https://twitter.com/MattyDev_">
            Twitter<!-- <i class="fab fa-twitter"></i> -->
        </a>
        <a href="https://dev.to/mattbidewell">
            Dev<!-- <i class="fab fa-dev"></i> -->
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
        color:var(--font-link);
    }

    i::after {
        content: none;
    }
    
    a:link, a:visited, a:active{
        color:var(--font-link);
    }

    a:hover {
        text-decoration:underline;
        color:var(--link-hover)
    }

    @media only screen and (min-width: 600px) {
        .header {
            text-align: center;
            padding:0;
        }
        
        .header a {
            padding: 0 0;
        }
    }
    

</style>