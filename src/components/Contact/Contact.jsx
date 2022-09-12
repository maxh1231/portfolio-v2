import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const [view, setView] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const form = useRef();

    const sendEmail = (e) => {

        emailjs.sendForm('service_zirnhu8', 'template_z5s2y9b', form.current, 'user_MiPMA7RruofT1yJEswkdw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text)
            });

        setView(true);
    };

    return (
        <section id="contact" className="mt-72 w-[200px] sm:w-[400px] md:w-[600px] lg:w-[800px] mx-auto pb-36 z-[100]">
            <div className="text-2xl md:text-4xl text-left mb-12">
                <h3 className='text-blue-white'><span className="text-lg md:text-xl text-light-blue">04. </span>Contact <span className="relative hidden sm:inline top-6 left-4 text-dark-blue border-t border-grey">___________________</span></h3>
            </div>
            <div>
                <p className="text-2xl text-grey">Let's collaborate, my inbox is always open.</p>
            </div>
            <div>
                <form className='flex flex-col'>
                    <div>
                        <input type="text" placeholder='Name'></input>
                    </div>
                    <div>
                        <textarea placeholder='Message'></textarea>
                    </div>
                    <a href="mailto: maxhumpherys@gmail.com">
                        <button className="my-12 text-2xl px-2 py-2 text-light-blue border-2 border-light-blue rounded-md hover:text-light-blue hover:bg-light-grey">
                            Email
                        </button>
                    </a>
                </form>
            </div>
        </section>
    )
}

export default Contact;