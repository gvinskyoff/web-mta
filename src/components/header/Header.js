import './_header.scss';

import Logo from './../../assets/images/icons/mtasa.png';

const Header = () => {
    const links = [
        { id: 1, name: 'Maps and Modes', url: 'https://community.multitheftauto.com/', target: '_blank' },
        { id: 2, name: 'Forums', url: 'https://forum.multitheftauto.com/', target: '_blank' },
        { id: 3, name: 'Wiki', url: 'https://wiki.multitheftauto.com/wiki/Main_Page', target: '_blank' },
        { id: 4, name: 'Developers', url: 'https://github.com/multitheftauto/mtasa-blue', target: '_blank' },
        { id: 5, name: 'Heroes', url: 'https://multitheftauto.com/donate/', target: '_blank' },
        { id: 6, name: 'Hosting', url: 'https://multitheftauto.com/hosters/', target: '_blank' },
    ]

    return ( 
        <div className="mta_header">
            <div className="mta_wrapper">
                <div className="mta_header_content">
                    <div className="mta_header_brand">
                        <img className="mta_header_brand_img_logo" src={Logo} alt="MTA:SA" />
                        <div className="mta_header_brand_desc">
                            <a href="/" className="mta_header_brand_logo">Multi Theft Auto</a>
                            <span className="mta_header_brand_text">20th Year Anniversary</span>
                        </div>
                    </div>
                    <div className="mta_header_nav">
                        {links.map((object) => (
                            <a 
                                key={object.id} 
                                href={object.url} 
                                target={object.target} 
                                className="mta_header_nav_link"
                            >
                            {object.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Header;