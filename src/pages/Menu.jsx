import './Menu.css';
import { Header } from './Header.jsx';

export function Menu() {
  const drinksMenu = [
    { Name: 'Home Latte', Description: 'Our latte is made with rich espresso and creamy milk, crafted to perfection.' },
    { Name: 'Mocha Bliss', Description: 'A smooth blend of espresso, cocoa, and steamed milk topped with whipped cream.' },
    { Name: 'Caramel Cloud', Description: 'Sweet caramel drizzle over velvety milk and espresso for a dreamy sip.' },
    { Name: 'Hazelnut Harmony', Description: 'A nutty twist on your classic coffee, made with aromatic hazelnut syrup.' },
    { Name: 'Vanilla Velvet', Description: 'Silky smooth espresso and vanilla essence come together in this comforting drink.' },
    { Name: 'Matcha Glow', Description: 'Premium Japanese matcha whisked to frothy perfection with steamed milk.' },
    { Name: 'Coconut Breeze', Description: 'A refreshing iced coffee with creamy coconut milk and a hint of sweetness.' },
    { Name: 'Cinnamon Spice', Description: 'Warm espresso infused with cinnamon and brown sugar for a cozy flavor.' },
    { Name: 'Iced Honey Latte', Description: 'Chilled espresso sweetened with honey and poured over cold milk and ice.' },
    { Name: 'Mocha Mint Chill', Description: 'A cool fusion of chocolate, espresso, and mint for the perfect refreshing treat.' }
  ];

  const pastriesMenu = [
    { Name: 'Almond Croissant', Description: 'Flaky buttery layers filled with sweet almond cream and topped with sliced almonds.' },
    { Name: 'Chocolate Éclair', Description: 'Light choux pastry filled with rich vanilla custard and glazed with chocolate.' },
    { Name: 'Berry Danish', Description: 'Golden pastry topped with fresh berries and a swirl of creamy custard.' },
    { Name: 'Cinnamon Roll', Description: 'Soft, spiraled pastry coated with cinnamon sugar and drizzled with icing.' },
    { Name: 'Lemon Tart', Description: 'Crisp pastry crust filled with tangy lemon curd and a dusting of powdered sugar.' },
    { Name: 'Blueberry Muffin', Description: 'Moist muffin packed with juicy blueberries and a crunchy sugar top.' },
    { Name: 'Vanilla Cream Puff', Description: 'Delicate pastry shell filled with smooth vanilla cream and lightly dusted with sugar.' },
    { Name: 'Apple Strudel', Description: 'Layers of pastry wrapped around warm spiced apples and raisins.' },
    { Name: 'Raspberry Scone', Description: 'Buttery, crumbly scone bursting with tart raspberries and a hint of vanilla.' },
    { Name: 'Chocolate Chip Cookie', Description: 'Classic soft-baked cookie loaded with gooey chocolate chips and rich flavor.' }
  ];

  return (
    <>
      <Header />
      <h1 className="menuTitle">Our Menu</h1>

      <h2 className="drinksTitle">Drinks Menu</h2>
      <div className="menuItems">
        {drinksMenu.map((drink, index) => (
          <div key={index} className="menuCard">
            <h3>{drink.Name}</h3>
            <p>{drink.Description}</p>
          </div>
        ))}
      </div>

      <div className="sectionDivider"></div>

      <h2 className="pastriesTitle">Pastries Menu</h2>
      <div className="menuItems">
        {pastriesMenu.map((pastry, index) => (
          <div key={index} className="menuCard">
            <h3>{pastry.Name}</h3>
            <p>{pastry.Description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
