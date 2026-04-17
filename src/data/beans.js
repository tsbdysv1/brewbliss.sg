const beanImageMap = {
  metaRock: '/images/signature-collection/uploads-apr15/ca-phe-thu-cong.png',
  bossaNova: '/images/signature-collection/uploads-apr15/espresso.png',
  redRose: '/images/signature-collection/uploads-apr15/ca-phe-den.png',
  costaRica: '/images/signature-collection/uploads-apr15/cold-drip.png',
  andBrew: '/images/signature-collection/uploads-apr15/cafe-muoi.png',
  countryHouse: '/images/signature-collection/uploads-apr15/cafe-dua.png',
}

export const BEAN_WEIGHT_OPTIONS = [
  { label: '250gr', priceValue: 250000 },
  { label: '500gr', priceValue: 500000 },
  { label: '1kg', priceValue: 1000000 },
]

const beanCatalog = [
  {
    slug: 'meta-rock',
    name: 'Meta Rock',
    priceValue: 250000,
    image: beanImageMap.metaRock,
    sectionSlug: 'brewbliss-beans',
    introduction:
      'House bean theo hướng clean và đậm hậu vị cacao, phù hợp cho khách thích ly cà phê cân bằng nhưng vẫn có chiều sâu rõ ràng.',
    characteristics: {
      origin: 'Blend: Việt Nam Arabica + Robusta tuyển chọn',
      roastLevel: 'Medium',
      flavorNotes: 'Cacao nibs, caramel nâu, dark sugar',
      process: 'Washed + natural blend',
    },
    recommendedUsage:
      'Gợi ý pha 15g hạt / 240ml nước (tỉ lệ 1:16) cho pour over; espresso dùng 18g in, 36g out trong khoảng 27-30 giây.',
  },
  {
    slug: 'bossa-nova',
    name: 'Bossa Nova',
    priceValue: 250000,
    image: beanImageMap.bossaNova,
    sectionSlug: 'brewbliss-beans',
    introduction:
      'Blend dịu, hương thơm mềm và sáng, hướng tới trải nghiệm uống hằng ngày với profile dễ tiếp cận nhưng vẫn premium.',
    characteristics: {
      origin: 'Blend: Brazil + Đà Lạt Arabica',
      roastLevel: 'Medium light',
      flavorNotes: 'Mật ong, hạt dẻ, cam chín',
      process: 'Natural + honey process',
    },
    recommendedUsage:
      'Phù hợp pha máy và moka pot. Espresso: 18g in / 38g out trong 26-29 giây; hand brew: 16g hạt / 250ml nước.',
  },
  {
    slug: 'red-rose',
    name: 'Red Rose',
    priceValue: 250000,
    image: beanImageMap.redRose,
    sectionSlug: 'seasonal-beans',
    introduction:
      'Seasonal bean có tầng hương trái đỏ và hậu vị ngọt thanh, dành cho khách muốn trải nghiệm profile sống động theo mùa.',
    characteristics: {
      origin: 'Single origin: Cầu Đất, Việt Nam',
      roastLevel: 'Light-medium',
      flavorNotes: 'Dâu đỏ, mận chín, đường nâu',
      process: 'Anaerobic natural',
    },
    recommendedUsage:
      'Tối ưu cho V60: 15g hạt / 240ml nước, nhiệt 91-93°C. Khi pha lạnh có thể tăng liều lên 18g để giữ độ ngọt hương.',
  },
  {
    slug: 'costa-rica',
    name: 'Costa Rica',
    priceValue: 250000,
    image: beanImageMap.costaRica,
    sectionSlug: 'seasonal-beans',
    introduction:
      'Lô seasonal mang chất vị sạch, độ acid sáng và hậu vị kéo dài, hợp với khách thích style quốc tế hiện đại.',
    characteristics: {
      origin: 'Tarrazú, Costa Rica',
      roastLevel: 'Light',
      flavorNotes: 'Táo xanh, floral, đường mía',
      process: 'Washed',
    },
    recommendedUsage:
      'Ưu tiên pour over: 16g hạt / 250ml nước ở 92°C, chia 4 lần rót. Với cold brew: 70g hạt / 1 lít nước ngâm 14-16 giờ.',
  },
  {
    slug: 'and-brew',
    name: 'And Brew',
    priceValue: 250000,
    image: beanImageMap.andBrew,
    sectionSlug: 'seasonal-beans',
    introduction:
      'Bean seasonal có body tròn và hậu vị chocolate, định hướng cho những ly cà phê tại nhà dễ uống, dễ phối sữa.',
    characteristics: {
      origin: 'Blend: Việt Nam + Ethiopia',
      roastLevel: 'Medium',
      flavorNotes: 'Chocolate, mạch nha, cam khô',
      process: 'Natural blend',
    },
    recommendedUsage:
      'Phù hợp espresso và phin hiện đại. Espresso: 18g in / 36-40g out; phin: 25g hạt xay vừa cho 100-110ml nước.',
  },
  {
    slug: 'country-house',
    name: 'Country House',
    priceValue: 250000,
    image: beanImageMap.countryHouse,
    sectionSlug: 'seasonal-beans',
    introduction:
      'Profile ấm, cân bằng và mượt, thiên về caramel hạt dẻ; phù hợp khách muốn một lựa chọn ổn định để pha mỗi ngày.',
    characteristics: {
      origin: 'Blend: Brazil Cerrado + Việt Nam Arabica',
      roastLevel: 'Medium-dark',
      flavorNotes: 'Caramel, hạnh nhân, cacao sữa',
      process: 'Natural + washed blend',
    },
    recommendedUsage:
      'Gợi ý dùng cho latte và cappuccino tại nhà. Espresso: 19g in / 38g out; French press: 22g hạt / 320ml nước.',
  },
]

const beanSectionDefinitions = [
  {
    slug: 'brewbliss-beans',
    title: 'BrewBliss Beans',
    description: 'Core selection của BrewBliss dành cho nhu cầu pha hằng ngày với profile ổn định và premium.',
    itemSlugs: ['meta-rock', 'bossa-nova'],
    columns: 'two',
  },
  {
    slug: 'seasonal-beans',
    title: 'Seasonal Beans',
    description: 'Các lô seasonal theo mùa với profile hương vị khác biệt để mở rộng trải nghiệm bean tại nhà.',
    itemSlugs: ['red-rose', 'costa-rica', 'and-brew', 'country-house'],
    columns: 'four',
  },
]

const beanBySlug = new Map(beanCatalog.map((bean) => [bean.slug, bean]))

export const beanCollectionSections = beanSectionDefinitions.map((section) => ({
  ...section,
  items: section.itemSlugs.map((slug) => beanBySlug.get(slug)).filter(Boolean),
}))

const beanSectionBySlug = new Map(beanCollectionSections.map((section) => [section.slug, section]))

export function getBeanBySlug(slug) {
  return beanBySlug.get(slug) ?? null
}

export function getBeansBySectionSlug(sectionSlug) {
  return beanSectionBySlug.get(sectionSlug)?.items ?? []
}

export function getSeasonalBeans() {
  return getBeansBySectionSlug('seasonal-beans')
}

export function getBeanHref(bean) {
  return `/collection/${bean.slug}`
}

export function formatBeanPrice(value) {
  return `${new Intl.NumberFormat('vi-VN').format(value)}đ`
}

export function buildBeanJsonLd(bean, selectedWeight = BEAN_WEIGHT_OPTIONS[0]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${bean.name} Coffee Bean`,
    description: bean.introduction,
    image: [bean.image],
    category: 'Coffee Bean',
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Roast level', value: bean.characteristics.roastLevel },
      { '@type': 'PropertyValue', name: 'Origin', value: bean.characteristics.origin },
      { '@type': 'PropertyValue', name: 'Flavor notes', value: bean.characteristics.flavorNotes },
    ],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'VND',
      price: selectedWeight.priceValue,
      availability: 'https://schema.org/InStock',
    },
  }
}
