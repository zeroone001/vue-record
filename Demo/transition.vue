<template>
<div>
    <div @click="show = !show">
        按钮
    </div>
    <transition name="aa">
        <div v-if="show">test</div>
    </transition>
</div>
</template>
<script>
export default {
    data () {
        return {
            show: false
        };
    },
    methods: {

    }
}
</script>
<style>
.aa-enter, .aa-leave-to {
    opacity: 0;
}
.aa-enter-active, .aa-leave-active {
    transition: opacity .5s;
}
</style>