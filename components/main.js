Vue.component('task-list', {
    template: `
        <ul>
            <task v-for="task in tasks">
                {{ task.task }}
            </task>
        </ul>
    `,
    data(){
        return{
            tasks: [
                { task: 'Go to the bank', complete: false},
                { task: 'Eat apple', complete: true},
                { task: 'Go shopping', complete: false},
                { task: 'Go sleep', complete: false},
            ]
        };
    },
});

Vue.component('task', {
    template: `
        <li>
            <slot></slot>
        </li>
    `,
});

new Vue({
    el: '#root',
    data: {
        
    }
})