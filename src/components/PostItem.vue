<template>
    <div class="post margin">
        <div>
          <div><strong> Название: </strong> {{ post.title }} </div>
          <div><strong> Описание: </strong> {{ post.body }} </div>
        </div>
        <div class="post__buttons">
          <my-button @click="$emit('remove', post)">
            Удалить
          </my-button>
          <my-button @click="$router.push(`/posts/${post.id}`)">
              Открыть
          </my-button>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        post: {
            type: Object,
            require: true,
        },
    },
    setup() {
        // Your code here
    },
}
</script>

<style lang="scss" scoped>
@import '@/mixins/mixsins.scss';

.post {
    padding: 1vw;
    border: $border solid teal;
    display:flex;
    align-items: center;
    justify-content: space-between; 
}

.post__buttons {
  display: flex;
  gap: .5vw;
}

.post__buttons button:hover {
  background-color: #34c48d30;
}
</style>

