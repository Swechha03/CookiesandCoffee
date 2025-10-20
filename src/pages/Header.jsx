 import './Homepage.css'
 import { Link } from 'react-router-dom';
 export function Header(){
    return(
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
        </>
    )
 
 }