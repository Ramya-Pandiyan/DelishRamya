// scripts.js



let countdown;
const timerDisplay = document.getElementById('timer');
const alarmSound = document.getElementById('alarmSound');

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      alarmSound.play();
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = display;
}

function setTimer() {
  const timeInput = parseInt(document.getElementById('timerInput').value);
  const timeUnit = document.getElementById('timeUnit').value;
  let seconds;
  if (timeUnit === 'minutes') {
    seconds = timeInput * 60;
  } else {
    seconds = timeInput;
  }
  if (!isNaN(seconds)) {
    timer(seconds);
  }
}

function stopTimer() {
  clearInterval(countdown);
  alarmSound.pause();
  alarmSound.currentTime = 0;
}





const recipesContainer = document.getElementById('recipes-container');

function handleSearch() {
  const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
  const searchedRecipe = recipes.find(recipe => recipe.name.toLowerCase().includes(searchInput));

  if (searchedRecipe) {
      const filteredRecipes = recipes.filter(recipe => recipe !== searchedRecipe);
      renderRecipes([searchedRecipe, ...filteredRecipes]);
  } else {
      renderRecipes(recipes);
  }
}

function embedYouTubeVideo(videoId) {
  return `<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
            <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                    src="https://www.youtube.com/embed/${videoId}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
            </iframe>
          </div>`;
}





// Mock data for recipes
const recipes ={ 
  "South Indian":[
  {
    name: 'Dosa',
    image: 'dosa.jpg',
    instructions:[ 'Mix rice and urad dal ,soak them overnight.', 'Grind them to a smooth batter. ','Ferment the batter for 6-8 hours. ','Heat a non-stick pan, pour a ladleful of batter, spread it in a circular motion, and cook until golden brown. ','Serve hot with chutney and sambar.'],
    ingredients: ['1 cup rice', '1/2 cup urad dal', 'Salt to taste', 'Oil for cooking'],
    timer: '10 minutes per dosa',
    videoId: 'AssLX3HjowM'
  },
  {
    name: 'Idli',
    image: 'idly.jpg',
    instructions: ['Mix rice and urad dal, soak them separately overnight.', 'Grind them separately to a smooth batter.', 'Mix both batters, add salt, and let it ferment for 6-8 hours.', 'Grease idli molds, pour the batter, and steam for 10-12 minutes.', 'Serve hot with chutney and sambar.'],
    ingredients: ['1 cup rice', '1/2 cup urad dal', 'Salt to taste'],
    timer: '10 minutes per idli',
    videoId:'Ayo80PIb-Qg'
    },
    
    {
    name: 'Puliyogare',
    image: 'puliyogare.jpg',
    instructions: ['Cook rice and let it cool.', 'Heat oil in a pan, add mustard seeds, chana dal, urad dal, peanuts, and fry until golden brown.', 'Add tamarind extract, jaggery, and spices.', 'Add cooked rice and mix well.', 'Serve hot or at room temperature.'],
    ingredients: ['1 cup rice', 'Tamarind pulp', 'Jaggery', 'Peanuts', 'Spices (mustard seeds, chana dal, urad dal, turmeric powder, red chili powder)', 'Salt to taste'],
    timer: '30 minutes',
    videoId:'Zml50zZhRJY'
    },
    {
    name: 'Vada',
    image: 'vadavada.jpg',
    instructions: ['Soak urad dal and rice separately for 4-6 hours.', 'Grind urad dal into a smooth batter, add salt, and beat well.', 'Add soaked and drained rice, grind to a coarse paste.', 'Heat oil, shape the batter into vadas, and fry until golden brown.', 'Serve hot with chutney and sambar.'],
    ingredients: ['1 cup urad dal', '1/4 cup rice', 'Salt to taste', 'Oil for frying'],
    timer: '5 minutes per vada',
    videoId:'Zjm9fQBBHiM'
    },
    
    {
    name: 'Bisi Bele Bath',
    image: 'bisi bele bath.jpg',
    instructions: ['Cook rice and toor dal separately.', 'Heat oil in a pan, add mustard seeds, curry leaves, chopped vegetables, and cook until soft.', 'Add tamarind extract, cooked dal, and spices.', 'Add cooked rice and mix well.', 'Serve hot with papad or raita.'],
    ingredients: ['1 cup rice', '1/2 cup toor dal', 'Assorted vegetables (carrots, beans, peas)', 'Tamarind pulp', 'Spices (coriander powder, cumin powder, turmeric powder)', 'Salt to taste'],
    timer: '30 minutes',
    videoId:'VEArdyBWvdw'
    },
    
    {
    name: 'Rasam',
    image: 'rasam.jpg',
    instructions: ['Boil tomatoes, tamarind extract, and spices until the raw smell goes away.', 'Temper mustard seeds, curry leaves, and dried red chilies in ghee.', 'Add the tempering to the boiled mixture.', 'Garnish with coriander leaves and serve hot.'],
    ingredients: ['Tomatoes', 'Tamarind extract', 'Spices (pepper, cumin, coriander)', 'Ghee', 'Curry leaves', 'Dried red chilies'],
    timer: '20 minutes',
    videoId:'n5xVP6urnuY'
    },

    {
    name: 'Sambar',
    image: 'sambar.jpeg',
    instructions: ['Cook toor dal and keep it aside.', 'Boil vegetables, tamarind extract, and spices until soft.', 'Add cooked dal and simmer.', 'Temper mustard seeds, curry leaves, and dried red chilies in ghee, and add to the sambar.', 'Garnish with coriander leaves and serve hot with rice or idli.'],
    ingredients: ['Toor dal', 'Assorted vegetables (carrots, beans, drumsticks)', 'Tamarind extract', 'Spices (sambar powder, turmeric powder)', 'Ghee', 'Curry leaves', 'Dried red chilies'],
    timer: '30 minutes',
    videoId:'_rN4Hk9DS5Q'
    },
    {
      name: 'Pongal',
      image: 'pongal.jpg',
      instructions: ['Cook rice and moong dal together until soft.', 'Temper ghee with cumin seeds, black pepper, ginger, and cashews.', 'Add the tempering to the cooked rice-dal mixture.', 'Garnish with coriander leaves and serve hot with chutney or sambar.'],
      ingredients: ['Rice', 'Moong dal', 'Ghee', 'Spices (cumin seeds, black pepper)', 'Ginger', 'Cashews'],
      timer: '30 minutes',
      videoId:'LCKO_4tSNiA'
    },
    {
      name: 'Adai',
      image: 'adai.png',
      instructions: ['Soak rice, toor dal, chana dal, urad dal, and red chilies together for 2 hours.', 'Grind them into a coarse batter.', 'Add chopped onions, curry leaves, and coriander leaves to the batter.', 'Make thick pancakes on a hot griddle.', 'Serve hot with avial or jaggery.'],
      ingredients: ['Rice', 'Toor dal', 'Chana dal', 'Urad dal', 'Red chilies', 'Onion', 'Curry leaves', 'Coriander leaves'],
      timer: '30 minutes',
      videoId:'TURbxKNg6Hg'
    },
    {
      name: 'Masala Dosa',
      image: 'masala dosa.jpg',
      instructions: [
        'Make dosa batter and keep it ready.',
        'Heat a dosa tawa, spread dosa batter, and drizzle oil around the edges.',
        'Spread potato masala over the dosa and cook until crispy.',
        'Serve hot with coconut chutney and sambar.'
      ],
      ingredients: ['Dosa batter', 'Potatoes', 'Onions', 'Green chilies', 'Ginger', 'Curry leaves', 'Spices (turmeric powder, red chili powder, garam masala)', 'Oil'],
      timer: '15 minutes per dosa',
      videoId:'mDqkxZ3UVzc'
    },
    {
      name: 'Rava Idli',
      image: 'rava idli.png',
      instructions: [
        'Dry roast rava until lightly browned and aromatic.',
        'Mix roasted rava with curd, salt, and water to make a thick batter.',
        'Let the batter rest for 30 minutes.',
        'Grease idli molds, pour the batter, and steam for 10-12 minutes.',
        'Serve hot with chutney and sambar.'
      ],
      ingredients: ['Rava (semolina)', 'Curd', 'Water', 'Salt', 'Eno fruit salt', 'Mustard seeds', 'Curry leaves', 'Green chilies', 'Cashews'],
      timer: '20 minutes per idli',
      videoId:'jyBs-tt8YfY'
    },
    {
      name: 'Upma',
      image: 'upma.jpg',
      instructions: [
        'Dry roast rava until lightly browned and aromatic.',
        'Heat oil in a pan, add mustard seeds, urad dal, chana dal, curry leaves, and sauté until golden brown.',
        'Add chopped onions, green chilies, and ginger, and sauté until onions turn translucent.',
        'Add water, salt, and bring to a boil.',
        'Gradually add roasted rava, stirring continuously to avoid lumps.',
        'Cook until upma is thick and fluffy.',
        'Serve hot with coconut chutney.'
      ],
      ingredients: ['Rava (semolina)', 'Water', 'Onion', 'Green chilies', 'Ginger', 'Mustard seeds', 'Urad dal', 'Chana dal', 'Curry leaves', 'Oil', 'Salt'],
      timer: '15 minutes',
      videoId:'e_hsuJwn0aY?'
    },
    {
      name: 'Appam',
      image: 'appam.jpg',
      instructions: [
        'Soak rice and fenugreek seeds for 4-6 hours.',
        'Grind soaked rice, grated coconut, cooked rice, and salt to make a smooth batter.',
        'Ferment the batter overnight.',
        'Heat appam pan, pour a ladleful of batter, swirl to spread the batter, and cover with a lid.',
        'Cook until appam is golden brown and crisp on the edges.',
        'Serve hot with stew or sweetened coconut milk.'
      ],
      ingredients: ['Raw rice', 'Cooked rice', 'Fenugreek seeds', 'Grated coconut', 'Salt', 'Sugar', 'Yeast'],
      timer: '20 minutes per appam',
      videoId:'IXL1NINkGgA'
    },

   {
    name: 'Idiyappam',
    image: 'idiyappam.png',
    instructions: [
      'Prepare rice flour dough by mixing hot water and salt.',
      'Fill the idiyappam press with dough and press onto idli plates.',
      'Steam until cooked.',
      'Serve hot with coconut milk or curry.'
    ],
    ingredients: ['Rice flour', 'Water', 'Salt'],
    timer: '15 minutes',
    videoId:'Ykd4TvFQ3FU'
  },
  {
    name: 'Pesarattu',
    image: 'pesarattu.jpg',
    instructions: [
      'Soak green gram and rice together for 4-6 hours.',
      'Grind into a smooth batter, adding green chilies, ginger, and salt.',
      'Heat a griddle, pour a ladleful of batter, and spread it into a circle.',
      'Cook until golden brown.',
      'Serve hot with chutney or upma.'
    ],
    ingredients: ['Green gram', 'Rice', 'Green chilies', 'Ginger', 'Salt'],
    timer: '5 minutes per pesarattu',
    videoId:'c0PQz7TF7RQ'
  },
  {
    name: 'Chicken Rice',
    image: 'chicken rice.jpg',
    instructions: [
      'Cook rice and set aside.',
      'In a pan, heat oil, add chopped onions, garlic, and ginger.',
      'Add diced chicken, soy sauce, and spices.',
      'Stir fry until chicken is cooked.',
      'Serve hot with rice.'
    ],
    ingredients: ['Chicken', 'Rice', 'Onions', 'Garlic', 'Ginger', 'Soy sauce', 'Spices'],
    timer: '20 minutes',
    videoId:'d02B2WIV-uU'
  },

  {
    name: 'Chicken Biryani',
    image: 'chicken biriyani.jpeg',
    instructions: ['Marinate chicken with yogurt, spices, and herbs.', 'Cook rice with whole spices separately.', 'Layer marinated chicken and cooked rice in a pot.', 'Cook on low heat until chicken is tender.', 'Serve hot with raita.'],
    ingredients: ['Chicken', 'Rice', 'Yogurt', 'Spices', 'Herbs'],
    timer: '45 minutes',
    videoId:'6XlMguO9r-M'
  },
  {
    name: 'Gongura',
    image: 'gongura.png',
    instructions: ['Clean and wash gongura leaves.', 'Heat oil, add mustard seeds, cumin seeds, and curry leaves.', 'Add chopped gongura leaves, turmeric powder, and salt.', 'Cook until the leaves are soft.', 'Serve hot with rice or roti.'],
    ingredients: ['Gongura leaves', 'Oil', 'Mustard seeds', 'Cumin seeds', 'Curry leaves', 'Turmeric powder', 'Salt'],
    timer: '15 minutes',
    videoId:'RJSpeApJODA'
  },
  {
    name: 'Chicken Noodles',
    image: 'chick noodles.png',
    instructions: ['Boil noodles until al dente, drain and set aside.', 'In a wok, heat oil, add chopped vegetables, and diced chicken.', 'Stir fry until chicken is cooked.', 'Add cooked noodles, soy sauce, and spices.', 'Serve hot.'],
    ingredients: ['Noodles', 'Chicken', 'Vegetables', 'Soy sauce', 'Spices'],
    timer: '20 minutes',
    videoId:'zTvRk__iuwk'
  },
  {
    name: 'Mutton Biryani',
    image: 'mutton biryani.jpg',
    instructions: ['Marinate mutton with yogurt, spices, and herbs.', 'Cook rice with whole spices separately.', 'Layer marinated mutton and cooked rice in a pot.', 'Cook on low heat until mutton is tender.', 'Serve hot with raita.'],
    ingredients: ['Mutton', 'Rice', 'Yogurt', 'Spices', 'Herbs'],
    timer: '60 minutes',
    videoId:'nUsJVwVH0Xw'
  },
  {
    name: 'Prawn Biryani',
    image: 'prawn biryani.jpg',
    instructions: ['Marinate prawns with yogurt, spices, and herbs.', 'Cook rice with whole spices separately.', 'Layer marinated prawns and cooked rice in a pot.', 'Cook on low heat until prawns are cooked.', 'Serve hot with raita.'],
    ingredients: ['Prawns', 'Rice', 'Yogurt', 'Spices', 'Herbs'],
    timer: '30 minutes',
    videoId:'ZbFyXmR-TRM'
  },
  {
    name: 'Chilli Chicken',
    image: 'chilli chicken.png',
    instructions: ['Marinate chicken with soy sauce, ginger-garlic paste, and spices.', 'Deep fry until golden brown and set aside.', 'In a wok, heat oil, add chopped onions, garlic, and green chilies.', 'Add fried chicken and sauces.', 'Serve hot with fried rice.'],
    ingredients: ['Chicken', 'Soy sauce', 'Ginger-garlic paste', 'Spices', 'Onions', 'Garlic', 'Green chilies'],
    timer: '30 minutes',
    videoId:'-WeqXpIEBow'
  },
  {
    name: 'Fish Fry',
    image: 'fish fry.jpg',
    instructions: ['Marinate fish with spices, turmeric powder, and lemon juice.', 'Let it sit for 30 minutes.', 'Heat oil in a pan, shallow fry the fish until golden brown.', 'Serve hot with lemon wedges and onion rings.'],
    ingredients: ['Fish', 'Spices', 'Turmeric powder', 'Lemon juice', 'Oil'],
    timer: '15 minutes',
    videoId:'FszFhprMBmQ'
  },
  {
    name: 'Shawarma',
    image: 'shawarma.jpg',
    instructions: ['Marinate chicken with yogurt, lemon juice, and spices.', 'Grill or roast the chicken until cooked.', 'Slice the chicken thinly.', 'Warm pita bread, add chicken, veggies, and sauces.', 'Roll tightly and serve hot.'],
    ingredients: ['Chicken', 'Yogurt', 'Lemon juice', 'Spices', 'Pita bread', 'Vegetables', 'Sauces'],
    timer: '45 minutes',
    videoId:'9QAg7Zqi56c'
  },
  {
    name: 'Dragon Chicken',
    image: 'dragon chicken.png',
    instructions: ['Marinate chicken with soy sauce, ginger-garlic paste, and spices.', 'Deep fry until golden brown and set aside.', 'In a wok, heat oil, add chopped onions, garlic, and capsicum.', 'Add fried chicken and sauces.', 'Serve hot with fried rice or noodles.'],
    ingredients: ['Chicken', 'Soy sauce', 'Ginger-garlic paste', 'Spices', 'Onions', 'Garlic', 'Capsicum'],
    timer: '30 minutes',
    videoId:'ft-FkklG-9M'
  },
  {
    name: 'Hariyali Chicken',
    image: 'hariyali chicken.png',
    instructions: ['Grind coriander leaves, mint leaves, green chilies, and garlic into a fine paste.', 'Marinate chicken with the paste, yogurt, and spices.', 'Grill or roast the chicken until cooked.', 'Serve hot with mint chutney and naan.'],
    ingredients: ['Chicken', 'Coriander leaves', 'Mint leaves', 'Green chilies', 'Garlic', 'Yogurt', 'Spices'],
    timer: '45 minutes',
    videoId:'GS508WQQ3cI'
  },
  {
    name: 'Curd Rice',
    image: 'curd rice.jpg',
    instructions: ['Cook rice and let it cool.', 'Mix rice with whisked curd, salt, and tempering.', 'For tempering, heat oil, add mustard seeds, curry leaves, and green chilies.', 'Mix well and serve chilled.'],
    ingredients: ['Rice', 'Curd', 'Salt', 'Mustard seeds', 'Curry leaves', 'Green chilies', 'Oil'],
    timer: '20 minutes',
    videoId:'xaPiRmxRSc8'
  },
  {
    name: 'Keema Balls',
    image: 'keema balls.png',
    instructions: ['Cook minced meat with spices and herbs.', 'Let it cool and shape into balls.', 'Dip the balls in beaten eggs and breadcrumbs.', 'Deep fry until golden brown.', 'Serve hot with mint chutney.'],
    ingredients: ['Minced meat', 'Spices', 'Herbs', 'Eggs', 'Breadcrumbs', 'Oil'],
    timer: '30 minutes',
    videoId:'hxOMNcAuo3Q'
  },
  
  {
    name: 'French Fries',
    image: 'french fries.jpg',
    instructions: ['Peel and cut potatoes into strips.', 'Soak in cold water for 30 minutes.', 'Drain and pat dry.', 'Deep fry until golden brown and crispy.', 'Season with salt and serve hot.'],
    ingredients: ['Potatoes', 'Oil', 'Salt'],
    timer: '20 minutes',
    videoId:'LKMgduUGgbc'
  },
  {
    name: 'Pizza',
    image: 'pizza.jpg',
    instructions: ['Prepare pizza dough and roll out into a circle.', 'Spread pizza sauce and toppings of your choice.', 'Bake in a preheated oven until crust is golden and cheese is melted.', 'Slice and serve hot.'],
    ingredients: ['Pizza dough', 'Pizza sauce', 'Toppings (vegetables, meats)', 'Cheese'],
    timer: '30 minutes',
    videoId:'VFBZRZ9lTsM'
  },
  {
    name: 'Falooda',
    image: 'falooda.jpg',
    instructions: ['Soak falooda seeds and basil seeds separately.', 'Boil vermicelli until soft, drain, and set aside.', 'In a glass, layer vermicelli, soaked seeds, rose syrup, and chilled milk.', 'Top with ice cream and nuts.', 'Serve chilled.'],
    ingredients: ['Falooda seeds', 'Basil seeds', 'Vermicelli', 'Rose syrup', 'Milk', 'Ice cream', 'Nuts'],
    timer: '15 minutes',
    videoId:'cDpAnjkaEIQ'
  },
  {
    name: 'Channa Masala',
    image: 'channa masala.jpg',
    instructions: ['Soak chickpeas overnight, then pressure cook until soft.', 'In a pan, heat oil, add onions, ginger, garlic, and spices.', 'Add chopped tomatoes, cooked chickpeas, and water.', 'Cook until thickened.', 'Garnish with coriander leaves and serve hot.'],
    ingredients: ['Chickpeas', 'Onions', 'Ginger', 'Garlic', 'Tomatoes', 'Spices', 'Coriander leaves', 'Oil'],
    timer: '45 minutes',
    videoId:'3Vf5_St-DEo'
  },
  {
    name: 'Tandoori Chicken',
    image: 'tandoori.png',
    instructions: ['Marinate chicken with yogurt, lemon juice, and tandoori spices.', 'Let it marinate for at least 2 hours.', 'Grill in a tandoor or oven until cooked.', 'Serve hot with mint chutney and naan.'],
    ingredients: ['Chicken', 'Yogurt', 'Lemon juice', 'Tandoori spices'],
    timer: '60 minutes'
  },
  {
    name: 'Samosa',
    image: 'samosa.jpg',
    instructions: ['Prepare samosa dough and divide into small balls.', 'Roll out each ball into a circle.', 'Place a spoonful of spiced potato filling in the center and fold into a triangle.', 'Deep fry until golden brown.', 'Serve hot with chutney.'],
    ingredients: ['Samosa dough', 'Potatoes', 'Spices', 'Oil'],
    timer: '45 minutes',
    videoId:'kEIFn0A5trA'
  },
  {
    name: 'Butter Chicken',
    image: 'butter chick.png',
    instructions: ['Marinate chicken with yogurt, lemon juice, and spices.', 'Grill or roast the chicken until cooked.', 'In a pan, heat butter, add onions, ginger, and garlic.', 'Add tomato puree, cream, and cooked chicken.', 'Simmer until thickened.', 'Serve hot with naan or rice.'],
    ingredients: ['Chicken', 'Yogurt', 'Lemon juice', 'Spices', 'Butter', 'Onions', 'Tomato puree', 'Cream'],
    timer: '45 minutes',
    videoId:'EO30A86XSdM'
  },
  {
    name: 'Paani Poori',
    image: 'pani poori.jpg',
    instructions: ['Prepare golgappa dough and roll out into small balls.', 'Deep fry until puffed and crispy.', 'Make a hole in each poori and fill with boiled potatoes, chickpeas, and spicy water.', 'Serve immediately.'],
    ingredients: ['Golgappa dough', 'Potatoes', 'Chickpeas', 'Spicy water'],
    timer: '45 minutes',
    videoId:'ZQYzFFu7ZXg'
  },
  {
    name: 'Chicken Curry',
    image: 'chicken curry.png',
    instructions: ['Heat oil in a pan, add chopped onions, ginger, and garlic.', 'Add chicken pieces and spices.', 'Cook until chicken is browned.', 'Add tomatoes, coconut milk, and simmer until chicken is cooked.', 'Garnish with coriander leaves and serve hot with rice or roti.'],
    ingredients: ['Chicken', 'Onions', 'Ginger', 'Garlic', 'Spices', 'Tomatoes', 'Coconut milk', 'Coriander leaves'],
    timer: '45 minutes',
    videoId:'AoPqKq4Wv_E'
  },
  {
    name: 'Manchow Soup',
    image: 'manchow soup.png',
    instructions: ['Heat oil in a pan, add chopped garlic, ginger, and green chilies.', 'Add chopped vegetables and stir-fry for a few minutes.', 'Add vegetable stock, soy sauce, and vinegar.', 'Bring to a boil and simmer.', 'Serve hot with fried noodles on top.'],
    ingredients: ['Oil', 'Garlic', 'Ginger', 'Green chilies', 'Vegetables', 'Vegetable stock', 'Soy sauce', 'Vinegar', 'Fried noodles'],
    timer: '30 minutes',
    videoId:'1WdmEbeekTc'
  },
  {
    name: 'Ramen',
    image: 'ramen.png',
    instructions: ['Cook ramen noodles according to package instructions.', 'In a pot, heat chicken broth, soy sauce, and miso paste.', 'Add cooked noodles and toppings like boiled eggs, vegetables, and meats.', 'Serve hot with chopped green onions.'],
    ingredients: ['Ramen noodles', 'Chicken broth', 'Soy sauce', 'Miso paste', 'Boiled eggs', 'Vegetables', 'Meats', 'Green onions'],
    timer: '20 minutes',
    videoId:'CltUZnoUDFM'
  },
  {
    name: 'Cajun Potatoes',
    image: 'cajun potato.png',
    instructions: ['Parboil baby potatoes until slightly tender.', 'Toss with Cajun seasoning, olive oil, and salt.', 'Roast in a preheated oven until crispy and golden brown.', 'Serve hot with sour cream or mayo dip.'],
    ingredients: ['Baby potatoes', 'Cajun seasoning', 'Olive oil', 'Salt', 'Sour cream or mayo'],
    timer: '40 minutes',
    videoId:'-waVevYPa_k'
  },
  {
    name: 'Honey Chilli Chicken',
    image: 'honey chilli chick.png',
    instructions: ['Marinate chicken with soy sauce, ginger-garlic paste, and spices.', 'Deep fry until golden brown and set aside.', 'In a wok, heat oil, add chopped onions, garlic, and green chilies.', 'Add fried chicken and sauces.', 'Serve hot with fried rice.'],
    ingredients: ['Chicken', 'Soy sauce', 'Ginger-garlic paste', 'Spices', 'Onions', 'Garlic', 'Green chilies', 'Honey'],
    timer: '30 minutes',
    videoId:'am2SJeTiHM0'
  },
  {
    name: 'Mint Cooler',
    image: 'mint cooler.jpg',
    instructions: ['Blend mint leaves, lemon juice, sugar, and water until smooth.', 'Strain the mixture to remove any solids.', 'Add ice cubes and serve chilled with a sprig of mint for garnish.'],
    ingredients: ['Mint leaves', 'Lemon juice', 'Sugar', 'Water', 'Ice cubes'],
    timer: '10 minutes',
    videoId:'cYe5fO-ZRkM'
  }],

  "Desserts":[
  {
    name: 'Pinata Cake',
    image: 'pinata cake.png',
    instructions: ['Bake two cakes of different colors.', 'Cut a hole in the center of one cake and fill it with candies.', 'Place the other cake on top and frost the entire cake.', 'Decorate with sprinkles and more candies.', 'Slice to reveal the hidden candies.'],
    ingredients: ['Cake batter', 'Candies', 'Frosting', 'Sprinkles'],
    timer: '1 hour',
    videoId:'bBrFdXFz8ws'
  },
  {
    name: 'Red Velvet Cake',
    image: 'redvelvet.jpg',
    instructions: ['Mix flour, cocoa powder, and baking powder.', 'In another bowl, beat butter, sugar, eggs, and vanilla extract.', 'Gradually add dry ingredients and buttermilk, alternating.', 'Bake in preheated oven and cool.', 'Frost with cream cheese frosting and serve.'],
    ingredients: ['Flour', 'Cocoa powder', 'Baking powder', 'Butter', 'Sugar', 'Eggs', 'Vanilla extract', 'Buttermilk', 'Cream cheese frosting'],
    timer: '1 hour',
    videoId:'cMPUB3DUssA'
  },
  {
    name: 'Bento Cake',
    image: 'bento cake.jpg',
    instructions: ['Bake a rectangular cake and let it cool.', 'Cut into small rectangles.', 'Decorate each piece to resemble a bento box with frosting and food coloring.', 'Serve as a fun and colorful dessert for kids.'],
    ingredients: ['Cake batter', 'Frosting', 'Food coloring'],
    timer: '1 hour',
    videoId:'ldEWTJqMd8U'
  }],

  "Tiffen":[
  {
    name: 'Parotta',
    image: 'parotta.jpg',
    instructions: ['Mix flour, salt, and water to form a dough.', 'Knead well and let it rest.', 'Divide into balls and roll out into thin discs.', 'Cook on a hot griddle until golden brown on both sides.', 'Serve hot with curry or chutney.'],
    ingredients: ['Flour', 'Salt', 'Water', 'Oil'],
    timer: '1 hour',
    videoId:'ehKuzPWNRic'
  },
  {
    name: 'Salna',
    image: 'salna.jpg',
    instructions: ['Heat oil in a pan, add chopped onions, ginger, and garlic.', 'Add chopped tomatoes and cook until soft.', 'Add spice powders and mix well.', 'Add water and simmer until the gravy thickens.', 'Serve hot with parotta or dosa.'],
    ingredients: ['Oil', 'Onions', 'Ginger', 'Garlic', 'Tomatoes', 'Spice powders', 'Water'],
    timer: '30 minutes',
    videoId:'y7kPBiC9mN8'
  },
  {
    name: 'Prawn Dosa',
    image: 'Prawn-Dosa.webp',
    instructions: ['Prepare dosa batter and spread on a hot griddle.', 'Drizzle oil and place cooked prawn masala on top.', 'Fold the dosa and cook until crispy.', 'Serve hot with chutney and sambar.'],
    ingredients: ['Dosa batter', 'Prawns', 'Spices', 'Chutney', 'Sambar'],
    timer: '30 minutes',
    videoId:'wCaWPtt2ZvE'
  },
  {
    name: 'Prawn Curry',
    image: 'prawn_curry.jpg',
    instructions: ['Heat oil in a pan, add chopped onions, ginger, and garlic.', 'Add chopped tomatoes and cook until soft.', 'Add prawns, coconut milk, and water.', 'Simmer until prawns are cooked.', 'Serve hot with rice or roti.'],
    ingredients: ['Oil', 'Onions', 'Ginger', 'Garlic', 'Tomatoes', 'Prawns', 'Coconut milk', 'Water', 'Rice or roti'],
    timer: '30 minutes',
    videoId:'LjHHgoQ6kn4'
  },
  {
    name: 'Sandwich',
    image: 'sandwich.jpg',
    instructions: ['Spread butter on bread slices.', 'Place desired fillings like veggies, cheese, and meats.', 'Cover with another bread slice.', 'Grill or toast until golden brown.', 'Serve hot with ketchup or chutney.'],
    ingredients: ['Bread slices', 'Butter', 'Veggies', 'Cheese', 'Meats', 'Ketchup or chutney'],
    timer: '10 minutes',
    videoId:'kxyV7Ln_KRE'
  },
  {
    name: 'American Chopsuey',
    image: 'american-chopsuey.jpg',
    instructions: ['Boil noodles until al dente, drain and set aside.', 'In a pan, heat oil, add chopped vegetables, and diced chicken.', 'Stir fry until chicken is cooked.', 'Add cooked noodles, sauces, and spices.', 'Serve hot.'],
    ingredients: ['Noodles', 'Chicken', 'Vegetables', 'Sauces', 'Spices'],
    timer: '20 minutes',
    videoId:'x1MbvGxGDfk'
  },
  {
    name: 'Alfredo Pasta',
    image: 'alfredo-pasta.jpg',
    instructions: ['Cook pasta until al dente, drain and set aside.', 'In a pan, heat butter, add minced garlic, and cream.', 'Add cooked pasta, cheese, and pepper.', 'Toss until pasta is coated well.', 'Serve hot with garlic bread.'],
    ingredients: ['Pasta', 'Butter', 'Garlic', 'Cream', 'Cheese', 'Pepper', 'Garlic bread'],
    timer: '15 minutes',
    videoId:'CTTsN3QggDc'
  },
  {
    name: 'Pita Bread',
    image: 'pita bread.jpg',
    instructions: ['Mix flour, yeast, salt, and warm water to make a dough.', 'Knead until smooth and elastic.', 'Divide into balls and roll out into circles.', 'Bake in a preheated oven until puffed.', 'Serve hot with hummus or falafel.'],
    ingredients: ['Flour', 'Yeast', 'Salt', 'Warm water', 'Hummus or falafel'],
    timer: '1 hour',
    videoId:'ee4-fClbmt0'
  },
  {
    name: 'Momos',
    image: 'momos 2.webp',
    instructions: ['Prepare momo dough and roll out into small circles.', 'Place a spoonful of filling in the center.', 'Fold and pleat to seal.', 'Steam until cooked.', 'Serve hot with dipping sauce.'],
    ingredients: ['Momo dough', 'Filling (meat or vegetables)', 'Dipping sauce'],
    timer: '30 minutes',
    videoId:'WR_X33yGgNk'
  },
  {
    name: 'Bhel Puri',
    image: 'Bhel-Puri.jpg',
    instructions: ['Mix puffed rice, chopped onions, tomatoes, and boiled potatoes.', 'Add green chutney, tamarind chutney, and chaat masala.', 'Mix well and serve immediately.'],
    ingredients: ['Puffed rice', 'Onions', 'Tomatoes', 'Boiled potatoes', 'Green chutney', 'Tamarind chutney', 'Chaat masala'],
    timer: '15 minutes',
    videoId:'-ZyM7UmcFyc'
  },
  {
    name: 'Sev Puri',
    image: 'sev puri.webp',
    instructions: ['Arrange puris on a plate.', 'Top with chopped onions, tomatoes, and boiled potatoes.', 'Add green chutney, tamarind chutney, and sev.', 'Garnish with coriander leaves and serve immediately.'],
    ingredients: ['Puris', 'Onions', 'Tomatoes', 'Boiled potatoes', 'Green chutney', 'Tamarind chutney', 'Sev', 'Coriander leaves'],
    timer: '15 minutes',
    videoId:'-qKo7rai1yQ'
  },
  {
    name: 'Dhai Puri',
    image: 'dhai puri.png',
    instructions: ['Arrange puris on a plate.', 'Fill each puri with boiled potatoes and sprouts.', 'Top with sweetened yogurt, green chutney, and tamarind chutney.', 'Garnish with sev and coriander leaves.', 'Serve immediately.'],
    ingredients: ['Puris', 'Boiled potatoes', 'Sprouts', 'Yogurt', 'Green chutney', 'Tamarind chutney', 'Sev', 'Coriander leaves'],
    timer: '15 minutes',
    videoId:'bwy0O3DZwI4'
  },
  {
    name: 'Kakada Sandwich',
    image: 'Kakada Sandwich.jpg',
    instructions: ['Spread butter on bread slices.', 'Place cucumber, tomato, and onion slices.', 'Sprinkle chaat masala and sandwich masala.', 'Cover with another bread slice.', 'Grill or toast until golden brown.', 'Serve hot with ketchup or chutney.'],
    ingredients: ['Bread slices', 'Butter', 'Cucumber', 'Tomato', 'Onion', 'Chaat masala', 'Sandwich masala', 'Ketchup or chutney'],
    timer: '10 minutes',
    videoId:'unYyPBMhguY'
  },
  {
    name: 'Tea',
    image: 'tea.webp',
    instructions: ['Boil water in a kettle.', 'Add tea leaves and let it brew.', 'Add milk and sugar to taste.', 'Strain into cups and serve hot.'],
    ingredients: ['Water', 'Tea leaves', 'Milk', 'Sugar'],
    timer: '5 minutes',
    videoId:'sC124g6CSn8'
  },
  {
    name: 'Coffee',
    image: 'coffee 2.jpg',
    instructions: ['Brew coffee powder in hot water.', 'Add milk and sugar to taste.', 'Stir well and serve hot.'],
    ingredients: ['Coffee powder', 'Water', 'Milk', 'Sugar'],
    timer: '5 minutes',
    videoId:'FVENtXoc1zs'
  },
  {
    name: 'Ragi Biscuit',
    image: 'ragi-biscuits.jpg',
    instructions: ['Mix ragi flour, sugar, and ghee to form a dough.', 'Roll out into thin sheets and cut into desired shapes.', 'Place on a baking tray and bake until golden brown.', 'Let it cool and serve.'],
    ingredients: ['Ragi flour', 'Sugar', 'Ghee'],
    timer: '30 minutes',
    videoId:'-aoTly-987U'
  },
  {
    name: 'Cheesecake',
    image: 'cheesecake.jpg',
    instructions: ['Crush biscuits and mix with melted butter.', 'Press into a springform pan to form the base.', 'Beat cream cheese, sugar, and vanilla essence until smooth.', 'Pour over the biscuit base and chill until set.', 'Serve chilled with fruit compote.'],
    ingredients: ['Biscuits', 'Butter', 'Cream cheese', 'Sugar', 'Vanilla essence', 'Fruit compote'],
    timer: '2 hours',
    videoId:'fZ13nRpZIAU'
  }]
};
function renderRecipes(recipes) {
  recipesContainer.innerHTML = '';
  recipes.forEach(recipe => {
      const recipeHTML = `
          <div class="recipe">
              <img src="${recipe.image}" alt="${recipe.name}">
              <h2>${recipe.name}</h2>
              <h3>Instructions</h3>
              <ol>
              ${recipe.instructions.map(instructions=>`<li>${instructions}</li>`).join('')}</ol>
              <h3>Ingredients</h3>
              <ul>
                  ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
              </ul>
              <h3>Timer</h3>
              <p class="timer">Timer: ${recipe.timer}</p>
              ${recipe.videoId ? embedYouTubeVideo(recipe.videoId) : ''}
          </div>
      `;
      recipesContainer.innerHTML += recipeHTML;
  });
}
renderRecipes(recipes);



