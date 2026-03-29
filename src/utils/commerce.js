export function normalizePhoneNumber(phoneNumber) {
  return phoneNumber.replace(/\D+/g, '')
}

export function formatCurrencyVnd(value) {
  return new Intl.NumberFormat('vi-VN').format(value)
}

export function buildPhoneHref(phoneNumber) {
  return `tel:${normalizePhoneNumber(phoneNumber)}`
}

export function buildMapsLink(query) {
  const params = new URLSearchParams({ q: query })
  return `https://www.google.com/maps/search/?${params.toString()}`
}
