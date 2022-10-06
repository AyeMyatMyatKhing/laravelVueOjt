
export default {
    name: 'post-list',
    data() {
        return {
            posts : [],
            searchData : null,
            filterPost : []
        }
    },
    mounted() {
        this.guestPosts();
    },
    methods: {
        guestPosts() {
            this.$axios.get('/guestPost').then((response) => {
                this.posts = response.data.posts;
            })
        }
    }
}