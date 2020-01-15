<template>
<div>
    <div @click="show = !show">
        按钮
    </div>
    <div @click="showbb = !showbb">
        按钮2
    </div>
    <!-- <transition name="aa">
        <div v-if="show">test</div>
    </transition> -->
    <transition 
        name="bounce"
        @enter="enter" >
        <div v-if="showbb">hello</div>
    </transition>
</div>
</template>
<script>
export default {
    data () {
        return {
            show: false,
            showbb: true,
            el: ''
        };
    },
    methods: {
        enter (el, done) {
            done();
        }
    }
}
</script>
<style>
div{
    text-align: center;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.aa-enter, .aa-leave-to {
    opacity: 0;
}
.aa-enter-active, .aa-leave-active {
    transition: opacity .5s;
}
</style>