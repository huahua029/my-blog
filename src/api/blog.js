import request from '@/helpers/request.js'

const URL = {
    BLOGLIST: '/blog',
    DETAIL: '/blog/:blogId',
    CREATE: '/blog',
    UPDATA: '/blog/:blogId',
    DELETE: '/blog/:blogId'
}

export default {
    getBlogList({ page = 1, userId } = { page: 1 }) {
        return request(URL.BLOGLIST, 'GET', { page, userId })
    },
    getIndexBlogList({ page = 1 } = { page: 1 }) {
        return this.getBlogList({ page: 1 })
    },
    getUserBlogList(userId, { page = 1 } = { page: 1 }) {
        return this.getBlogList({ userId, page })
    },
    getDetail(blogId) {
        return request(URL.DETAIL.replace(':blogId', blogId))
    },
    createBlog({ title = '', description = '', content = '' } = { title: '', description: '', content: '' }) {
        return request(URL.CREATE, 'POST', { title, description, content })
    },
    updataBlog(blogId, { title, description, content }) {
        return request(URL.UPDATA.replace(':blogId', blogId), 'PATCH', { title, description, content })
    },
    deleteBlog(blogId) {
        return request(URL.DELETE.replace(":blogId", blogId), 'DELETE')
    }
}