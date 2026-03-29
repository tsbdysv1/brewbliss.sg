# brewbliss.sg

Website foundation for BrewBliss Coffee in Ho Chi Minh City.

## Planned direction

- Separate GitHub repo from other business sites
- Separate Vercel project / deploy target
- Warm orange cafe visual direction based on current logo
- Real menu structure seeded from provided menu images
- Contact/location/social info from public footprint and owner-provided details

## Current known business info

- Name: BrewBliss Coffee
- Address: 21 Nguyễn Trung Trực, Bến Thành, Quận 1, Hồ Chí Minh 71009, Vietnam
- Phone: +84 823 779 291
- Hours: 7:00 AM - 10:00 PM daily
- Instagram: https://www.instagram.com/brewbliss.sg
- Facebook: https://www.facebook.com/profile.php?id=61562411244271
- Zalo: placeholder for now

## Notes

- Some menu items may still use placeholder web images until the shop provides brand-approved photos.
- The current UI now uses the provided BrewBliss wordmark directly instead of only inferring the brand from color direction.
- The site now includes route-level detail pages for menu items at `/menu/:slug`.
- The site now has a fuller header, footer, and clearer contact-action system inspired by how real F&B brands surface navigation and communication options.
- The preferred workflow is the same safe pattern used elsewhere: branch -> PR -> Vercel preview -> merge to main.
