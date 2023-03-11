//@ts-nocheck
import {useState} from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { useMailchimpSubscription } from 'react-mailchimp-subscribe';
export default function WaitList() {
  const [email, setEmail] = useState('');
  const url = "https://gmail.us12.list-manage.com/subscribe/post?u=9e69608cc483bfec9986b331f&amp;id=adb00b588e&amp;f_id=007756e0f0"
  const SimpleForm = () => <MailchimpSubscribe url={url}/>
/*  const { subscribe, status, message } = useMailchimpSubscription({
    url: url
  });*/

  const handleSubmit = async  => {
   // event.preventDefault();
    subscribe({ EMAIL: email });
  };
  return (
    <div>
       <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div className='flex flex-col gap-4 justify-center items-center '>
         <input   type="email"  value={email} onChange={e => setEmail(e.target.value)} className="border border-gray-300 rounded-lg px-2 py-2 w-[400px] focus:outline-none" 
           placeholder='example@gmail.com'
         />
          <button onClick={() => subscribe(email)} className="bg-purple-600 px-3 py-3 w-[200px] rounded-lg font-semibold text-white text-lg hover:bg-purple-500"> {status === "sending" ? "Joining" : "Join waitlist"}</button>
        {/*status === "sending" && <div style={{ color: "blue" }}>sending...</div>*/}
        {status === "error" && toast.error(message, {position : toast.POSITION.BOTTOM_RIGHT})}
        {status === "success" && toast.success("Joined !", {position : toast.POSITION.BOTTOM_RIGHT})}
      </div>
    )}
  />
    </div>
  )
}
