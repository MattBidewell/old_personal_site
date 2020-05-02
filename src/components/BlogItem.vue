<template>
    <content>
        <h4>{{item.title}}</h4>
        <p>{{item.description}}</p>
    </content>
</template>
<script>
export default {
  name: 'BlogItem',
  props: ["item"]
}
</script>
<style scoped>
</style>