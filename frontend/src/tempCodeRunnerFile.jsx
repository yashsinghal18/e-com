
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>} />
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>} />
      <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>} />
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>} />
      <Route path="/product" element={<Product/>}>
        <Route path=":productId" element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>