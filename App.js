import React from 'react';
import ReactDOM from 'react-dom';

// const title = (<h1 id="title" key="h2" >Namaste React</h1>);

const Title = () => (
  <a href="/">
    <img 
      className="logo" 
      alt="logo"      src="https://imgs.search.brave.com/hxTzM91bc3anrr3mtC3cnbiimmVHuRBT3Ki_7U_OK7E/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5f/bnNCRVBhOWNWOE9V/Yl85NktOeFpBSGFI/YSZwaWQ9QXBp"
      />
  </a>
  )


const Header = () => {
  return(
    <div className="header" >
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const restaurantList = [ {
  name : "Burger King",
  image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fhmz5im4zutsipmq3zam",
  cuisines : ["Burger", "American"],
  rating : "4.2"
}
]

const RestaurantCard = () =>{
  return(
    <div className="card" >
      <img src= {burgerKing.image} />
      <h2>{burgerKing.name}</h2>
      <h3>{burgerKing.cuisines.join(",")}</h3>
      <h4>{burgerKing.rating} stars</h4>
    </div>
  )
}

const Body = ()=>{
  return(
    <div className="restaurant-list" >
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  )
}

const Footer = ()=>{
  return(
    <h4>Footer</h4>
  )
}

const AppLayout = () => {
  return(
    <>
    <Header />
    <Body />
    <Footer />
    </>    
  )  
}

// const styleObj={
//   backgroundColor:"red",
// }
// inline styling in react
// const jsx = (
//   <div style={{
//   backgroundColor:"yellow",
// }}>
//     <h1>JSX</h1>
//     <h1>Second JSX</h1>
//   </div>
// )

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)
// root.render(<HeaderComponent />)
root.render(<AppLayout />)

