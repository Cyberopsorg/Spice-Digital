// Gujarati Digital Menu Data
const menuData = [
  {
    id: 1,
    name: 'Dhokla',
    description: 'Steamed, spongy savory cake made from fermented rice and chickpea batter, served with green chutney.',
    price: 80,
    category: 'starters',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Khaman_Dhokla.jpg'
  },
  {
    id: 2,
    name: 'Khandvi',
    description: 'Soft, rolled, and spiced gram flour snack garnished with coconut and coriander.',
    price: 90,
    category: 'starters',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Khandvi_%28Gujarati_snack%29.jpg'
  },
  {
    id: 3,
    name: 'Fafda & Jalebi',
    description: 'Crispy chickpea flour strips served with sweet, syrupy jalebi and fried chilies.',
    price: 120,
    category: 'starters',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Fafda_Jalebi.jpg'
  },
  {
    id: 4,
    name: 'Undhiyu',
    description: 'Mixed winter vegetables and fenugreek dumplings slow-cooked with aromatic spices.',
    price: 220,
    category: 'mains',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Undhiyu.JPG'
  },
  {
    id: 5,
    name: 'Gujarati Kadhi',
    description: 'Yogurt-based curry with gram flour and mild spices, served with steamed rice.',
    price: 110,
    category: 'mains',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Kadhi_with_rice.jpg'
  },
  {
    id: 6,
    name: 'Sev Tameta Nu Shaak',
    description: 'Tangy tomato curry topped with crispy sev (gram flour noodles).',
    price: 140,
    category: 'mains',
    image: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Sev_Tameta_Nu_Shaak_Gujarati_Recipe-1.jpg'
  },
  {
    id: 7,
    name: 'Handvo',
    description: 'Savory baked cake made with rice, lentils, and vegetables, topped with sesame seeds.',
    price: 130,
    category: 'mains',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Handvo.jpg'
  },
  {
    id: 8,
    name: 'Shrikhand',
    description: 'Sweetened strained yogurt flavored with saffron, cardamom, and nuts.',
    price: 110,
    category: 'sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Shrikhand.jpg'
  },
  {
    id: 9,
    name: 'Basundi',
    description: 'Rich, creamy dessert made by reducing milk, flavored with cardamom and saffron.',
    price: 100,
    category: 'sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Basundi.jpg'
  },
  {
    id: 10,
    name: 'Chaas',
    description: 'Refreshing buttermilk drink with roasted cumin and coriander.',
    price: 40,
    category: 'beverages',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Chaas.jpg'
  },
  {
    id: 11,
    name: 'Masala Chai',
    description: 'Traditional Indian spiced tea brewed with milk and aromatic spices.',
    price: 30,
    category: 'beverages',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Masala_Chai.jpg'
  },
  {
    id: 12,
    name: 'Gujarati Breakfast Combo',
    description: 'Fafda, Methi Gota or Batata Vada or Khaman or Dal Vada served with curry & fried mirch, jalebi, tea or coffee, banana or one fruit.',
    price: 65,
    category: 'breakfast',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Fafda_Jalebi.jpg'
  },
  {
    id: 13,
    name: 'Poha & Thepla Combo',
    description: 'Batata Poha, Thepla (served with curd & achar), tea or coffee, banana or one fruit.',
    price: 65,
    category: 'breakfast',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Poha%2C_Thepla%2C_Curd.jpg'
  },
  {
    id: 14,
    name: 'Pav Bhaji Breakfast',
    description: 'Pav Bhaji, jalebi, banana or one fruit, tea or coffee.',
    price: 65,
    category: 'breakfast',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Pav_Bhaji.jpg'
  },
  {
    id: 15,
    name: 'South/North Indian Breakfast',
    description: 'Poorie-Bhaji or Stuffed Paratha with butter (served with curd & achar), tea or coffee, banana or one fruit.',
    price: 65,
    category: 'breakfast',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Poori_Bhaji.jpg'
  },
  {
    id: 16,
    name: 'Masala Dosa/Idli Combo',
    description: 'Masala Dosa (Masala or Plain) or Uttappam, Idli served with sambhar and 2 chutneys, banana or one fruit, tea or coffee.',
    price: 65,
    category: 'breakfast',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Masala_Dosa_Idli.jpg'
  },
  {
    id: 17,
    name: 'Continental Breakfast',
    description: 'Choice of juices, toasts with butter & preserves, vegetable cutlets, tomato ketchup, pot of tea or coffee, and fresh fruit.',
    price: 65,
    category: 'breakfast',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Continental_breakfast.jpg'
  },
  {
    id: 18,
    name: 'Cornflakes & Potato Wedge Breakfast',
    description: 'Choice of juices, cornflakes with hot or cold milk, potato wedge with tomato ketchup, pot of tea or coffee, and fresh fruit.',
    price: 65,
    category: 'breakfast',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Cornflakes_breakfast.jpg'
  },
  {
    id: 19,
    name: 'Regular Gujarati Thali (Lunch)',
    description: 'Rice, Gujarati dal, kathod, two vegetables (dry & gravy), chapati or puri or thepla, farsan, papad, salad, achar, chhass.',
    price: 120,
    category: 'thali',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Gujarati_Thali.jpg'
  },
  {
    id: 20,
    name: 'Special Gujarati Thali (Lunch)',
    description: 'Rice, Gujarati dal, kathod, two vegetables (dry & gravy), chapati or puri or thepla, two farsan, one dessert, chhass, papad, salad, achar, chutney.',
    price: 155,
    category: 'thali',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Gujarati_Thali.jpg'
  },
  {
    id: 21,
    name: 'Mini Meal (Lunch)',
    description: 'Bhature (2pcs) with chhole, achar & salad OR vegetable pulao with curd/raita, achar & salad.',
    price: 75,
    category: 'thali',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Chole_Bhature.jpg'
  },
  {
    id: 22,
    name: 'Regular Gujarati Thali (Dinner)',
    description: 'Kadhi, khichdi, bhakhari or thepla or puri or chapati, two vegetables (dry & gravy), farsan, papad, salad, achar, chhass.',
    price: 120,
    category: 'thali',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Gujarati_Thali.jpg'
  },
  {
    id: 23,
    name: 'Special Gujarati Thali (Dinner)',
    description: 'Kadhi, khichdi, bhakhari or thepla or puri or chapati, two vegetables (dry & gravy), two farsan, one dessert, chhass, papad, chutney, salad, achar.',
    price: 155,
    category: 'thali',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Gujarati_Thali.jpg'
  },
  {
    id: 24,
    name: 'Mini Meal (Dinner)',
    description: 'Pav (2pcs) bhaji with butter, green chutney & salad OR medu vada (2pcs) with sambhar, coconut chutney & tomato chutney.',
    price: 75,
    category: 'thali',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Pav_Bhaji.jpg'
  },
  {
    id: 25,
    name: 'Tea (Readymade)',
    description: 'Classic Indian tea, ready to serve.',
    price: 10,
    category: 'beverages',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Masala_Chai.jpg'
  },
  {
    id: 26,
    name: 'Service Tea',
    description: 'Freshly brewed tea served at your table.',
    price: 12,
    category: 'beverages',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Masala_Chai.jpg'
  },
  {
    id: 27,
    name: 'Coffee',
    description: 'Hot, aromatic Indian coffee.',
    price: 17,
    category: 'beverages',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_south_indian_filter_coffee.jpg'
  },
  {
    id: 28,
    name: 'Milk (200ml)',
    description: 'Fresh milk, served hot or cold.',
    price: 15,
    category: 'beverages',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Glass_of_milk_on_table.jpg'
  },
  {
    id: 29,
    name: 'Fafda (150gm) with Fried Mirch & Curry',
    description: 'Crispy fafda served with fried green chilies and curry.',
    price: 30,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Fafda_Jalebi.jpg'
  },
  {
    id: 30,
    name: 'Jalebi (100gm)',
    description: 'Sweet, syrupy, spiral-shaped Indian dessert.',
    price: 30,
    category: 'sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Jalebi.jpg'
  },
  {
    id: 31,
    name: 'Batata Poha (200gm) with Sev',
    description: 'Flattened rice cooked with potatoes, spices, and topped with sev.',
    price: 30,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Poha%2C_Thepla%2C_Curd.jpg'
  },
  {
    id: 32,
    name: 'Batata Vada (2pcs) with Fried Mirch & Chutney',
    description: 'Spiced potato balls, battered and fried, served with fried chilies and chutney.',
    price: 30,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Batata_Vada.jpg'
  },
  {
    id: 33,
    name: 'Methi Gota (6pcs) with Fried Mirch & Chutney',
    description: 'Fenugreek and gram flour fritters, served with fried chilies and chutney.',
    price: 30,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Methi_Gota.jpg'
  },
  {
    id: 34,
    name: 'Khaman (200gm) with Chutney',
    description: 'Soft, fluffy, yellow dhokla made from gram flour, served with chutney.',
    price: 40,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Khaman_Dhokla.jpg'
  },
  {
    id: 35,
    name: 'Vegetable/Dudhi na Muthiya (6pcs) with Chutney',
    description: 'Steamed or fried dumplings made from bottle gourd and spices, served with chutney.',
    price: 25,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Muthiya.jpg'
  },
  {
    id: 36,
    name: 'Dal Vada (6pcs) with Fried Mirch & Onion',
    description: 'Crispy lentil fritters served with fried chilies and onion.',
    price: 25,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Dal_Vada.jpg'
  },
  {
    id: 37,
    name: 'Thepla (4pcs) with Curd & Achar',
    description: 'Spiced flatbreads made from wheat and fenugreek, served with curd and pickle.',
    price: 25,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Thepla.jpg'
  },
  {
    id: 38,
    name: 'Khandvi (200gm)',
    description: 'Soft, rolled, and spiced gram flour snack garnished with coconut and coriander.',
    price: 40,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Khandvi_%28Gujarati_snack%29.jpg'
  },
  {
    id: 39,
    name: 'White Dhokla (200gm) with Chutney',
    description: 'Steamed, spongy white dhokla made from rice and urad dal, served with chutney.',
    price: 35,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/White_Dhokla.jpg'
  },
  {
    id: 40,
    name: 'Masala Dosa with Sambhar & Chutney',
    description: 'Crispy rice crepe filled with spiced potatoes, served with sambhar and chutney.',
    price: 50,
    category: 'south-indian',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Masala_Dosa_Idli.jpg'
  },
  {
    id: 41,
    name: 'Plain Dosa with Sambhar & Chutney',
    description: 'Crispy rice crepe served with sambhar and chutney.',
    price: 40,
    category: 'south-indian',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Masala_Dosa_Idli.jpg'
  },
  {
    id: 42,
    name: 'Idli (2pcs) with Sambhar & Chutney',
    description: 'Steamed rice cakes served with sambhar and chutney.',
    price: 30,
    category: 'south-indian',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Masala_Dosa_Idli.jpg'
  },
  {
    id: 43,
    name: 'Vegetable Cutlet (2pcs) with Chutney',
    description: 'Crispy vegetable cutlets served with chutney.',
    price: 35,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Vegetable_Cutlet.jpg'
  },
  {
    id: 44,
    name: 'Samosa Aloo/Vatana (2pcs) with Chutney',
    description: 'Crispy pastry filled with spiced potatoes or peas, served with chutney.',
    price: 20,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Samosa.jpg'
  },
  {
    id: 45,
    name: 'Moong Dal Kachori (2pcs) with Chutney',
    description: 'Deep-fried pastry stuffed with spiced moong dal, served with chutney.',
    price: 25,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Kachori.jpg'
  },
  {
    id: 46,
    name: 'Toast Butter (2pcs)',
    description: 'Toasted bread with butter.',
    price: 15,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Toast_with_butter.jpg'
  },
  {
    id: 47,
    name: 'Mixed Vegetable Bhajia (150gm) with Chutney',
    description: 'Assorted vegetable fritters served with chutney.',
    price: 35,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Bhajiya.jpg'
  },
  {
    id: 48,
    name: 'Paneer Bhajia (150gm) with Chutney',
    description: 'Paneer fritters served with chutney.',
    price: 45,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Paneer_Bhajiya.jpg'
  },
  {
    id: 49,
    name: 'Chhass (200ml)',
    description: 'Refreshing buttermilk drink with roasted cumin and coriander.',
    price: 10,
    category: 'beverages',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Chaas.jpg'
  },
  {
    id: 50,
    name: 'Sweet Curd Lassi (200ml)',
    description: 'Sweetened yogurt drink, served chilled.',
    price: 20,
    category: 'beverages',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Lassi.jpg'
  },
  {
    id: 51,
    name: 'Vegetable Sandwich (2pcs)',
    description: 'Fresh vegetable sandwich, served with chutney.',
    price: 30,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Vegetable_Sandwich.jpg'
  },
  {
    id: 52,
    name: 'Sweet/Salted Lime Water',
    description: 'Refreshing sweet or salted lime water.',
    price: 15,
    category: 'beverages',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Lime_Water.jpg'
  },
  {
    id: 53,
    name: 'Stuffed Paratha (2pcs) with Curd & Pickle',
    description: 'Whole wheat flatbread stuffed with spiced filling, served with curd and pickle.',
    price: 40,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Stuffed_Paratha.jpg'
  },
  {
    id: 54,
    name: 'Puri (4pcs) with Aloo Bhaji & Achar',
    description: 'Deep-fried bread served with potato curry and pickle.',
    price: 40,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Poori_Bhaji.jpg'
  },
  {
    id: 55,
    name: 'Mohan Thal (100gm)',
    description: 'Traditional Gujarati sweet made from gram flour, ghee, and sugar.',
    price: 35,
    category: 'sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Mohanthal.jpg'
  },
  {
    id: 56,
    name: 'Churma Ladoo (100gm)',
    description: 'Sweet balls made from wheat flour, ghee, and jaggery.',
    price: 40,
    category: 'sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Churma_Ladoo.jpg'
  },
  {
    id: 57,
    name: 'Deluxe Party Menu',
    description: 'Welcome drink (any two), two snacks, soup, farsan, salads, Gujarati dal or kadhi, kathod, dry & gravy vegetables, rice/khichdi/pulao, chapati/thepla/bhakhari/paratha/puri, dessert, mineral water, mouth freshener, toothpick.',
    price: 500,
    category: 'party',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Gujarati_Thali.jpg'
  },
  {
    id: 58,
    name: 'Super Deluxe Party Menu',
    description: 'Welcome drink (any four), four snacks, two soups, two farsan, salads, Gujarati dal or kadhi, kathod, dry & gravy vegetables, paneer dish, curd dish, rice/khichdi/pulao, chapati/thepla/bhakhari/paratha/puri, two desserts, fruit platter, mineral water, tea-coffee, mouth freshener, pan, toothpick.',
    price: 800,
    category: 'party',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Gujarati_Thali.jpg'
  },
  {
    id: 59,
    name: 'Mineral Water (200ml)',
    description: 'Packaged mineral water bottle.',
    price: null,
    category: 'beverages',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Bottle_of_water.jpg'
  },
  {
    id: 60,
    name: 'Branded Packaged Food/Beverages',
    description: 'Packaged food, beverages, sweet dahi, jam, butter cubes, namkeen, biscuits, etc. (as per MRP).',
    price: null,
    category: 'packaged',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Indian_snacks_packaged.jpg'
  },
  {
    id: 61,
    name: 'Aam Panna',
    description: 'Refreshing raw mango drink, sweet and tangy, served chilled.',
    price: 40,
    category: 'beverages',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Aam_Panna.jpg'
  },
  {
    id: 62,
    name: 'Jaljeera',
    description: 'Spiced cumin and mint drink, served cold as a welcome drink.',
    price: 30,
    category: 'beverages',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Jaljeera.jpg'
  },
  {
    id: 63,
    name: 'Green Salad',
    description: 'Freshly cut seasonal vegetables, served as a salad.',
    price: 30,
    category: 'salads',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Indian_Salad.jpg'
  },
  {
    id: 64,
    name: 'Cabbage Sambharo',
    description: 'Lightly stir-fried cabbage with mustard seeds and green chilies.',
    price: 25,
    category: 'salads',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Cabbage_Sambharo.jpg'
  },
  {
    id: 65,
    name: 'Bharwan Mirch',
    description: 'Stuffed green chilies, mildly spiced, served as a side.',
    price: 25,
    category: 'salads',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Bharwan_Mirch.jpg'
  },
  {
    id: 66,
    name: 'Gud (Jaggery)',
    description: 'Traditional Indian jaggery, served as a palate cleanser.',
    price: 10,
    category: 'sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Jaggery.jpg'
  },
  {
    id: 67,
    name: 'Papad',
    description: 'Crispy lentil wafer, roasted or fried.',
    price: 10,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Papad.jpg'
  },
  {
    id: 68,
    name: 'Pickle (Achar)',
    description: 'Spicy Indian pickle, made from seasonal vegetables or fruits.',
    price: 10,
    category: 'sides',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Indian_Pickle.jpg'
  },
  {
    id: 69,
    name: 'Chutney',
    description: 'Freshly ground chutney, typically made from coriander, mint, or coconut.',
    price: 10,
    category: 'sides',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Green_Chutney.jpg'
  },
  {
    id: 70,
    name: 'Sprouted Salad',
    description: 'Nutritious salad made from sprouted beans and pulses.',
    price: 30,
    category: 'salads',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sprouted_Salad.jpg'
  },
  {
    id: 71,
    name: 'Onion Salad',
    description: 'Sliced onions, lemon, and spices, served as a salad.',
    price: 10,
    category: 'salads',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Onion_Salad.jpg'
  },
  {
    id: 72,
    name: 'Seasonal Fruit Platter',
    description: 'Assorted fresh seasonal fruits, beautifully presented.',
    price: 60,
    category: 'sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fruit_Platter.jpg'
  },
  {
    id: 73,
    name: 'Mouth Freshener',
    description: 'Traditional Indian mouth freshener, served after meals.',
    price: 10,
    category: 'sides',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Mukhwas.jpg'
  },
  {
    id: 74,
    name: 'Sagar Ratna Pan',
    description: 'Specialty sweet pan, served as a digestive after meals.',
    price: 20,
    category: 'sides',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Meetha_Paan.jpg'
  },
  {
    id: 75,
    name: 'Vegetable Soup',
    description: 'Classic mixed vegetable soup, lightly spiced and served hot.',
    price: 40,
    category: 'soups',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Vegetable_Soup.jpg'
  },
  {
    id: 76,
    name: 'Tomato Soup',
    description: 'Creamy tomato soup, garnished with croutons.',
    price: 40,
    category: 'soups',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Tomato_Soup.jpg'
  },
  {
    id: 77,
    name: 'Sweetcorn Soup',
    description: 'Mildly spiced sweetcorn soup, a party favorite.',
    price: 40,
    category: 'soups',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sweetcorn_Soup.jpg'
  },
  {
    id: 78,
    name: 'Paneer Tikka',
    description: 'Grilled cottage cheese cubes marinated in spices, served with chutney.',
    price: 90,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Paneer_Tikka.jpg'
  },
  {
    id: 79,
    name: 'Mushroom Tikka',
    description: 'Grilled mushrooms marinated in Indian spices.',
    price: 90,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Mushroom_Tikka.jpg'
  },
  {
    id: 80,
    name: 'Stuffed Mushroom',
    description: 'Mushrooms stuffed with spiced filling, baked or grilled.',
    price: 90,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Stuffed_Mushroom.jpg'
  },
  {
    id: 81,
    name: 'Moong Dal Rolls',
    description: 'Crispy rolls stuffed with spiced moong dal mixture.',
    price: 60,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Moong_Dal_Rolls.jpg'
  },
  {
    id: 82,
    name: 'Dudhi na Muthiya',
    description: 'Steamed or fried dumplings made from bottle gourd and spices.',
    price: 40,
    category: 'snacks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Muthiya.jpg'
  },
  {
    id: 83,
    name: 'Kadhai Paneer',
    description: 'Paneer cubes cooked in a spicy tomato and capsicum gravy.',
    price: 120,
    category: 'mains',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Kadhai_Paneer.jpg'
  },
  {
    id: 84,
    name: 'Dahi Bhalla',
    description: 'Soft lentil dumplings soaked in yogurt, topped with chutneys and spices.',
    price: 60,
    category: 'sides',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Dahi_Bhalla.jpg'
  },
  {
    id: 85,
    name: 'Jeera Rice',
    description: 'Basmati rice tempered with cumin seeds.',
    price: 60,
    category: 'mains',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Jeera_Rice.jpg'
  },
  {
    id: 86,
    name: 'Gujarati Khichdi',
    description: 'Comforting rice and lentil dish, mildly spiced.',
    price: 60,
    category: 'mains',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Khichdi.jpg'
  },
  {
    id: 87,
    name: 'Aam Ras',
    description: 'Sweet mango pulp, served chilled as a dessert.',
    price: 60,
    category: 'sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Aam_Ras.jpg'
  },
  {
    id: 88,
    name: 'Dudh Pak',
    description: 'Rice pudding made with milk, sugar, and cardamom.',
    price: 60,
    category: 'sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Doodhpak.jpg'
  },
  {
    id: 89,
    name: 'Moong Dal Sheera',
    description: 'Rich dessert made from moong dal, ghee, and sugar.',
    price: 60,
    category: 'sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Moong_Dal_Sheera.jpg'
  },
  {
    id: 90,
    name: 'Suji Sheera',
    description: 'Semolina pudding flavored with cardamom and ghee.',
    price: 60,
    category: 'sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Suji_Sheera.jpg'
  },
  {
    id: 91,
    name: 'Gajar Halwa',
    description: 'Carrot pudding cooked with milk, sugar, and ghee.',
    price: 60,
    category: 'sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Gajar_Halwa.jpg'
  },
  {
    id: 92,
    name: 'Dudhi Halwa',
    description: 'Bottle gourd pudding with milk and sugar.',
    price: 60,
    category: 'sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Dudhi_Halwa.jpg'
  },
  {
    id: 93,
    name: 'Gulab Jamun',
    description: 'Deep-fried milk balls soaked in sugar syrup.',
    price: 60,
    category: 'sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Gulab_Jamun.jpg'
  },
  {
    id: 94,
    name: 'Rasmalai',
    description: 'Soft paneer balls soaked in sweetened milk.',
    price: 60,
    category: 'sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Rasmalai.jpg'
  },
  {
    id: 95,
    name: 'Kulfi',
    description: 'Traditional Indian ice cream, dense and creamy.',
    price: 60,
    category: 'sweets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Kulfi.jpg'
  }
];
// Helper functions for menu functionality
function getMenuItemById(id) {
  return menuData.find(item => item.id === id) || null;
}
function searchMenuItems(query) {
  const results = [];
  const searchTerms = query.toLowerCase().split(' ');
  for (const item of menuData) {
    const searchableText = [item.name, item.description].join(' ').toLowerCase();
    const matches = searchTerms.every(term => searchableText.includes(term));
    if (matches) results.push(item);
  }
  return results;
}
function filterMenuItems(category, dietary = [], spiceLevel = null) {
  let items = category === 'all' ? menuData : menuData.filter(item => item.category === category);
  return items;
}
function getSpiceLevelText(level) {
  const spiceLevels = {0: 'Sweet',1: '🌶️ Mild',2: '🌶️🌶️ Medium',3: '🌶️🌶️🌶️ Hot',4: '🌶️🌶️🌶️🌶️ Very Hot'};
  return spiceLevels[level] || 'Unknown';
}
function formatPrice(price) {
  if (price === null || price === undefined) return 'MRP';
  return `₹${price}`;
}
// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    menuData,
    getMenuItemById,
    searchMenuItems,
    filterMenuItems,
    getSpiceLevelText,
    formatPrice
  };
}