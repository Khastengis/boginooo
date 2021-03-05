import React, { useState, useContext } from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { auth } from '../firebase'
import {useHistory} from 'react-router-dom';
import { AuthContext } from '../provider/user-provider'

export const Login = () => {

    const [form, setForm] = useState({email: "", password: ""});
    const [check, setCheck] = useState("");
    const history= useHistory();
    const { user } = useContext(AuthContext);
    console.log(user)
    if (user) {
        history.push("/");
    }

    const login = () => {

        const { email, password } = form;
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log(userCredential.user)
            history.push("/");
        })
        .catch((error) => {
            let err;
            err = error.message;
            setCheck(err);
            console.log(err);
        });
    }

    const handleClick = (path) => {
        history.push(path);
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
                    Нэвтрэх
                </div>


                <div>
                    <div className="ph-4 font-ubuntu fs-12 lh-18 mt-4">Цахим хаяг</div>
                    <Input className=" mt-2 h-5 w-8 ph-3" type="email" placeholder="khasa@mail.com" value={form.email} onChange = {(e) => {setForm({...form, email: e.target.value}, setCheck(""))}}/>
                </div>

                <div>
                    <div class="ph-4 font-ubuntu fs-12 lh-18 mt-4">Нууц үг</div>
                    <Input className="mt-2 h-5 w-8 ph-3" type="password" placeholder="password" value={form.password} onChange = {(e) => {setForm({...form, password: e.target.value}, setCheck(""))}}/>
                </div>

                <div class="w-8 flex justify-between items-center mt-4">
                    <div className="flex-row items-center">
                        <input type="checkbox" color="pink"></input>
                        <div class="font-ubuntu fs-12 c-primary">Намайг сана</div>
                    </div>
                    <div class="font-ubunut fs-12 underline">Нууц үгээ мартсан</div>
                </div>

                <Button className="font-ubuntu w-8 fs-20 lh-23 bold c-default h-5 ph-4 b-primary mt-4" onClick={login}> Нэвтрэх </Button>

                <div class="font-ubuntu fs-12 c-primary underline mt-4" onClick={() => handleClick("/signup")}>Шинэ хэрэглэгч бол энд дарна уу</div>

                <div className="mt-4 c-red">
                    {check}
                </div>
            </div>
        </Layout>
    )
} 