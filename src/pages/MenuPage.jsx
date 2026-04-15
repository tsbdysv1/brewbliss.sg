import Breadcrumbs from '../components/Breadcrumbs'
import MenuCatalogSection from '../components/MenuCatalogSection'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { menuCategories, menuExtras } from '../data/menu'
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

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Full menu</p>
          <h1>Menu BrewBliss</h1>
          <p className="section-supporting-text">
            Một trang riêng để khách xem nhanh toàn bộ menu của BrewBliss, từ món nổi bật đến các
            nhóm coffee, matcha, tea và pastry.
          </p>
        </div>
      </section>

      <section className="section-block menu-catalog-shell">
        <div className="menu-catalog-layout">
          <div className="menu-catalog-main">
            {visibleCategories.map((category) => (
              <MenuCatalogSection
                key={category.slug}
                sectionId={category.slug}
                title={sectionTitleMap[category.slug] ?? category.name}
                items={category.items}
              />
            ))}
          </div>

          <aside className="menu-catalog-sidebar" aria-label="Editorial menu image">
            <div className="menu-catalog-sticky-media">
              <img
                src="/images/signature-collection/04.png"
                alt="BrewBliss editorial pastry presentation"
                className="menu-catalog-sidebar-image"
              />
            </div>
          </aside>
        </div>
      </section>

      <section className="section-block extras-section">
        <div className="section-heading">
          <p className="eyebrow">Menu extras</p>
          <h2>Những tuỳ chọn thêm dễ áp dụng ngay trên quầy</h2>
        </div>
        <div className="extras-grid">
          {menuExtras.map((item) => (
            <article key={item.label} className="info-card compact-card">
              <h3>{item.label}</h3>
              <p>{new Intl.NumberFormat('vi-VN').format(item.priceValue)}đ</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export default MenuPage
