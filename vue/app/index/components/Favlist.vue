<template>
    <div v-for="n in 10">div{{msg}}</div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'test!'
            }
        }
    }
</script>

<style>
    html{
        background: red;
    }
</style>