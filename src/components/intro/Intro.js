import './_intro.scss';

import axios from 'axios';
import { useQuery } from 'react-query';

import { AiOutlineCloudDownload } from 'react-icons/ai';

import Typewriter from 'typewriter-effect';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Intro = () => {
    async function getStats () {
        const { data } = await axios.get('https://multitheftauto.com/count/');
        const [part1, part2] = data.split(',');
        return {part1: part1, part2: part2};
    };

    const { data, isLoading, isError } = useQuery('stats', getStats);

    const download = () => {
        toast('🦄 The download has started!', { position: "top-center", autoClose: 2500, theme: "dark" });
    };

    return ( 
        <div className="mta_intro">
            <div className="mta_wrapper">
                <div className="mta_intro_row">
                    <div className="mta_intro_col">
                        <div className="mta_intro_content">
                            <h1><Typewriter
                                options={{
                                    strings: ['Fun, Free and Easy!', 'Multi Theft Auto', '20th Year Anniversary!'],
                                    autoStart: true,
                                    loop: true,
                            }}/></h1>
                            <p>
                                What more could you want? 
                                Multi Theft Auto provides the best online 
                                Grand Theft Auto experience there is. <a href="#mta-info">Read on to find out more.</a>
                            </p>
                            <a 
                                href="https://mirror-cdn.multitheftauto.com/mtasa/main/mtasa-1.5.9.exe" 
                                className="mta_intro_download"
                                onClick={download}
                            >
                                <AiOutlineCloudDownload /> Download
                            </a>
                        </div>
                    </div>
                    <div className="mta_intro_col">
                        <div className="mta_intro_stats">
                            {isLoading ? (
                            'Loading statistics ...'
                            ) : (
                            <>
                            {isError ? (
                            'Error statistics ...'
                            ) : (
                            <>
                            <div className="mta_stats_badge"><span>{data.part1}</span> now playing</div>
                            <hr />
                            <div className="mta_stats_badge"><span>{data.part2}</span> servers</div>
                            </>
                            )}
                            </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>        
    );
}
 
export default Intro;