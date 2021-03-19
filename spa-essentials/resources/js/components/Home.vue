<template>
    <div class="bg-blue-600">
        <div class="h-24 flex justify-center">
            <h1 class="font-semibold text-gray-50 text-2xl self-center">Home Page</h1>
        </div>
        <div>
            <div v-for="status in statuses" v-bind:key="status.id" class="mt-8 text-gray-100">
                <h3>
                    {{ status.user.name }} said...
                </h3>
                <p v-text="status.body"></p>
            </div>
        </div>
    </div>        
</template>

<script>
export default {
    data(){
        return{
            statuses: []
        }
    },

    created(){
        axios.get('/statuses')
        .then(({ data }) => this.statuses = data);
    }
}
</script>