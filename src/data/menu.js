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
      { slug: 'apricot-cold-brew', name: 'Apricot Cold Brew', priceValue: 65000, image: imageLibrary.coldBrew },
      { slug: 'jasmine-peach-tea', name: 'Jasmine Peach Tea', priceValue: 60000, image: imageLibrary.fruitTea },
      { slug: 'cantaloupe-melon-tea', name: 'Cantaloupe Melon Tea', priceValue: 60000, image: imageLibrary.fruitTea },
      { slug: 'lemon-honey-matcha-summer', name: 'Lemon Honey Matcha', priceValue: 65000, image: imageLibrary.matcha },
    ],
  },
  {
    slug: 'pastries',
    name: 'Pastries',
    description: 'Bánh ngọt và pastry dễ gọi kèm đồ uống.',
    items: [
      { slug: 'plain-croissant', name: 'Plain Croissant', priceValue: 60000, image: imageLibrary.pastry },
      { slug: 'lava-croissant', name: 'Lava Croissant', priceValue: 65000, image: imageLibrary.pastry },
      { slug: 'pain-au-chocolat-full', name: 'Pain Au Chocolat', priceValue: 65000, image: imageLibrary.pastry },
      { slug: 'cinnamon-roll', name: 'Cinnamon Roll', priceValue: 60000, image: imageLibrary.pastry },
    ],
  },
  {
    slug: 'espresso-bar',
    name: 'Espresso bar',
    description: 'Menu cà phê nền tảng và các món signature dễ đại diện cho quán.',
    items: [
      { slug: 'espresso', name: 'Espresso', priceValue: 50000, image: imageLibrary.espresso },
      { slug: 'americano', name: 'Americano', priceValue: 55000, image: imageLibrary.espresso },
      { slug: 'latte', name: 'Latte', priceValue: 65000, image: imageLibrary.latte },
      { slug: 'cappuccino', name: 'Cappuccino', priceValue: 65000, image: imageLibrary.latte },
      { slug: 'mocha', name: 'Mocha', priceValue: 70000, image: imageLibrary.latte },
      { slug: 'orange-espresso-tonic', name: 'Orange Espresso Tonic', priceValue: 65000, image: imageLibrary.coldBrew },
      { slug: 'salted-caramel-full', name: 'Salted Caramel', priceValue: 75000, image: imageLibrary.latte },
      { slug: 'creamy-bliss', name: 'Creamy Bliss', priceValue: 65000, image: imageLibrary.latte },
    ],
  },
  {
    slug: 'vietnamese-coffee',
    name: 'Vietnamese coffee',
    description: 'Nhóm món gần gũi, hợp gu Việt và dễ gọi hàng ngày.',
    items: [
      { slug: 'cafe-den', name: 'Cafe Đen', priceValue: 50000, image: imageLibrary.espresso },
      { slug: 'cafe-sua', name: 'Cafe Sữa', priceValue: 55000, image: imageLibrary.latte },
      { slug: 'bac-xiu', name: 'Bạc Xỉu', priceValue: 60000, image: imageLibrary.latte },
      { slug: 'cafe-dua', name: 'Cafe Dừa', priceValue: 65000, image: imageLibrary.coldBrew },
      { slug: 'cafe-muoi', name: 'Cafe Muối', priceValue: 60000, image: imageLibrary.latte },
    ],
  },
  {
    slug: 'brew-bar',
    name: 'Brew bar',
    description: 'Cold brew và cold drip cho khách thích vị cà phê gọn, mát và có chiều sâu.',
    items: [
      { slug: 'cold-brew', name: 'Cold Brew', priceValue: 50000, image: imageLibrary.coldBrew },
      { slug: 'cold-brew-cam-buoi', name: 'Cold Brew Cam Bưởi', priceValue: 65000, image: imageLibrary.coldBrew },
      { slug: 'cold-brew-chanh-vang', name: 'Cold Brew Chanh Vàng', priceValue: 65000, image: imageLibrary.coldBrew },
      { slug: 'cold-brew-mo-full', name: 'Cold Brew Mơ', priceValue: 65000, image: imageLibrary.coldBrew },
      { slug: 'cold-drip', name: 'Cold Drip', priceValue: 65000, image: imageLibrary.coldBrew },
    ],
  },
  {
    slug: 'hand-drip',
    name: 'Hand drip',
    description: 'Lựa chọn cho khách muốn trải nghiệm cà phê thủ công rõ nét hơn.',
    items: [{ slug: 'ca-phe-thu-cong', name: 'Cà Phê Thủ Công', priceValue: 75000, image: imageLibrary.espresso }],
  },
  {
    slug: 'matcha',
    name: 'Matcha',
    description: 'Nhóm matcha khá mạnh và hợp với hình ảnh trẻ, sáng, dễ chụp.',
    items: [
      { slug: 'matcha-latte', name: 'Matcha Latte', priceValue: 70000, image: imageLibrary.matcha },
      { slug: 'strawberry-matcha-latte', name: 'Strawberry Matcha Latte', priceValue: 70000, image: imageLibrary.matcha },
      { slug: 'salted-cream-matcha', name: 'Salted Cream Matcha', priceValue: 70000, image: imageLibrary.matcha },
      { slug: 'lemon-honey-matcha-full', name: 'Lemon Honey Matcha', priceValue: 65000, image: imageLibrary.matcha },
      { slug: 'coco-matcha', name: 'Coco Matcha', priceValue: 65000, image: imageLibrary.matcha },
    ],
  },
  {
    slug: 'tea',
    name: 'Tea',
    description: 'Trà trái cây cho nhóm khách cần lựa chọn nhẹ hơn cà phê.',
    items: [
      { slug: 'tra-vai', name: 'Trà Vải', priceValue: 60000, image: imageLibrary.fruitTea },
      { slug: 'tra-cam-buoi', name: 'Trà Cam Bưởi', priceValue: 60000, image: imageLibrary.fruitTea },
      { slug: 'tra-dau', name: 'Trà Dâu', priceValue: 65000, image: imageLibrary.fruitTea },
      { slug: 'tra-me', name: 'Trà Me', priceValue: 60000, image: imageLibrary.fruitTea },
    ],
  },
  {
    slug: 'other-drinks',
    name: 'Other drinks',
    description: 'Một số lựa chọn ngoài coffee và tea nhưng vẫn đúng tinh thần quán.',
    items: [
      { slug: 'choco-latte', name: 'Choco Latte', priceValue: 65000, image: imageLibrary.latte },
      { slug: 'hojicha-latte', name: 'Hojicha Latte', priceValue: 70000, image: imageLibrary.latte },
    ],
  },
  {
    slug: 'juice',
    name: 'Juice',
    description: 'Nước ép cho nhóm khách cần đồ uống mát và nhẹ.',
    items: [
      { slug: 'juice-thom', name: 'Thơm', priceValue: 55000, image: imageLibrary.juice },
      { slug: 'juice-cam', name: 'Cam', priceValue: 55000, image: imageLibrary.juice },
      { slug: 'juice-ca-rot', name: 'Cà Rốt', priceValue: 55000, image: imageLibrary.juice },
      { slug: 'juice-mix', name: 'Mix', priceValue: 60000, image: imageLibrary.juice },
    ],
  },
]

export const menuExtras = [
  { label: 'Extra shot', priceValue: 25000 },
  { label: 'Oat milk', priceValue: 10000 },
]

export function formatMenuPrice(value) {
  return `${formatCurrencyVnd(value)}đ`
}
