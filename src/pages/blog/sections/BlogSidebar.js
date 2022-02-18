import FeaturedProducts from "./sidebar/FeaturedProducts"
import {Container} from "react-bootstrap"
import {productService} from "../../../service/ProductService";
import Search from "../../../components/Search";

const BlogSidebar = ({setCartItems, onChangeInput}) => {
    let productsByCategory = productService.getProductsByCategory('featured')
    return (
        <Container>
            <Search onChangeInput={onChangeInput}/>
            <FeaturedProducts products={productsByCategory} setCartItems={setCartItems} />
        </Container>
    )
}

export default BlogSidebar