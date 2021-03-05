import React, { useState, useContext } from 'react';
import { auth, createDoc, firestore} from '../firebase'
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../provider/user-provider'

export const Signup = () => {

    const [form, setForm] = useState({email: "", password: "", usename: ""});
    const [check, setCheck] = useState("");
    const { user } = useContext(AuthContext);

    const history=useHistory();

    if (user) {
        history.push("/");
    }

    const signUp = async () => {
        const {email, password, username} = form;
        auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
          console.log(userCredential.user)
          const {uid} = userCredential.user;
          createDoc(`user/${uid}`, {username, email})
          history.push("/");
        })
        .catch((error) => {
            let err;
            err = error.message;
          setCheck(err);
          console.log(err);
        });
    }

    return (
        <Layout>
            <div className='h100 flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-30 lh-32 mt-3'>
                    Boginoo
                </div>

                <div class="font-ubuntu fs-20 lh-23 bold c-primary mt-4">
                    Бүртгүүлэх
                </div>


                <div>
                    <div className="ph-4 font-ubuntu fs-12 lh-18 mt-4">Хэрэглэгчийн нэр</div>
                    <Input className=" mt-2 h-5 w-8 ph-3" type="username" placeholder="khasa" value={form.username} onChange = {(e) => {setForm({...form, username: e.target.value}, setCheck(""))}}/>
                </div>

                <div>
                    <div className="ph-4 font-ubuntu fs-12 lh-18 mt-4">Цахим хаяг</div>
                    <Input className=" mt-2 h-5 w-8 ph-3" type="email" placeholder="khasa@mail.com" value={form.email} onChange = {(e) => {setForm({...form, email: e.target.value}, setCheck(""))}}/>
                </div>

                <div>
                    <div class="ph-4 font-ubuntu fs-12 lh-18 mt-4">Нууц үг</div>
                    <Input className="mt-2 h-5 w-8 ph-3" type="password" placeholder="password" value={form.password} onChange = {(e) => {setForm({...form, password: e.target.value}, setCheck(""))}}/>
                </div>

                <Button className="font-ubuntu w-8 s-20 lh-23 bold c-default h-5 ph-4 b-primary mt-4" onClick={signUp}> Бүртгүүлэх </Button>

                <div className="mt-4 c-red">
                    {check}
                </div>

            </div>
        </Layout>
    )
}    