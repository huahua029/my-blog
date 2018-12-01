import blog from '@/api/blog.js'
import marked from 'marked'

export default {
    data() {
        return {
            user: {},
            title: '',
            content: '',
            updatedAt: ''
        }
    },
    computed: {
        markdown() {
            return marked(this.content);
        }
    },
    created() {
        this.blogId = this.$route.params.blogId
        blog.getDetail(this.blogId).then(
            res => {
                this.user = res.data.user
                this.title = res.data.title
                this.content = res.data.content
                this.updatedAt = res.data.updatedAt
            }
        )
    }
}