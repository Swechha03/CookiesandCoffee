import  './HomePage.css';
import HomePagePicture from '../assets/cookiesandcoffee.jpg';
import {Link} from 'react-router-dom'

export function HomePage() {

    return (
        <>
                <header>
                    <nav>
                        <div className="headerOptions">
                            <Link to="/Menu">Browse Menu </Link>
                            <Link to="/Locations">Locations </Link>
                            <Link to="/AboutUS">About Us </Link>
                            <Link to="/CustomerStories">Customer Stories </Link>

                        </div>

                    </nav>
                </header>

                <div className="Homepage">
                    <div className="sideDiv">
                        <p> Freshly brewed coffee & warm cookies — made with love 🍪☕ </p>
                        <p> Click below to order your favorites!✨</p>
                        <button> Order</button>
                    </div>
                    <div className="homepageImageDiv">
                        <img className="homepagePicture" src={HomePagePicture} alt="An image of a table with cookies and coffee" />
                    </div>

                </div>

                <footer>
        <div className="footer-content">
            <div className="footer-links">
                <h4> Quick Links</h4>
                <ul>
                    <li> <Link to="/HomePage"> Home </Link></li>
                    <li> <Link to="/Menu"> Menu </Link></li>
                    <li> <Link to="/AboutUS"> About Us </Link></li>
                    <li> <Link to="/Locations"> Locations </Link></li>
                    <li> <Link to="/CustomerStories"> Customer Stories </Link></li>
                </ul>

            </div>
            <div className="footer-contact">
                <h4> Contact Us </h4>
                <ul>
                    <li> Phone Number: +1 000-000-0000</li>
                    <li>Email: @gmail.com</li>
                </ul>

            </div>
            <div className="footer-social">
                <h4> Follow Us</h4>
                <ul>
                    <li> Instagram: cookiesandcoffeeSac</li>
                    <li> Facebook: <a href="www.facebook.com">Facebook Link </a></li>
                </ul>


            </div>
        </div>
    </footer>

        </>
    )
}