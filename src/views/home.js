import React from 'react';
import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppFeature from '../components/home/feature';
import AppWorks from './../components/home/works';
import AppFaq from '../components/home/faq';
const AppHome = ()=>{
    return(
        <div className='main'>
            <AppHero/>
            <AppAbout/>
            <AppFeature />
            <AppWorks />
            <AppFaq/>
        </div>
    )
}

export default AppHome;