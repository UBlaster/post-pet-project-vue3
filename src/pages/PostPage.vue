<template>
    <div class="app__form-container margin">
        <h1 class="margin">Страница с постами</h1>
        <my-input 
            v-focus
            class="margin" 
            v-model="searchQuery" 
            placeholder="Поиск" 
        />
        <div class="app__btns">
            <my-button @click="showDialog">
                Создать пост
            </my-button>
            <my-select v-model="selectedSort" :options="sortOptions" />
        </div>
    </div>
    <my-dialog v-model:show="dialogVisible">
        <post-form @create="createPost" />
    </my-dialog>
    <post-list :posts="sortedAndSerchedPosts" @remove="removePost" v-if="!isPostsLoading" />
    <my-loader v-else></my-loader>
    <div
        v-intersection="loadMorePosts"
        class="observer"
        >
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue"; // импортим компоненты
import PostList from "@/components/PostList.vue";
import axios from "axios";

export default { // компонент в который мы стравиаем свои переменные
    components: { // регистрируем компоненты
        PostList, PostForm
    },

    data() { // компонент в который мы встравиаем свои модели == ключ и значение
        return {
            posts: [],// модель 
            dialogVisible: false,
            isPostsLoading: false,
            selectedSort: '',
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0,
            sortOptions: [
                { value: 'title', name: 'По названию' },
                { value: 'body', name: 'По содержимому' }
            ]
        }
    },

    methods: {
        createPost(post) {
            this.posts.unshift(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true;
        },
        async fetchPosts() {
            try {
                this.isPostsLoading = true;
                setTimeout(async () => {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts',
                        {
                            params: {
                                _page: this.page,
                                _limit: this.limit,
                            }
                        });
                    this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
                    this.posts = response.data;
                    this.isPostsLoading = false;
                }, 1000);

            } catch {
                alert('error you mutherfucker piece of shit!')
            } finally {
                console.log('There must be some code')
            }
        },
        async loadMorePosts() {
            try {
                this.page += 1;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts',
                    {
                        params: {
                            _page: this.page,
                            _limit: this.limit,
                        }
                    });
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
                this.posts = [...this.posts, ...response.data]
                this.isPostsLoading = false;
            } catch {
                alert('error you mutherfucker piece of shit!')
            }
        },
    },
    mounted() {
        this.fetchPosts();
        //так как мы используем свою директиву комменчу колл бек 
        // let options = { // скролл 
        //     rootMargin: "0px",
        //     threshold: 1.0,
        // };
        // let callback = (entries, observer) => {
        //     if (entries[0].isIntersecting && this.page < this.totalPages)
        //         this.loadMorePosts()
        // }
        // let observer = new IntersectionObserver(callback, options);
        // observer.observe(this.$refs.observer);
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])) // сортируем массив через строчное сравнение описания и названия
        },
        sortedAndSerchedPosts() {
            return this.sortedPosts.filter(post => post.title.includes(this.searchQuery))
        }
    },
    watch: {
    }
}
</script>

<style lang="scss">
@import '@/mixins/mixsins.scss';





.margin {
    @include margin-bottom;
}

.app__btns {
    display: flex;
    justify-content: space-between;
}

.page__wrapper {
    display: flex;
    gap: 0.3vw;
}

.page {
    border: 1px solid teal;
    padding: 0.1vw 0.3vw;
    cursor: pointer
}

.current-page {
    box-shadow: 0 0 .2vw darkcyan;
    transition: ease-in-out .3s;
    cursor: default
}

.observer {
    height: 3vw;
}
</style>