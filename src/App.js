import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Menu from './components/menu';
import ItemList from './components/item-list';
import '../node_modules/video-react/dist/video-react.css'; // import css



class App extends Component {
  state = {
    products: [
      {
        id: Math.random(),
        title: "Гра букви та цифры ID:100",
        category: "Game",
        desc: `Вивчаємо фрукти та цифри, розвиваємо дрібну моторику натискаючи на прищепку `,
        price: 40,
        photo: `./assets/1`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Гра морозиво ID:101",
        category: "Game",
        desc: `Морозиво – улюблений десерт більшості дітей, виявляється може бути не лише смачным, але і розвиваючим🍦Розкладний чемоданчик для приготування морозива – чудова гра для маленьких фантазерів. Чемоданчик містить 1 ріжок та 9 кульок трьох кольорів. Також є карточки, які вказують в якому порядку мають стояти кульки. Це прекрасна гра для розвитку мислення та пам’яті. Навчаємося цікаво) `,
        price: 40,
        photo: `./assets/2`,
        format: `.mp4`

      },
      {
        id: Math.random(),
        title: "Гра читання ID:102",
        category: "Game",
        desc: `Вчимося читати граючись Вчимося читати граючись`,
        price: 40,
        photo: `./assets/3`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Книга ID:103",
        category: "Book fabric",
        desc: `Вже через 6 місяців після народження Ви можете подарувати своєму малюку книгу. Розвиваючі книги – це справжня знахідка для батьків. 📚 Їх ще називають – quiet book(тиха книга), адже вона дісно захоплює дитину та ще й допомогає вивчити багато цікавого. Така книжечка є прекрасним подарунком та стане корисним помічником в розвитку дитини. Кожна сторіночка має свій сюжет та допомогає вивчити певну тему🌸 Всі елементи тактильні, що дуже важливо для малюків. Книга може бути іменною, що зробити її індивідуальною для вашої дитини. Можна вибрати колір, матеріал, розмір та наповнення сторінок за різними тематиками❤️`,
        price: 40,
        photo: `./assets/4`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Гра пазлики ID:104",
        category: "Game",
        desc: `Цікаві пазлики допомогають вивчити всі кольори, а також різноманітні предмети відповідного кольору`,
        price: 40,
        photo: `./assets/7`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Гра пенгвины ID:105",
        category: "Game",
        desc: `Допомогаємо веселим пінгвінчикам знайти загублену шапочку.`,
        price: 40,
        photo: `./assets/8`,
        format: `.jpg`

      },
      {
        id: Math.random(),
        title: "Гра тварини ID:106",
        category: "Game",
        desc: `Велака різноманітність тварин існує в світі, кожне звірятко є неповторним, має свої особливості та свою домівку. Вчимо хто де живе та навчаємося впізнати тваринку по формі🐶🐷🐥`,
        price: 40,
        photo: `./assets/9`,
        format: `.jpg`

      },
      {
        id: Math.random(),
        title: "Гра тварини ID:107",
        category: "Game",
        desc: `Ваша дитина любить тварин? Тоді така гра саме для неї. ЇЇ можна взяти на прогулянку або ж зайняти дитину вдома. Має 8 різнокольорових карманчиків на які потрібно приклеїти звірят у відповідності до кольору, а в карманчик кладемо їжу, яку певна тваринка полюбляє. Навчаємося цікаво)`,
        price: 40,
        photo: `./assets/10`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Книжечка ID:108",
        category: "Book fabric",
        desc: `Розвиваюча книжечка для вивчення цифр – захоплююча та корисна забава. Граючись дитина запам’ятовує 10 перших цифр та вивчає багато цікавого, розвиває дрібну моторику, логіку та ранню матиматику👍`,
        price: 40,
        photo: `./assets/11`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Страница ID:109",
        category: "Page fabric",
        desc: `Вивчаємо цифру 1 за допомогою мудрої сови. Малюк пальчиком має знаходити заховані цифри🦉`,
        price: 40,
        photo: `./assets/12`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Страница ID:110",
        category: "Page fabric",
        desc: `Вивчаємо цифру 2 та збираємо урожай. Яблучка потрібно помістити у відповідну корзинку по кольору.🍏`,
        price: 40,
        photo: `./assets/13`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Страница ID:111",
        category: "Page fabric",
        desc: `Вивчаємо цифру 3 з веселим жирафом. Допоможіть жирафчику одягнути метелик. Вивчаємо кольори та розвиваємо дрібну моторику.🦒`,
        price: 40,
        photo: `./assets/14`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Страница ID:112",
        category: "Page fabric",
        desc: `Вивчаємо цифру 4 та створюємо прекрасний сад.🌸`,
        price: 40,
        photo: `./assets/15`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Страница ID:113",
        category: "Page fabric",
        desc: `Вивчаємо цифру 5, а також геометричні фігури. Кожна пташка має свою форму, їх потрібно приклеїти в відповідне місце.🐤`,
        price: 40,
        photo: `./assets/16`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Страница ID:114",
        category: "Page fabric",
        desc: `Вивчаємо цифру 6 та збираємо грону винограду.🍇`,
        price: 40,
        photo: `./assets/17`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Страница ID:115",
        category: "Page fabric",
        desc: `Вивчаємо цифру 7 з яскравою веселкою, запам’ятовуємо кольори та їх порядок.🌈`,
        price: 40,
        photo: `./assets/18`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Страница ID:116",
        category: "Page fabric",
        desc: `Вивчаємо цифру 8 та допомогаємо зайчику виловити рибку.🐰🐟`,
        price: 40,
        photo: `./assets/19`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Страница ID:117",
        category: "Page fabric",
        desc: `Вивчаємо цифру 9 з красивою квіткою. Під кожною пелюсткою є бусинки, які потрібно порахувати та знайти відповідну цифру.🌺`,
        price: 40,
        photo: `./assets/20`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Страница ID:118",
        category: "Page fabric",
        desc: `Вичаємо цифру 10 та годуємо жабку🐸`,
        price: 40,
        photo: `./assets/21`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра тварини ID:119",
        category: "Page fabric",
        desc: `Сторіночка погоди)
        В дощик 🌦їжачок ховається під парасолькою, а метелики за кущиком, грибочки тим часом ростуть)
        В сонячну погоду🌤 літають метелики під пухнастою хмаринкою, а їжачок збирає грибочки на свої голочки🦔`,
        price: 40,
        photo: `./assets/22`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра тварини ID:120",
        category: "Page fabric",
        desc: `Лапки на гудзичках, вушка на кнопочках, ось такий Зайка чекає на свого нового друга🐰
        Може бути на обкладинці або ж просто як одна із сторінок книги📚`,
        price: 40,
        photo: `./assets/23`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Книга ID:121",
        category: "Book fabric",
        desc: `Ось така розвиваюча книжечка, яка може стати незамінною іграшкою малюка👶🏻 Кожна сторіночка - це нова історія, яка навчає та розважає)`,
        price: 40,
        photo: `./assets/24`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Гра тварини ID:122",
        category: "Page fabric",
        desc: `Пальчикові ігри дають можливість батькам грати з малюками, радувати їх і, разом з тим поліпшувати мову і дрібну моторику. Завдяки таким іграм дитина отримує різноманітні сенсорні враження, в неї розвивається уважність та здатність концентруватися. Такі ігри формують добрі взаємовідносини між дітьми, а також між дорослим та малюком👨‍👩‍👧`,
        price: 40,
        photo: `./assets/25`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра тварини ID:123",
        category: "Book fabric",
        desc: `Ну дуууууже стильна книжечка для маленької принцеси Соломійки👸🏼
        А ваші красуні теж уявляють себе принцесами?👑`,
        price: 40,
        photo: `./assets/26`,
        format: `.mp4`
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
