<template>
    <div class="dialog" v-if="show" @click="hideDialog">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'my-dialog',
    props: {
        show:{
            type: Boolean,
            default: false,
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    }
}
</script>

<style scoped>
.dialog {
    /* растягиваем блок по всему экрану и вместо топ боттом райт лефт пишем inset */
    inset: 0;  
    background: #00000050;
    position: fixed;
    display: flex;
		
}
.dialog__content {
    margin: auto;
    background-color: white;
    border-radius: 0.6vw;
    min-width: 18vw;
    padding: 2vw;
}
</style>