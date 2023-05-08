<template>
    <navbar></navbar>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    props: {},
    methods: {
    // Your code here
    },
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

#app {
    padding: 2vw;
}
</style>