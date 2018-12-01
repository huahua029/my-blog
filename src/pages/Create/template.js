import blog from '@/api/blog.js'

export default {
    data() {
        return {
            title: '',
            description: '',
            content: ''
        }
    },
    methods: {
        onCreate() {
            blog.createBlog({ title: this.title, description: this.description, content: this.content })
                .then(
                    res => {
                        this.$message.success(res.msg)
                        this.$router.push('/')
                    }
                )
        }
    }
}