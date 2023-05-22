import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { SiLivechat } from "react-icons/si";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
const contactDetails = [
    {
        icon: <FaEnvelope className='contact__icon'/>,
        title:'Email',
        day: 'Monday to Friday Expected',
        responseTime: '72 hours',
        btn: 'Send Email'
    },
    {
        icon: <SiLivechat className='contact__icon'/>,
        title:'Live Chat',
        day: 'Wednesday to Friday Expected',
        responseTime: '72 hours',
        btn: 'Chat Now'
    },
    {
        icon: <HiChatBubbleLeftRight className='contact__icon'/>,
        title:'Community Forum',
        day: 'Wednesday to Friday Expected',
        responseTime: '72 hours',
        btn: 'Ask The Community'
    },
]
const ContactCard = () => {
  return (
    <div>
        <div className='row'>
            {contactDetails.map((currEle,index)=>{
                return (
                    <div className='col-md-4 mb-3'>
                    <div className='main_contact_card'>
                        {currEle.icon}
                        <p className='fw-bold my-2'>{currEle.title}</p>
                        <p className='contact__pp'>{currEle.day}</p>
                        <p className='contact__pp'>Response time: {currEle.responseTime}</p>
                        <p className='mt-2 contact__btn'>{currEle.btn} <span><MdKeyboardDoubleArrowRight/></span></p>
                    </div>
                </div>
                )
            })}

        </div>
    </div>
  )
}

export default ContactCard