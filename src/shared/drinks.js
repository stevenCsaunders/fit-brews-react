export const DRINKS = [

    {
        id: 0,
        name: "Apple",
        image:  "https://cdn.pixabay.com/photo/2016/07/29/16/12/drink-fruit-1554657_1280.jpg",
        ingredients:["Ingredient 1", "Ingredient 2", "Ingredient 3"],
        instructions: ["Step 1", "Step 2", "Step 3"],
        featured: true,
        nutrition: {
            calories: 150,
            protien: 30,
            carbs: 15,
            fat: 5,
        },
        description: "This is the description",
        category:["Fruit"], //used for drink categories
        review: "Spicy jalapeno bacon ipsum dolor amet esse enim t-bone sausage. Chuck picanha elit pariatur kielbasa buffalo t-bone prosciutto.", //This will be broken out in to a separate review.js file 
        rating: 3
    },
    {
        id: 1,
        name: "Banana",
        image:  "https://www.thespruceeats.com/thmb/urVQLwUIGGwae44eSRNOC1JLOv8=/3909x2199/smart/filters:no_upscale()/banana-smoothie-recipes-759606-hero-01-d2abaa79f3204030a0ec0a8940456acc.jpg",
        ingredients:["Ingredient 1", "Ingredient 2", "Ingredient 3"],
        instructions: ["Step 1", "Step 2", "Step 3"],
        featured: false,
        nutrition: {
            calories: 189,
            protien: 20,
            carbs: 10,
            fat: 8,
        },
        description: "This is the description",
        category:["Fruit"], //used for drink categories
        review: "In pork ipsum kielbasa ham hock shankle.", //This will be broken out in to a separate review.js file 
        rating: 5
    },
    {
        id: 2,
        name: "Carrot",
        image:  "https://images.cookforyourlife.org/wp-content/uploads/2018/08/shutterstock_667254529.jpg",
        ingredients:["Ingredient 1", "Ingredient 2", "Ingredient 3"],
        instructions: ["Step 1", "Step 2", "Step 3"],
        featured: true,
        nutrition: {
            calories: 189,
            protien: 20,
            carbs: 10,
            fat: 8,
        },
        description: "This is the description",
        category:["Vegetable"], //used for drink categories
        review: "Sunt pastrami picanha, kevin shankle cupidatat est chicken qui pork loin capicola alcatra ipsum.", //This will be broken out in to a separate review.js file 
        rating: 4
    },
    {
        id: 3,
        name: "Spinach",
        image:  "https://cdn.thismamacooks.com/images/2017/03/best-spinach-smoothie-recipes-1a.jpg",
        ingredients:["Ingredient 1", "Ingredient 2", "Ingredient 3"],
        instructions: ["Step 1", "Step 2", "Step 3"],
        featured: false,
        nutrition: {
            calories: 189,
            protien: 20,
            carbs: 10,
            fat: 8,
        },
        description: "This is the description",
        category:["Vegetable"], //used for drink categories
        review: "Pork loin tenderloin chuck landjaeger hamburger, velit aliqua cupidatat quis capicola laboris shoulder.", //This will be broken out in to a separate review.js file 
        rating: 4
    },
    {
        id: 4,
        name: "Pomegranate",
        image:  "https://everydaydishes.com/wp-content/uploads/2016/01/vodka-pomegranate-cocktail-everydaydishes_com-H.jpg",
        ingredients:["Ingredient 1", "Ingredient 2", "Ingredient 3"],
        instructions: ["Step 1", "Step 2", "Step 3"],
        featured: true,
        nutrition: {
            calories: 189,
            protien: 20,
            carbs: 10,
            fat: 8,
        },
        description: "This is the description",
        category:["Fruit"], //used for drink categories
        review: "Cupim aliquip kevin fugiat andouille fatback et landjaeger hamburger proident in shank biltong. Laborum commodo in, pork loin swine anim irure biltong turkey.", //This will be broken out in to a separate review.js file 
        rating: 5
    },
    {
        id: 5,
        name: "Orange",
        image:  "https://hips.hearstapps.com/vidthumb/images/delish-beermosas-new-002-1528734409.jpg",
        ingredients:["Ingredient 1", "Ingredient 2", "Ingredient 3"],
        instructions: ["Step 1", "Step 2", "Step 3"],
        featured: false,
        nutrition: {
            calories: 189,
            protien: 20,
            carbs: 10,
            fat: 8,
        },
        description: "This is the description",
        category:["Fruit"], //used for drink categories
        review: "Mollit dolore in, tempor doner pork belly pariatur enim prosciutto. Velit strip steak ham rump ipsum elit do, beef incididunt corned beef buffalo brisket pancetta picanha pig.", //This will be broken out in to a separate review.js file 
        rating: 3
    },
    {
        id: 6,
        name: "Broccoli",
        image:  "https://mindovermunch.com/wp-content/uploads/2018/11/broccoli-smoothie-recipe-featured.jpg",
        ingredients:["Ingredient 1", "Ingredient 2", "Ingredient 3"],
        instructions: ["Step 1", "Step 2", "Step 3"],
        featured: true,
        nutrition: {
            calories: 189,
            protien: 20,
            carbs: 10,
            fat: 8,
        },
        description: "This is the description",
        category:["Vegetable"], //used for drink categories
        review: "Brisket pork belly culpa pig consequat ham esse velit, jowl voluptate dolore.", //This will be broken out in to a separate review.js file 
        rating: 5
    },
    {
        id: 7,
        name: "Cherry",
        image:  "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/323/323752/cherry-juice-in-a-glass.jpg?w=1155&h=1541",
        ingredients:["Ingredient 1", "Ingredient 2", "Ingredient 3"],
        instructions: ["Step 1", "Step 2", "Step 3"],
        featured: false,
        nutrition: {
            calories: 189,
            protien: 20,
            carbs: 10,
            fat: 8,
        },
        description: "This is the description",
        category:["Fruit"], //used for drink categories
        review: "Pig bresaola ball tip ad magna corned beef andouille nulla duis short ribs in enim anim fatback.", //This will be broken out in to a separate review.js file 
        rating: 5
    },
    {
        id: 8,
        name: "Lettuce",
        image:  "https://thecookful.com/wp-content/uploads/2019/04/Lettuce-Smoothie-1392x780-final.jpg",
        ingredients:["Ingredient 1", "Ingredient 2", "Ingredient 3"],
        instructions: ["Step 1", "Step 2", "Step 3"],
        featured: true,
        nutrition: {
            calories: 189,
            protien: 20,
            carbs: 10,
            fat: 8,
        },
        description: "This is the description",
        category:["Vegetable"], //used for drink categories
        review: "Nisi non tenderloin kielbasa pancetta laborum deserunt spare ribs beef ham hock venison drumstick ut.", //This will be broken out in to a separate review.js file 
        rating: 4
    },
    {
        id: 9,
        name: "Mango",
        image:  "https://chowhound1.cbsistatic.com/thumbnail/1280/800/chowhound1.cbsistatic.com/assets/models/promotions/photos/29115/original/MangoLemonade-AyeshaCurry.jpg",
        ingredients:["Ingredient 1", "Ingredient 2", "Ingredient 3"],
        instructions: ["Step 1", "Step 2", "Step 3"],
        featured: false,
        nutrition: {
            calories: 189,
            protien: 20,
            carbs: 10,
            fat: 8,
        },
        description: "This is the description",
        category:["Liquid"], //used for drink categories
        review: "Pork loin tenderloin chuck landjaeger hamburger, velit aliqua cupidatat quis capicola laboris shoulder.", //This will be broken out in to a separate review.js file 
        rating: 5
    }
]
