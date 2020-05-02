<template>
    <div>
        <h2>Blog</h2>
        <BlogItem
            v-for="item in items"
            v-bind:key="item.id"
            v-bind:item="item"
        />
    </div>
</template>
<script>

import BlogItem from "./BlogItem";


export default {
    name: 'BlogList',
    components: {
        BlogItem
    },
    data:() => {
        return { 
            items: [
                {
                    title:"BlogPost1",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices maximus turpis, quis fermentum sapien pulvinar at.",
                    link:"https://www.google.com"
                },
                {
                    title:"BlogPost2",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices maximus turpis, quis fermentum sapien pulvinar at.",
                    link:"https://www.google.com"
                },         
                {
                    title:"BlogPost3",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices maximus turpis, quis fermentum sapien pulvinar at.",
                    link:"https://www.google.com"
                }
            ]
        }
    }
}


// call an api endpoint - heroku? adn get back a nice JSON of my blog posts set somewhere to display. OR manually do it.

/*
    { 
        title:"",
        desc:"",
        link:""
    }
*/

</script>
<style scoped>
</style>


