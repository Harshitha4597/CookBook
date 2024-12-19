const recipes = {
    biryani: {
      title: "Biryani",
      image: "https://simmertoslimmer.com/wp-content/uploads/2022/11/Instant-Pot-Chicken-Biryani.jpeg",
      description: "Biryani is a flavorful rice dish cooked with spices, meat, and aromatic herbs. A festive dish known for its rich taste and aroma.",
      ingredients: [
        "2 cups basmati rice",
        "500g chicken or mutton (cut into pieces)",
        "2 large onions, thinly sliced",
        "1/2 cup plain yogurt",
        "2 tomatoes, chopped",
        "4 tbsp ghee (clarified butter)",
        "Whole spices: 2 bay leaves, 4 cardamom pods, 4 cloves, 1 cinnamon stick",
        "2 tsp ginger-garlic paste",
        "1 tsp turmeric powder",
        "1 tsp red chili powder",
        "1 tsp garam masala powder",
        "Fresh mint and coriander leaves",
        "Salt to taste",
        "Saffron strands soaked in warm milk (optional)"
      ],
      preparation: [
        "Wash and soak the basmati rice for 30 minutes. Drain and set aside.",
        "Fry onions in ghee until golden and crispy. Set aside for garnishing.",
        "Boil water with salt and whole spices (bay leaf, cardamom, cinnamon). Cook rice until 70% done, then drain and set aside.",
        "In a pan, heat ghee and sauté whole spices. Add ginger-garlic paste and cook for a minute.",
        "Add tomatoes, turmeric, chili powder, and salt. Cook until the tomatoes soften.",
        "Mix in yogurt and add chicken or mutton. Cook until tender and well-coated with spices.",
        "In a large pot, layer the partially cooked rice and chicken/mutton mixture. Sprinkle fried onions, mint, coriander, and saffron between layers.",
        "Cover and cook on low heat (dum) for 20 minutes. Serve hot with raita."
      ],
      tips: "Use aged basmati rice for the best aroma. For extra richness, drizzle melted ghee over the rice layers."
    },
    "shahi-paneer": {
      title: "Shahi Paneer",
      image: "https://recipes.timesofindia.com/photo/53110729.cms?imgsize=160019",
      description: "Shahi Paneer is a royal vegetarian dish made with soft paneer cubes in a creamy, spiced gravy enriched with cashews and cream.",
      ingredients: [
        "250g paneer, cubed",
        "2 medium onions, finely chopped",
        "2 medium tomatoes, pureed",
        "1/4 cup cashews, soaked and ground to a paste",
        "1/2 cup heavy cream",
        "2 tbsp ghee or butter",
        "1 tsp ginger-garlic paste",
        "1/2 tsp turmeric powder",
        "1/2 tsp red chili powder",
        "1/2 tsp garam masala",
        "1 tsp sugar",
        "Salt to taste",
        "Fresh coriander leaves for garnish"
      ],
      preparation: [
        "Heat ghee in a pan and sauté onions until golden.",
        "Add ginger-garlic paste and cook for 1 minute.",
        "Add tomato puree, turmeric, and chili powder. Cook until the mixture thickens and the oil separates.",
        "Mix in the cashew paste and cook for 3-4 minutes, adding a splash of water to adjust consistency.",
        "Add cream, sugar, and salt. Simmer on low heat for 2-3 minutes.",
        "Gently fold in paneer cubes and garam masala. Cook for 2-3 minutes.",
        "Garnish with fresh coriander leaves and serve with naan or jeera rice."
      ],
      tips: "For softer paneer, soak it in warm water for 10 minutes before cooking."
    },
    "butter-chicken": {
      title: "Butter Chicken",
      image: "https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken--750x750.jpg",
      description: "Butter Chicken is a creamy and mildly spiced curry made with marinated chicken cooked in a rich tomato-based sauce.",
      ingredients: [
        "500g boneless chicken (cubed)",
        "1 cup yogurt",
        "1 tbsp lemon juice",
        "1 tsp turmeric powder",
        "1 tsp red chili powder",
        "2 tsp garam masala",
        "3 tbsp butter",
        "1 large onion, finely chopped",
        "3 tomatoes, pureed",
        "1/2 cup heavy cream",
        "1/4 cup cashew paste",
        "1 tsp ginger-garlic paste",
        "1 tsp sugar",
        "Salt to taste"
      ],
      preparation: [
        "Marinate the chicken with yogurt, lemon juice, turmeric, chili powder, and salt. Leave for 1 hour.",
        "Grill or pan-fry the chicken pieces until slightly charred. Set aside.",
        "In a pan, heat butter and sauté onions until golden.",
        "Add ginger-garlic paste and cook for a minute. Stir in tomato puree and cook until thick.",
        "Add cashew paste, sugar, and cream. Simmer for 5 minutes.",
        "Add the grilled chicken and garam masala to the sauce. Cook for 10 minutes on low heat.",
        "Serve hot with butter naan or steamed rice."
      ],
      tips: "For a smoky flavor, add a small piece of charred coal in a bowl to the pot, cover, and let it sit for 5 minutes."
    },
    "garlic-prawns": {
      title: "Garlic Butter Prawns",
      image: "https://tse3.mm.bing.net/th?id=OIP.9YNJzJv_vogTYOL-elZYDAHaEK&pid=Api&P=0&h=180",
      description: "Garlic Butter Prawns are a quick and flavorful dish made with succulent prawns sautéed in garlic-infused butter.",
      ingredients: [
        "500g prawns, peeled and deveined",
        "4 tbsp butter",
        "6 garlic cloves, minced",
        "1/4 cup fresh parsley, chopped",
        "1 tbsp lemon juice",
        "1/2 tsp red chili flakes",
        "Salt and pepper to taste"
      ],
      preparation: [
        "Heat butter in a pan over medium heat.",
        "Add minced garlic and sauté until fragrant.",
        "Add prawns and cook for 2-3 minutes on each side until pink and opaque.",
        "Season with salt, pepper, and chili flakes.",
        "Add lemon juice and parsley. Toss well and serve immediately."
      ],
      tips: "Do not overcook the prawns as they can become rubbery."
    },
    "pav-bhaji": {
      title: "Pav Bhaji",
      image: "https://recipes.timesofindia.com/photo/52416693.cms?imgsize=53280",
      description: "Pav Bhaji is a popular Indian street food made of spiced mashed vegetables served with buttered pav (bread rolls).",
      ingredients: [
        "4-5 medium potatoes, boiled and mashed",
        "1 cup cauliflower florets, chopped",
        "1/2 cup peas",
        "1 large onion, chopped",
        "2 tomatoes, chopped",
        "1 green bell pepper, chopped",
        "2 tbsp pav bhaji masala",
        "1 tsp red chili powder",
        "2 tbsp butter",
        "2 tbsp oil",
        "1 tsp cumin seeds",
        "Salt to taste",
        "6 pav (bread rolls)",
        "Lemon wedges and chopped coriander for garnish"
      ],
      preparation: [
        "Heat oil and butter in a pan. Add cumin seeds and sauté onions until golden.",
        "Add chopped bell pepper and tomatoes. Cook until softened.",
        "Add boiled mashed potatoes, cauliflower, peas, pav bhaji masala, and red chili powder. Mix well.",
        "Add water to adjust consistency. Cook for 10 minutes.",
        "Toast the pav in butter on a separate pan.",
        "Serve the bhaji hot with pav, garnished with lemon wedges and coriander."
      ],
      tips: "Use a generous amount of butter for authentic flavor. Serve with pickled onions for extra zing."
    },
    "gulab-jamun": {
      title: "Gulab Jamun",
      image: "https://recipes.net/wp-content/uploads/2023/05/gulab-jamun-recipe_9fb159dc2674f395436a64666227c988-768x768.jpeg",
      description: "Gulab Jamun is a popular Indian dessert made of deep-fried dough balls soaked in sugar syrup.",
      ingredients: [
        "1 cup milk powder",
        "2 tbsp all-purpose flour",
        "1/2 tsp baking soda",
        "1/4 cup ghee",
        "2-3 tbsp milk (as needed)",
        "1 cup sugar",
        "1 cup water",
        "4-5 cardamom pods",
        "Oil for frying",
        "Rose water (optional)"
      ],
      preparation: [
        "In a bowl, mix milk powder, flour, baking soda, and ghee. Add milk little by little to form a soft dough.",
        "Divide the dough into small balls and shape them into smooth round balls.",
        "Heat oil in a pan and fry the dough balls on low heat until golden brown.",
        "In a separate pan, make sugar syrup by boiling sugar, water, and cardamom pods for 5 minutes.",
        "Once fried, soak the gulab jamun in the hot sugar syrup for 30 minutes.",
        "Serve warm or at room temperature, garnished with a few saffron strands."
      ],
      tips: "Fry on low heat to avoid burning the outside. The dough balls should be soft and not overworked."
    },
    "vanilla-ice-cream": {
      title: "Vanilla Ice Cream",
      image: "https://afoodloverskitchen.com/wp-content/uploads/homemade-vanilla-ice-cream-featured.jpg",
      description: "Homemade vanilla ice cream made with fresh cream and vanilla beans, a deliciously creamy treat.",
      ingredients: [
        "2 cups heavy cream",
        "1 cup whole milk",
        "3/4 cup sugar",
        "1 vanilla bean or 1 tbsp vanilla extract",
        "5 egg yolks"
      ],
      preparation: [
        "In a bowl, whisk the egg yolks and sugar until pale and creamy.",
        "In a saucepan, heat the cream, milk, and vanilla until warm.",
        "Slowly pour the warm milk mixture into the egg yolks, whisking constantly.",
        "Return the mixture to the saucepan and cook on low heat until it thickens to a custard-like consistency.",
        "Cool the mixture, then churn it in an ice cream maker according to the manufacturer's instructions.",
        "Freeze for at least 4 hours before serving."
      ],
      tips: "For extra richness, use full-fat cream and add crushed vanilla pods for an authentic flavor."
    },
    "egg-fried-rice": {
      title: "Egg Fried Rice",
      image: "https://i.redd.it/vw4o14d7c6541.jpg",
      description: "Egg Fried Rice is a quick, flavorful stir-fried rice dish made with eggs, vegetables, and soy sauce.",
      ingredients: [
        "2 cups cooked rice (preferably day-old)",
        "2 eggs, beaten",
        "1/2 cup carrots, diced",
        "1/2 cup peas",
        "2 tbsp soy sauce",
        "2 tbsp oil",
        "1 onion, chopped",
        "2 garlic cloves, minced",
        "Salt and pepper to taste"
      ],
      preparation: [
        "Heat oil in a wok and scramble the eggs. Set aside.",
        "In the same pan, add garlic, onions, carrots, and peas. Stir-fry for 2-3 minutes.",
        "Add the cooked rice and soy sauce. Stir to combine.",
        "Add the scrambled eggs, season with salt and pepper, and toss everything together.",
        "Serve hot with a garnish of chopped spring onions."
      ],
      tips: "Use day-old rice for better texture. Add any vegetables you like for variety."
    },
    "hot-chocolate": {
      title: "Hot Chocolate",
      image: "https://caloriecontrol.org/wp-content/uploads/AdobeStock_59093507.jpeg",
      description: "Hot Chocolate is a rich, warm beverage made with milk, cocoa powder, and sugar, perfect for winter days.",
      ingredients: [
        "2 cups milk",
        "2 tbsp cocoa powder",
        "2 tbsp sugar",
        "1/4 tsp vanilla extract",
        "Whipped cream (optional)",
        "Chocolate shavings or marshmallows for garnish"
      ],
      preparation: [
        "In a saucepan, heat the milk over medium heat.",
        "Whisk in the cocoa powder and sugar until smooth.",
        "Bring to a simmer and cook for 2-3 minutes.",
        "Remove from heat and stir in vanilla extract.",
        "Pour into a cup and top with whipped cream or chocolate shavings.",
        "Serve hot and enjoy!"
      ],
      tips: "Add a pinch of cinnamon or chili powder for a spicy twist."
    }
  };
  
  // Extract recipe name from URL
  const urlParams = new URLSearchParams(window.location.search);
  const recipeName = urlParams.get("name");
  
  if (recipes[recipeName]) {
    const recipe = recipes[recipeName];
    document.getElementById("recipe-title").innerText = recipe.title;
    document.getElementById("recipe-image").src = recipe.image;
    document.getElementById("recipe-description").innerText = recipe.description;
  
    const ingredientsList = document.getElementById("ingredients").querySelector("ul");
    recipe.ingredients.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ingredientsList.appendChild(li);
    });
  
    const preparationList = document.getElementById("preparation").querySelector("ol");
    recipe.preparation.forEach(step => {
      const li = document.createElement("li");
      li.textContent = step;
      preparationList.appendChild(li);
    });
  
    document.getElementById("recipe-tips").innerText = recipe.tips;
  } else {
    document.body.innerHTML = "<h1>Recipe not found!</h1>";
  }
  