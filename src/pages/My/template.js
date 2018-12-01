import blog from '@/api/blog'
export default {
    data() {
        return {
            blogs: [],
            page: 1,
            total: 0
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    created: function() {
        blog.getUserBlogList(this.user.id).then(
            res => {
                this.blogs = res.data
                this.total = res.total
            }
        )
    },
    methods: {
        change(newPage) {
            this.page = newPage
            blog.getUserBlogList(this.user.id, { page: newPage }).then(
                res => {
                    this.blogs = res.data
                    this.total = res.total
                    this.$router.push('/my/?page=' + newPage)
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
        },
        DELETE(blogId) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                return blog.deleteBlog(blogId)
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                })
                this.blogs = this.blogs.filter(blog => blog.id != blogId)
            })
        }
    }
}