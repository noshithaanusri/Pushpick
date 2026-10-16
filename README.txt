PUREPICK - UPDATED VERSION

Run in VS Code:
1. Extract the ZIP.
2. Open the PurePick folder in VS Code.
3. Use Live Server and open index.html.

IMAGE FIXES
- Product catalog pictures are stored locally in the images folder.
- External Unsplash links are no longer used for the product catalog.
- Broken image links fall back to images/product-generic.svg.
- Product cards keep the picture area separate from Pack/Size, Quantity, Price and Add to cart.
- View picture opens a larger picture viewer without interfering with Add to cart.
- Admin-uploaded local pictures are stored in the browser and appear on the Products page.

SHOPPING LOGIN
- Browsing is allowed without login.
- Add to cart requires sign in.
- Cart and order placement require sign in.

ADMIN ACCESS
- The Admin link is not shown in the public navigation.
- admin.html checks an authorized email list before showing inventory management.
- Current demo authorized emails:
  admin@purepick.com
  manager@purepick.com
- To change authorized members, edit ADMIN_EMAILS in js/admin.js.
- This is browser-only demo security. For a real deployed website, use server-side authentication and roles.

ADMIN PRODUCT IMAGES
- You can upload an image file or enter an image URL.
- Uploaded local images are stored as data URLs, so they do not depend on an external image host.
