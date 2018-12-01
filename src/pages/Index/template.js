import blog from '@/api/blog.js'

export default {
    data() {
        return {
            blogs: [],
            total: 0,
            page: 1
        }
    },
    created: function() {
        this.page = Number(this.$route.query.page) || 1
        blog.getIndexBlogList({ page: this.page }).then(
            res => {
                this.blogs = res.data
                this.total = res.total
            }
        )
    },
    methods: {
        change(newPage) {
            this.page = newPage
            blog.getIndexBlogList({ page: newPage }).then(
                res => {
                    this.blogs = res.data
                    this.total = res.total
                    this.$router.push('/?page=' + newPage)
                }
            )
        }
    }
}