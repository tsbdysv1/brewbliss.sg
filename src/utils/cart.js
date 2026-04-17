export const PRODUCT_OPTION_GROUPS = {
  milk: ['Sữa thanh trùng', 'Sữa yến mạch'],
  sugar: ['Có đường', 'Không đường'],
  temperature: ['Đá', 'Nóng'],
}

export function buildCartItemId({ slug, options }) {
  return [slug, options.bean || '-', options.milk || '-', options.sugar || '-', options.temperature || '-', options.note?.trim() || '-'].join('::')
}
