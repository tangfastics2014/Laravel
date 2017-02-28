<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Home Component</div>

                    <ul class="list-group">
                        <li class="list-group-item" v-for="topic in topics">
                            {{ topic.title }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {store} from './Store';

    export default {
        mounted() {
            console.log('Component mounted.');
            this.getTopics();
        },

        store,

        methods: {
            getTopics() {
                axios.get('/api/topics')
                    .then(response => {
                        this.$store.commit('SET_TOPICS', response.data.data);
                    })
                    .catch(response => {
                        console.log(response);
                    });
            }
        },

        computed: {
            topics() {
                return this.$store.state.topics;
            }
        }
    }
</script>
