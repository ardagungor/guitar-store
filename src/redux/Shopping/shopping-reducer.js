import * as actionTypes from "./shopping-types";

const initialState = {
  allProducts: [
    {
      name: "Dean Michael Amott Tyrant X",
      description:
        "Best known for being the mastermind behind Arch Enemy, the legendary Michael Amott says that this guitar is all he needs.",
      img: "https://www.chorder.com/images/reviews-articles/18707.jpg",
      price: "950",
      id: 9,
    },
    {
      name: "Jackson Soloist 7 Chris Broderick Signature",
      description:
        "Most popular Jackson guitar with 7 strings, set neck and new headstock.",
      img:
        "http://static.keymusic.com/products/136553/XL/jackson-chris-broderick-pro-series-soloist-7-satin-black.jpg",
      price: "1100",
      id: 1,
    },
    {
      name: "Schecter Hellraiser C-1 BCH FR Sustainiac",
      description:
        "Schecter's masterpiece, now with Floyd Rose and Sustainiac.",
      img: "https://thumbs.static-thomann.de/thumb/orig/pics/prod/363455.jpg",
      price: "650",
      id: 2,
    },
    {
      name: "Ormsby GTR Metal X 7 String",
      description:
        "Straight from our custom shop, this beast is all you need for heavy riffs and blistering solos.",
      img:
        "https://images.guitarguitar.co.uk/cdn/large/150/180801330630008f.jpg",
      price: "1400",
      id: 3,
    },
    {
      name: "Kiesel Vader 6X Headless Racing Orange",
      description: "Kiesel's flaghship guitar, now in racing orange color.",
      img:
        "https://www.station-musicshop.de/WebRoot/Store8/Shops/64398533/5C90/DFEE/435F/6F8C/8266/0A0C/6D02/9CDD/kiesel_vader-6x-race-orange.jpg",
      price: "1550",
      id: 4,
    },
    {
      name: "Kiesel Osiris",
      description:
        "In conjunction with the new Zeus Series headless guitars, Kiesel Guitars is proud to announce the Osiris Series bolt-neck headless models.",
      img: "https://www.chorder.com/images/reviews-articles/25691.jpg",
      price: "1750",
      id: 5,
    },
    {
      name: "Gibson 1954 Les Paul Goldtop",
      description:
        "From Freddie King to Jeff Beck, many great pickers have been attracted the unique character of the wraparound tailpiece of a 1954 Les Paul Goldtop.",
      img:
        "http://static.keymusic.com/products/283150/XL/gibson-custom-shop-1954-les-paul-goldtop-reissue-vos.jpg",
      price: "3150",
      id: 6,
    },
    {
      name: "Warwick Corvette Basic Passive 4",
      description:
        "With natural satin color and Corvette body shape, this bass is one of the most popular models of legendary Warwick. ",
      img:
        "http://static.keymusic.com/products/128058/XL/warwick-corvette-basic-passive-4-natural-satin.jpg",
      price: "1200",
      id: 7,
    },
    {
      name: "Kiesel Vader VB5 Bass",
      description:
        "A neck-through bass with top-notch woods, frets and pickups. Oh, did we mention it is also headless and comes with a hardcase?",
      img:
        "https://www.bassgearmag.com/wp-content/uploads/2018/11/L16_00071.jpg",
      price: "1425",
      id: 8,
    },
    {
      name: "Spector Bass Legend 5 Standard",
      description:
        "With its ash body, flamed maple top and 24-fret Amara ebony fingerboard, this high-end bass offers a wide range at a reasonable budget.",
      img: "https://www.woodbrass.com/images/woodbrass/GSP-LG5ST-BC.JPG",
      price: "500",
      id: 10,
    },
    {
      name: "PRS SE Mark Tremonti Signature",
      description:
        "Best known for being the guitarist of Alter Bridge and Creed, Mark Tremonti claims that this is indeed his dream guitar.",
      img: "https://andertons-productimages.imgix.net/260720-1516791853412.png",
      price: "575",
      id: 11,
    },
    {
      name: "Spector EURO05 LX",
      description:
        "Signature model of Spector made for Alex Webster, the bass guitarist of the legendary Cannibal Corpse and supergroup Conquering Dystopia.",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/511TYXkeV4L._AC_SY879_.jpg",
      price: "890",
      id: 12,
    },
  ],
  featuredProducts: [
    {
      name: "Jackson Soloist 7 Chris Broderick Signature",
      description:
        "Most popular Jackson guitar with 7 strings, set neck and new headstock.",
      img:
        "http://static.keymusic.com/products/136553/XL/jackson-chris-broderick-pro-series-soloist-7-satin-black.jpg",
      price: "1100",
      id: 1,
    },
    {
      name: "Schecter Hellraiser C-1 BCH FR Sustainiac",
      description:
        "Schecter's masterpiece, now with Floyd Rose and Sustainiac.",
      img: "https://thumbs.static-thomann.de/thumb/orig/pics/prod/363455.jpg",
      price: "650",
      id: 2,
    },
    {
      name: "Ormsby GTR Metal X 7 String",
      description:
        "Straight from our custom shop, this beast is all you need for heavy riffs and blistering solos.",
      img:
        "https://images.guitarguitar.co.uk/cdn/large/150/180801330630008f.jpg",
      price: "1400",
      id: 3,
    },
    {
      name: "Kiesel Vader 6X Headless Racing Orange",
      description: "Kiesel's flaghship guitar, now in racing orange color.",
      img:
        "https://www.station-musicshop.de/WebRoot/Store8/Shops/64398533/5C90/DFEE/435F/6F8C/8266/0A0C/6D02/9CDD/kiesel_vader-6x-race-orange.jpg",
      price: "1550",
      id: 4,
    },
    {
      name: "Kiesel Osiris",
      description:
        "In conjunction with the new Zeus Series headless guitars, Kiesel Guitars is proud to announce the Osiris Series bolt-neck headless models.",
      img: "https://www.chorder.com/images/reviews-articles/25691.jpg",
      price: "1750",
      id: 5,
    },
    {
      name: "Gibson 1954 Les Paul Goldtop",
      description:
        "From Freddie King to Jeff Beck, many great pickers have been attracted the unique character of the wraparound tailpiece of a 1954 Les Paul Goldtop.",
      img:
        "http://static.keymusic.com/products/283150/XL/gibson-custom-shop-1954-les-paul-goldtop-reissue-vos.jpg",
      price: "3150",
      id: 6,
    },
    {
      name: "Warwick Corvette Basic Passive 4",
      description:
        "With natural satin color and Corvette body shape, this bass is one of the most popular models of legendary Warwick. ",
      img:
        "http://static.keymusic.com/products/128058/XL/warwick-corvette-basic-passive-4-natural-satin.jpg",
      price: "1200",
      id: 7,
    },
    {
      name: "Kiesel Vader VB5 Bass",
      description:
        "A neck-through bass with top-notch woods, frets and pickups. Oh, did we mention it is also headless and comes with a hardcase?",
      img:
        "https://www.bassgearmag.com/wp-content/uploads/2018/11/L16_00071.jpg",
      price: "1425",
      id: 8,
    },
  ],
  guitars: [
    {
      name: "Ormsby GTR Metal X 7 String",
      description:
        "Straight from our custom shop, this beast is all you need for heavy riffs and blistering solos.",
      img:
        "https://images.guitarguitar.co.uk/cdn/large/150/180801330630008f.jpg",
      price: "1400",
      id: 3,
    },
    {
      name: "Jackson Soloist 7 Chris Broderick Signature",
      description:
        "Most popular Jackson guitar with 7 strings, set neck and new headstock.",
      img:
        "http://static.keymusic.com/products/136553/XL/jackson-chris-broderick-pro-series-soloist-7-satin-black.jpg",
      price: "1100",
      id: 1,
    },
    {
      name: "Kiesel Osiris",
      description:
        "In conjunction with the new Zeus Series headless guitars, Kiesel Guitars is proud to announce the Osiris Series bolt-neck headless models.",
      img: "https://www.chorder.com/images/reviews-articles/25691.jpg",
      price: "1750",
      id: 5,
    },
    {
      name: "Schecter Hellraiser C-1 BCH FR Sustainiac",
      description:
        "Schecter's masterpiece, now with Floyd Rose and Sustainiac.",
      img: "https://thumbs.static-thomann.de/thumb/orig/pics/prod/363455.jpg",
      price: "650",
      id: 2,
    },

    {
      name: "Kiesel Vader 6X Headless Racing Orange",
      description: "Kiesel's flaghship guitar, now in racing orange color.",
      img:
        "https://www.station-musicshop.de/WebRoot/Store8/Shops/64398533/5C90/DFEE/435F/6F8C/8266/0A0C/6D02/9CDD/kiesel_vader-6x-race-orange.jpg",
      price: "1550",
      id: 4,
    },

    {
      name: "Gibson 1954 Les Paul Goldtop",
      description:
        "From Freddie King to Jeff Beck, many great pickers have been attracted the unique character of the wraparound tailpiece of a 1954 Les Paul Goldtop.",
      img:
        "http://static.keymusic.com/products/283150/XL/gibson-custom-shop-1954-les-paul-goldtop-reissue-vos.jpg",
      price: "3150",
      id: 6,
    },

    {
      name: "Dean Michael Amott Tyrant X",
      description:
        "Best known for being the mastermind behind Arch Enemy, the legendary Michael Amott says that this guitar is all he needs.",
      img: "https://www.chorder.com/images/reviews-articles/18707.jpg",
      price: "950",
      id: 9,
    },
    {
      name: "PRS SE Mark Tremonti",
      description:
        "Best known for being the guitarist of Alter Bridge and Creed, Mark Tremonti claims that this is indeed his dream guitar.",
      img: "https://andertons-productimages.imgix.net/260720-1516791853412.png",
      price: "575",
      id: 11,
    },
  ],
  bass: [
    {
      name: "Warwick Corvette Basic Passive 4",
      description:
        "With natural satin color and Corvette body shape, this bass is one of the most popular models of legendary Warwick. ",
      img:
        "http://static.keymusic.com/products/128058/XL/warwick-corvette-basic-passive-4-natural-satin.jpg",
      price: "1200",
      id: 7,
    },
    {
      name: "Kiesel Vader VB5 Bass",
      description:
        "A neck-through bass with top-notch woods, frets and pickups. Oh, did we mention it is also headless and comes with a hardcase?",
      img:
        "https://www.bassgearmag.com/wp-content/uploads/2018/11/L16_00071.jpg",
      price: "1425",
      id: 8,
    },
    {
      name: "Spector Bass Legend 5 Standard",
      description:
        "With its ash body, flamed maple top and 24-fret Amara ebony fingerboard, this high-end bass offers a wide range at a reasonable budget.",
      img: "https://www.woodbrass.com/images/woodbrass/GSP-LG5ST-BC.JPG",
      price: "500",
      id: 10,
    },
    {
      name: "Spector EURO05 LX",
      description:
        "Signature model of Spector made for Alex Webster, the bass guitarist of the legendary Cannibal Corpse and supergroup Conquering Dystopia.",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/511TYXkeV4L._AC_SY879_.jpg",
      price: "890",
      id: 12,
    },
  ],
  cart: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //Get the item's data from the products array, check if item is in cart already
      const item = state.allProducts.find(
        (product) => product.id === action.payload.id
      );
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };

    default:
      return state;
  }
};

export default shopReducer;
