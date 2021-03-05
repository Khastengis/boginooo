import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';

export const HomeDefault = () => {
    return (
        <Layout>
            <div className='h100 flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-56 lh-70'>
                    Boginoo
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <Input className="h-5 w-8 ph-3" placeholder='https://www.web-huudas.mn' />
                    <Button className="font-ubuntu fs-19 lh-23 bold c-default h-5 ph-4 py-2 ml-3 b-primary">Богиносгох</Button>
                </div> 
            </div>
        </Layout>
    )
}