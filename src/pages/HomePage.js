import React from 'react'
import DateDisplay from '../components/DateDisplay'
import Header from '../components/Header'
import SectionTitleBox from '../components/SectionTitleBox'
import GreenBulletPoint from '../components/GreenBulletPoint'
import ProjectSection from '../components/ProjectSection'
import HowWeWork from '../components/HowWeWork'
import AboutusSections from '../components/AboutusSections'
import QuadrantView from '../components/QuadrantView'
import WhatDoYouNeed from '../components/WhatDoYouNeed'
import BudgetInteraction from '../components/BudgetInteraction'
import Footer from '../components/Footer'
const HomePage = () => {
    let fs = 70
    return (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            <Header />
            <SectionTitleBox
                sectionTitle={<span className="wideFont weDevelopAppsForText sectionTitle caps">we develop apps for</span>}
                width={12}
                title={
                    <div style={{flexDirection:'row',display:'flex',flex:1,justifyContent:'space-between',alignItems:'center'}} >
                        <span className="businessActivityText wideFont caps bold " style={{}}>
                            Hybrid
                        </span>
                        <GreenBulletPoint />
                        <span className="businessActivityText wideFont caps bold" style={{textAlign:'center'}}>
                            Native
                        </span>
                        <GreenBulletPoint />
                        <span className="businessActivityText wideFont caps bold " style={{textAlign:'center'}}>
                            web
                        </span>
                    </div>
                }
            />

            <SectionTitleBox
                sectionTitle="our projects"
                title="case studies"
                marginBottom={70}
                hideBorder
                description="Consectetur quis mollit Lorem excepteur laborum.Amet est amet excepteur laborum.Amet est amet"
            />

            <ProjectSection left img={require('../assets/images/project1.png')} />
            <ProjectSection right img={require('../assets/images/project1.png')} />
            <ProjectSection left img={require('../assets/images/project1.png')} />
            <ProjectSection right img={require('../assets/images/project1.png')} />

            <SectionTitleBox
                sectionTitle="our process"
                title="how we work"
                marginBottom={10}
                hideBorder
                description="Consectetur quis mollit Lorem excepteur laborum.Amet est amet excepteur laborum.Amet est amet"
            />

            <div style={{ marginBottom: 40 }}>
                <HowWeWork
                    title="Identify the problem"
                    img={require('../assets/images/process1.png')}
                    description={`We'll talk about your products, ideas and create a space for us to understand your goals and for you to spar with us about the problems you're trying to solve. From this foundation we will present suggestions on how we can be of service to bring your ideas to life.`}
                />

                <HowWeWork
                    title="define the process"
                    img={require('../assets/images/process2.png')}
                    description={`Every project is different and so should the process be. We'll define a clear framework of how we communicate, exchange feedback and effectively work together. We believe openness, honesty and trust goes a long way.`}
                />

                <HowWeWork
                    title="collaborate with team"
                    img={require('../assets/images/process3.png')}
                    description={`We are very honest and open. But we expect to hear from you what things are working and how we can improve our process together.
                Taking things as early in the process as possible is crucial.`}
                />

                <HowWeWork
                    title="competence of product"
                    img={require('../assets/images/process4.png')}
                    description={`We are firm believers in delivering small but very valuable pieces of work as quickly as possible. We want the product in the hand of your users so we can get real-world feedback, learn and improve without stalling the development process.`}
                />
            </div>

            <SectionTitleBox sectionTitle="about us" title="know our company" />
            <AboutusSections />
            <QuadrantView />
            <div style={{ marginTop: 100 }}>
                <WhatDoYouNeed />
            </div>

            <BudgetInteraction />
            <Footer />
        </div>
    )
}

export default HomePage
