╔══════════════════════════════════════════════════════════════╗
║                        APPLICATION LAYER                     ║
╚══════════════════════════════════════════════════════════════╝

                            ┌───────────────────────┐
                            │        APP LAYOUT     │
                            │  ──────────────────── │
                            │  Navbar               │
                            │  Footer               │
                            │  Global Page Loader   │
                            │  Toast System         │
                            └───────────┬───────────┘
                                        │
                                        ▼

╔══════════════════════════════════════════════════════════════╗
║                          ROUTING LAYER                       ║
╚══════════════════════════════════════════════════════════════╝

        ┌───────────────────────────┐     ┌───────────────────────────┐
        │       PUBLIC ROUTES       │     │      PROTECTED ROUTES     │
        ├───────────────────────────┤     ├───────────────────────────┤
        │                           │     │                           │
        │  /                        │     │  /cart                    │
        │  /products                │     │  /checkout                │
        │  /products/:id            │     │  /add-product             │
        │  /login                   │     │  /profile                 │
        │  /register                │     │                           │
        │                           │     │   (Require Auth Guard)    │
        └───────────────┬───────────┘     └───────────────┬───────────┘
                        │                                   │
                        └───────────────┬───────────────────┘
                                        ▼

╔══════════════════════════════════════════════════════════════╗
║                         PAGE STRUCTURE                       ║
╚══════════════════════════════════════════════════════════════╝

HOME
    ├─ Hero Section
    ├─ Categories Preview
    ├─ Featured Products (Skeleton + Error State)
    └─ Newsletter

PRODUCTS
    ├─ Filters Sidebar
    ├─ Products Grid
    │   ├─ Skeleton State
    │   ├─ Error State
    │   └─ Product Card[]
    └─ Pagination

PRODUCT DETAILS
    ├─ Image Gallery (Skeleton Support)
    ├─ Product Info
    │   ├─ Title / Brand / Rating
    │   ├─ Price / Discount
    │   ├─ Stock Status
    │   ├─ Quantity Selector
    │   └─ Add To Cart (Auth Check)
    ├─ Related Products
    └─ 404 Error State

CART (Protected)
    ├─ Cart Items List
    ├─ Quantity Controls
    ├─ Remove Item
    ├─ Empty State
    └─ Cart Summary

CHECKOUT (Protected)
    ├─ Shipping Info
    ├─ Payment Method
    ├─ Order Summary
    └─ Confirm Order

AUTH
    ├─ Login Form (Validation + Error Handling)
    └─ Register Form (Validation + Error Handling)

ADD PRODUCT (Protected)
    ├─ Product Form
    ├─ Validation Errors
    ├─ Success State
    └─ Error State


╔══════════════════════════════════════════════════════════════╗
║                          STATE LAYER                         ║
╚══════════════════════════════════════════════════════════════╝

                    ┌─────────────────────┐
                    │     AUTH CONTEXT    │
                    │─────────────────────│
                    │ user                │
                    │ isAuthenticated     │
                    │ login()             │
                    │ logout()            │
                    └──────────┬──────────┘
                                │
                                ▼
                    ┌─────────────────────┐
                    │     ROUTE GUARD     │
                    │─────────────────────│
                    │ if !isAuthenticated │
                    │    → redirect login │
                    └──────────┬──────────┘
                                │
                                ▼
                    ┌─────────────────────┐
                    │     CART CONTEXT    │
                    │─────────────────────│
                    │ items[]             │
                    │ addToCart()         │
                    │ removeItem()        │
                    │ updateQuantity()    │
                    │ clearCart()         │
                    └─────────────────────┘


╔══════════════════════════════════════════════════════════════╗
║                     REQUEST / DATA FLOW                      ║
╚══════════════════════════════════════════════════════════════╝

User Action
    │
    ▼
Component
    │
    ▼
API Service (Dummy JSON)
    │
    ├─ Loading → Show Skeleton
    ├─ Success → Render Data
    └─ Error   → Render Error Component