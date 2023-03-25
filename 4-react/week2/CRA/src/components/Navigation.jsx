import {NavLink} from 'react-router-dom';

const Navigation = ({links}) => {
    return (
            <nav>
                <ul>
                {
                    links.map((link, index) => {
                      return (
                          <li key={index}><NavLink to={link.url}>{link.text}</NavLink></li>
                        )
                 })
                }
                </ul>
            </nav>
    )
}

export default Navigation;