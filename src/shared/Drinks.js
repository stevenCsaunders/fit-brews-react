export const DRINKS = [

    {
        id: 0,
        name: "Drink Name",
        image:  "path/to/image.jpg",
        ingredients:["Ingredient 1", "Ingredient 2", "Ingredient 3"],
        instructions: ["Step 1", "Step 2", "Step 3"],
        featured: false,
        nutrition: {
            calories: 150,
            protien: 30,
            carbs: 15,
            fat: 5,
        },
        tag:[], //used for drink categories
        reviews: "Some review text here", //This will be broken out in to a separate reviews.js file 
    },
    {
        id: 1,
        name: "Drink Name 2",
        image:  "path/to/image.jpg",
        ingredients:["Ingredient 1", "Ingredient 2", "Ingredient 3"],
        instructions: ["Step 1", "Step 2", "Step 3"],
        featured: false,
        nutrition: {
            calories: 189,
            protien: 20,
            carbs: 10,
            fat: 8,
        },
        tag:[], //used for drink categories
        reviews: "Some review text here", //This will be broken out in to a separate reviews.js file 
    }
]