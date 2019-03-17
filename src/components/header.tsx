import * as React from 'react';
import { NavLink } from 'react-router-dom';
export const Header: React.FC<{}> = () => {
  return (
    <div className="row">
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <a className="navbar-brand" href="#">Lemoncode</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about"> About</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/members"> Members </NavLink>
                        </li>                    
                    </ul>            
                </div>
            </nav>
    </div>
  );
}