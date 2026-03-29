import { formatCurrencyVnd } from '../utils/commerce'

const imageLibrary = {
  pastry:
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
  latte:
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
  espresso:
    'https://images.unsplash.com/photo-1517701550927-30cf4ba1fcef?auto=format&fit=crop&w=1200&q=80',
  coldBrew:
    'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=80',
  matcha:
    'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1200&q=80',
  fruitTea:
    'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80',
  juice:
    'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=1200&q=80',
}

export const menuCategories = [
  {
    slug: 'featured',
    name: 'Món nổi bật',
    description: 'Những món dễ đại diện cho vibe BrewBliss ngay từ lần ghé đầu tiên.',
    items: [
      {
        slug: 'salted-caramel',
        name: 'Salted Caramel',
        priceValue: 75000,
        category: 'Espresso Bar',
        image: imageLibrary.latte,
        description: 'Món cà phê sữa ngọt dịu, hợp với khách thích vị êm và dễ uống.',
        badges: ['Signature', 'Best seller vibe'],
      },
      {
        slug: 'cold-brew-mo',
        name: 'Cold Brew Mơ',
        priceValue: 65000,
        category: 'Summer Specials',
        image: imageLibrary.coldBrew,
        description: 'Cold brew trái cây có cảm giác mát, nhẹ và rất hợp những ngày nóng ở Sài Gòn.',
        badges: ['Seasonal', 'Refreshing'],
      },
      {
        slug: 'lemon-honey-matcha',
        name: 'Lemon Honey Matcha',
        priceValue: 65000,
        category: 'Matcha',
        image: imageLibrary.matcha,
        description: 'Matcha sáng vị, có thêm chanh mật ong giúp tổng thể tươi và dễ nhớ.',
        badges: ['Fresh', 'Recommended'],
      },
      {
        slug: 'pain-au-chocolat',
        name: 'Pain Au Chocolat',
        priceValue: 65000,
        category: 'Pastries',
        image: imageLibrary.pastry,
        description: 'Lớp bánh bơ thơm, hợp gọi kèm cà phê hoặc trà vào buổi sáng.',
        badges: ['Pastry', 'Morning pick'],
      },
    ],
  },
  {
    slug: 'summer-specials',
    name: 'Summer specials',
    description: 'Các món theo mùa tạo cảm giác tươi, sáng và dễ lan truyền trên mạng xã hội.',
    items: [
      {
        slug: 'apricot-cold-brew',
        name: 'Apricot Cold Brew',
        priceValue: 65000,
        category: 'Summer Specials',
        image: imageLibrary.coldBrew,
        description: 'Một biến tấu cold brew trái cây cho cảm giác tươi và dễ uống giữa thời tiết nóng.',
      },
      {
        slug: 'jasmine-peach-tea',
        name: 'Jasmine Peach Tea',
        priceValue: 60000,
        category: 'Summer Specials',
        image: imageLibrary.fruitTea,
        description: 'Trà đào nhài thanh, thơm và dễ hợp gu với nhóm khách không uống cà phê.',
      },
      {
        slug: 'cantaloupe-melon-tea',
        name: 'Cantaloupe Melon Tea',
        priceValue: 60000,
        category: 'Summer Specials',
        image: imageLibrary.fruitTea,
        description: 'Trà dưa lưới sáng vị, nhìn bắt mắt và khá hợp để chụp hình.',
      },
      {
        slug: 'lemon-honey-matcha-summer',
        name: 'Lemon Honey Matcha',
        priceValue: 65000,
        category: 'Summer Specials',
        image: imageLibrary.matcha,
        description: 'Phiên bản matcha có độ tươi và nhẹ, phù hợp thời tiết Sài Gòn.',
      },
    ],
  },
  {
    slug: 'pastries',
    name: 'Pastries',
    description: 'Bánh ngọt và pastry dễ gọi kèm đồ uống.',
    items: [
      {
        slug: 'plain-croissant',
        name: 'Plain Croissant',
        priceValue: 60000,
        category: 'Pastries',
        image: imageLibrary.pastry,
        description: 'Croissant bơ cổ điển, phù hợp cho buổi sáng hoặc gọi kèm espresso.',
      },
      {
        slug: 'lava-croissant',
        name: 'Lava Croissant',
        priceValue: 65000,
        category: 'Pastries',
        image: imageLibrary.pastry,
        description: 'Một lựa chọn pastry đậm đà hơn cho khách thích bánh có điểm nhấn.',
      },
      {
        slug: 'pain-au-chocolat-full',
        name: 'Pain Au Chocolat',
        priceValue: 65000,
        category: 'Pastries',
        image: imageLibrary.pastry,
        description: 'Pastry chocolate hợp với latte, cappuccino hoặc đồ uống lạnh dịu vị.',
      },
      {
        slug: 'cinnamon-roll',
        name: 'Cinnamon Roll',
        priceValue: 60000,
        category: 'Pastries',
        image: imageLibrary.pastry,
        description: 'Món bánh dễ tạo cảm giác ấm áp, hợp vibe quán cafe hiện đại.',
      },
    ],
  },
  {
    slug: 'espresso-bar',
    name: 'Espresso bar',
    description: 'Menu cà phê nền tảng và các món signature dễ đại diện cho quán.',
    items: [
      { slug: 'espresso', name: 'Espresso', priceValue: 50000, category: 'Espresso Bar', image: imageLibrary.espresso, description: 'Ly espresso gọn, đậm và phù hợp cho khách thích vị coffee trực diện.' },
      { slug: 'americano', name: 'Americano', priceValue: 55000, category: 'Espresso Bar', image: imageLibrary.espresso, description: 'Americano nhẹ hơn espresso nhưng vẫn giữ được tính cà phê rõ nét.' },
      { slug: 'latte', name: 'Latte', priceValue: 65000, category: 'Espresso Bar', image: imageLibrary.latte, description: 'Latte cân bằng, dễ uống và luôn là lựa chọn an toàn cho đa số khách.' },
      { slug: 'cappuccino', name: 'Cappuccino', priceValue: 65000, category: 'Espresso Bar', image: imageLibrary.latte, description: 'Cappuccino cho trải nghiệm foam và espresso rõ hơn latte một chút.' },
      { slug: 'mocha', name: 'Mocha', priceValue: 70000, category: 'Espresso Bar', image: imageLibrary.latte, description: 'Mocha hợp với khách thích coffee nhưng vẫn muốn chút ngọt và chocolate.' },
      { slug: 'orange-espresso-tonic', name: 'Orange Espresso Tonic', priceValue: 65000, category: 'Espresso Bar', image: imageLibrary.coldBrew, description: 'Espresso tonic với sắc cam tươi, rất hợp để trở thành món signature nhìn bắt mắt.' },
      { slug: 'salted-caramel-full', name: 'Salted Caramel', priceValue: 75000, category: 'Espresso Bar', image: imageLibrary.latte, description: 'Salted caramel là kiểu món dễ đại diện cho sự êm, ngọt và hiện đại của quán.' },
      { slug: 'creamy-bliss', name: 'Creamy Bliss', priceValue: 65000, category: 'Espresso Bar', image: imageLibrary.latte, description: 'Một món có tên đủ gợi cảm giác mềm, mượt và dễ nhớ với khách mới.' },
    ],
  },
  {
    slug: 'vietnamese-coffee',
    name: 'Vietnamese coffee',
    description: 'Nhóm món gần gũi, hợp gu Việt và dễ gọi hàng ngày.',
    items: [
      { slug: 'cafe-den', name: 'Cafe Đen', priceValue: 50000, category: 'Vietnamese Coffee', image: imageLibrary.espresso, description: 'Món cơ bản nhất cho khách thích vị cà phê Việt rõ và quen.' },
      { slug: 'cafe-sua', name: 'Cafe Sữa', priceValue: 55000, category: 'Vietnamese Coffee', image: imageLibrary.latte, description: 'Cafe sữa dễ bán, dễ hợp số đông và rất hợp bối cảnh quận 1.' },
      { slug: 'bac-xiu', name: 'Bạc Xỉu', priceValue: 60000, category: 'Vietnamese Coffee', image: imageLibrary.latte, description: 'Bạc xỉu thiên sữa, hợp với người thích nhẹ và ngọt hơn.' },
      { slug: 'cafe-dua', name: 'Cafe Dừa', priceValue: 65000, category: 'Vietnamese Coffee', image: imageLibrary.coldBrew, description: 'Cafe dừa vừa lạ vừa quen, dễ thành món gợi nhớ cho khách quay lại.' },
      { slug: 'cafe-muoi', name: 'Cafe Muối', priceValue: 60000, category: 'Vietnamese Coffee', image: imageLibrary.latte, description: 'Cafe muối tạo điểm khác biệt mà vẫn nằm trong gu quen thuộc của khách Việt.' },
    ],
  },
  {
    slug: 'brew-bar',
    name: 'Brew bar',
    description: 'Cold brew và cold drip cho khách thích vị cà phê gọn, mát và có chiều sâu.',
    items: [
      { slug: 'cold-brew', name: 'Cold Brew', priceValue: 50000, category: 'Brew Bar', image: imageLibrary.coldBrew, description: 'Cold brew nguyên bản cho vị mượt, gọn và dễ uống cả ngày.' },
      { slug: 'cold-brew-cam-buoi', name: 'Cold Brew Cam Bưởi', priceValue: 65000, category: 'Brew Bar', image: imageLibrary.coldBrew, description: 'Sự kết hợp trái cây giúp cold brew bớt khô và dễ hợp gu đại chúng hơn.' },
      { slug: 'cold-brew-chanh-vang', name: 'Cold Brew Chanh Vàng', priceValue: 65000, category: 'Brew Bar', image: imageLibrary.coldBrew, description: 'Chanh vàng tạo cảm giác sáng và gọn, hợp nhóm khách thích vị clean.' },
      { slug: 'cold-brew-mo-full', name: 'Cold Brew Mơ', priceValue: 65000, category: 'Brew Bar', image: imageLibrary.coldBrew, description: 'Cold brew mơ vừa đủ khác biệt để trở thành món đáng nhớ trong menu.' },
      { slug: 'cold-drip', name: 'Cold Drip', priceValue: 65000, category: 'Brew Bar', image: imageLibrary.coldBrew, description: 'Cold drip tạo cảm giác craft hơn và phù hợp nhóm khách thích trải nghiệm.' },
    ],
  },
  {
    slug: 'hand-drip',
    name: 'Hand drip',
    description: 'Lựa chọn cho khách muốn trải nghiệm cà phê thủ công rõ nét hơn.',
    items: [
      {
        slug: 'ca-phe-thu-cong',
        name: 'Cà Phê Thủ Công',
        priceValue: 75000,
        category: 'Hand Drip',
        image: imageLibrary.espresso,
        description: 'Món dành cho khách muốn đi sâu hơn vào trải nghiệm cà phê thủ công.',
      },
    ],
  },
  {
    slug: 'matcha',
    name: 'Matcha',
    description: 'Nhóm matcha khá mạnh và hợp với hình ảnh trẻ, sáng, dễ chụp.',
    items: [
      { slug: 'matcha-latte', name: 'Matcha Latte', priceValue: 70000, category: 'Matcha', image: imageLibrary.matcha, description: 'Matcha latte là lựa chọn sáng màu, hợp hình ảnh social và dễ gọi lại.' },
      { slug: 'strawberry-matcha-latte', name: 'Strawberry Matcha Latte', priceValue: 70000, category: 'Matcha', image: imageLibrary.matcha, description: 'Strawberry matcha latte phù hợp nhóm khách trẻ và thích đồ uống có layer đẹp.' },
      { slug: 'salted-cream-matcha', name: 'Salted Cream Matcha', priceValue: 70000, category: 'Matcha', image: imageLibrary.matcha, description: 'Salted cream matcha tạo cảm giác hiện đại và hợp để trở thành món signature.' },
      { slug: 'lemon-honey-matcha-full', name: 'Lemon Honey Matcha', priceValue: 65000, category: 'Matcha', image: imageLibrary.matcha, description: 'Lemon honey matcha là kiểu món vừa tươi vừa khác biệt với matcha latte thường.' },
      { slug: 'coco-matcha', name: 'Coco Matcha', priceValue: 65000, category: 'Matcha', image: imageLibrary.matcha, description: 'Coco matcha giúp menu có thêm biến thể hợp mùa nóng và dễ nhớ.' },
    ],
  },
  {
    slug: 'tea',
    name: 'Tea',
    description: 'Trà trái cây cho nhóm khách cần lựa chọn nhẹ hơn cà phê.',
    items: [
      { slug: 'tra-vai', name: 'Trà Vải', priceValue: 60000, category: 'Tea', image: imageLibrary.fruitTea, description: 'Trà vải thơm và sáng, hợp khách thích đồ uống nhẹ nhàng.' },
      { slug: 'tra-cam-buoi', name: 'Trà Cam Bưởi', priceValue: 60000, category: 'Tea', image: imageLibrary.fruitTea, description: 'Cam bưởi mang cảm giác fresh và dễ hợp nhiều thời điểm trong ngày.' },
      { slug: 'tra-dau', name: 'Trà Dâu', priceValue: 65000, category: 'Tea', image: imageLibrary.fruitTea, description: 'Trà dâu bắt mắt, hợp hình ảnh social và nhóm khách thích vị trái cây.' },
      { slug: 'tra-me', name: 'Trà Me', priceValue: 60000, category: 'Tea', image: imageLibrary.fruitTea, description: 'Trà me mang một chút cá tính riêng và tạo cảm giác vui trong menu.' },
    ],
  },
  {
    slug: 'other-drinks',
    name: 'Other drinks',
    description: 'Một số lựa chọn ngoài coffee và tea nhưng vẫn đúng tinh thần quán.',
    items: [
      { slug: 'choco-latte', name: 'Choco Latte', priceValue: 65000, category: 'Other Drinks', image: imageLibrary.latte, description: 'Choco latte giúp menu dễ chiều hơn với khách không uống cà phê.' },
      { slug: 'hojicha-latte', name: 'Hojicha Latte', priceValue: 70000, category: 'Other Drinks', image: imageLibrary.latte, description: 'Hojicha latte mang cảm giác ấm, sâu và khá hợp vibe quán hiện đại.' },
    ],
  },
  {
    slug: 'juice',
    name: 'Juice',
    description: 'Nước ép cho nhóm khách cần đồ uống mát và nhẹ.',
    items: [
      { slug: 'juice-thom', name: 'Thơm', priceValue: 55000, category: 'Juice', image: imageLibrary.juice, description: 'Nước ép thơm là lựa chọn nhẹ, sáng và dễ uống.' },
      { slug: 'juice-cam', name: 'Cam', priceValue: 55000, category: 'Juice', image: imageLibrary.juice, description: 'Cam là lựa chọn cơ bản nhưng luôn hữu ích cho nhóm khách không uống cafe.' },
      { slug: 'juice-ca-rot', name: 'Cà Rốt', priceValue: 55000, category: 'Juice', image: imageLibrary.juice, description: 'Nước ép cà rốt cho menu thêm lựa chọn lành và khác với nhóm trà.' },
      { slug: 'juice-mix', name: 'Mix', priceValue: 60000, category: 'Juice', image: imageLibrary.juice, description: 'Phiên bản mix tạo khoảng linh hoạt cho menu nước ép.' },
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
