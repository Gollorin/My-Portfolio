import AboutMePhoto from '../../../../pictures/AboutMePhoto.svg';
import CV from '../../../../files/Simon_Adam_CV.pdf';
import './SecondSection.css';

function SecondSection() {
    return (
        <section className='sec-two' id='about'>
            <h1 className='sec-header'><span>2.</span> Get to Know Me</h1>
            <hr></hr>
            <div className='content-cont'>
                <div className='text-container'>
                    <p>Hello! <span>My name is Simon and I'm a developer</span>. I have always had a passion for technology and creating things that people can interact with. In <span>2018</span>, I discovered computer science and it quickly became my hobby. Since then, I have been dedicating myself to learning as much as I can about development. <span><strong><a href={CV} download='Simon_Adam_CV' className='a-link'>You can also download my resume.</a></strong></span></p>
                    <p><span>I'm mostly self-taught developer</span> and I constantly seeking new challenges and opportunities to learn. For me the best way to learn is by taking on interesting projects and working with others in a team environment.</p>
                    <p>My vision for the future as a developer <span>is to constantly improve</span>, take on exciting projects, and build innovative solutions that make a difference.</p>
                    <p>I have worked on various projects involving:</p>
                    <ol>
                        <li><p>React</p></li>
                        <li><p>Swift</p></li>
                        <li><p>PHP</p></li>
                        <li><p>Azure - SQL Server</p></li>
                        <li><p>C# - ASP.NET, API</p></li>
                        <li><p>HTML & CSS & SASS</p></li>
                    </ol>
                </div>
                <div className='img-cont'>
                    <img src={AboutMePhoto} alt='ilustation'></img>
                </div>
            </div>
        </section>
    );
}

export default SecondSection;