import React from 'react';

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: 'iPhones',
      image: 'https://techcrunch.com/wp-content/uploads/2022/09/Apple-iphone-14-Pro-review-1.jpeg?w=730&crop=1',
      learnMoreLink: 'https://www.apple.com/iphone/',
      buyLink: 'https://www.apple.com/shop/buy-iphone/iphone-14-pro',
    },
    {
      id: 2,
      name: 'iPads',
      image: 'https://cdn.macstories.net/13359d69-6cbb-4ade-8a47-dc272b9a8849-1632256898935.jpeg',
      learnMoreLink: 'https://www.apple.com/ipad/',
      buyLink: 'https://www.apple.com/shop/buy-ipad/ipad-pro',
    },
    {
      id: 3,
      name: 'Macs',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
      learnMoreLink: 'https://www.apple.com/mac/',
      buyLink: 'https://www.apple.com/shop/buy-mac/macbook-air',
    },
    {
      id: 4,
      name: 'Apple Watches',
      image: 'https://www.apple.com/newsroom/images/product/watch/standard/Apple-Watch-S8-2up-hero-220907.jpg.landing-big_2x.jpg',
      learnMoreLink: 'https://www.apple.com/watch/',
      buyLink: 'https://www.apple.com/shop/buy-watch/apple-watch-series-7',
    },
    {
      id: 5,
      name: 'AirPods',
      image: 'https://www.digitaltrends.com/wp-content/uploads/2019/03/apple-airpods-gen-2_feat.jpg?p=1',
      learnMoreLink: 'https://www.apple.com/airpods/',
      buyLink: 'https://www.apple.com/shop/buy-airpods/airpods-pro',
    },
    {
      id: 6,
      name: 'HomePods',
      image: 'https://tse1.mm.bing.net/th?id=OIP.pHt6mmYev55HW_sHx3h1NwHaE8&pid=Api&P=0',
      learnMoreLink: 'https://www.apple.com/homepod/',
      buyLink: 'https://www.apple.com/shop/buy-homepod/homepod-mini',
    },
  ];

  return (
    <div>
      <h4>Get free delivery, Specialist help and 3- or 6-month No Cost EMI on selected products.</h4>
      <div className="products">
        {products.map(product => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
              <a href="#" style={{ marginRight: "30px" }}>Learn more</a>
              <a href="#">Buy</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts; 
