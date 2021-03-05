import React, { useState } from 'react';
import { Button } from './';
import {useLocation, useHistory} from 'react-router-dom';
import { auth, createDoc, firestore} from '../firebase'
import { IconMenu } from '../components'


export const Navigation = (props) => {
    const [mail, setMail] = useState("");
    const [user, setUser] = useState(false);
    const history=useHistory();
    const handleClick = (path) => {
        history.push(path);
    }

    const location = useLocation();

    const Logout = () => {
        auth
          .signOut()
          .then(() => {
            history.push("/");
            setUser(false);
          })
          .catch((error) => {});
      };

    auth.onAuthStateChanged(function(user) {
        if (user) {
          setMail(user.email);
          console.log(user)
          setUser(true);
        } else {
          // No user is signed in.
        }
      });

    return (
        <div className='w100 flex justify-end items-center'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            
            { !user && !location.pathname.match('/login') && !location.pathname.match('/signup') && <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary' onClick={() => handleClick("/login")}> Нэвтрэх </Button>}
            { user && <div className="font-ubuntu fs-20 lh-23 bold ml-5 mr-5" > {mail} <svg onClick={Logout} width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L10.5 10.5L19 2" stroke="#02B589" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> </div>}
            

        </div>
    );
};