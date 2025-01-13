import React, { useRef, useState } from 'react';
import '../Styles/ContactSection.css';
import SectionCounter from '../UI/SectionCounter';
import SectionTitle from '../UI/SectionTitle';
import { PersonalContactInformationIcons } from '../UI/IconsLogoPrefab';
import { InputFieldText, InputFieldTextArea, InputFieldEmail } from '../UI/InputFieldsPrefab';
import PrimaryButtonPrefab from '../UI/ButtonsPrefab';
import * as Yup from 'yup';
import { ToastError, ToastSuccess } from '../UI/ToastMessage';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const [loading, setLoading] = useState(false);
    const [validationErrors, setValidationErrors] = useState({})
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        phoneNumber: '',
        message:''
    });

    const handleOnChange = (e) => {
        const {name, value} = e.target;

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const validationSchema = Yup.object({
        name: Yup.string()
        .matches(/^[a-zA-Z0-9.,\s]+$/, 'Name can only contain letters, numbers, commas, and dots')
        .required('Name is required'),
        email:Yup.string().email('Enter a  valid email').required('Email is required'),
        phoneNumber: Yup.string()
        .matches(/^[0-9]+$/, 'Phone number must only contain numbers')
        .required('Phone number is required'),
        message: Yup.string().required('Message is required')
    })

    const clearFields = () => {
        setFormData({
            name: '',
            email:'',
            phoneNumber: '',
            message:''
        })
    }

    const submit = async(e) => {
        e.preventDefault();
        setLoading(true);

        try { 
            await validationSchema.validate(formData, { abortEarly: false });

            await emailjs.sendForm('service_u398ae7', 'template_m79e3gs', formRef.current, {
                publicKey: 'fSRcT2vM42Ic2rXsD',
            })

            ToastSuccess('Message Has Been Submitted');
            clearFields();
            setValidationErrors({});
        }
        catch(error) {
            if(error instanceof Yup.ValidationError){
                const formatErrors = {};

                error.inner.forEach(err => {
                    formatErrors[err.path] = err.message;
                });

                setValidationErrors(formatErrors);
            }else {
                ToastError(error);
                console.error(error);
            }
        }
        finally {
            setLoading(false);   
        }
    }

  return (
    <div className='contact-section'>
      <div className='contact-section__wrapper'>
            <SectionCounter count='4' />
        <div className='contact-section__body'>
            <div className='contact-section__information-wrapper'>
                <div className='contact-section__information-title'>
                    <SectionTitle title='Get In Touch With Me' customClass='contact-section__section-title' />
                    <p>Feel free to reach out to me in case you want to hire me, collaborate on a project, or just say hello.</p>
                </div>
                <div className='contact-section__personal-details-wrapper'>
                    <PersonalContactInformationIcons icon='fa-envelope' description='steven.yecla@outlook.com' />
                    <PersonalContactInformationIcons icon='fa-phone' description='09217892775' />
                    <PersonalContactInformationIcons icon='fa-house' description='San Isidro, Cabuyao, Laguna' />
                </div>
            </div>
            <div className='contact-section__contact-form-wrapper'>
                <h3>Send A Message</h3>
                <form ref={formRef}>
                    <InputFieldText label='Name' name='name' value={formData.name} onChange={handleOnChange}/>
                    <InputFieldEmail label='Email' name='email' value={formData.email} onChange={handleOnChange}/>
                    <InputFieldText label='Phone Number' name='phoneNumber' value={formData.phoneNumber} onChange={handleOnChange}/>
                    <InputFieldTextArea label='Message' name='message' value={formData.message} onChange={handleOnChange}/>

                    {
                        Object.keys(validationErrors).length > 0 ? (
                            <div className='contact-section__errors-wrapper'>
                                <li>{validationErrors.name}</li>
                                <li>{validationErrors.email}</li>
                                <li>{validationErrors.phoneNumber}</li>
                                <li>{validationErrors.message}</li>
                            </div>
                        ):(
                            <></>
                        )

                    }

                    <PrimaryButtonPrefab customClass={loading ? 'disabled-button':''} label='Submit Message' disabled={loading} onClick={submit}/>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
