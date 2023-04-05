//@ts-nocheck
import {useState} from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import waitlist from '@zootools/waitlist-js'

export default function WaitList() {
 

  const clickPopup = (event) => {
    event.preventDefault();
  
    // Pass your waitlist ID
    waitlist.openPopup("EsVeoDMy1PfGBvZv23r9")
  }


  return (
    <div>
     
<button onClick={clickPopup} className="bg-purple-600 px-3 py-3 w-[200px] rounded-lg font-semibold text-white text-lg hover:bg-purple-500 mt-4"> Join waitlist</button>

   
    </div>
  )
}
