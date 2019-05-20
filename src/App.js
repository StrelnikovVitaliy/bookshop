import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Menu from './components/menu';
import ItemList from './components/item-list';


class App extends Component {
  state = {
    products: [
      {
        id: Math.random(),
        title: "Book title",
        category: "Book laminated",
        desc: `Description Description Description Description Description Description Description Description Description Description Description Description  `,
        price: 40,
        photo: `./assets/tempimage.jpg`
      },
      {
        id: Math.random(),
        title: "Book title",
        category: "Book fabric",
        desc: `Description Description Description Description Description Description Description Description Description Description Description Description `,
        price: 40,
        photo: `./assets/tempimage.jpg`
      },
      {
        id: Math.random(),
        title: "Page title",
        category: "Page laminated",
        desc: `Description Description Description Description Description Description Description Description Description Description Description Description `,
        price: 40,
        photo: `./assets/tempimage.jpg`
      },
      {
        id: Math.random(),
        title: "Page title",
        category: "Page fabric",
        desc: `Description Description Description Description Description Description Description Description Description Description Description Description `,
        price: 40,
        photo: `./assets/tempimage.jpg`
      },
      {
        id: Math.random(),
        title: "Game title",
        category: "Game",
        desc: `Description Description Description Description Description Description Description Description Description Description Description Description `,
        price: 40,
        photo: `./assets/tempimage.jpg`
      },
      {
        id: Math.random(),
        title: "Game title",
        category: "Game",
        desc: `Description Description Description Description Description Description Description Description Description Description Description Description `,
        price: 40,
        photo: `./assets/tempimage.jpg`
      }
    ],
    searchResults: [],
    cart: []

  };

  componentWillMount = () => {
    this.setState({ searchResults: this.state.products });
  };

  bookLaminated = event => {
    event.preventDefault();
    const searchQuery = "Book laminated";
    const searchResults = this.state.products.filter(el => {
      const searchCategoryValue = el.category;
      return (
        searchCategoryValue.indexOf(searchQuery) !== -1
      );
    });
    this.setState({ searchResults });
  }

  bookFabric = event => {
    event.preventDefault();
    const searchQuery = "Book fabric";
    const searchResults = this.state.products.filter(el => {
      const searchCategoryValue = el.category;
      return (
        searchCategoryValue.indexOf(searchQuery) !== -1
      );
    });
    this.setState({ searchResults });
  }
  pageLaminated = event => {
    event.preventDefault();
    const searchQuery = "Page laminated";
    const searchResults = this.state.products.filter(el => {
      const searchCategoryValue = el.category;
      return (
        searchCategoryValue.indexOf(searchQuery) !== -1
      );
    });
    this.setState({ searchResults });
  }

  pageFabric = event => {
    event.preventDefault();
    const searchQuery = "Page fabric";
    const searchResults = this.state.products.filter(el => {
      const searchCategoryValue = el.category;
      return (
        searchCategoryValue.indexOf(searchQuery) !== -1
      );
    });
    this.setState({ searchResults });
  }

  getGame = event => {
    event.preventDefault();
    const searchQuery = "Game";
    const searchResults = this.state.products.filter(el => {
      const searchCategoryValue = el.category;
      return (
        searchCategoryValue.indexOf(searchQuery) !== -1
      );
    });
    this.setState({ searchResults });
  }

  handleSearch = event => {
    const searchQuery = event.target.value.toLowerCase();
    const searchResults = this.state.products.filter(el => {
      const searchTitleValue = el.title.toLowerCase();
      const searchDescValue = el.desc.toLowerCase();
      const searchCategoryValue = el.category.toLowerCase();
      return (
        searchTitleValue.indexOf(searchQuery) !== -1 ||
        searchDescValue.indexOf(searchQuery) !== -1 ||
        searchCategoryValue.indexOf(searchQuery) !== -1
      );
    });

    this.setState({ searchResults });
  };
  addToCart = id => {
    const currentItem = [...this.state.searchResults].filter(v => v.id === id);
    
    this.setState({
      ...this.state,
      cart: [...currentItem, ...this.state.cart]
    });
  };

  removeFromCart = productId => {
    const updatedCartArray = [...this.state.cart].filter(v => v.id !== productId);
    this.setState({
      ...this.state,
      cart: updatedCartArray
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          cart={this.state.cart}
          removeFromCart={this.removeFromCart} />
        <Menu
          bookLaminated={this.bookLaminated}
          bookFabric={this.bookFabric}
          pageLaminated={this.pageLaminated}
          pageFabric={this.pageFabric}
          getGame={this.getGame}
          handleSearch={this.handleSearch} />
        <ItemList
          products={this.state.searchResults}
          cart={this.state.cart}
          addToCart={this.addToCart}
        />

      </div>
    );
  }
}

export default App;
