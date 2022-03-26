import React, {useState} from "react"
import Container from "react-bootstrap/Container"
import banner from "../../assets/images/heading-pages-05.png"
import BlogList from "./sections/BlogList"
import BlogSidebar from "./sections/BlogSidebar"
import {Col, Row} from "react-bootstrap"
import {blogService} from "../../service/BlogService"
import PageTitleBanner from "../../components/PageTitleBanner"

const Blog = ({setCartItems}) => {
    const blogs = blogService.getAllBlogs()
    const [blog, setBlog] = useState(blogs)

    const onChangeInput = (event) => {
        const copyBlog = [...blog]
        const blogFilter = copyBlog.filter(blog => blog.title.includes(event.target.value))
        !event.target.value
            ? setBlog(blogs)
            : setBlog(blogFilter)
    }


    return (
        <Container fluid>
            <PageTitleBanner img={banner}/>
            <Container>
                <Row className="pb-5 pt-5">
                    <Col className="ps-5 pe-5" lg={8}>
                        <BlogList blogs={blog}/>
                    </Col>
                    <Col lg={4}>
                        <BlogSidebar setCartItems={setCartItems} onChangeInput={onChangeInput}/>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Blog