const arr = [
    {
        src: 'https://res.smzdm.com/resources/public/js/sdk/sa-sdk.js'
    }];
const loadScript = (obj) => {
    const script = document.createElement('script');
    if (obj.src) {
        script.src = obj.src;
    } else if (obj.innerHTML) {
        script.innerHTML = obj.innerHTML;
    }

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
};
function getHead (vm) {
    const { head } = vm.$options;

    if (head) {
        return typeof head === 'function' ? head.call(vm) : head;
    }
}
const clientHeadMixin = {
    mounted () {
        console.log('12312312');
        arr.forEach((item, index) => {
            loadScript(item);
        });
    }
};
const serverHeadMixin = {
    created () {
        const head = getHead(this);
        if (head) {
            if (head.script && head.script.length > 0) {

            } else {
                head.script = [];
            }
            head.script.unshift({
                src: 'https://res.smzdm.com/resources/public/js/sdk/sa-sdk.js'
            });
            this.$ssrContext.script = head.script;
        }
    }
};
export default process.client ? clientHeadMixin : serverHeadMixin;
