<template>
    <div class="navbar margin" >
        <div class="navbar__logo" @click="$router.push('/')"> Vue3 posts site</div>
        <div class="navbar__buttons">
            <my-button class="navbar__button" @click="$router.push('/posts')">Посты</my-button>
            <my-button class="navbar__button" @click="$router.push('/about')">Обо мне</my-button>
        </div>

        
    </div>
</template>

<script>

export default {
    name: 'navbar',
    props: {},
    methods: {
        // Your code here
    }
}
</script>

<style scoped>
@import '@/mixins/mixsins.scss';

.navbar {
    border: 0.3vw solid teal;
    padding: 2vw;
    box-shadow: 4px 6px .5vw rgb(2, 63, 63);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar__button {
    margin: 0 0 0 2vw;
    width: 14vw;
}

.navbar__logo {
    font-size: 3vw;
}

</style>