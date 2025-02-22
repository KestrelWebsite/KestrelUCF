import './NavBar.css';
import { Link } from 'react-router-dom';


export default function NavBar(){
    return(
        <header className='Nav-bar'>
            <div className='space'>
                <ul>
                    <li><Link to='/About/'  className='btn-navbar'>About</Link></li>
                    <li><Link to='https://github.com/Autonomous-droneProject/Main'  className='btn-navbar'>Github</Link></li>
                    <li><Link to='/Photos/'  className='btn-navbar'>Photos</Link></li>
                    <li><Link to='/Timeline/'  className='btn-navbar'>Timeline</Link></li>
                </ul>
            </div>
        </header>
    )};