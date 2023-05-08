<template>
    <!-- передаю props в PostItem-->
    <div v-if="posts.length > 0">
        <h3 class="margin">Список пользователей</h3>
        <transition-group name="post-list">
            <post-item 
                v-for="post in posts"
                :post="post"
                :key="post.id"
                @remove="$emit('remove', post)"
            />
        </transition-group>
    </div>
    <h2 class="postList__h2" v-else>Список пуст</h2>
</template>

<script>
import PostItem from '@/components/PostItem.vue';


export default {
    components: {
        PostItem,
    },
    props: {
        posts: {
            type: Array,
            require: true,
        },
    },
    
    methods: {
    },

}

</script>

<style lang="scss" scoped>
@import "@/mixins/mixsins";
.postList__h2 {
    color: rgba(204, 29, 29, 0.9);
}

.post-list-move,
.post-list-enter-active,
.post-list-leave-active {
  transition: all .4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>