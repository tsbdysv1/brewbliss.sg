export const siteConfig = {
  brandName: 'BrewBliss Coffee',
  siteUrl: 'https://brewbliss.sg',
  headline: 'Brew your coffee, brew your happiness',
  heroTitle: 'Quán cà phê ấm áp giữa trung tâm Sài Gòn, dễ ghé, dễ chill, dễ nhớ',
  heroDescription:
    'BrewBliss là điểm dừng cho cà phê, matcha, trà trái cây và bánh ngọt với vibe hiện đại, ấm áp và rất hợp để hẹn bạn bè hoặc ngồi một mình giữa lòng quận 1.',
  phoneNumber: '+84 823 779 291',
  zaloLabel: 'Zalo cập nhật sau',
  zaloLink: '#',
  instagramLink: 'https://www.instagram.com/brewbliss.sg',
  facebookLink: 'https://www.facebook.com/profile.php?id=61562411244271',
  address: '21 Nguyễn Trung Trực, Bến Thành, Quận 1, Hồ Chí Minh 71009, Vietnam',
  mapQuery: '21 Nguyễn Trung Trực, Bến Thành, Quận 1, Hồ Chí Minh 71009, Vietnam',
  mapLink:
    'https://www.google.com/maps/place/21+Nguy%E1%BB%85n+Trung+Tr%E1%BB%B1c,+B%E1%BA%BFn+Th%C3%A0nh,+Qu%E1%BA%ADn+1,+H%E1%BB%93+Ch%C3%AD+Minh+71009,+Vi%E1%BB%87t+Nam/@10.7738405,106.6942573,16z/data=!3m1!4b1!4m6!3m5!1s0x31752f38bb4d082b:0xc512e65f25b285ca!8m2!3d10.7738405!4d106.6991282!16s%2Fg%2F11xghrb5zx?hl=vi&entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D',
  hoursLabel: 'Mỗi ngày · 7:00 AM – 10:00 PM',
  trustPoints: ['Ngay trung tâm quận 1', 'Menu đa dạng từ coffee đến matcha', 'Có pastry đi kèm và vibe chụp hình đẹp'],
  contentReadiness: {
    title: 'Đã sẵn sàng để hoàn thiện thêm bằng ảnh và story thật của quán',
    description:
      'Website này được dựng theo hướng menu-first và brand-first: đã có đủ nền để cập nhật thêm ảnh quán, ảnh món, story thương hiệu và các chiến dịch sau này mà không phải làm lại từ đầu.',
    checklist: [
      'Có thể bổ sung ảnh thật cho từng món sau',
      'Có thể thêm gallery không gian khi quán gửi ảnh',
      'Có thể thay placeholder Zalo và links khác rất nhanh',
    ],
  },
  seo: {
    title: 'BrewBliss Coffee | Café, matcha, trà và pastry ở trung tâm Sài Gòn',
    description:
      'Khám phá BrewBliss Coffee tại 21 Nguyễn Trung Trực, Bến Thành, Quận 1 với menu cà phê, matcha, trà trái cây và pastry trong không gian ấm áp giữa Sài Gòn.',
    defaultImage:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80',
  },
  defaultJsonLd: {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    name: 'BrewBliss Coffee',
    url: 'https://brewbliss.sg',
    telephone: '+84 823 779 291',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '21 Nguyễn Trung Trực',
      addressLocality: 'Bến Thành, Quận 1',
      addressRegion: 'Hồ Chí Minh',
      postalCode: '71009',
      addressCountry: 'VN',
    },
    description:
      'BrewBliss Coffee là quán cà phê tại trung tâm Sài Gòn với coffee, matcha, trà và pastry trong không gian ấm áp, hiện đại.',
  },
}

export const heroSlides = [
  {
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1800&q=80',
    alt: 'Freshly brewed coffee on a premium cafe counter',
  },
  {
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=80',
    alt: 'Coffee beans and brewing setup in warm light',
  },
  {
    image:
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1800&q=80',
    alt: 'Modern coffee shop interior with a warm premium atmosphere',
  },
  {
    image:
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1800&q=80',
    alt: 'Barista pouring coffee in a clean modern cafe setting',
  },
  {
    image:
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1800&q=80',
    alt: 'Signature coffee presentation for a coffee brand homepage banner',
  },
]

export const categories = [
  {
    title: 'Espresso bar',
    description: 'Từ espresso, americano, latte đến những món signature như Salted Caramel hay Orange Espresso Tonic.',
  },
  {
    title: 'Vietnamese coffee',
    description: 'Cafe đen, cafe sữa, bạc xỉu, cafe dừa và cafe muối cho gu Việt quen mà vẫn có cá tính.',
  },
  {
    title: 'Matcha, tea & brew bar',
    description: 'Matcha latte, trà trái cây, cold brew và các món theo mùa giúp menu có chiều sâu hơn cà phê cơ bản.',
  },
  {
    title: 'Pastries',
    description: 'Croissant, pain au chocolat, cinnamon roll và các món bánh dễ gọi kèm đồ uống.',
  },
]
