export default {
    name : 'create-post',
    data() {
        return {
            title : '',
            description : '',
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }

}