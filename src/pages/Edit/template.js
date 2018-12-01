import blog from '@/api/blog.js'

export default {
    data: function() {
        return {
            title: '',
            description: '',
            content: '',
            blogId: 0
        }
    },
    created: function() {
        this.blogId = this.$route.params.blogId
        blog.getDetail(blogId).then(res => {
            this.title = res.data.title
            this.description = res.data.description
            this.content = res.data.content
        })
    },
    methods: {
        onEdit() {
            blog.updataBlog(this.blogId, { title: this.title, description: this.description, content: this.content })
                .then(
                    res => {
                        this.$message.success(res.msg)
                        this.$router.push('/')
                    }
                )
        }
    }
}