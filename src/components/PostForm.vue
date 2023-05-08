<template>
    <form class="form" @submit.prevent>
        <h4 class="form__name margin">Создание поста</h4> 
        <my-input
            v-focus 
            v-model="post.title"
            class="margin" 
            type="text" 
            placeholder="Nazvanie" />
        <my-input 
            v-model="post.body" 
            class="margin" 
            type="text" 
            placeholder="Opisanie" />
        <div class="form__button-container">
            <my-button class="form__button" @click="createPostInPsotForm()">Создать</my-button>
        </div>
    </form>
</template>

<script>


export default {
    
    data() { // компонент в который мы встравиаем свои модели == ключ и значение
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPostInPsotForm() {
            this.post.id = Date.now(); // берем номер id из даты
            this.$emit('create', this.post); // передаем в родительский элемент post
            this.post = { // после клика отчищаем
                title: '',
                body: '',
            }
        },
    }
}

</script>

<style lang="scss" scoped>
@import '@/mixins/mixsins.scss';
.form {
    display: flex;
    flex-direction: column;
}



.form__button-container {
    display: flex;
    justify-content: flex-end;
}
</style>