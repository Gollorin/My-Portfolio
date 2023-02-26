import LinkedInLogo from '../../pictures/LinkedInLogo.svg';
import GitHubLogo from '../../pictures/GithubLogo.svg';
import './Footer.css';

function Footer() {

  const handleClick = () => {
    const element = document.getElementById('top');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <footer className="site-p">

            <div className="foot-div">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/simon-adam24" target={'_blank'}>
                            <img src={LinkedInLogo} alt="linked"></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Gollorin" target={'_blank'}>
                            <img src={GitHubLogo} alt="github"></img>
                        </a>
                    </li>
                </ul>
                <button onClick={handleClick} id='up'>UP</button>
            </div>
            <div className="text-copy">
                <h3>Copyright &copy;2023 Simon Adam. Designed & Built by Me</h3>
            </div>

        </footer>
    );
  }
  
export default Footer;