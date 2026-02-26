E-Commerce Electronics Store
│
├── Root Layout                 (DONE)✔✔
│   ├── Navbar
│   │   ├── Logo
│   │   ├── Search Bar
│   │   ├── Categories Dropdown
│   │   ├── Cart Icon (Protected Access)
│   │   └── User Menu
│   │       ├── Profile
│   │       ├── Orders
│   │       └── Logout
│   │
│   └── Footer                 (DONE)✔✔
│       ├── About
│       ├── Contact
│       ├── Links
│       └── Social Media
│
├── Home Page (/)                 (DONE)✔✔
│   ├── Hero Section
│   │   ├── Banner Slider
│   │   └── CTA Button
│   │
│   ├── Categories Section
│   │   └── Category Card[]
│   │
│   ├── Featured Products Section
│   │   ├── Product Grid
│   │   │   └── Product Card
│   │   │       ├── Image (Skeleton Support)
│   │   │       ├── Title
│   │   │       ├── Price
│   │   │       ├── Rating
│   │   │       └── Add To Cart (Auth Check)
│   │   ├── Loading State
│   │   └── Error State
│   │
│   └── Newsletter Section
│
├── Products Page (/products)                 (DONE)✔✔
│   ├── Page Header
│   │   ├── Title
│   │   └── Results Count
│   │
│   ├── Filters Sidebar
│   │   ├── Category Filter
│   │   ├── Price Range
│   │   ├── Brand Filter
│   │   ├── Rating Filter
│   │   └── Sort Dropdown
│   │
│   ├── Products Grid
│   │   ├── Skeleton Grid (Loading)
│   │   ├── Error Component
│   │   ├── Empty State
│   │   └── Product Card[]
│   │
│   └── Pagination
│
├── Product Details Page (/products/:id)                 (DONE)✔✔
│   ├── Breadcrumb
│   │
│   ├── Product Main Section
│   │   ├── Image Gallery
│   │   │   ├── Main Image (Skeleton)
│   │   │   └── Thumbnails
│   │   │
│   │   └── Product Info
│   │       ├── Title
│   │       ├── Brand
│   │       ├── Rating
│   │       ├── Price
│   │       ├── Discount Badge
│   │       ├── Stock Status
│   │       ├── Description
│   │       ├── Quantity Selector
│   │       └── Add To Cart Button (Protected)
│   │
│   ├── Related Products Section
│   │   └── Product Card[]
│   │
│   ├── Loading State
│   └── Error State (404 Not Found)
│
├── Cart Page (/cart) [Protected]                 (DONE)✔✔
│   ├── Page Header
│   │
│   ├── Cart Content
│   │   ├── Cart Items List
│   │   │   └── Cart Item
│   │   │       ├── Product Image
│   │   │       ├── Product Title
│   │   │       ├── Price
│   │   │       ├── Quantity Controls
│   │   │       ├── Subtotal
│   │   │       └── Remove Button
│   │   │
│   │   └── Empty Cart State
│   │
│   └── Cart Summary
│       ├── Subtotal
│       ├── Shipping
│       ├── Tax
│       ├── Total
│       └── Checkout Button
│
├── Checkout Page (/checkout) [Protected]
│   ├── Shipping Information
│   │   ├── Full Name
│   │   ├── Address
│   │   ├── Phone
│   │   └── City
│   │
│   ├── Payment Method
│   │   ├── Card Details
│   │   └── Cash On Delivery
│   │
│   ├── Order Summary
│   │   ├── Items
│   │   ├── Total
│   │   └── Confirm Order Button
│   │
│   ├── Loading State
│   └── Error State
│
├── Login Page (/login)
│   ├── Login Form
│   │   ├── Email Input
│   │   ├── Password Input
│   │   ├── Validation Errors
│   │   └── Submit Button
│   │
│   ├── Remember Me
│   ├── Forgot Password Link
│   └── Redirect After Login
│
├── Register Page (/register)
│   ├── Register Form
│   │   ├── First Name
│   │   ├── Last Name
│   │   ├── Email
│   │   ├── Password
│   │   ├── Confirm Password
│   │   ├── Validation Errors
│   │   └── Submit Button
│   │
│   └── Redirect After Register
│
├── Add Product Page (/add-product) [Protected]
│   ├── Product Form
│   │   ├── Title
│   │   ├── Description
│   │   ├── Price
│   │   ├── Category
│   │   ├── Brand
│   │   ├── Stock
│   │   ├── Image Upload
│   │   └── Submit Button
│   │
│   ├── Success Message
│   └── Error Message
│
├── Profile Page (/profile) [Protected]
│   ├── User Info
│   ├── Edit Profile
│   └── Orders History
│
├── Global States
│   ├── Auth Context
│   ├── Cart Context
│   └── UI Context (Loading / Toast)
│
├── Global UI Components
│   ├── Page Loader (Route Transition)
│   ├── Skeleton Components
│   ├── Error Boundary
│   ├── Toast Notifications
│   └── Protected Route Wrapper
│
└── Error Pages
    ├── 404 Page
    └── Generic Error Page