<template>
    <button class='button'>
        <slot></slot>
    </button>
</template>

<script>
export default {
  props: {},
  name: 'my-button',
}
</script>

<style lang="scss" scoped>

@import '@/mixins/mixsins.scss';
.button {
    border: $border solid teal;
    padding: .5vw;
    background-color: #01868b00;
    
}
</style>