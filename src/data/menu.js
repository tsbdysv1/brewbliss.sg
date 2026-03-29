import { formatCurrencyVnd } from '../utils/commerce'

const imageLibrary = {
  plainCroissant: 'https://source.unsplash.com/1200x900/?plain-croissant,pastry',
  lavaCroissant: 'https://source.unsplash.com/1200x900/?croissant,filled-pastry',
  painAuChocolat: 'https://source.unsplash.com/1200x900/?pain-au-chocolat,pastry',
  cinnamonRoll: 'https://source.unsplash.com/1200x900/?cinnamon-roll,pastry',
  espresso: 'https://source.unsplash.com/1200x900/?espresso,coffee',
  americano: 'https://source.unsplash.com/1200x900/?americano,coffee',
  latte: 'https://source.unsplash.com/1200x900/?latte,coffee',
  cappuccino: 'https://source.unsplash.com/1200x900/?cappuccino,coffee',
  mocha: 'https://source.unsplash.com/1200x900/?mocha,coffee',
  orangeEspressoTonic: 'https://source.unsplash.com/1200x900/?espresso-tonic,orange-coffee',
  saltedCaramel: 'https://source.unsplash.com/1200x900/?caramel-latte,coffee',
  creamyBliss: 'https://source.unsplash.com/1200x900/?creamy-coffee,latte',
  coldBrew: 'https://source.unsplash.com/1200x900/?cold-brew,coffee',
  fruitColdBrew: 'https://source.unsplash.com/1200x900/?iced-fruit-coffee,cold-brew',
  handDrip: 'https://source.unsplash.com/1200x900/?pour-over,coffee',
  matcha: 'https://source.unsplash.com/1200x900/?matcha-latte',
  strawberryMatcha: 'https://source.unsplash.com/1200x900/?strawberry-matcha,drink',
  saltedCreamMatcha: 'https://source.unsplash.com/1200x900/?matcha-cream,drink',
  lemonHoneyMatcha: 'https://source.unsplash.com/1200x900/?matcha-lemon,drink',
  cocoMatcha: 'https://source.unsplash.com/1200x900/?coconut-matcha,drink',
  fruitTea: 'https://source.unsplash.com/1200x900/?fruit-tea,drink',
  peachTea: 'https://source.unsplash.com/1200x900/?peach-tea,drink',
  melonTea: 'https://source.unsplash.com/1200x900/?melon-tea,drink',
  lycheeTea: 'https://source.unsplash.com/1200x900/?lychee-tea,drink',
  strawberryTea: 'https://source.unsplash.com/1200x900/?strawberry-tea,drink',
  tamarindTea: 'https://source.unsplash.com/1200x900/?iced-tea,fruit-drink',
  vietnameseBlack: 'https://source.unsplash.com/1200x900/?black-coffee,vietnamese-coffee',
  vietnameseMilk: 'https://source.unsplash.com/1200x900/?vietnamese-iced-coffee',
  bacXiu: 'https://source.unsplash.com/1200x900/?milk-coffee,iced-coffee',
  coconutCoffee: 'https://source.unsplash.com/1200x900/?coconut-coffee',
  saltedCoffee: 'https://source.unsplash.com/1200x900/?salted-coffee,coffee',
  chocoLatte: 'https://source.unsplash.com/1200x900/?hot-chocolate,latte',
  hojichaLatte: 'https://source.unsplash.com/1200x900/?hojicha-latte,drink',
  pineappleJuice: 'https://source.unsplash.com/1200x900/?pineapple-juice',
  orangeJuice: 'https://source.unsplash.com/1200x900/?orange-juice',
  carrotJuice: 'https://source.unsplash.com/1200x900/?carrot-juice',
  mixedJuice: 'https://source.unsplash.com/1200x900/?mixed-fruit-juice',
}

const INGREDIENT_LIBRARY = {
  espresso: {
    vi: ['Espresso shot', 'Nước lọc'],
    en: ['Espresso shot', 'Filtered water'],
  },
  americano: {
    vi: ['Espresso shot', 'Nước nóng hoặc nước lọc'],
    en: ['Espresso shot', 'Hot water or filtered water'],
  },
  latte: {
    vi: ['Espresso shot', 'Sữa tươi', 'Lớp foam sữa mỏng'],
    en: ['Espresso shot', 'Fresh milk', 'Light milk foam'],
  },
  cappuccino: {
    vi: ['Espresso shot', 'Sữa tươi', 'Lớp foam sữa dày hơn'],
    en: ['Espresso shot', 'Fresh milk', 'Thicker milk foam'],
  },
  mocha: {
    vi: ['Espresso shot', 'Sữa tươi', 'Sốt chocolate hoặc cacao'],
    en: ['Espresso shot', 'Fresh milk', 'Chocolate sauce or cocoa'],
  },
  saltedCaramel: {
    vi: ['Espresso shot', 'Sữa tươi', 'Caramel', 'Muối nhẹ hoặc salted cream'],
    en: ['Espresso shot', 'Fresh milk', 'Caramel', 'Light salt or salted cream'],
  },
  creamyBliss: {
    vi: ['Espresso hoặc nền cà phê sữa', 'Sữa tươi', 'Cream nhẹ'],
    en: ['Espresso or milk-coffee base', 'Fresh milk', 'Light cream'],
  },
  orangeEspressoTonic: {
    vi: ['Espresso shot', 'Cam hoặc syrup cam', 'Tonic', 'Đá'],
    en: ['Espresso shot', 'Orange or orange syrup', 'Tonic water', 'Ice'],
  },
  coldBrew: {
    vi: ['Cold brew coffee', 'Đá'],
    en: ['Cold brew coffee', 'Ice'],
  },
  fruitColdBrew: {
    vi: ['Cold brew coffee', 'Trái cây hoặc syrup trái cây', 'Đá'],
    en: ['Cold brew coffee', 'Fruit or fruit syrup', 'Ice'],
  },
  matcha: {
    vi: ['Bột matcha', 'Sữa tươi', 'Đá hoặc nóng tuỳ phiên bản'],
    en: ['Matcha powder', 'Fresh milk', 'Ice or hot water depending on the version'],
  },
  fruitMatcha: {
    vi: ['Bột matcha', 'Sữa hoặc nền nhẹ', 'Trái cây / chanh mật ong / dâu / dừa'],
    en: ['Matcha powder', 'Milk or a light base', 'Fruit / lemon honey / strawberry / coconut'],
  },
  fruitTea: {
    vi: ['Trà nền', 'Trái cây hoặc syrup trái cây', 'Đá'],
    en: ['Tea base', 'Fruit or fruit syrup', 'Ice'],
  },
  vietnameseBlack: {
    vi: ['Cà phê Việt', 'Nước đá hoặc nóng tuỳ phiên bản'],
    en: ['Vietnamese coffee', 'Ice or hot water depending on the version'],
  },
  vietnameseMilk: {
    vi: ['Cà phê Việt', 'Sữa đặc hoặc nền sữa', 'Đá hoặc nóng tuỳ phiên bản'],
    en: ['Vietnamese coffee', 'Condensed milk or milk base', 'Ice or hot depending on the version'],
  },
  bacXiu: {
    vi: ['Cà phê Việt nhẹ', 'Sữa nhiều hơn', 'Đá hoặc nóng tuỳ phiên bản'],
    en: ['Light Vietnamese coffee', 'More milk', 'Ice or hot depending on the version'],
  },
  coconutCoffee: {
    vi: ['Cà phê Việt hoặc espresso', 'Nền dừa', 'Sữa hoặc cream nhẹ', 'Đá'],
    en: ['Vietnamese coffee or espresso', 'Coconut base', 'Milk or light cream', 'Ice'],
  },
  saltedCoffee: {
    vi: ['Cà phê Việt', 'Cream sữa mặn nhẹ'],
    en: ['Vietnamese coffee', 'Light salted milk cream'],
  },
  hojicha: {
    vi: ['Bột hojicha hoặc trà hojicha', 'Sữa tươi'],
    en: ['Hojicha powder or hojicha tea', 'Fresh milk'],
  },
  choco: {
    vi: ['Chocolate hoặc cacao', 'Sữa tươi'],
    en: ['Chocolate or cocoa', 'Fresh milk'],
  },
  juice: {
    vi: ['Trái cây tươi hoặc nước ép trái cây', 'Đá'],
    en: ['Fresh fruit or fruit juice', 'Ice'],
  },
  plainPastry: {
    vi: ['Bột mì', 'Bơ', 'Sữa', 'Đường'],
    en: ['Flour', 'Butter', 'Milk', 'Sugar'],
  },
  chocolatePastry: {
    vi: ['Bột mì', 'Bơ', 'Chocolate', 'Sữa', 'Đường'],
    en: ['Flour', 'Butter', 'Chocolate', 'Milk', 'Sugar'],
  },
  cinnamonPastry: {
    vi: ['Bột mì', 'Bơ', 'Quế', 'Đường', 'Sữa'],
    en: ['Flour', 'Butter', 'Cinnamon', 'Sugar', 'Milk'],
  },
  handDrip: {
    vi: ['Cà phê hạt rang', 'Nước lọc'],
    en: ['Roasted coffee beans', 'Filtered water'],
  },
}

function createDetails({ vi, en, ingredientsKey }) {
  return {
    details: {
      vi,
      en,
    },
    ingredients: INGREDIENT_LIBRARY[ingredientsKey],
  }
}

function withDetails(item, detailConfig) {
  return {
    ...item,
    ...createDetails(detailConfig),
  }
}

export const menuCategories = [
  {
    slug: 'featured',
    name: 'Món nổi bật',
    description: 'Những món dễ đại diện cho vibe BrewBliss ngay từ lần ghé đầu tiên.',
    items: [
      withDetails(
        {
          slug: 'salted-caramel',
          name: 'Salted Caramel',
          priceValue: 75000,
          category: 'Espresso Bar',
          image: imageLibrary.saltedCaramel,
          description: 'Món cà phê sữa ngọt dịu, hợp với khách thích vị êm và dễ uống.',
          badges: ['Signature', 'Best seller vibe'],
        },
        {
          ingredientsKey: 'saltedCaramel',
          vi: 'Salted Caramel là kiểu đồ uống mềm và dễ tiếp cận, nơi vị espresso được làm dịu bằng sữa và caramel, sau đó kết lại bằng một lớp mặn nhẹ tạo cảm giác cân bằng hơn so với latte ngọt thông thường.',
          en: 'Salted Caramel is a soft and approachable drink where espresso is rounded out by milk and caramel, then finished with a light salty note for a more balanced profile than a standard sweet latte.',
        },
      ),
      withDetails(
        {
          slug: 'cold-brew-mo',
          name: 'Cold Brew Mơ',
          priceValue: 65000,
          category: 'Summer Specials',
          image: imageLibrary.fruitColdBrew,
          description: 'Cold brew trái cây có cảm giác mát, nhẹ và rất hợp những ngày nóng ở Sài Gòn.',
          badges: ['Seasonal', 'Refreshing'],
        },
        {
          ingredientsKey: 'fruitColdBrew',
          vi: 'Cold Brew Mơ phù hợp với khí hậu nóng vì giữ được nền cà phê mượt nhưng thêm một lớp trái cây chua ngọt sáng hơn. Đây là kiểu món dễ nhớ, dễ chụp và hợp với khách thích cà phê lạnh có twist nhẹ.',
          en: 'Cold Brew Mơ works well in warm weather because it keeps a smooth coffee base while adding a brighter sweet-tart fruit layer. It is memorable, visually appealing, and easy to enjoy for guests who like a light twist on iced coffee.',
        },
      ),
      withDetails(
        {
          slug: 'lemon-honey-matcha',
          name: 'Lemon Honey Matcha',
          priceValue: 65000,
          category: 'Matcha',
          image: imageLibrary.lemonHoneyMatcha,
          description: 'Matcha sáng vị, có thêm chanh mật ong giúp tổng thể tươi và dễ nhớ.',
          badges: ['Fresh', 'Recommended'],
        },
        {
          ingredientsKey: 'fruitMatcha',
          vi: 'Lemon Honey Matcha mang cảm giác tươi, sáng và linh hoạt hơn matcha latte cổ điển. Chanh và mật ong giúp tổng thể nhẹ hơn, hợp với khách muốn matcha nhưng không thích profile quá nặng sữa.',
          en: 'Lemon Honey Matcha feels brighter and lighter than a classic matcha latte. The lemon and honey lift the drink, making it a good choice for guests who want matcha without an overly milky profile.',
        },
      ),
      withDetails(
        {
          slug: 'pain-au-chocolat',
          name: 'Pain Au Chocolat',
          priceValue: 65000,
          category: 'Pastries',
          image: imageLibrary.painAuChocolat,
          description: 'Lớp bánh bơ thơm, hợp gọi kèm cà phê hoặc trà vào buổi sáng.',
          badges: ['Pastry', 'Morning pick'],
        },
        {
          ingredientsKey: 'chocolatePastry',
          vi: 'Pain Au Chocolat là lựa chọn pastry quen thuộc nhưng luôn hiệu quả: lớp vỏ bơ nhiều tầng, phần chocolate bên trong vừa đủ để đi cùng espresso, latte hoặc trà trái cây mà không bị quá nặng.',
          en: 'Pain Au Chocolat is a familiar yet dependable pastry: buttery flaky layers with a balanced chocolate center that pairs well with espresso, latte, or fruit tea without feeling too heavy.',
        },
      ),
    ],
  },
  {
    slug: 'summer-specials',
    name: 'Summer specials',
    description: 'Các món theo mùa tạo cảm giác tươi, sáng và dễ lan truyền trên mạng xã hội.',
    items: [
      withDetails(
        {
          slug: 'apricot-cold-brew',
          name: 'Apricot Cold Brew',
          priceValue: 65000,
          category: 'Summer Specials',
          image: imageLibrary.fruitColdBrew,
        description: 'Một biến tấu cold brew trái cây cho cảm giác tươi và dễ uống giữa thời tiết nóng.',
        },
        {
          ingredientsKey: 'fruitColdBrew',
          vi: 'Apricot Cold Brew giữ nền cà phê lạnh mượt và thêm sắc trái mơ chua ngọt để tạo một profile nhẹ, sạch và rất hợp với thời tiết nóng.',
          en: 'Apricot Cold Brew keeps a smooth cold coffee base while adding sweet-tart apricot notes for a clean and refreshing profile that works well in warm weather.',
        },
      ),
      withDetails(
        {
          slug: 'jasmine-peach-tea',
          name: 'Jasmine Peach Tea',
          priceValue: 60000,
          category: 'Summer Specials',
          image: imageLibrary.peachTea,
        description: 'Trà đào nhài thanh, thơm và dễ hợp gu với nhóm khách không uống cà phê.',
        },
        {
          ingredientsKey: 'fruitTea',
          vi: 'Jasmine Peach Tea thiên về mùi hương và sự dễ uống: nền trà hoa nhài dịu kết hợp vị đào thanh, phù hợp với khách muốn một món nhẹ, thơm và dễ tiếp cận.',
          en: 'Jasmine Peach Tea leans into fragrance and drinkability, combining a delicate jasmine tea base with peach notes for a light and approachable drink.',
        },
      ),
      withDetails(
        {
          slug: 'cantaloupe-melon-tea',
          name: 'Cantaloupe Melon Tea',
          priceValue: 60000,
          category: 'Summer Specials',
          image: imageLibrary.melonTea,
        description: 'Trà dưa lưới sáng vị, nhìn bắt mắt và khá hợp để chụp hình.',
        },
        {
          ingredientsKey: 'fruitTea',
          vi: 'Cantaloupe Melon Tea có màu sắc tươi và vị trái cây mềm, hợp với khách muốn một món “fresh” và bắt mắt hơn so với trà nền truyền thống.',
          en: 'Cantaloupe Melon Tea offers a bright visual presence and a soft fruit-forward flavor, making it a refreshing option beyond a standard tea base.',
        },
      ),
      withDetails(
        {
          slug: 'lemon-honey-matcha-summer',
          name: 'Lemon Honey Matcha',
          priceValue: 65000,
          category: 'Summer Specials',
          image: imageLibrary.lemonHoneyMatcha,
        description: 'Phiên bản matcha có độ tươi và nhẹ, phù hợp thời tiết Sài Gòn.',
        },
        {
          ingredientsKey: 'fruitMatcha',
          vi: 'Phiên bản seasonal này thiên về sự tươi sáng và dễ uống, rất hợp với khách muốn matcha nhưng vẫn ưu tiên cảm giác mát và nhẹ.',
          en: 'This seasonal version focuses on brightness and drinkability, making it ideal for guests who want matcha with a lighter and more refreshing feel.',
        },
      ),
    ],
  },
  {
    slug: 'pastries',
    name: 'Pastries',
    description: 'Bánh ngọt và pastry dễ gọi kèm đồ uống.',
    items: [
      withDetails(
        {
          slug: 'plain-croissant',
          name: 'Plain Croissant',
          priceValue: 60000,
          category: 'Pastries',
          image: imageLibrary.plainCroissant,
        description: 'Croissant bơ cổ điển, phù hợp cho buổi sáng hoặc gọi kèm espresso.',
        },
        {
          ingredientsKey: 'plainPastry',
          vi: 'Plain Croissant là món pastry tối giản nhưng hiệu quả, nhấn vào lớp bơ và kết cấu nhiều tầng. Món này hợp với khách muốn bắt đầu bằng một lựa chọn gọn và dễ phối cùng cà phê.',
          en: 'Plain Croissant is a simple but dependable pastry that highlights butter and flaky layers. It works well for guests who want a clean, easy pairing with coffee.',
        },
      ),
      withDetails(
        {
          slug: 'lava-croissant',
          name: 'Lava Croissant',
          priceValue: 65000,
          category: 'Pastries',
          image: imageLibrary.lavaCroissant,
        description: 'Một lựa chọn pastry đậm đà hơn cho khách thích bánh có điểm nhấn.',
        },
        {
          ingredientsKey: 'chocolatePastry',
          vi: 'Lava Croissant thiên về cảm giác indulgent hơn plain croissant, phù hợp với khách thích bánh có phần nhân rõ hơn và cảm giác “treat” nhiều hơn.',
          en: 'Lava Croissant feels more indulgent than a plain croissant, making it a stronger treat-style choice for guests who enjoy a richer filling.',
        },
      ),
      withDetails(
        {
          slug: 'pain-au-chocolat-full',
          name: 'Pain Au Chocolat',
          priceValue: 65000,
          category: 'Pastries',
          image: imageLibrary.painAuChocolat,
        description: 'Pastry chocolate hợp với latte, cappuccino hoặc đồ uống lạnh dịu vị.',
        },
        {
          ingredientsKey: 'chocolatePastry',
          vi: 'Pain Au Chocolat có profile quen thuộc, cân bằng giữa bơ và chocolate nên rất dễ pair với nhiều loại đồ uống khác nhau trong menu BrewBliss.',
          en: 'Pain Au Chocolat has a familiar and balanced profile, combining butter and chocolate in a way that pairs naturally with many drinks on the BrewBliss menu.',
        },
      ),
      withDetails(
        {
          slug: 'cinnamon-roll',
          name: 'Cinnamon Roll',
          priceValue: 60000,
          category: 'Pastries',
          image: imageLibrary.cinnamonRoll,
        description: 'Món bánh dễ tạo cảm giác ấm áp, hợp vibe quán cafe hiện đại.',
        },
        {
          ingredientsKey: 'cinnamonPastry',
          vi: 'Cinnamon Roll cho cảm giác ấm và comfort hơn các pastry còn lại, phù hợp với khách thích mùi quế, vị ngọt dịu và trải nghiệm thiên về thư giãn.',
          en: 'Cinnamon Roll feels warmer and more comforting than the other pastries, making it ideal for guests who enjoy cinnamon aroma and a softer sweet profile.',
        },
      ),
    ],
  },
  {
    slug: 'espresso-bar',
    name: 'Espresso bar',
    description: 'Menu cà phê nền tảng và các món signature dễ đại diện cho quán.',
    items: [
      withDetails({ slug: 'espresso', name: 'Espresso', priceValue: 50000, category: 'Espresso Bar', image: imageLibrary.espresso, description: 'Ly espresso gọn, đậm và phù hợp cho khách thích vị coffee trực diện.' }, { ingredientsKey: 'espresso', vi: 'Espresso là lựa chọn ngắn, đậm và trực diện nhất trong menu. Món này phù hợp với khách đã quen vị cà phê rõ và muốn cảm nhận profile hạt nhanh, gọn và tập trung.', en: 'Espresso is the shortest and most direct coffee choice on the menu. It suits guests who enjoy a clear coffee profile and want a focused tasting experience.' }),
      withDetails({ slug: 'americano', name: 'Americano', priceValue: 55000, category: 'Espresso Bar', image: imageLibrary.americano, description: 'Americano nhẹ hơn espresso nhưng vẫn giữ được tính cà phê rõ nét.' }, { ingredientsKey: 'americano', vi: 'Americano giữ được phần lõi của espresso nhưng dễ tiếp cận hơn nhờ kết cấu loãng và nhẹ hơn. Đây là lựa chọn phù hợp cho người thích cà phê đen theo hướng clean.', en: 'Americano keeps the core character of espresso while feeling lighter and easier to drink. It is a good choice for guests who like black coffee with a cleaner profile.' }),
      withDetails({ slug: 'latte', name: 'Latte', priceValue: 65000, category: 'Espresso Bar', image: imageLibrary.latte, description: 'Latte cân bằng, dễ uống và luôn là lựa chọn an toàn cho đa số khách.' }, { ingredientsKey: 'latte', vi: 'Latte là món cân bằng và dễ uống nhất trong nhóm espresso-based drinks. Sữa làm mềm vị cà phê, tạo ra một trải nghiệm nhẹ nhàng, mượt và quen thuộc.', en: 'Latte is one of the most balanced and approachable espresso-based drinks. Milk softens the coffee, creating a smooth and familiar drinking experience.' }),
      withDetails({ slug: 'cappuccino', name: 'Cappuccino', priceValue: 65000, category: 'Espresso Bar', image: imageLibrary.cappuccino, description: 'Cappuccino cho trải nghiệm foam và espresso rõ hơn latte một chút.' }, { ingredientsKey: 'cappuccino', vi: 'Cappuccino giữ vị espresso rõ hơn latte nhờ lớp foam dày và kết cấu gọn hơn. Đây là lựa chọn phù hợp cho khách muốn sự cân bằng nhưng vẫn thích nét cà phê nổi bật hơn.', en: 'Cappuccino keeps espresso more pronounced than a latte thanks to its thicker foam and tighter structure. It suits guests who want balance with a slightly stronger coffee presence.' }),
      withDetails({ slug: 'mocha', name: 'Mocha', priceValue: 70000, category: 'Espresso Bar', image: imageLibrary.mocha, description: 'Mocha hợp với khách thích coffee nhưng vẫn muốn chút ngọt và chocolate.' }, { ingredientsKey: 'mocha', vi: 'Mocha là điểm giao giữa cà phê và chocolate, dành cho khách thích đồ uống ngọt vừa và mềm hơn các món espresso truyền thống.', en: 'Mocha sits between coffee and chocolate, making it ideal for guests who enjoy a sweeter and softer espresso-style drink.' }),
      withDetails({ slug: 'orange-espresso-tonic', name: 'Orange Espresso Tonic', priceValue: 65000, category: 'Espresso Bar', image: imageLibrary.orangeEspressoTonic, description: 'Espresso tonic với sắc cam tươi, rất hợp để trở thành món signature nhìn bắt mắt.' }, { ingredientsKey: 'orangeEspressoTonic', vi: 'Orange Espresso Tonic thiên về sự tươi, sáng và giàu độ tương phản giữa cà phê, citrus và tonic. Đây là món rất hợp với hình ảnh quán hiện đại và nhóm khách thích đồ uống “specialty-feel”.', en: 'Orange Espresso Tonic is bright, sparkling, and contrast-driven, combining coffee, citrus, and tonic into a more modern specialty-style drink.' }),
      withDetails({ slug: 'salted-caramel-full', name: 'Salted Caramel', priceValue: 75000, category: 'Espresso Bar', image: imageLibrary.saltedCaramel, description: 'Salted caramel là kiểu món dễ đại diện cho sự êm, ngọt và hiện đại của quán.' }, { ingredientsKey: 'saltedCaramel', vi: 'Salted Caramel có profile ngọt êm nhưng không quá đơn điệu nhờ điểm mặn nhẹ ở cuối. Món này thường hợp với khách mới thử quán hoặc muốn một ly dễ uống nhưng vẫn có dấu ấn.', en: 'Salted Caramel has a soft sweet profile with a gentle salty finish, making it a strong choice for first-time guests who want something approachable yet memorable.' }),
      withDetails({ slug: 'creamy-bliss', name: 'Creamy Bliss', priceValue: 65000, category: 'Espresso Bar', image: imageLibrary.creamyBliss, description: 'Một món có tên đủ gợi cảm giác mềm, mượt và dễ nhớ với khách mới.' }, { ingredientsKey: 'creamyBliss', vi: 'Creamy Bliss gợi cảm giác mềm, mượt và thư giãn. Đây là kiểu món thiên về texture và độ dễ chịu hơn là độ gắt của cà phê.', en: 'Creamy Bliss leans into softness, texture, and comfort. It is a more mellow drink built around creaminess rather than sharp coffee intensity.' }),
    ],
  },
  {
    slug: 'vietnamese-coffee',
    name: 'Vietnamese coffee',
    description: 'Nhóm món gần gũi, hợp gu Việt và dễ gọi hàng ngày.',
    items: [
      withDetails({ slug: 'cafe-den', name: 'Cafe Đen', priceValue: 50000, category: 'Vietnamese Coffee', image: imageLibrary.vietnameseBlack, description: 'Món cơ bản nhất cho khách thích vị cà phê Việt rõ và quen.' }, { ingredientsKey: 'vietnameseBlack', vi: 'Cafe Đen là lựa chọn rõ vị, mạnh và quen thuộc nhất trong nhóm cà phê Việt. Món này phù hợp với khách thích profile đậm và ít bị làm mềm bởi sữa.', en: 'Cafe Đen is the clearest and boldest choice in the Vietnamese coffee lineup. It works well for guests who prefer a stronger coffee profile without milk.' }),
      withDetails({ slug: 'cafe-sua', name: 'Cafe Sữa', priceValue: 55000, category: 'Vietnamese Coffee', image: imageLibrary.vietnameseMilk, description: 'Cafe sữa dễ bán, dễ hợp số đông và rất hợp bối cảnh quận 1.' }, { ingredientsKey: 'vietnameseMilk', vi: 'Cafe Sữa là lựa chọn rất dễ tiếp cận, vừa giữ được hương cà phê Việt vừa có độ ngọt và mềm hơn nhờ nền sữa.', en: 'Cafe Sữa is an easy crowd-pleaser that keeps the character of Vietnamese coffee while feeling softer and sweeter thanks to the milk base.' }),
      withDetails({ slug: 'bac-xiu', name: 'Bạc Xỉu', priceValue: 60000, category: 'Vietnamese Coffee', image: imageLibrary.bacXiu, description: 'Bạc xỉu thiên sữa, hợp với người thích nhẹ và ngọt hơn.' }, { ingredientsKey: 'bacXiu', vi: 'Bạc Xỉu phù hợp với khách thích hương cà phê nhẹ nhưng vẫn muốn trải nghiệm gần với đồ uống sữa ngọt và dễ uống.', en: 'Bạc Xỉu suits guests who want only a light coffee note and prefer a sweeter, milk-forward drink.' }),
      withDetails({ slug: 'cafe-dua', name: 'Cafe Dừa', priceValue: 65000, category: 'Vietnamese Coffee', image: imageLibrary.coconutCoffee, description: 'Cafe dừa vừa lạ vừa quen, dễ thành món gợi nhớ cho khách quay lại.' }, { ingredientsKey: 'coconutCoffee', vi: 'Cafe Dừa là món có tính gợi nhớ cao nhờ kết hợp cà phê với nền dừa béo nhẹ. Đây là lựa chọn hợp với khách muốn thứ gì đó “Việt nhưng fun hơn một chút”.', en: 'Cafe Dừa is memorable because it combines coffee with a light creamy coconut base. It is a great option for guests who want something recognizably Vietnamese with a playful twist.' }),
      withDetails({ slug: 'cafe-muoi', name: 'Cafe Muối', priceValue: 60000, category: 'Vietnamese Coffee', image: imageLibrary.saltedCoffee, description: 'Cafe muối tạo điểm khác biệt mà vẫn nằm trong gu quen thuộc của khách Việt.' }, { ingredientsKey: 'saltedCoffee', vi: 'Cafe Muối giữ nền cà phê Việt quen thuộc nhưng thêm lớp cream mặn nhẹ tạo chiều sâu hơn ở hậu vị. Đây là món phù hợp cho khách thích sự khác biệt nhưng vẫn gần gũi.', en: 'Cafe Muối keeps the familiar base of Vietnamese coffee but adds a lightly salted cream layer for more depth in the finish. It is ideal for guests who want something distinctive yet familiar.' }),
    ],
  },
  {
    slug: 'brew-bar',
    name: 'Brew bar',
    description: 'Cold brew và cold drip cho khách thích vị cà phê gọn, mát và có chiều sâu.',
    items: [
      withDetails({ slug: 'cold-brew', name: 'Cold Brew', priceValue: 50000, category: 'Brew Bar', image: imageLibrary.coldBrew, description: 'Cold brew nguyên bản cho vị mượt, gọn và dễ uống cả ngày.' }, { ingredientsKey: 'coldBrew', vi: 'Cold Brew nguyên bản mang cảm giác mượt, sạch và ít gắt hơn cà phê đá pha nhanh. Món này hợp với khách muốn vị cà phê lạnh rõ nhưng vẫn dễ uống lâu.', en: 'Cold Brew feels smooth, clean, and less sharp than a quickly brewed iced coffee. It works well for guests who want a clearer cold coffee profile that remains easy to sip over time.' }),
      withDetails({ slug: 'cold-brew-cam-buoi', name: 'Cold Brew Cam Bưởi', priceValue: 65000, category: 'Brew Bar', image: imageLibrary.coldBrew, description: 'Sự kết hợp trái cây giúp cold brew bớt khô và dễ hợp gu đại chúng hơn.' }, { ingredientsKey: 'fruitColdBrew', vi: 'Cam bưởi giúp nền cold brew sáng hơn, tạo cảm giác fresh và dễ tiếp cận hơn so với cold brew nguyên bản.', en: 'Orange and grapefruit notes brighten the cold brew base, making it feel fresher and more approachable than a classic cold brew.' }),
      withDetails({ slug: 'cold-brew-chanh-vang', name: 'Cold Brew Chanh Vàng', priceValue: 65000, category: 'Brew Bar', image: imageLibrary.coldBrew, description: 'Chanh vàng tạo cảm giác sáng và gọn, hợp nhóm khách thích vị clean.' }, { ingredientsKey: 'fruitColdBrew', vi: 'Chanh vàng làm profile trở nên sắc và clean hơn, phù hợp với khách thích đồ uống lạnh thiên về sự gọn gàng và tỉnh táo.', en: 'Lemon gives this drink a brighter and cleaner edge, making it a good fit for guests who enjoy crisp and refreshing cold beverages.' }),
      withDetails({ slug: 'cold-brew-mo-full', name: 'Cold Brew Mơ', priceValue: 65000, category: 'Brew Bar', image: imageLibrary.coldBrew, description: 'Cold brew mơ vừa đủ khác biệt để trở thành món đáng nhớ trong menu.' }, { ingredientsKey: 'fruitColdBrew', vi: 'Cold Brew Mơ tạo cảm giác nhẹ, chua ngọt và khác biệt vừa đủ để nổi bật nhưng vẫn dễ uống với phần lớn khách.', en: 'Cold Brew Mơ feels light, sweet-tart, and distinctive enough to stand out while still staying approachable for a wide range of guests.' }),
      withDetails({ slug: 'cold-drip', name: 'Cold Drip', priceValue: 65000, category: 'Brew Bar', image: imageLibrary.coldBrew, description: 'Cold drip tạo cảm giác craft hơn và phù hợp nhóm khách thích trải nghiệm.' }, { ingredientsKey: 'coldBrew', vi: 'Cold Drip có cảm giác thủ công và trải nghiệm hơn, phù hợp với khách thích tìm sự khác nhau giữa các phương pháp pha lạnh.', en: 'Cold Drip feels more craft-driven and experience-focused, making it suitable for guests interested in the differences between cold coffee brewing styles.' }),
    ],
  },
  {
    slug: 'hand-drip',
    name: 'Hand drip',
    description: 'Lựa chọn cho khách muốn trải nghiệm cà phê thủ công rõ nét hơn.',
    items: [
      withDetails(
        {
          slug: 'ca-phe-thu-cong',
          name: 'Cà Phê Thủ Công',
          priceValue: 75000,
          category: 'Hand Drip',
          image: imageLibrary.espresso,
          description: 'Món dành cho khách muốn đi sâu hơn vào trải nghiệm cà phê thủ công.',
        },
        {
          ingredientsKey: 'handDrip',
          vi: 'Cà Phê Thủ Công tập trung vào hương vị của hạt và cách chiết xuất, phù hợp với khách muốn trải nghiệm chậm hơn và chú ý nhiều hơn tới profile cà phê.',
          en: 'Cà Phê Thủ Công focuses on bean character and extraction, making it ideal for guests who want a slower and more intentional coffee experience.',
        },
      ),
    ],
  },
  {
    slug: 'matcha',
    name: 'Matcha',
    description: 'Nhóm matcha khá mạnh và hợp với hình ảnh trẻ, sáng, dễ chụp.',
    items: [
      withDetails({ slug: 'matcha-latte', name: 'Matcha Latte', priceValue: 70000, category: 'Matcha', image: imageLibrary.matcha, description: 'Matcha latte là lựa chọn sáng màu, hợp hình ảnh social và dễ gọi lại.' }, { ingredientsKey: 'matcha', vi: 'Matcha Latte là lựa chọn cơ bản nhưng hiệu quả trong nhóm matcha: vị trà xanh rõ, mềm hơn nhờ sữa và phù hợp với khách thích đồ uống ít cà phê.', en: 'Matcha Latte is a core matcha drink with clear tea character softened by milk, making it ideal for guests who prefer non-coffee beverages.' }),
      withDetails({ slug: 'strawberry-matcha-latte', name: 'Strawberry Matcha Latte', priceValue: 70000, category: 'Matcha', image: imageLibrary.strawberryMatcha, description: 'Strawberry matcha latte phù hợp nhóm khách trẻ và thích đồ uống có layer đẹp.' }, { ingredientsKey: 'fruitMatcha', vi: 'Strawberry Matcha Latte nổi bật ở màu sắc và layer, phù hợp với khách thích đồ uống bắt mắt, tươi và có chút playful.', en: 'Strawberry Matcha Latte stands out through color and layering, making it a playful and visually attractive option for guests.' }),
      withDetails({ slug: 'salted-cream-matcha', name: 'Salted Cream Matcha', priceValue: 70000, category: 'Matcha', image: imageLibrary.saltedCreamMatcha, description: 'Salted cream matcha tạo cảm giác hiện đại và hợp để trở thành món signature.' }, { ingredientsKey: 'fruitMatcha', vi: 'Salted Cream Matcha thêm độ dày và chiều sâu cho matcha truyền thống nhờ lớp cream mặn nhẹ ở trên, tạo cảm giác hiện đại và premium hơn.', en: 'Salted Cream Matcha adds body and depth to a classic matcha base through a lightly salted cream top, giving it a more modern and premium feel.' }),
      withDetails({ slug: 'lemon-honey-matcha-full', name: 'Lemon Honey Matcha', priceValue: 65000, category: 'Matcha', image: imageLibrary.lemonHoneyMatcha, description: 'Lemon honey matcha là kiểu món vừa tươi vừa khác biệt với matcha latte thường.' }, { ingredientsKey: 'fruitMatcha', vi: 'Lemon Honey Matcha làm profile matcha trở nên sáng và linh hoạt hơn, hợp với khách muốn một lựa chọn fresh hơn latte truyền thống.', en: 'Lemon Honey Matcha brightens the matcha profile and makes it feel more flexible and refreshing than a traditional latte version.' }),
      withDetails({ slug: 'coco-matcha', name: 'Coco Matcha', priceValue: 65000, category: 'Matcha', image: imageLibrary.cocoMatcha, description: 'Coco matcha giúp menu có thêm biến thể hợp mùa nóng và dễ nhớ.' }, { ingredientsKey: 'fruitMatcha', vi: 'Coco Matcha mang cảm giác nhiệt đới và mềm hơn, hợp với khách thích matcha nhưng muốn kết cấu dịu và vui hơn một chút.', en: 'Coco Matcha feels tropical and softer, making it a nice fit for guests who enjoy matcha but want a gentler and more playful texture.' }),
    ],
  },
  {
    slug: 'tea',
    name: 'Tea',
    description: 'Trà trái cây cho nhóm khách cần lựa chọn nhẹ hơn cà phê.',
    items: [
      withDetails({ slug: 'tra-vai', name: 'Trà Vải', priceValue: 60000, category: 'Tea', image: imageLibrary.lycheeTea, description: 'Trà vải thơm và sáng, hợp khách thích đồ uống nhẹ nhàng.' }, { ingredientsKey: 'fruitTea', vi: 'Trà Vải có hương thơm rõ và độ ngọt dễ chịu, phù hợp với khách muốn một món nhẹ, thanh và dễ tiếp cận.', en: 'Trà Vải has a fragrant and easy sweetness, making it a good light and approachable choice.' }),
      withDetails({ slug: 'tra-cam-buoi', name: 'Trà Cam Bưởi', priceValue: 60000, category: 'Tea', image: imageLibrary.fruitTea, description: 'Cam bưởi mang cảm giác fresh và dễ hợp nhiều thời điểm trong ngày.' }, { ingredientsKey: 'fruitTea', vi: 'Trà Cam Bưởi tạo cảm giác sáng và sạch hơn nhờ nhóm citrus, phù hợp với những ai thích trà trái cây thiên về sự tỉnh táo.', en: 'Trà Cam Bưởi feels brighter and cleaner thanks to its citrus profile, making it a solid choice for guests who like fruit tea with a crisp edge.' }),
      withDetails({ slug: 'tra-dau', name: 'Trà Dâu', priceValue: 65000, category: 'Tea', image: imageLibrary.strawberryTea, description: 'Trà dâu bắt mắt, hợp hình ảnh social và nhóm khách thích vị trái cây.' }, { ingredientsKey: 'fruitTea', vi: 'Trà Dâu thiên về màu sắc và sự vui mắt, phù hợp với nhóm khách trẻ hoặc khách thích đồ uống ngọt nhẹ và dễ chụp hình.', en: 'Trà Dâu leans into color and playfulness, making it well suited for younger guests or anyone who enjoys light, photogenic fruit tea.' }),
      withDetails({ slug: 'tra-me', name: 'Trà Me', priceValue: 60000, category: 'Tea', image: imageLibrary.tamarindTea, description: 'Trà me mang một chút cá tính riêng và tạo cảm giác vui trong menu.' }, { ingredientsKey: 'fruitTea', vi: 'Trà Me có cá tính riêng nhờ điểm chua ngọt đặc trưng, tạo cảm giác vui và khác biệt trong menu đồ uống trái cây.', en: 'Trà Me stands out through its sweet-sour tamarind character, giving the menu a more playful and distinctive fruit tea option.' }),
    ],
  },
  {
    slug: 'other-drinks',
    name: 'Other drinks',
    description: 'Một số lựa chọn ngoài coffee và tea nhưng vẫn đúng tinh thần quán.',
    items: [
      withDetails({ slug: 'choco-latte', name: 'Choco Latte', priceValue: 65000, category: 'Other Drinks', image: imageLibrary.chocoLatte, description: 'Choco latte giúp menu dễ chiều hơn với khách không uống cà phê.' }, { ingredientsKey: 'choco', vi: 'Choco Latte phù hợp với khách không uống cà phê nhưng vẫn muốn một ly nóng hoặc đá có cảm giác mềm, ngọt và dễ chịu.', en: 'Choco Latte is a friendly choice for non-coffee drinkers who still want something smooth, comforting, and easy to enjoy hot or iced.' }),
      withDetails({ slug: 'hojicha-latte', name: 'Hojicha Latte', priceValue: 70000, category: 'Other Drinks', image: imageLibrary.hojichaLatte, description: 'Hojicha latte mang cảm giác ấm, sâu và khá hợp vibe quán hiện đại.' }, { ingredientsKey: 'hojicha', vi: 'Hojicha Latte có chiều sâu rang và cảm giác ấm hơn matcha, phù hợp với khách muốn đồ uống không cà phê nhưng vẫn trưởng thành và dịu.', en: 'Hojicha Latte has a warmer roasted depth than matcha, making it a good non-coffee option for guests who want something mellow and more mature in profile.' }),
    ],
  },
  {
    slug: 'juice',
    name: 'Juice',
    description: 'Nước ép cho nhóm khách cần đồ uống mát và nhẹ.',
    items: [
      withDetails({ slug: 'juice-thom', name: 'Thơm', priceValue: 55000, category: 'Juice', image: imageLibrary.pineappleJuice, description: 'Nước ép thơm là lựa chọn nhẹ, sáng và dễ uống.' }, { ingredientsKey: 'juice', vi: 'Nước ép Thơm thiên về sự tươi và gọn, phù hợp với khách muốn một lựa chọn nhẹ hơn các món cà phê hoặc trà.', en: 'Pineapple juice feels bright and refreshing, making it a good light alternative to coffee or tea-based drinks.' }),
      withDetails({ slug: 'juice-cam', name: 'Cam', priceValue: 55000, category: 'Juice', image: imageLibrary.orangeJuice, description: 'Cam là lựa chọn cơ bản nhưng luôn hữu ích cho nhóm khách không uống cafe.' }, { ingredientsKey: 'juice', vi: 'Nước ép Cam là lựa chọn quen thuộc và dễ tiếp cận nhất trong nhóm juice, phù hợp với nhiều thời điểm trong ngày.', en: 'Orange juice is the most familiar and accessible option in the juice lineup, suitable for many different moments of the day.' }),
      withDetails({ slug: 'juice-ca-rot', name: 'Cà Rốt', priceValue: 55000, category: 'Juice', image: imageLibrary.carrotJuice, description: 'Nước ép cà rốt cho menu thêm lựa chọn lành và khác với nhóm trà.' }, { ingredientsKey: 'juice', vi: 'Nước ép Cà Rốt giúp menu có thêm lựa chọn thiên về sự nhẹ và lành hơn, dành cho khách muốn tránh caffeine.', en: 'Carrot juice gives the menu a lighter and calmer option for guests who want to avoid caffeine.' }),
      withDetails({ slug: 'juice-mix', name: 'Mix', priceValue: 60000, category: 'Juice', image: imageLibrary.mixedJuice, description: 'Phiên bản mix tạo khoảng linh hoạt cho menu nước ép.' }, { ingredientsKey: 'juice', vi: 'Juice Mix tạo cảm giác linh hoạt và dễ tùy biến, phù hợp với khách muốn vị trái cây đa tầng hơn thay vì chỉ một loại nguyên liệu.', en: 'Juice Mix feels more flexible and layered, making it suitable for guests who want a fruit combination rather than a single-note juice.' }),
    ],
  },
]

export const menuExtras = [
  { label: 'Extra shot', priceValue: 25000 },
  { label: 'Oat milk', priceValue: 10000 },
]

const allMenuItems = menuCategories.flatMap((category) => category.items)

export function formatMenuPrice(value) {
  return `${formatCurrencyVnd(value)}đ`
}

export function getMenuItemBySlug(slug) {
  return allMenuItems.find((item) => item.slug === slug)
}

export function getRelatedMenuItems(currentItem, limit = 3) {
  return allMenuItems
    .filter((item) => item.slug !== currentItem.slug)
    .sort((left, right) => {
      const leftScore = left.category === currentItem.category ? 1 : 0
      const rightScore = right.category === currentItem.category ? 1 : 0
      return rightScore - leftScore
    })
    .slice(0, limit)
}

export function buildMenuItemJsonLd(item) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: item.name,
    description: item.description,
    image: [item.image],
    category: item.category,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'VND',
      price: item.priceValue,
      availability: 'https://schema.org/InStock',
    },
  }
}
