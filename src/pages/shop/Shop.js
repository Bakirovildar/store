import React, {useEffect} from "react";
import Container from "react-bootstrap/Container";
import ProductFilterSidebar from "./sections/ProductFilterSidebar";
import {Col, Row} from "react-bootstrap";
import ProductList from "./sections/ProductList";
import banner from '../../assets/images/heading-pages-05.png'
import PageTitleBanner from "../../components/PageTitleBanner";
import ProductSortAndPagination from "./sections/ProductSortAndPagination";
import {productService} from "../../service/ProductService";
import {useNavigate, useParams} from "react-router-dom";

const Shop = ({setCartItems}) => {
    const {category} = useParams()
    let navigate = useNavigate();

    const navigateToAllIfNoCategory = () => {
        if (!category || !productService.getCategories().some(c => c.url === category)) {
            navigate("/shop/all", {replace: true})
        }
    }
    useEffect(navigateToAllIfNoCategory, [category, navigate])

    const products = productService.getProductsByCategory(category || 'all')

    return (
        <div>
            <PageTitleBanner title="Products" img={banner}/>
            <Container className="pt-40">
                <Row>
                    <Col sm={6} md={4} lg={3} className="pb-40">
                        <ProductFilterSidebar/>
                    </Col>
                    <Col sm={6} md={8} lg={9} className="pb-40">
                        <ProductSortAndPagination/>
                        <ProductList products={products} setCartItems={setCartItems}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Shop