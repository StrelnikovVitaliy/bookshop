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
      },
      {
        id: Math.random(),
        title: "Гра тварини ID:124",
        category: "Page fabric",
        desc: `Цей песик тепер мій улюблений герой🐶 який же ж він милий зі своїми вушками-магнітиками😍 До речі сусід у нього - котик, і вони чудові друзі🐶🐱 `,
        price: 40,
        photo: `./assets/27`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра тварини ID:125",
        category: "Page fabric",
        desc: `Апельсины и бананы
        Очень любят обезьяны🐵
        Любят детки, любят мамы
        Могут съесть их килограммы. Любят папы-обезьяны 
        Апельсины и бананы🍊🍌`,
        price: 40,
        photo: `./assets/28`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра тварини ID:126",
        category: "Page fabric",
        desc: `Це хто, розсунувши ріжки
        Проповзає по доріжці?
        Дві антени на маківці, 
        А сама сидить у хатинці, 
        На собі її везе, 
        Дуже повільно повзе🐌 
        А ще й допомогає вивчити порядок кольорів веселки🌈 `,
        price: 40,
        photo: `./assets/29`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Книга новорична ID:127",
        category: "Book fabric",
        desc: `Santa Claus is coming to town🎅🏻 Така новорічна книжечка відправиться під ялинку малюку🎄 І настрій вже такий Різдвяний❄️ А ви написали лист Санті? `,
        price: 40,
        photo: `./assets/30`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Книга математика ID:128",
        category: "Book laminated",
        desc: `Виявляється вивчити математику можна легко та цікаво! Вивчаємо цифри, геометричні фігури, додавання та віднімання і все в ігровій формі)
        Робимо процес навчання захоплюючим)`,
        price: 40,
        photo: `./assets/31`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Сторинка логика ID:129",
        category: "Page laminated",
        desc: `Чудова гра для розвитку логічного мислення та вивчення геометричних фігур☝️`,
        price: 40,
        photo: `./assets/32`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Сторинка логика ID:130",
        category: "Page fabric",
        desc: `Розвиток логіки починається з цікавих завдань на мислення, увагу, пам‘ять. Така книжечка стане чудовим помічником для занять з маленькими розумниками. Допоможе знаходити відмінне та спільнне, вивчати властивості предметів та причинно-наслідкові зв’язки, розвивати логічне мислення та отримувати загальні знання`,
        price: 40,
        photo: `./assets/33`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Сторинка логика ID:131",
        category: "Page laminated",
        desc: `Що де росте? Пізнавальна та яскрава гра допоможе з користю провести час🍏`,
        price: 40,
        photo: `./assets/34`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Сторинка логика ID:132",
        category: "Page laminated",
        desc: `Сортування транспорту по кольору: вивчаємо кольори, різновиди транспорту та вчимося співставляти 🚗🚌✈️ `,
        price: 40,
        photo: `./assets/35`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Книга ID:133",
        category: "Book laminated",
        desc: `Книга для маленької принцеси Софійки👑 включає сторіночки з іграми для найменших: вивчення кольорів, тваринок, фруктів та овочів, лічба) `,
        price: 40,
        photo: `./assets/36`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Гра тварини ID:134",
        category: "Page laminated",
        desc: `Доповни картинку, що не вистачає? Як показує практика, тваринки - це улюблена тема більшості діток🐶🐷🐯 така гра розвиває логічне мислення та уяву! `,
        price: 40,
        photo: `./assets/37`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Сторинка кольори ID:135",
        category: "Page laminated",
        desc: `Вивчаємо цифри, рахуємо олівчики, повторюємо кольори та розвиваємо дрібну моторику - і це все в одній грі! `,
        price: 40,
        photo: `./assets/38`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Книга ID:136",
        category: "Book laminated",
        desc: `За думкою фахівців, ранній вік є унікальним періодом в житті дитини, тому що саме в цей період формується свідомість, самооцінка, мислення. Тому розвиваючі заняття, ігри, книги мають стати невід‘ємною частинкою життя малюка)`,
        price: 40,
        photo: `./assets/39`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Гра кольори ID:137",
        category: "Page laminated",
        desc: `Пальчикові ігри дають можливість батькам грати з малюками, радувати їх і, разом з тим поліпшувати мову і дрібну моторику. Завдяки таким іграм дитина отримує різноманітні сенсорні враження, в неї розвивається уважність та здатність концентруватися. Такі ігри формують добрі взаємовідносини між дітьми, а також між дорослим та малюком👨‍👩‍👧`,
        price: 40,
        photo: `./assets/40`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра тварини ID:138",
        category: "Page laminated",
        desc: `Целый день Ежи Ежовичи 
        Собирают фрукты-овощи. 
        Сливы, яблоки и груши 
        На пеньках и кочках сушат. 
        Огурцы и помидоры 
        Осторожно носят в норы... Знают, если есть еда, 
        Не страшны и холода🦔 `,
        price: 40,
        photo: `./assets/41`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра Геометричні фігури ID:139",
        category: "Page laminated",
        desc: `Геометричні фігури - це неймовірне джерело уяви, адже з різних фігур можна зібрати різні картинки, форми, предмети) навчаємося весело)`,
        price: 40,
        photo: `./assets/42`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра цифри ID:140",
        category: "Page laminated",
        desc: `Навчаємося рахувати: порахуй краплинки та знайди відповідну цифру)`,
        price: 40,
        photo: `./assets/43`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра слова ID:141",
        category: "Book laminated",
        desc: `Sight words: вміння впізнавати слова та знаходити однакові - важливий етап в процесі навчання читання, а з такою грою робимо цей процес цікавим🥰 `,
        price: 40,
        photo: `./assets/44`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Гра машини ID:142",
        category: "Game",
        desc: `Така гра чудово підійде для любителів транспорту🚗 на основі чорно-білі картинки, потрібно знайти таку ж кольорову і прикріпити) Навчаємося весело)`,
        price: 40,
        photo: `./assets/45`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра тварини ID:143",
        category: "Page laminated",
        desc: `Хто де живе? Чудова розвиваюча сторінка для малюків допомогає вивчити види тваринок та де вони живуть) обігрувати гру можна безліччю способів: 
        1. заховати одну тваринку з кожного місця дати дитині можливість здогадатися що зникло. 
        2. Описувати тваринку, щоб малюк здогадався що це і прикріпив на відповідне місце. 
        3. Вивчати звуки тварин. 
        4. Перемішати всіх звірів та запропонувати дитині виправити помилку
        Та багато іншого))
        Навчаємося весело)`,
        price: 40,
        photo: `./assets/46`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра отличия ID:144",
        category: "Page laminated",
        desc: `На перший погляд дуже проста гра, але виявляється дітям не просто зробити картинки однаковими... і справді, потрібно проаналізувати що є на обох картинках та що не вистачає, щоб зробити їх ідентичними☝️ розвиває увагу та мислення📚`,
        price: 40,
        photo: `./assets/47`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра отличия ID:145",
        category: "Page laminated",
        desc: `Пограємо?) А ви можете швидко визначити що змінилося на кожній картці? Така гра чудово тренує пам‘ять та увагу☝️ `,
        price: 40,
        photo: `./assets/48-1`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра фигуры ID:146",
        category: "Game",
        desc: `Дуже я люблю цю гру, а діти взалі в захваті від неї! Доставка подарунків🎁 маленькі листоноші можуть відчути себе справжнім Сантою!📬 На картці зображено який подарунок в яку квартиру потрібно доставити, де поверх - це геометрична фігура, а колір - квартира) `,
        price: 40,
        photo: `./assets/49`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Гра кольори ID:147",
        category: "Page laminated",
        desc: `Пори року та їх символи! Символи можуть бути заламіновані або зроблені з фетру) `,
        price: 40,
        photo: `./assets/50`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра сезоны ID:148",
        category: "Game",
        desc: `Ось також цікавий спосіб вивчити пори року: прикріплюємо одяг, який відповідає тому чи іншому сезону) з такою грою можна вивчити: 
        Пори року ⛄️☀️
        Місяці☔️
        Одяг та аксесуари👗
        Погода 🌨❄️`,
        price: 40,
        photo: `./assets/51`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра цвета ID:149",
        category: "Game",
        desc: `Вивчення кольорів - ніби проста тема, але її можна обіграти багатьма способами, щоб зробити заняття цікавим та розвиваючими) 
        Ось один з таких варіантів: знайти три предмети відповідного кольору, прикріпити на картку у формі пазлу🧩 `,
        price: 40,
        photo: `./assets/52`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Гра професии ID:150",
        category: "Game",
        desc: `Картки за допомогою яких про професії можна вивчити все: 
        1. Хто де працює; 🏥
        2. Який транспорт відповідає тій чи іншій спеціальності; 🚒
        3. Хто що використовує; 📕
        4. Можна пограти в театр та створити власні маленькі історії; `,
        price: 40,
        photo: `./assets/53`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Гра погода ID:151",
        category: "Game",
        desc: `Кожен ранок малюка може починатися ось з такого плакату☝️
        1. Стрілочкою показуємо температуру🌡
        2. Прикріплюємо картинку з певною погодою☁️
        3. Визначаємо пору року💐 
        4. Приклеюємо настрій, який сьогодні у малюка😀
        4. Знаходимо день тижня та місяць☝️ `,
        price: 40,
        photo: `./assets/54`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Гра память ID:152",
        category: "Game",
        desc: `Ігри з тінями дуже цікаві та корисні, адже вони сприяють розвитку творчої уяви та пам’яті) в таку гру можна грати кількома способами: 
        1. Найпростіший: дивлячись на картку дитина відтворює по шаблону послідовність. 
        2. Дати дитині подивитися на картинку, закрити її, почати ряд, наприклад - собачка, кролик... і залишити незакінченим, щоб малюк згадав, яка тваринка була останньою. 
        3. Дати дитині час ознайомитися з карткою, закрити її та запропонувати по пам‘яті відтворити послідовність🐶🐹🐔  `,
        price: 40,
        photo: `./assets/55`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Гра логика ID:153",
        category: "Page laminated",
        desc: `Дуже хороша гра для розвитку логічного мислення🌸 Що об‘єднує парасольку, чобітки, хмарку, блискавку та калюжу? - дощик🌧 
        Пропонуємо дитині подивитися на всі картинки на пелюстках квітки та визначити що між ними спільного! Весело та цікаво розвиваємося😍`,
        price: 40,
        photo: `./assets/56`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра цвета ID:154",
        category: "Game",
        desc: `Весна приносить яскраві кольори та гарний настрій) З яскравими іграми навчання приносить лише радість🌸 `,
        price: 40,
        photo: `./assets/57`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Гра сортер ID:155",
        category: "Game",
        desc: `Один із варіантів сортера! Розділяємо фрукти на різні дерева + колір фрукта 🍎відповідає кольору гудзичка! Ще така гра може бути на липучках) `,
        price: 40,
        photo: `./assets/58`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Гра алфавит ID:156",
        category: "Game",
        desc: `Маю дуже багато ігор для вивчення англійського алфавіту, але нагадую, що будь яка з таких карток може бути зроблена з ураїнським та російським алфавітом❤️ Така гра є дуже цікавою для малюків. На картках зображені монстрики, кожен з яких має улюблене слово, визначаємо що це та на яку букву починається, знаходимо вірну літеру і годуємо монстрика🥣 `,
        price: 40,
        photo: `./assets/59`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра алфавит ID:157",
        category: "Page laminated",
        desc: `Let’s go fishing🐟 рибки доступні з англійським, українським та російським алфавітом❤️ `,
        price: 40,
        photo: `./assets/60`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Гра цвета ID:158",
        category: "Page laminated",
        desc: `Вивчаємо кольори за допомогою рибок🐟 `,
        price: 40,
        photo: `./assets/61`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра логика ID:159",
        category: "Page laminated",
        desc: `Такі милі звірятка стануть найкращими друзями малюків🥰 одна з найулюбленіших сторінок🐶 
        Вивчаємо тваринок та геометричні фігури🔺🔸 прикріплюємо вушка та повторюємо кольори🐰 `,
        price: 40,
        photo: `./assets/62`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра животные ID:160",
        category: "Game",
        desc: `А у кур и петушков
        Дом уже совсем готов.
        Дед курятник смастерил.
        Всем тепло там будет им.
        🐓
        *****
        В коровниках живут коровы,
        Всегда накормлены, здоровы.
        В загон выходят только днем,
        Чтоб подкрепиться чем-то в нём.
        🐄
        *****
        Рыбки все живут в реке,
        Или в море вдалеке.
        И в пруду, и в океане –
        Покорят любые дали.
        🐠
        *****
        Улей - в нём живёт пчела,
        Но она там не одна.
        Вся семья там с ней живёт,
        Делает для нас медок.
        🐝
        *****
        Дом для птиц – это гнездо.
        Вот на дереве оно.
        Может и на крыше быть.
        Могут на земле сложить.
        🦜
        *****
        У лягушек разный дом:
        Река, болото или пруд.
        Любой удобный водоём
        Ей всех важней и там, и тут.
        🐸
        *****
        Собачка во дворе живет
        И дом хозяйский стережет.
        Еще и в будке может жить
        Или в квартире сторожить.
        🐕 `,
        price: 40,
        photo: `./assets/63`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Гра логика ID:161",
        category: "Game",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/64`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра календарик ID:162",
        category: "Game",
        desc: `Календарик на кожен день допоможе вивчити дні тижня, місяці, погоду, пори року та емоції🌸 `,
        price: 40,
        photo: `./assets/65`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра ID:163",
        category: "Game",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/66`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра ID:164",
        category: "Game",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/67`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра ID:165",
        category: "Game",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/68`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра ID:166",
        category: "Game",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/69`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра ID:167",
        category: "Game",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/70`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Гра ID:168",
        category: "Game",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/71`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Page ID:169",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/72`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:170",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/73`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:171",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/74`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:172",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/75`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:173",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/76`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:174",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/77`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:175",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/78`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Гра ID:176",
        category: "Game",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/79`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:177",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/80`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:178",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/81`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:179",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/82`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:180",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/83`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:181",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/84`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:182",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/85`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:183",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/86`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:184",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/87`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Game ID:185",
        category: "Game",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/88`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:186",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/89`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:187",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/90`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:188",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/91`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Game ID:189",
        category: "Game",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/92`,
        format: `.jpg`
      },

      {
        id: Math.random(),
        title: "Page ID:190",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/93`,
        format: `.jpg`
      }, {
        id: Math.random(),
        title: "Game ID:191",
        category: "Game",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/94`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:192",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/95`,
        format: `.jpg`
      },

      {
        id: Math.random(),
        title: "Page ID:193",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/96`,
        format: `.jpg`
      }, {
        id: Math.random(),
        title: "Game ID:194",
        category: "Game",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/97`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:195",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/98`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:196",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/99`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:197",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/100`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:198",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/101`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:199",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/102`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Game ID:200",
        category: "Game",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/103`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Book ID:201",
        category: "Book laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/104`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:202",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/105`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:203",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/106`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:204",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/107`,
        format: `.jpg`
      },

      {
        id: Math.random(),
        title: "Game ID:205",
        category: "Game",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/108`,
        format: `.jpg`
      }, {
        id: Math.random(),
        title: "Game ID:206",
        category: "Game",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/109`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:207",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/110`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:208",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/111`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Game ID:209",
        category: "Game",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/112`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:210",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/113`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:211",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/114`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Book ID:212",
        category: "Book laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/115`,
        format: `.mp4`
      },

      {
        id: Math.random(),
        title: "Page ID:213",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/116`,
        format: `.jpg`
      }, {
        id: Math.random(),
        title: "Page ID:214",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/117`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:215",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/118`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:216",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/119`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:217",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/120`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:218",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/121`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:219",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/121`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:220",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/122`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:221",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/123`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:222",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/124`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:223",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/125`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Book ID:224",
        category: "Book laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/126`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Page ID:225",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/127`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:226",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/128`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Game ID:227",
        category: "Game",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/129`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:228",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/130`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Game ID:229",
        category: "Game",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/131`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:230",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/132`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Book ID:231",
        category: "Book laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/133`,
        format: `.mp4`
      },
      {
        id: Math.random(),
        title: "Page ID:232",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/134`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Page ID:233",
        category: "Page laminated",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/135`,
        format: `.jpg`
      },
      {
        id: Math.random(),
        title: "Game ID:234",
        category: "Game",
        desc: `Ось такі милі Міккі Мауси допомогають вивчити кольори та геометричні фігури🐭 `,
        price: 40,
        photo: `./assets/136`,
        format: `.jpg`
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
