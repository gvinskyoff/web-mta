import './_community.scss';

import Discord from '../../assets/images/community/discord.png';
import Steam from '../../assets/images/community/steam.png';
import Twitter from '../../assets/images/community/twitter.png';
import Facebook from '../../assets/images/community/facebook.png';
import ModDb from '../../assets/images/community/moddb.png';
import YouTube from '../../assets/images/community/youtube.png';

const Community = () => {
    const community = [
        { id: 1, name: 'Discord', url: 'https://discord.com/invite/mtasa', target: '_blank', img: Discord },
        { id: 2, name: 'Steam', url: 'https://steamcommunity.com/groups/mta', target: '_blank', img: Steam },
        { id: 3, name: 'Twitter', url: 'https://twitter.com/mtaqa', target: '_blank', img: Twitter },
        { id: 4, name: 'Facebook', url: 'https://www.facebook.com/multitheftauto', target: '_blank', img: Facebook },
        { id: 5, name: 'ModDb', url: 'https://www.moddb.com/mods/multi-theft-auto-san-andreas', target: '_blank', img: ModDb },
        { id: 6, name: 'YouTube', url: 'https://www.youtube.com/user/mtaqa', target: '_blank', img: YouTube },
    ]

    return ( 
        <div className="mta_community">
            <div className="mta_wrapper">
                <div className="mta_community_content">
                    <h1>Find us on these sites</h1>
                    <div className="mta_community_nav">
                        {community.map((object) => (
                        <a key={object.id} href={object.url} target={object.target} className="mta_community_link">
                            <img src={object.img} alt={object.name} />
                        </a>
                        ))}
                    </div>                    
                </div>
            </div>
        </div>        
    );
}
 
export default Community;