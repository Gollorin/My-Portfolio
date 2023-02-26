import MainPhoto from '../../../../pictures/MainPhoto.svg';
import { Link } from 'react-router-dom';
import './FirstSection.css';

function FirstSection() {
    return (
        <section className='sec-one'>
            <div className='text-container animation-from-left'>
                <h3 className='first-line'>Hi, my name is</h3>
                <h1 className='second-line'>Simon Adam.</h1>
                <h1 className='third-line'>Transform Your Ideas Into Reality With Me.</h1>
                <p>Welcome to my website! I'm a Czech junior developer and computer science student at <a href='https://fis.vse.cz' target={'_blank'} rel='noreferrer'>Faculty of Informatics</a>. I create innovative solutions and want to be a part of your projects.</p>
                <div>
                    <Link to='/contact' className='btn'>Contact me</Link>
                </div>
            </div>
            <img src={MainPhoto} alt='ilustration' className='no-mobile'></img>
        </section>
    );
}

export default FirstSection;