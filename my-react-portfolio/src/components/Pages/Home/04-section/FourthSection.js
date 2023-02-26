import LinkIcon from '../../../../pictures/LinkIcon.svg';
import FolderIcon from '../../../../pictures/FolderIcon.svg';
import TerminalIcon from '../../../../pictures/TerminalIcon.svg';
import WebIcon from '../../../../pictures/WebIcon.svg';
import './FourthSection.css';

function FourthSection() {
    return (
        <section className='sec-four' id='project'>
            <h1 className='sec-header'><span>4.</span> Project Showcase</h1>
            <hr></hr>


            <div className='tab-container'>

                <div className='center-tab'>
                    <a href='/terms' target='_blank'>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div className='img-cont'>
                                        <img src={FolderIcon} alt='icon'></img>
                                        <img src={LinkIcon} alt='icon' className='link'></img>
                                    </div>
                                    <h2>PetWise</h2>
                                    <h3>Still in progress, should help pet owners with normal stuff, like feeding alerts.</h3>
                                    <p>SQL server, C# api, SwiftUI</p>
                                </div>
                                <div class="flip-card-back">
                                    <h3>Show project!</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className='center-tab'>
                    <a href='/terms' target='_blank'>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div className='img-cont'>
                                        <img src={TerminalIcon} alt='icon'></img>
                                        <img src={LinkIcon} alt='icon' className='link'></img>
                                    </div>
                                    <h2>Midnight Commander</h2>
                                    <h3>Copy of official midnight commander my first project written in high school</h3>
                                    <p>C#</p>
                                </div>
                                <div class="flip-card-back">
                                    <h3>Show project!</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className='center-tab'>
                    <a href='/terms' target='_blank'>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div className='img-cont'>
                                        <img src={TerminalIcon} alt='icon'></img>
                                        <img src={LinkIcon} alt='icon' className='link'></img>
                                    </div>
                                    <h2>UML Diagram</h2>
                                    <h3>Copy of official midnight commander my first project written in high school</h3>
                                    <p>C#</p>
                                </div>
                                <div class="flip-card-back">
                                    <h3>Show project!</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className='center-tab'>
                    <a href='/terms' target='_blank'>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div className='img-cont'>
                                        <img src={WebIcon} alt='icon'></img>
                                        <img src={LinkIcon} alt='icon' className='link'></img>
                                    </div>
                                    <h2>My Portfolio</h2>
                                    <h3>My personal portfolio, to get in touch with others developers.</h3>
                                    <p>React</p>
                                </div>
                                <div class="flip-card-back">
                                    <h3>Show project!</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className='center-tab'>
                    <a href='/terms' target='_blank'>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div className='img-cont'>
                                        <img src={TerminalIcon} alt='icon'></img>
                                        <img src={LinkIcon} alt='icon' className='link'></img>
                                    </div>
                                    <h2>Midnight Commander</h2>
                                    <h3>Copy of official midnight commander my first project written in high school</h3>
                                    <p>C#</p>
                                </div>
                                <div class="flip-card-back">
                                    <h3>Show project!</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className='center-tab'>
                    <a href='/terms' target='_blank'>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <div className='img-cont'>
                                        <img src={TerminalIcon} alt='icon'></img>
                                        <img src={LinkIcon} alt='icon' className='link'></img>
                                    </div>
                                    <h2>Midnight Commander</h2>
                                    <h3>Copy of official midnight commander my first project written in high school</h3>
                                    <p>C#</p>
                                </div>
                                <div class="flip-card-back">
                                    <h3>Show project!</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            

            </div>
        </section>
    );
}

export default FourthSection;