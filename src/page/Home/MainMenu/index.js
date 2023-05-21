import React, {useEffect, useState} from 'react';
import {AiOutlineArrowRight} from "react-icons/ai";

const MainMenu = () => {

    const Desserts = [
        {
            id: 1,
            name: 'Beer Brewery',
            price: 38,
            text: "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
            prescrition: "soda,cream,milk,sugar",
            img: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_474,q_75,w_640/v1/clients/newyorkstate/Blog_Header_640x474_1__a1afb378-98e8-4b5b-9088-33f7b0f27a87.jpg"
        }, {
            id: 2,
            name: 'Burger&Pasta',
            price: 38,
            text: "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
            prescrition: "soda,cream,milk,sugar",
            img: "https://easyfamilyrecipes.com/wp-content/uploads/2020/01/Cheeseburger-Pasta-Recipe.jpg"
        }, {
            id: 3,
            name: 'Beer Brewery',
            price: 38,
            text: "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
            prescrition: "soda,cream,milk,sugar",
            img: "https://www.allrecipes.com/thmb/P59TgUCXtQbv69dHRlZduE38xs8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/453291-five-ingredient-ice-cream-Alberta-Rose-4x3-1-4c9ec10ac4ab4e828615e81aa608dd6b.jpg"
        }, {
            id: 4,
            name: 'Beer Brewery',
            price: 38,
            text: "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
            prescrition: "soda,cream,milk,sugar",
            img: "https://www.theendlessmeal.com/wp-content/uploads/2016/07/strawberry-ice-cream-2.jpg"
        }, {
            id: 5,
            name: 'Beer Brewery',
            price: 38,
            text: "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
            prescrition: "soda,cream,milk,sugar",
            img: "https://cdn.theatlantic.com/thumbor/aY1PcIjNQsMkOX8TOHNws9qhIXo=/438x0:1563x1125/540x540/media/img/2023/04/0523_WEL_Johns_Ice_Cream_c16X9/original.png"
        }, {
            id: 6,
            name: 'Beer Brewery',
            price: 38,
            text: "Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatisk. Geogehet pultvätta, om pneumativ.",
            prescrition: "soda,cream,milk,sugar",
            img: ""
        },
    ]
    const HotDrinks = [
        {
            id: 1,
            name: 'Coffee',
            price: 20,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'coffee beans, hot water, milk, sugar',
            img: 'https://cdn10.bostonmagazine.com/wp-content/uploads/2016/01/warm-latte-mug.jpg',
        },
        {
            id: 2,
            name: 'Tea',
            price: 15,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'tea leaves, hot water, lemon, honey',
            img: 'https://media.istockphoto.com/id/827215724/photo/a-cup-of-freshly-brewed-black-tea-escaping-steam-warm-soft-light-darker-background.jpg?s=612x612&w=0&k=20&c=imnF_AExFoho0c_mkRITlwHxDyG3O-Re_ZEfNxbAKn8=',
        },
        {
            id: 3,
            name: 'Hot Chocolate',
            price: 18,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'cocoa powder, hot milk, whipped cream',
            img: 'https://c.files.bbci.co.uk/1558D/production/_109973478_gettyimages-1070054536.jpg',
        },
        {
            id: 4,
            name: 'Chai Latte',
            price: 22,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'black tea, hot milk, spices, sweetener',
            img: 'https://www.comunicaffe.com/wp-content/uploads/2018/10/Hot-beverage.jpg',
        },
        {
            id: 5,
            name: 'Cappuccino',
            price: 25,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'espresso, hot milk, milk foam',
            img: 'https://bycommonconsent.files.wordpress.com/2021/08/american-heritage-chocolate-aoonx98hdm8-unsplash.jpg',
        },
        {
            id: 6,
            name: 'Matcha Latte',
            price: 28,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'matcha powder, hot water, hot milk, sweetener',
            img: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/17/10/coffee-rf-getty.jpg',
        }
    ]
    const ColdDrinks = [
        {
            id: 1,
            name: 'Iced Coffee',
            price: 22,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'coffee concentrate, ice, milk, sweetener',
            img: 'https://sherebengal.com/wp-content/uploads/2017/09/Masala-cold-drinks.jpg',
        },
        {
            id: 2,
            name: 'Iced Tea',
            price: 18,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'tea leaves, ice, lemon, sweetener',
            img: 'https://coin-a-drink.co.uk/wp-content/uploads/2015/07/cold-ice-lime-drinks-hd-widescreen-wallpapers-.jpg',
        },
        {
            id: 3,
            name: 'Iced Matcha Latte',
            price: 28,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'matcha powder, ice, milk, sweetener',
            img: 'https://cdn.cdnparenting.com/articles/2018/07/361921454-H-1024x700.webp',
        },
        {
            id: 4,
            name: 'Iced Chocolate',
            price: 24,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'chocolate syrup, ice, milk, whipped cream',
            img: 'https://img.jamieoliver.com/home/wp-content/uploads/features-import/2015/07/feature-header.jpg',
        },
        {
            id: 5,
            name: 'Smoothie',
            price: 26,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'fruit, yogurt, ice, sweetener (optional)',
            img: 'https://images.pexels.com/photos/8880742/pexels-photo-8880742.jpeg?cs=srgb&dl=pexels-ron-lach-8880742.jpg&fm=jpg',
        },
        {
            id: 6,
            name: 'Lemonade',
            price: 16,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'lemons, water, sugar, ice',
            img: 'https://www.eatingwell.com/thmb/X4bjnnLYDOvTnMsCqQIFD8C5OJc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8506413-ab4d1923635a4c96b75fc799e202c4b4.jpg',
        }
    ]
    const NationalFoods = [
        {
            id: 1,
            name: 'Sushi',
            price: 35,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'rice, fish, seaweed, soy sauce',
            img: 'https://www.allcleartravel.co.uk/wp-content/uploads/2020/09/spaghetti-bolognese-11.jpg',
        },
        {
            id: 2,
            name: 'Tacos',
            price: 30,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'tortillas, meat, vegetables, salsa',
            img: 'https://www.worldatlas.com/r/w1200/upload/b0/9d/b6/shutterstock-642510559.jpg',
        },
        {
            id: 3,
            name: 'Pizza',
            price: 25,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'dough, tomato sauce, cheese, toppings',
            img: 'https://cdn.theatlantic.com/thumbor/DlYmhxftrgbsC16XEL74Md3bVbE=/1x0:3701x2081/1600x900/media/img/mt/2022/02/Foodnations_01/original.jpg',
        },
        {
            id: 4,
            name: 'Pad Thai',
            price: 28,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'rice noodles, shrimp, tofu, peanuts',
            img: 'https://i0.wp.com/nationalfoods.org/wp-content/uploads/2017/07/National-Dish-of-Germany-Sauerbraten.jpg?fit=1140%2C500&ssl=1',
        },
        {
            id: 5,
            name: 'Paella',
            price: 32,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'rice, seafood, chicken, saffron',
            img: 'https://www.tastingtable.com/img/gallery/the-uncertain-origin-of-scotlands-national-dish/l-intro-1658242590.jpg',
        },
        {
            id: 6,
            name: 'Hamburger',
            price: 20,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'bun, beef patty, lettuce, tomato, cheese',
            img: 'https://static.toiimg.com/thumb/msid-71723867/71723867.jpg?width=500&resizemode=4',
        },
    ]
    const EasternCuisine = [
        {
            id: 1,
            name: 'Sushi',
            price: 30,
            text: 'Delicious sushi rolls made with fresh fish and vegetables.',
            ingredients: ['rice', 'nori seaweed', 'fish', 'vegetables'],
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Mixed_Plate_%283186676853%29.jpg/1200px-Mixed_Plate_%283186676853%29.jpg',
        },
        {
            id: 2,
            name: 'Pad Thai',
            price: 25,
            text: 'A flavorful stir-fried noodle dish with a combination of ingredients.',
            ingredients: ['rice noodles', 'shrimp', 'tofu', 'bean sprouts', 'peanuts'],
            img: 'https://www.newarab.com/sites/default/files/media/images/98C3880A-E57D-4573-9385-C9130B977516.jpg',
        },
        {
            id: 3,
            name: 'Chicken Tikka Masala',
            price: 28,
            text: 'Tender chicken cooked in a creamy and spiced tomato-based sauce.',
            ingredients: ['chicken', 'yogurt', 'tomatoes', 'spices'],
            img: 'https://hummusbowls.com/wp-content/uploads/2019/12/Vegetarianism-and-Middle-Eastern-Cuisine-2-scaled.jpg',
        },
        {
            id: 4,
            name: 'Hummus',
            price: 12,
            text: 'A popular Middle Eastern dip made from chickpeas, tahini, and olive oil.',
            ingredients: ['chickpeas', 'tahini', 'olive oil', 'lemon juice'],
            img: 'https://www.chefspencil.com/wp-content/uploads/Shakshuka-960x960.png',
        },
        {
            id: 5,
            name: 'Biryani',
            price: 22,
            text: 'A flavorful rice dish with aromatic spices and meat or vegetables.',
            ingredients: ['rice', 'meat or vegetables', 'spices', 'saffron'],
            img: 'https://drifttravel.com/wp-content/uploads/2019/10/JA-Resorts-Hotel-Restaurant-1.jpg',
        },
        {
            id: 6,
            name: 'Miso Soup',
            price: 10,
            text: 'A traditional Japanese soup made with miso paste and various ingredients.',
            ingredients: ['miso paste', 'tofu', 'seaweed', 'green onions'],
            img: 'https://cdn.squaremeal.co.uk/restaurants/6664/eastern-cuisine-chicken.jpg?w=800',
        },
    ]
    const FastFoods = [
        {
            id: 1,
            name: 'Hamburger',
            price: 10,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'bun, beef patty, lettuce, tomato, cheese',
            img: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-485610450-1522163314.jpg',
        },
        {
            id: 2,
            name: 'French Fries',
            price: 6,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'potatoes, salt, oil',
            img: 'https://www.fifteenspatulas.com/wp-content/uploads/2011/09/French-Fries-Recipe-500x500.jpg',
        },
        {
            id: 3,
            name: 'Pizza Slice',
            price: 8,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'dough, tomato sauce, cheese, toppings',
            img: 'https://www.mashed.com/img/gallery/this-is-the-most-nutritious-fast-food-pizza-you-can-buy/l-intro-1626224309.jpg',
        },
        {
            id: 4,
            name: 'Hot Dog',
            price: 7,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'hot dog bun, sausage, ketchup, mustard, onions',
            img: 'https://www.thedailymeal.com/img/gallery/ranking-12-fast-food-hot-dogs-from-worst-to-best/l-intro-1675120855.jpg',
        },
        {
            id: 5,
            name: 'Chicken Nuggets',
            price: 9,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'chicken meat, breadcrumbs, spices',
            img: 'https://www.seriouseats.com/thmb/xw1krLC9Yh85qx1wl5jw0BPCWHk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2015__07__20210324-SouthernFriedChicken-Andrew-Janjigian-21-cea1fe39234844638018b15259cabdc2.jpg',
        },
        {
            id: 6,
            name: 'Milkshake',
            price: 5,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            prescription: 'milk, ice cream, flavoring',
            img: 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2020-07-how-to-make-a-milkshake-at-home%2F2020-06-08_AT-K19388',
        },
    ]
    const [food, useFood] = useState(Desserts)
    useEffect(() => {

    }, [food])
    return (
        <div className="flex flex-col justify-center items-center container pb-40 mx-auto">
            <svg width="308" height="49" className="md:w-[280px]" viewBox="0 0 308 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M51.2598 24.9923H12.2598C9.25977 23.9923 9.25977 18.9923 12.2598 17.4923C14.5451 16.3494 19.7598 16.9923 19.2598 21.9923"
                    stroke="#EF272C" strokeWidth="2"/>
                <line y1="30.9923" x2="51.2599" y2="30.9923" stroke="#EF272C" strokeWidth="2"/>
                <path
                    d="M118.62 32C116.753 32 115.193 26.56 113.94 15.68C113.193 17.3333 112.433 18.8933 111.66 20.36C110.886 21.8267 110.113 23.1867 109.34 24.44C106.753 28.7067 104.673 30.84 103.1 30.84C101.286 30.84 99.8198 28.4533 98.6998 23.68C98.2731 21.8667 97.9531 20.1333 97.7398 18.48C97.5264 16.8267 97.4198 15.2667 97.4198 13.8C97.4198 11.56 97.8064 10.3733 98.5798 10.24L98.7798 13.52C98.9931 16.88 99.3931 19.8 99.9798 22.28C101.02 26.5467 102.46 28.68 104.3 28.68C105.58 28.68 107.406 26.5733 109.78 22.36C111.673 19 112.993 16.2 113.74 13.96L113.46 11.36C113.46 10.0533 113.873 9.4 114.7 9.4C115.393 9.4 115.74 10.0667 115.74 11.4C115.74 12.1733 115.62 12.7067 115.38 13V13.68C115.38 14.9067 115.433 16.1733 115.54 17.48C115.646 18.7867 115.806 20.1333 116.02 21.52C116.153 22.3467 116.313 23.16 116.5 23.96C116.686 24.76 116.9 25.5467 117.14 26.32C117.94 28.8533 118.806 30.12 119.74 30.12C119.873 30.12 120.046 30.0667 120.26 29.96C120.5 29.8267 120.646 29.76 120.7 29.76L120.82 29.88C120.82 30.0133 120.42 30.5467 119.62 31.48C119.353 31.8267 119.02 32 118.62 32ZM92.1798 32.96C91.5398 32.96 91.2198 32.0667 91.2198 30.28C91.2198 26.92 92.4864 21.44 95.0198 13.84C95.1264 13.5467 95.2731 13.12 95.4598 12.56C95.6731 12 95.9264 11.32 96.2198 10.52C96.4864 9.77333 96.8331 9.4 97.2598 9.4C97.4731 9.4 97.5931 9.53333 97.6198 9.8C96.7931 11.9067 96.0864 13.7333 95.4998 15.28C94.9131 16.8 94.4598 18.04 94.1398 19C92.9131 22.7067 92.2998 25.88 92.2998 28.52C92.2998 28.92 92.4064 29.5867 92.6198 30.52C92.7264 30.9467 92.8064 31.3067 92.8598 31.6C92.9131 31.8933 92.9398 32.1067 92.9398 32.24C92.9398 32.72 92.6864 32.96 92.1798 32.96ZM122.163 31.24C121.39 31.24 121.003 30.76 121.003 29.8C121.003 28.5467 121.656 26.9867 122.963 25.12C123.523 24.2933 124.096 23.56 124.683 22.92C125.27 22.28 125.856 21.7067 126.443 21.2C127.216 20.56 127.923 20.24 128.563 20.24C128.963 20.24 129.296 20.4133 129.563 20.76C129.83 21.08 129.963 21.44 129.963 21.84C129.963 22.0267 129.91 22.12 129.803 22.12C129.803 22.12 129.71 22.0267 129.523 21.84C129.336 21.6533 129.03 21.56 128.603 21.56C127.99 21.56 127.456 21.7067 127.003 22C125.83 22.8267 124.75 23.88 123.763 25.16C122.616 26.6533 122.043 28 122.043 29.2C122.043 29.8133 122.256 30.12 122.683 30.12C123.376 30.12 124.47 29.0933 125.963 27.04C126.603 26.1333 127.123 25.3333 127.523 24.64C127.95 23.92 128.256 23.3067 128.443 22.8C128.63 22.6133 128.843 22.52 129.083 22.52C129.216 22.52 129.296 22.5733 129.323 22.68C129.136 23.0267 129.043 23.6533 129.043 24.56C129.043 25.7067 129.176 26.7333 129.443 27.64C129.843 29.0533 130.416 29.76 131.163 29.76C131.643 29.76 132.15 29.3467 132.683 28.52L133.523 27.24C133.55 27.2667 133.563 27.2933 133.563 27.32C133.563 27.7467 133.163 28.4667 132.363 29.48C131.563 30.4667 130.95 30.96 130.523 30.96C129.83 30.96 129.19 30.1867 128.603 28.64C128.15 27.36 127.923 26.28 127.923 25.4C125.31 29.2933 123.39 31.24 122.163 31.24ZM134.737 16.56C134.123 16.56 133.817 16.2933 133.817 15.76C133.817 15.2533 134.097 14.88 134.657 14.64L136.017 14.04C136.123 13.9867 136.203 13.96 136.257 13.96C136.443 13.96 136.537 14.08 136.537 14.32C136.537 14.4 136.363 14.6533 136.017 15.08C135.67 15.5067 135.47 15.8267 135.417 16.04C135.31 16.3867 135.083 16.56 134.737 16.56ZM135.697 32.6C134.87 32.6 134.457 31.68 134.457 29.84C134.457 29.2 134.497 28.3067 134.577 27.16C134.657 25.96 134.697 25.0533 134.697 24.44C134.697 22.6 134.203 21.68 133.217 21.68C133.11 21.68 132.95 21.7067 132.737 21.76C132.55 21.8133 132.417 21.84 132.337 21.84C132.203 21.84 132.137 21.7867 132.137 21.68C132.137 21.4667 132.59 21.2267 133.497 20.96C134.43 20.64 135.03 20.48 135.297 20.48C135.697 20.48 135.897 21.0667 135.897 22.24C135.897 22.5333 135.87 22.92 135.817 23.4C135.79 23.88 135.75 24.4267 135.697 25.04C135.643 25.6533 135.603 26.2 135.577 26.68C135.55 27.1333 135.537 27.5067 135.537 27.8C135.537 30.2533 135.937 31.48 136.737 31.48C137.35 31.48 138.017 31.0533 138.737 30.2C138.817 30.2 138.857 30.2667 138.857 30.4C138.857 30.7467 138.43 31.2 137.577 31.76C136.75 32.32 136.123 32.6 135.697 32.6ZM139.22 33.2C139.167 33.1467 139.14 33.1067 139.14 33.08C139.167 32.8933 139.207 32.56 139.26 32.08C139.34 31.6 139.433 30.9467 139.54 30.12C139.753 28.52 139.913 27.12 140.02 25.92C140.127 24.72 140.18 23.72 140.18 22.92C140.18 22.0933 140.113 21.4533 139.98 21C139.873 20.8933 139.66 20.84 139.34 20.84C139.18 20.84 138.94 20.88 138.62 20.96C138.3 21.04 138.073 21.08 137.94 21.08C137.807 21.08 137.74 21.04 137.74 20.96C137.74 20.8533 138.113 20.64 138.86 20.32C140.14 19.6267 140.78 19.2667 140.78 19.24C141.287 19.24 141.54 20 141.54 21.52C141.54 22.1867 141.42 23.2 141.18 24.56C141.073 25.2267 140.993 25.8133 140.94 26.32C140.887 26.8 140.86 27.2133 140.86 27.56V27.68C141.1 27.2533 141.407 26.76 141.78 26.2C142.18 25.6133 142.633 24.9733 143.14 24.28C144.233 22.84 145.073 21.84 145.66 21.28C145.767 21.1733 146.033 21.0267 146.46 20.84C146.913 20.6533 147.22 20.56 147.38 20.56C147.46 20.56 147.5 20.5867 147.5 20.64C146.86 21.8667 146.46 22.7867 146.3 23.4C146.087 24.2 145.98 25.2267 145.98 26.48C145.98 28.6667 146.447 29.76 147.38 29.76C147.7 29.76 148.073 29.5067 148.5 29C148.553 28.8933 148.633 28.7867 148.74 28.68C148.873 28.5467 149.007 28.3867 149.14 28.2L149.18 28.36C149.18 28.6533 148.873 29.1867 148.26 29.96C147.673 30.7067 147.207 31.08 146.86 31.08C145.553 31.08 144.9 29.6933 144.9 26.92C144.9 26.1467 144.913 25.4133 144.94 24.72C144.993 24.0267 145.073 23.3733 145.18 22.76C144.513 23.4 143.9 24.08 143.34 24.8C142.807 25.52 142.313 26.28 141.86 27.08C140.767 29.0267 140.273 30.7333 140.38 32.2C140.247 32.36 140.073 32.52 139.86 32.68C139.673 32.84 139.46 33.0133 139.22 33.2ZM184.714 32C182.847 32 181.287 26.56 180.034 15.68C179.287 17.3333 178.527 18.8933 177.754 20.36C176.98 21.8267 176.207 23.1867 175.434 24.44C172.847 28.7067 170.767 30.84 169.194 30.84C167.38 30.84 165.914 28.4533 164.794 23.68C164.367 21.8667 164.047 20.1333 163.834 18.48C163.62 16.8267 163.514 15.2667 163.514 13.8C163.514 11.56 163.9 10.3733 164.674 10.24L164.874 13.52C165.087 16.88 165.487 19.8 166.074 22.28C167.114 26.5467 168.554 28.68 170.394 28.68C171.674 28.68 173.5 26.5733 175.874 22.36C177.767 19 179.087 16.2 179.834 13.96L179.554 11.36C179.554 10.0533 179.967 9.4 180.794 9.4C181.487 9.4 181.834 10.0667 181.834 11.4C181.834 12.1733 181.714 12.7067 181.474 13V13.68C181.474 14.9067 181.527 16.1733 181.634 17.48C181.74 18.7867 181.9 20.1333 182.114 21.52C182.247 22.3467 182.407 23.16 182.594 23.96C182.78 24.76 182.994 25.5467 183.234 26.32C184.034 28.8533 184.9 30.12 185.834 30.12C185.967 30.12 186.14 30.0667 186.354 29.96C186.594 29.8267 186.74 29.76 186.794 29.76L186.914 29.88C186.914 30.0133 186.514 30.5467 185.714 31.48C185.447 31.8267 185.114 32 184.714 32ZM158.274 32.96C157.634 32.96 157.314 32.0667 157.314 30.28C157.314 26.92 158.58 21.44 161.114 13.84C161.22 13.5467 161.367 13.12 161.554 12.56C161.767 12 162.02 11.32 162.314 10.52C162.58 9.77333 162.927 9.4 163.354 9.4C163.567 9.4 163.687 9.53333 163.714 9.8C162.887 11.9067 162.18 13.7333 161.594 15.28C161.007 16.8 160.554 18.04 160.234 19C159.007 22.7067 158.394 25.88 158.394 28.52C158.394 28.92 158.5 29.5867 158.714 30.52C158.82 30.9467 158.9 31.3067 158.954 31.6C159.007 31.8933 159.034 32.1067 159.034 32.24C159.034 32.72 158.78 32.96 158.274 32.96ZM190.337 32.44C188.497 32.44 187.577 31.0533 187.577 28.28C187.577 27.8267 187.59 27.3867 187.617 26.96C187.67 26.5067 187.75 26.0667 187.857 25.64C187.537 25.4267 187.377 25.2533 187.377 25.12C187.377 24.88 187.657 24.6667 188.217 24.48C188.483 23.68 188.87 22.7733 189.377 21.76C190.097 20.3733 190.643 19.68 191.017 19.68C191.443 19.68 191.763 19.8667 191.977 20.24C192.137 19.8667 192.323 19.68 192.537 19.68C193.283 19.68 193.657 20.1333 193.657 21.04C193.657 21.7333 193.523 22.3467 193.257 22.88C193.443 23.0933 193.537 23.2933 193.537 23.48C193.537 23.5333 193.497 23.5867 193.417 23.64L191.177 24.36C190.75 24.4933 190.363 24.6667 190.017 24.88C189.697 25.0933 189.403 25.32 189.137 25.56C188.843 26.44 188.697 27.3867 188.697 28.4C188.697 30.64 189.39 31.76 190.777 31.76C192.617 31.76 194.35 30.2667 195.977 27.28C196.057 27.1467 196.123 27.08 196.177 27.08C196.257 27.08 196.297 27.16 196.297 27.32C196.297 27.4533 196.257 27.6 196.177 27.76C195.537 29.04 194.763 30.0933 193.857 30.92C192.71 31.9333 191.537 32.44 190.337 32.44ZM189.617 24.16C189.883 24.08 190.19 23.9867 190.537 23.88C190.91 23.7467 191.31 23.5867 191.737 23.4C191.87 23.2933 192.043 22.96 192.257 22.4C192.443 21.92 192.537 21.5333 192.537 21.24C192.537 20.8933 192.403 20.72 192.137 20.72C191.843 20.72 191.363 21.2133 190.697 22.2C190.003 23.16 189.643 23.8133 189.617 24.16ZM195.431 33.2C195.378 33.1467 195.351 33.1067 195.351 33.08C195.378 32.8933 195.418 32.56 195.471 32.08C195.551 31.6 195.644 30.9467 195.751 30.12C195.964 28.52 196.124 27.12 196.231 25.92C196.338 24.72 196.391 23.72 196.391 22.92C196.391 22.0933 196.324 21.4533 196.191 21C196.084 20.8933 195.871 20.84 195.551 20.84C195.391 20.84 195.151 20.88 194.831 20.96C194.511 21.04 194.284 21.08 194.151 21.08C194.018 21.08 193.951 21.04 193.951 20.96C193.951 20.8533 194.324 20.64 195.071 20.32C196.351 19.6267 196.991 19.2667 196.991 19.24C197.498 19.24 197.751 20 197.751 21.52C197.751 22.1867 197.631 23.2 197.391 24.56C197.284 25.2267 197.204 25.8133 197.151 26.32C197.098 26.8 197.071 27.2133 197.071 27.56V27.68C197.311 27.2533 197.618 26.76 197.991 26.2C198.391 25.6133 198.844 24.9733 199.351 24.28C200.444 22.84 201.284 21.84 201.871 21.28C201.978 21.1733 202.244 21.0267 202.671 20.84C203.124 20.6533 203.431 20.56 203.591 20.56C203.671 20.56 203.711 20.5867 203.711 20.64C203.071 21.8667 202.671 22.7867 202.511 23.4C202.298 24.2 202.191 25.2267 202.191 26.48C202.191 28.6667 202.658 29.76 203.591 29.76C203.911 29.76 204.284 29.5067 204.711 29C204.764 28.8933 204.844 28.7867 204.951 28.68C205.084 28.5467 205.218 28.3867 205.351 28.2L205.391 28.36C205.391 28.6533 205.084 29.1867 204.471 29.96C203.884 30.7067 203.418 31.08 203.071 31.08C201.764 31.08 201.111 29.6933 201.111 26.92C201.111 26.1467 201.124 25.4133 201.151 24.72C201.204 24.0267 201.284 23.3733 201.391 22.76C200.724 23.4 200.111 24.08 199.551 24.8C199.018 25.52 198.524 26.28 198.071 27.08C196.978 29.0267 196.484 30.7333 196.591 32.2C196.458 32.36 196.284 32.52 196.071 32.68C195.884 32.84 195.671 33.0133 195.431 33.2ZM206.541 31.84C206.034 31.84 205.781 31.2133 205.781 29.96C205.781 29.4 205.847 28.6667 205.981 27.76C206.114 26.8267 206.314 25.72 206.581 24.44C206.474 24.2 206.421 23.8933 206.421 23.52C206.421 22.16 207.007 21.2933 208.181 20.92C208.287 20.9467 208.341 21.08 208.341 21.32C208.341 21.5067 208.127 22.36 207.701 23.88C207.221 25.5867 206.981 27.16 206.981 28.6C206.981 29.72 207.194 30.28 207.621 30.28C208.341 30.28 209.341 29.0267 210.621 26.52C211.714 24.3867 212.394 22.7467 212.661 21.6C212.821 20.9867 213.207 20.68 213.821 20.68C214.141 20.68 214.301 20.8 214.301 21.04C214.301 21.1733 214.207 21.4 214.021 21.72C213.861 22.04 213.767 22.2533 213.741 22.36C213.341 24.1467 213.141 25.8667 213.141 27.52C213.141 29.44 213.581 30.4 214.461 30.4C214.941 30.4 215.541 29.88 216.261 28.84C216.981 27.7733 217.354 27.24 217.381 27.24C217.487 27.24 217.541 27.3067 217.541 27.44C217.541 27.8133 216.994 28.6267 215.901 29.88C214.834 31.08 214.101 31.68 213.701 31.68C212.581 31.68 212.021 30.4933 212.021 28.12C212.021 27.8267 212.047 27.3867 212.101 26.8C212.154 26.1867 212.234 25.4267 212.341 24.52C212.021 25.1333 211.634 25.8 211.181 26.52C210.754 27.2133 210.274 27.9467 209.741 28.72C208.274 30.8 207.207 31.84 206.541 31.84Z"
                    fill="white"/>
                <path
                    d="M255.26 24.9923H294.26C297.26 23.9923 297.26 18.9923 294.26 17.4923C291.974 16.3494 286.76 16.9923 287.26 21.9923"
                    stroke="#EF272C" strokeWidth="2"/>
                <line x1="255.26" y1="30.9923" x2="307.01" y2="30.9923" stroke="#EF272C" strokeWidth="2"/>
            </svg>
            <h2 className="font-Shalimar text-[#FFFFFF] text-4xl md:text-3xl font-semibold pt-[18px] pb-[40px]">
                Exceptional Quality. <br/>
                Delightfully Delicious
            </h2>
            <div className="flex justify-around">
                <div className="flex flex-col bg-[#1F2731] h-max  ">
                    <div>
                        <button
                                className="px-28   py-4 font-Silk w-full text-[#FFFFFF] font-semibold text-base line-[37px] focus:bg-[#EF272C]">Desserts
                        </button>
                        <div className="w-4/6 opacity-50 mx-auto bg-[#E5E5E5] h-[.5px]"></div>
                    </div>
                    <div>
                        <button
                                className="px-28 py-3  font-Silk w-full text-[#FFFFFF] font-semibold text-base line-[37px] focus:bg-[#EF272C]">HotDrinks
                        </button>
                        <div className="w-4/6 mx-auto opacity-50 bg-[#E5E5E5] h-[.5px]"></div>
                    </div>
                    <div>
                        <button
                                className="px-28 py-3 font-Silk w-full text-[#FFFFFF] font-semibold text-base line-[37px] focus:bg-[#EF272C]">ColdDrinks
                        </button>
                        <div className="w-4/6 mx-auto opacity-50 bg-[#E5E5E5] h-[.5px]"></div>
                    </div>
                    <div>
                        <button
                                className="px-28 py-3 font-Silk w-full text-[#FFFFFF] font-semibold text-base line-[37px] focus:bg-[#EF272C]">NationalFoods
                        </button>
                        <div className="w-4/6 mx-auto bg-[#E5E5E5] opacity-50 h-[.5px]"></div>
                    </div>
                    <div>
                        <button
                                className="px-28 py-3 font-Silk w-full text-[#FFFFFF] font-semibold text-base line-[37px] focus:bg-[#EF272C]">EasternCuisine
                        </button>
                        <div className="w-4/6 mx-auto bg-[#E5E5E5] opacity-50 h-[.5px]"></div>
                    </div>
                    <div className="pb-3">
                        <button
                            className="px-28 py-3 font-Silk w-full text-[#FFFFFF] font-semibold text-base line-[37px] focus:bg-[#EF272C]">FastFoods
                        </button>
                        <div className="w-4/6 mx-auto bg-[#E5E5E5] opacity-50 h-[.5px] "></div>
                    </div>
                </div>
                <div className="px-32 ">
                    {
                        food.map((el) => (
                            <div className="">
                                <div className="flex items-end pb-3">
                                    <h1 className="text-[#FFFFFF] font-serif text-base line-[31px]  font-Silk">
                                        {el.name}
                                    </h1>
                                    <h5 className="px-5 text-[#FFFFFF] font-serif text-xs line-[31px] font-Silk opacity-50">
                                        .....................................................................................
                                    </h5>
                                    <h2 className="text-[#EF272C] font-semibold text-base line-[31px] font-Silk"> $ {el.price}</h2>
                                </div>
                                <div className="flex justify-start pb-6">
                                    <p className="text-[#FFFFFF] font-normal text-xs w-96  line-[20px] flex-wrap font-sans">{el.text}</p>
                                    <a href="" className="text-[#FFFFFF] text-base pl-7 pt-3 underline font-Silk">Order Now</a>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="bg-[#EF272C] h-0.5 w-[144px]"></div>
                <div className="font-Spartan py-2 px-6 border-2 border-[#EF272C] my-4 flex justify-between text-[#FFFFFF]">
                    VIEW FULL MENU <AiOutlineArrowRight/>
                </div>
                <div className="bg-[#EF272C] h-0.5 w-[144px]"></div>
            </div>
        </div>
    );
};

export default MainMenu;