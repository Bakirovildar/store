import FeaturedProducts from "./sidebar/FeaturedProducts"
import {Container} from "react-bootstrap"
import Search from "./sidebar/Search"
import {productService} from "../../../service/ProductService";

const BlogSidebar = ({setCartItems}) => {
    let productsByCategory = productService.getProductsByCategory('featured')
    return (
        <Container>
            <Search />
            <FeaturedProducts products={productsByCategory} setCartItems={setCartItems} />
        </Container>
    )
}

export default BlogSidebar