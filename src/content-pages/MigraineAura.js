import React from 'react';
import {motion} from 'framer-motion';
import ContentTitleSnippet from '../components/ContentTitleSnippet';


import MigraineStory from '../webImage/migraine_with_aura/migraine-story.png';
import BrainNeuron from '../webImage/migraine_with_aura/brain-neuron.png';
import HeadacheTrend from '../webImage/migraine_with_aura/headache-trend.png';
import Medication from '../webImage/migraine_with_aura/medication.png';
import MigraineJump from '../webImage/migraine_with_aura/migraine-jump.png';
import Triggers from '../webImage/migraine_with_aura/triggers.png'

const MigraineAura = ({pastRelease, parRatio}) => {
  return (
    <>
    <ContentTitleSnippet pastRelease={pastRelease}/>
    <div className='content-display'>
        <blockquote className='content-quote'>“Hey! My vision looks like a disconnected TV screen!”</blockquote>
        <div className='content-in-text-image'>
              <img
              src={MigraineStory} alt="migraine-story" className="content-in-text-image"/>
              <figcaption className="content-in-text-figurecaption">Illustration by: Zihan Jin</figcaption>
            </div>
        <blockquote className='content-quote'>Here's A Quick Explanation</blockquote>
        <article className='narration'>
            <span className='content-in-text-span'>Migraine: </span> <br />
            -	Latin word hemicrania, meaning half skull. <br />
            -	Neurological disorder that the pain usually concentrates on one region of the head, lasting for a certain amount of time.  <br /><br />
            <span className='content-in-text-span'>with: </span><br />
            -	preposition <br /><br />
            <span className='content-in-text-span'>Aura: </span><br />
            -	Literal: a subtle sensory stimulus (Merriam-Webster) <br />
            -	Contextual of Migraine: A given sensory symptom (concerning eyes, limbs, inside brain, nausea, etc.) <br /> <br />
        </article>
        <blockquote className='content-quote'>Ok. I Know You Want This. Let's Start with Some Common Symptoms!</blockquote>
        <article>
            <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
            <div className='row-left'>
            <span className='content-in-text-span'>1.	It is starts with an aura</span> <br />
            -	Visual (most prevalent, over 90 percent) <br />
            -	Sensory (needle feeling across the body) <br />
            -	Speech/language (loss of speech) <br />
            -	motor (stiffness of body; hard to move around, motor weakness together with other sensory auras) <br />
            -	Migraine with brainstem aura (including dizziness and unable to stand still, ringing inside the head, foggy hearing, vision, or decrease in other senses) <br /> <br />
            <span className='content-in-text-span'>2.	Two or more of the above auras occur after one and another. (each 5-60 minutes)</span> <br /> <br />
            <span className='content-in-text-span'>3.	Each aura symptom would exacerbate in a slow but gradual style. </span> <br />
            The process usually takes for over 5 minutes. <br /><br />
            <span className='content-in-text-span'>4.	Later, after the aura recedes, it is usually followed by headache</span> <br />
            (could last 60 minutes or so). Throughout this process, the patient might feel tired, dizzy, or want to throw up. <br /><br />
            <span className='content-in-text-span'>5.	Prolonged motor hinderness</span> <br />
            Some patients experiencing motor weakness for hemiplegic migraine (migraine with motor aura) can have their motor weakness last for an extensive amount of time. Still, it is reversible. 
            </div>
            <div className='row-right'>
                <figure className='content-in-text-figure'>
                    <motion.img 
                        whileHover={{scale: 1.2}}
                        // drag
                        // dragConstraints={{top: 50, left: -50, right: 50, bottom: -50}}
                        whileTap={{
                          x: -200,
                          scale: 2}}
                          src={HeadacheTrend} alt="headache-trend" className='content-in-text-image'/>
                </figure>
            </div>
            </div>
        </article>
        <blockquote className='content-quote'>What’s Happening Inside?</blockquote>
        <article>
            <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
                <div className='row-left'>
                <figure className='content-in-text-figure'>
                    <motion.img 
                        whileHover={{scale: 1.2}}
                        // drag
                        // dragConstraints={{top: 50, left: -50, right: 50, bottom: -50}}
                        whileTap={{
                          x: 200,
                          scale: 2}}
                          src={BrainNeuron} alt="brain-neuron" className='content-in-text-image'/>
                </figure>
                </div>
                <div className='row-right'>
                Simply speaking, the neurological pain of migraine patient’s headache is due to neurons. The abnormal activity and waves of the neurons inside of the patient’s brain will disrupt and spread across the head, which also result in the “snowflake bands and blind spots of our eyes “(aura). If you want a jargon for the whole process, it is called 
                <span className='content-in-text-span'> primary neuronal dysfunction</span>. The foundation of aura is thought to root in the 
                <span className='content-in-text-span'> depolarization</span> of neurons (including glial cells). Assuming you forget what depolarization means, it is a general term describing the start of neuron’s electrical transduction. When a neuron is depolarized, it basically means the electrical “balance” created for maintain the neuron at “rest” is disrupted. Thanks to the <span className='content-in-text-span'>meninges </span>of our brain (a membrane clothing our brain), after the abnormal changes, pain is generated and consequently spread to other places in our body and nervous system.                 </div>
            </div>
        </article>
        <blockquote className='content-quote'>Under a Broader Context… </blockquote>
        <article>
        <div className='content-dropdown-A'>
        According to the Global Burden of Disease Study 2010 (GBD2010), Migraine was ranked as the third most prevalent disorder across the globe. 
        <br />
        <br />
        There are two main types of migraine: <br />
        1.	Migraine with aura <br />
        2.	Migraine without aura <br />
        Yes. The main difference resides in the “aura” part. 
        </div>
        </article>
        <blockquote className='content-quote'>Who is more susceptible? </blockquote>
        <article>
            <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
                <div className='row-left'>
                    <span className='content-in-text-span'>Genetic basis? </span> <br />
                    Yes! There is a strong genetic risk of migraine with aura. However, the inheritance pattern is not clearly identified. It is postulated that the genes associated with migraine are the ones encoding neurotransmitters, the messenger molecules of our brain. 
                    <br /> <br />
                    <span className='content-in-text-span'>Age? Gender? </span> <br />
                    Migraine with Aura was more commonly found in women (8/10 migraine patients are women), but it can happen to all genders equally. For age, migraine with aura could occur at any age, ranging from children to adults. Despite complained by mostly middle age or older population, statistically, it is proposed that 1/10 children would suffer from migraine. 
                    <br /> <br />
                    <span className='content-in-text-span'>Triggers in life? </span> <br />
                    Yes, but the trigger can vary from person to person.  <br />
                    <article className='narration'>Intake: Food items (caffeine intake high/lower than usual; nitrates (as used in hot dogs), and monosodium glutamate (MSG) can be responsible in a few patients.)</article>
                    <br />
                    <article className='narration'>Circumventing: Stimuli: Stress, anxiety, light entering eyes. Shift: Mood shift; weather changes; lack of sleep/disturbance of habits, body shifting (entering menstruation, pregnancy, etc.)</article>
                </div>
                <div className='row-right'>
                <figure >
                    <motion.img 
                        whileHover={{scale: 1.2}}
                        // drag
                        // dragConstraints={{top: 50, left: -50, right: 50, bottom: -50}}
                        whileTap={{
                          x: -200,
                          scale: 2}}
                          src={Triggers} alt="triggers" className='content-in-text-image'/>
                </figure>
                </div>
            </div>
        </article>
        <blockquote className='content-quote'>Don’t worry, you’re not going blind. </blockquote>
        <article>
        Some of migraine’s symptoms can be stressful and cause panic, such as blind spot, large area of sparkles, vomiting, body stiffness… It might hinder the patient’s normal functions for quite a while, but the aura is generally reversible and only temporary for the time of onset. However, if the aura lasts for more than a week or two and isn’t showing signs of recovery, it is possible that the migraine is accompanied with complications or originally caused by other reasons. Under that circumstance, it is important to seek for further diagnosis at medical institution. Still, those are rare cases for common migraines. For people who feel worried and uncertain about the symptoms (because it is debilitating), you can check this website for further support! 
        <div className='content-dropdown-A'>
        https://americanmigrainefoundation.org/living-with-migraine/migraine-essentials/
        </div>
        </article>
        <blockquote className='content-quote'>Common Treatments </blockquote>
        <article>
            <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
                <div className='row=left'>
               <figure className='content-in-text-figure'>
               <motion.img 
                        whileHover={{scale: 1.2}}
                        // drag
                        // dragConstraints={{top: 50, left: -50, right: 50, bottom: -50}}
                        whileTap={{
                          x: 200,
                          scale: 2}}
                          src={Medication} alt="medication" className='content-in-text-image'/>
               </figure>
                </div>
                <div className='row-right'>
                Medication is the most used treatment for migraine in present days. The amount and approach vary from the severity and condition of each patient. <br />
                Thanks to the development of acute treatment of migraine, there are tablets and injections targeting migraine symptoms and headache. Some examples of most prevalently seen tablets/injection approaches are <span className='content-in-text-span'> Triptan and Gepants</span>. In simple words, these medication targets either molecular receptors of neurons (Gepants targets one receptor called CGRP, which is considered as one of the genetic causes for migraine) or other parts of the brain to alleviate pain/symptoms. <br /> <br />
                For people with less severe migraine, sleep and sufficient rests are probably enough to recover from the headache. 
                </div>
            </div>
        </article>
        <div className="content-adnexed">
            <h2>Not just headache that hurts…</h2>
                <hr className="greenline"/>
                    <div className='content-adnexed-box'>
                        <article>
                        <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
                            <div className='row-left'>
                            For migraine with aura, headache is not the only thing that the patients would suffer from. Because the onset of the headache is often sporadic and without identifiable signs, the migraine could occur anytime in daily life. You can’t ensure that it wouldn’t rush in during special events or intense occasions. The symptoms and progress of every headache is generally stressful and unbearable for daily functions. Merely expecting and panicking about the disorder is already an annoyance. Therefore, building up a relatively light-hearted lifestyle and mood can help with reducing the chance of triggering migraine. Sleep more and be careful with eating/drinking habits are also recommended. For people who travel a lot or simply can’t avoid a fast-paced life pattern, preparing prescribed medications habitually can be an alternative to deal with acute migraine attack. Meanwhile, if possible, never forget to take some rests! 
                            </div>
                            <div className='row-right'>
                            <motion.img 
                            whileHover={{scale: 1.2}}
                            // drag
                            // dragConstraints={{top: 50, left: -50, right: 50, bottom: -50}}
                            whileTap={{
                            x: -200,
                            scale: 2}}
                            src={MigraineJump} alt="migraine-jump" className='content-in-text-image'/>
                            </div>
                        </div>
                        </article>                        
                    </div>         
        </div>
        <div className="workcited">
            <p className="citation-title">Work Cited</p>
            <p className="citation">American Migraine Foundation. (n.d.). New Treatments for Migraine. American Migraine Foundation. Retrieved August 4, 2022, from https://americanmigrainefoundation.org/resource-library/new-migraine-treatments/</p>
            <p className="citation">International Headache Society. (2018). Headache Classification Committee of the International Headache Society (IHS) The International Classification of Headache Disorders, 3rd edition. Cephalalgia, 38(1), 1–211. https://doi.org/10.1177/0333102417738202</p>
            <p className="citation">Migraine.com. (2021). Migraine Statistics and Facts. Migraine.com. https://migraine.com/migraine-statistics</p>
            <p className="citation">Shankar Kikkeri, N., & Nagalli, S. (2020). Migraine with Aura. PubMed; StatPearls Publishing. https://www.ncbi.nlm.nih.gov/books/NBK554611/</p>
        </div>

    </div>

    </>
  )
}

export default MigraineAura