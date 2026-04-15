import Breadcrumbs from '../components/Breadcrumbs'
import MenuCatalogSection from '../components/MenuCatalogSection'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { getSignatureCollectionItems, menuCategories } from '../data/menu'
import { siteConfig } from '../data/site'
import { usePageSeo } from '../hooks/usePageSeo'

function MenuPage() {
  const menuSectionOrder = [
    'espresso-bar',
    'vietnamese-coffee',
    'brew-bar',
    'hand-drip',
    'matcha',
    'tea',
    'other-drinks',
    'juice',
    'pastries',
  ]

  const sectionTitleMap = {
    'espresso-bar': 'Espresso Bar',
    'vietnamese-coffee': 'Vietnamese Coffee Bar',
    'brew-bar': 'Brew Bar',
    'hand-drip': 'Hand Drip',
    matcha: 'Matcha',
    tea: 'Tea',
    'other-drinks': 'Other Drinks',
    juice: 'Juice',
    pastries: 'Pastry',
  }

  const visibleCategories = menuSectionOrder
    .map((slug) => menuCategories.find((category) => category.slug === slug))
    .filter(Boolean)
    .map((category) => ({
      ...category,
      items: category.items.map((item) => ({
        ...item,
        categorySlug: category.slug,
        categoryName: category.name,
      })),
    }))

  const signatureItems = getSignatureCollectionItems()

  usePageSeo({
    title: `Menu | ${siteConfig.brandName}`,
    description:
      'Xem menu đầy đủ của BrewBliss Coffee với coffee, matcha, trà trái cây, pastry và các món nổi bật ngay trên một trang riêng.',
    jsonLd: siteConfig.defaultJsonLd,
    pathname: '/menu',
    image: siteConfig.seo.defaultImage,
  })

  return (
    <div className="page-shell">
      <SiteHeader />

      <Breadcrumbs items={[{ label: 'Trang chủ', to: '/' }, { label: 'Menu' }]} />

      <main className="menu-page-content" aria-label="BrewBliss menu catalog">
        {visibleCategories.map((category) => (
          <MenuCatalogSection
            key={category.slug}
            sectionId={category.slug}
            title={sectionTitleMap[category.slug] ?? category.name}
            items={category.items}
          />
        ))}

        <MenuCatalogSection
          sectionId="signature-collection"
          title="BrewBliss Signature Collection"
          items={signatureItems}
        />
      </main>

      <SiteFooter />
    </div>
  )
}

export default MenuPage
