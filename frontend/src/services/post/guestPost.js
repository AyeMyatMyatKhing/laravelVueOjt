export default {
    name : 'guest-post',
    data() {
        return {
            posts : [],
            searchData : '',
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
                this.filterPost = this.posts.data;
            })
        },
        filterData() {
            this.filterPost = this.posts.data.filter((post) => {
                return (
                    post.title.toLowerCase().includes(this.searchData.toLowerCase()) ||
                    post.description.toLowerCase().includes(this.searchData.toLowerCase()) ||
                    post.user.name.toLowerCase().includes(this.searchData.toLowerCase())
                )
            })
        }
    }
}