window.Event = new Vue();

Vue.component('coupon', {
    template: '<input placeholder="Enter coupon code" @blur="onCouponApplied">',

    methods: {
        onCouponApplied()
        {
            console.log('Applied | child')

            Event.$emit('applied');
        }
    }
})

const app = new Vue({
    el: '#root',
    data: {
        couponApplied: false
    },

    created(){
        Event.$on('applied', () => console.log('Coupon applied'));
    }
});