import blog from '@/api/blog'

export default {
    data() {
        return {
            userId: 0,
            blogs: [],
            user: {},
            total: 0
        }
    },
    created: function() {
        this.userId = this.$route.params.userId
        blog.getUserBlogList(this.userId).then(
            res => {
                this.blogs = res.data
                this.total = res.total
                this.user = res.data[0].user
            }
        )
    },
    methods: {
        change(newPage) {
            this.page = newPage
            blog.getUserBlogList(this.userId, { page: newPage }).then(
                res => {
                    this.blogs = res.data
                    this.total = res.total
                }
            )
        },
        getTime(str) {
            if (!str) return ''
            let date = new Date(str)
            let time = {}
            time.year = date.getFullYear()
            time.month = date.getMonth() + 1
            time.date = date.getDate()
            return time
        }
    }
}