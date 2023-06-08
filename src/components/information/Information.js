import './_information.scss';

import Poster_1 from './../../assets/images/posters/poster-1.jpg';
import Poster_2 from './../../assets/images/posters/poster-2.jpg';
import Poster_3 from './../../assets/images/posters/poster-3.jpg';

const Information = () => {
    return (
        <div id="mta-info" className="mta_info">
            <div className="mta_wrapper">
                <div className="mta_info_column">
                    <div className="mta_info_row">
                        <div className="mta_info_col">
                            <div className="mta_info_content_image">
                                <img 
                                    src={Poster_1}
                                    alt="Reliable and accurate"
                                />
                            </div>
                        </div> 
                        <div className="mta_info_col">
                            <div className="mta_info_content_descr">
                                <h1>Reliable and accurate</h1>
                                <p>
                                    If you've played Grand Theft Auto online in the past, 
                                    you'll know that the accuracy of the reproduction of 
                                    other player's actions often leaves a lot to be desired. 
                                    This is a hard thing to get perfect, but Multi Theft Auto 
                                    has the best GTA synchronization out there and it's getting 
                                    better all the time! Want to shoot someone's limbs one by one? 
                                    MTA makes that possible!
                                </p>
                            </div>
                        </div>                                              
                    </div>
                    <div className="mta_info_row">
                        <div className="mta_info_col mta_order_1">
                            <div className="mta_info_content_image">
                                <img 
                                    src={Poster_2}
                                    alt="A great community"
                                />
                            </div>
                        </div>                         
                        <div className="mta_info_col">
                            <div className="mta_info_content_descr">
                                <h1>A great community</h1>
                                <p>
                                    Online games are all about their community, 
                                    and Multi Theft Auto has a great community! 
                                    We've got a great forum  where you can get 
                                    support for any problems you have playing MTA, 
                                    get help with scripting problems or just hang out 
                                    and chat. We also run a special site for 
                                    downloading game modes and maps that members of 
                                    the community have created.
                                </p>
                            </div>
                        </div>                                              
                    </div>
                    <div className="mta_info_row">
                        <div className="mta_info_col">
                            <div className="mta_info_content_image">
                                <img 
                                    src={Poster_3}
                                    alt="Open source"
                                />
                            </div>
                        </div> 
                        <div className="mta_info_col">
                            <div className="mta_info_content_descr">
                                <h1>Open source</h1>
                                <p>
                                    Multi Theft Auto is Open Source. 
                                    This means anyone can contribute to making 
                                    Multi Theft Auto even better!
                                </p>
                            </div>
                        </div>                                              
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Information;