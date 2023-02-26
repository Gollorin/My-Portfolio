import ContactPhoto from '../../../../pictures/EmailPhoto.svg';
import { useState } from 'react';
import './FifthSection.css';

function FifthSection() {
    const[isChecked, setIsChecked] = useState(false);
    const[showModalBad, setModalBad] = useState(false);
    const[showModalGood, setModalGood] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!isChecked) {
            setModalBad(true);
            return;
        }

        // Send the form data here

        setIsChecked(false);

        const FormName = document.getElementById('FormName');
        FormName.value = "";
        const FormEmail = document.getElementById('FormEmail');
        FormEmail.value = "";
        const FormMessage = document.getElementById('FormMessage');
        FormMessage.value = "";

        setModalGood(true);
    };
        
    return (
        <>
            <button className={showModalBad ? 'showModal' : 'hideModal'} onClick={() => setModalBad(!showModalBad)}>
                <div className='Modal'>
                    <img src="" alt=""></img>
                    <h2>Warning!</h2>
                    <h4>Please accept the Terms of Service.</h4>
                    <button className='btn' onClick={() => setModalBad(!showModalBad)}>Ok</button>
                </div>
            </button>

            <button className={showModalGood ? 'showModal' : 'hideModal'} onClick={() => setModalGood(!showModalGood)}>
                <div className='Modal'>
                    <img src="" alt=""></img>
                    <h2>Thank you for contacting me!</h2>
                    <h4>We'll be in touch soon.</h4>
                    <button className='btn' onClick={() => setModalGood(!showModalGood)}>Ok</button>
                </div>
            </button>
            
            <section className='sec-five' id='contact'>
                <h1 className='sec-header'><span>5.</span> Get in Touch</h1>
                <hr></hr>

                <div className='content-cont'>
                    <div className='text-cont'>
                        <h2>You can just send "Hi"</h2>
                        <p>I'm always open for new exciting opportunities. Whether you have a project idea in mind, a job offer, or <span>simply want to say hello</span>, don't hesitate to reach out to me. You can use the form to send me a message or find me on social media. <span>So go ahead, don't be shy!</span> Let's chat and see how we can work together.</p>
                        <div className='img-cont'>
                            <img src={ContactPhoto} alt='ilustration' className='no-mobile'></img>
                        </div>
                    </div>

                    <form name='Contact-Form' onSubmit={handleSubmit} method='post' data-netlify='true' data-netlify-honeypot="bot-field">
                        
                        <input name='bot-field' hidden />

                        <div className='form-input-cont'>
                            <label>
                                <h3>Name</h3>
                                <input type={'text'} id='FormName' name='FormName' onChange={''} placeholder='Enter your Name...' required />
                            </label>

                            <label>
                                <h3>Email</h3>
                                <input type={'email'} id='FormEmail' name='FormEmail' onChange={''} placeholder='Enter your email...' required />
                            </label>

                            <label>
                                <h3>Message</h3>
                                <textarea id='FormMessage' name='FormMessage' onChange={''} placeholder='Enter your message...' required />
                            </label>
                        </div>

                        <label className='checkbox-label'>
                            <input type='checkbox' name='FormTerms' id='FormTerms' className="custom-checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                            <h3>I accept the <a href='/terms#top'>Terms of Service</a></h3>
                        </label>

                        <button type='submit' className='btn btn-form'>SEND</button>
                    </form>

                </div>
            </section>
        </>
    );
}

export default FifthSection;