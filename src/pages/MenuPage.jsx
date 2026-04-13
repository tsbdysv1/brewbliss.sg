import Breadcrumbs from '../components/Breadcrumbs'
import MenuCategorySection from '../components/MenuCategorySection'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { menuCategories, menuExtras } from '../data/menu'
import { siteConfig } from '../data/site'
import { usePageSeo } from '../hooks/usePageSeo'

function MenuPage() {
  const featuredCategory = menuCategories.find((category) => category.slug === 'featured')
  const visibleCategories = menuCategories.filter((category) => category.slug !== 'featured')

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

      <div id="mon-noi-bat">{featuredCategory ? <MenuCategorySection category={featuredCategory} /> : null}</div>

      {visibleCategories.map((category) => (
        <MenuCategorySection key={category.slug} category={category} />
      ))}

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
