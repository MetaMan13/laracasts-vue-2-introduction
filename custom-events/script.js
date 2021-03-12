Vue.component('coupon', {
    template: '<input placeholder="Enter coupon code" @blur="onCouponApplied">',

    methods: {
        onCouponApplied()
        {
            console.log('Applied | child')
            this.$emit('applied')
        }
    }
})

const app = new Vue({
    el: '#root',
    data: {

    },
    methods: {
        onCouponApplied()
        {
            console.log('Applied | parent');
        }
    }
});