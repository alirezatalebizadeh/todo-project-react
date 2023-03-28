import React, { Component, Fragment } from 'react'
import Product from './Product'
import CartProduct from './CartProduct'
import Social from './Social'

export default class Shop extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [
                { id: 1, title: 'Album 1', price: 5, img: './Images/Album 1.png' },
                { id: 2, title: 'Album 2', price: 15, img: './Images/Album 2.png' },
                { id: 3, title: 'Album 3', price: 20, img: './Images/Album 3.png' },
                { id: 4, title: 'Album 4', price: 100, img: './Images/Album 4.png' },
                { id: 5, title: 'Coffee', price: 5, img: './Images/Cofee.png' },
                { id: 6, title: 'Shirt', price: 50, img: './Images/Shirt.png' },
            ],

            shoppingCart: [],
            socials: [
                { id: 1, href: '#0', img: './Images/Youtube Logo.png' },
                { id: 2, href: '#0', img: './images/Spotify Logo.png' },
                { id: 3, href: '#0', img: './Images/YouTube Logo.png' },
            ],
        }


    }

    //add product to shopingCart
    addToShop(productId) {
        let newProduct = this.state.products.find(product => {
            return product.id === productId
        })

        this.setState(prevState => {
            return {
                shoppingCart: [...prevState.shoppingCart, newProduct]
            }
        })
        // console.log(this.state.shoppingCart);
    }

    removeProductFromBasket(ProductId) {
        console.log(ProductId);

        let basketFiltered = this.state.shoppingCart.filter(product => {
            return product.id !== ProductId
        })
        // console.log(basketFiltered);

        this.setState({
            shoppingCart: [...basketFiltered]
        })
    }


    //remove product of basket
    removeCart() {
        this.setState({
            shoppingCart: []
        })
    }


    render() {
        return (
            <>
                <header className="main-header">

                    <nav className="main-nav nav">
                        <ul>
                            <li><a href="#0">HOME</a></li>
                            <li><a href="#0">STORE</a></li>
                            <li><a href="#0">ABOUT</a></li>
                        </ul>
                    </nav>

                    <h1 className="band-name band-name-large"> elham shopping</h1>
                </header>

                <section className="container content-section">
                    <div className="shop-items">
                        {/* rendering items of products */}
                        {this.state.products.map(product => (
                            <Product onAddToCard={this.addToShop.bind(this, product.id)} {...product} key={product.id} />
                        ))}

                    </div>
                </section>
                <section className="container content-section">
                    <h2 className="section-header">CART</h2>
                    <div className="cart-row">
                        <span className="cart-item cart-header cart-column">ITEM</span>
                        <span className="cart-price cart-header cart-column">PRICE</span>
                        <span className="cart-quantity cart-header cart-column">Doing</span>
                    </div>
                    <div className="cart-items">
                        {/* rendering item of shoppingCart */}
                        {this.state.shoppingCart.map(product => (
                            <CartProduct onRecieveId={this.removeProductFromBasket.bind(this, product.id)} {...product} key={product.id} />
                        ))}

                    </div>
                    <button className="btn btn-primary btn-purchase" onClick={this.removeCart.bind(this)} type="button">
                        Empty Cart
                    </button>
                </section>
                <footer className="main-footer">
                    <div className="container main-footer-container">
                        <h3 className="band-name">The Generics</h3>
                        <ul className="nav footer-nav">

                            {this.state.socials.map(item => (
                                <Social key={item.id} {...item} />
                            ))}

                        </ul>
                    </div>
                </footer>
            </>
        )
    }
}