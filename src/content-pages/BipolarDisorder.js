import React, { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import ContentTitleSnippet from '../components/ContentTitleSnippet'

import bipolarSeesaw from '../webImage/bipolar/bipolar_seesaw.png'
import bipolarSpectrum from '../webImage/bipolar/bipolar_spectrum.png'
import mirrorManSad from '../webImage/bipolar/mirror_man_sad.png'
import muscialDancer from '../webImage/bipolar/musical_dancer_man.png'
import roaAntonioCartoon from '../webImage/bipolar/roa_antonio_cartoon.png'
import roaDiary from '../webImage/bipolar/roa_diary.png'
import bipolarDrag from '../webImage/bipolar/bipolar_drag.png'
import VRTour from '../components/VRTour'

const BipolarDisorder = ({ pastRelease, parRatio}) => {

  const [bipolarTransition, setBipolarTransition] = useState(true)


  return (
    <div>
      <ContentTitleSnippet pastRelease = { pastRelease }/>
      <div className='content-display'>
          <blockquote className="content-quote">“My Life Feels Like a Seesaw”</blockquote>

          <article> Roa’s friend Antonio noticed Roa’s strange mood pattern: Every day for about two weeks, Roa would stay under an “euphoric state”
            <span className="content-in-text-span">(Manic episode)</span>, 
            being excited and talkative all the time. He would act extremely outgoing but in an egocentric way. His speeches during this manic episode sound like people who are “high”. Though sometimes things he said are total nonsense, he can still talk for an hour at an incredibly fast speed even to strangers who he met on the street. 
            <br/>

            <figure className="content-in-text-figure">
              <motion.img 
              whileHover={{scale: 1.2}}
              // drag
              // dragConstraints={{top: 50, left: -50, right: 50, bottom: -50}}
              whileTap={{
                x: -200,
                scale: 3}}
              src={bipolarSeesaw} alt="bipolar-seesaw" className="content-in-text-image"/>
              <figcaption className="content-in-text-figurecaption">Illustration by: Zihan Jin</figcaption>
            </figure>

            At the same time, people often describe Roa as very energized. As said by himself later, during his “euphoric state”, he only needs around three to four hours of sleep to feel tireless. Another odd behvior is his uncontrollable purchases of things that he didn’t really want that much. Moreover, despite how Roa is easily distracted by other stimuli around him, he has an increased interest toward goal-directed activities. He would consider ideas with unrealistic and irrational goals, such as running for a president. Although he fails every time, he would not be disappointed nor moving on to other plans. 
            <br/>
            Together, during this “euphoric state”, Roa experiences a rush of exaltation along with a series of reckless actions. To him, it almost feels like taking addictive drugs, while he was’t using any. Though to others his expressions and symptoms sound abnormal, Roa himself isn’t feeling that way. Because he might lose this sense of well-being during medical treatments, Roa later expresses his antipathy when the clinic prescribes drug intakes.
            <article className='narration'>
            A DIALOGUE BETWEEN ROA AND ANTONIO WAS RECORDED
            <br/>
            <b>Roa:</b>“Hey Antonio! I came up with a new idea for my phone! You know, most of the phone’s volume is taken up by its battery. I think I will find a new chemical element that can significantly decrease the volume of phone batteries!”<br/>
            <br/>
            <b>Antonio:</b>“Man, I remember you hated these type of stuff. Since when you started to be interested in chemistry and phones?”<br/>
            <br/>
            <b>Roa:</b>“Yeah, that’s past tense. I am definitely capable of doing that. You see, maybe not today, not right now, but I’m telling ya, I am gonna find it! I’m gonna be the smartest guy in this whole world”<br/>
            <b>Antonio:</b>“That’s interesting, why don’t you tell me about your plan.”
            <b>Roa:</b>“I have one! You know, chemical elements are all just combinations of proton, neutron, and electron. I think if I change the number of them, I can make this new…element! Yeah! Isn’t it a genius plan?”<br/>
            <br/>
            <b>Antonio:</b>“Is that even practical?”<br/>
            <br/>
            <b>Roa:</b>“Of course it is! Have you seen a movie called Iron Man 2? Sci-fi movies are entirely based on the real world. So if they can do it, why can’t I do it?!”<br/>
            <br/>
            <b>Antonio:</b>“Okay? I guess… go for it if you want. Good luck man.”<br/>
            <br/>
            <b>Roa:</b>“Thank you! Wait, what I’m going to do?”<br/>
            <br/>
            <b>Antonio:</b>“Find a new element, you told me you made a plan.”<br/>
            <br/>
            <b>Roa:</b>: “I did a plan! New element! I must continue right now… Oh yeah, thanks buddy! See you later with my new super phone!”<br/>
            <br/>
            (One day later)
            <br/>
            <br/>
            <b>Roa:</b>“Antonio! What a weird thing, I failed on the new element stuff, but I just decided to write a detective story!”<br/>
            <br/>
            <b>Antonio:</b>“Oh… I’m sorry for that. I’m glad you have a new goal to move on. It’s nice.”<br/>
            <br/>
            <b>Roa:</b>“Yes, it’s nice! I’m telling you this story......”
            <br/><br/>
            (The dialogue continues for an hour, mainly Roa was talking.)
            </article>

            <div className='content-in-text-image'>
              <img
              src={roaAntonioCartoon} alt="roaAntonioCartoon" className="content-in-text-image"/>
              <figcaption className="content-in-text-figurecaption">Illustration by: Zihan Jin</figcaption>
            </div>

            According to the next part of Antonio’s description, Roa has a second emotional state, an emotional downfall for about two weeks
             <span className="content-in-text-span">(Major depressive episode)</span>. 
             During this state, Roa almost looks and sounds like patients of Major Depressive Disorder. He loses interest in everything. He becomes taciturn and hopeless man. The tiredness stops him from doing anything, even getting off from his bed. Contrasting to that reckless, ambitious, and confident person during the euphoric state, Roa feels irrationally worthless, being guilty all the time despite he did nothing wrong. He can’t concentrate on tasks because of recurring depressive thoughts and negative feelings about himself. The worst of all, evident from the bruises and cuts later found on his arms, Roa can’t control his suicidal and self-destructing behaviors. 

                      <figure className='content-in-text-figure'>
                      <motion.img 
                        whileHover={{scale: 1.2}}
                        // drag
                        // dragConstraints={{top: 50, left: -50, right: 50, bottom: -50}}
                        whileTap={{
                          x: -200,
                          scale: 2}}
                        src={roaDiary} alt="roaDiary" className='content-in-text-image'/>
                        <figcaption className="content-in-text-figurecaption">Roa's Diary</figcaption>
                        </figure>  
                        <article className="narration">
                            ROA’S DIARY DURING MAJOR DEPRESSIVE EPISODE: 
                            <br/>
                            “Who am I?”
                            <br/>
                            “Why do I have to live, isn’t it a relief to die?”
                            <br/>
                            “What is the purpose of my life?”
                            <br/>
                            “Nobody likes me.”
                            <br/>
                            “My friends asked what happened today, and I answered it's alright, no worries. But no, it’s not alright.”
                            <br/>
                        </article>
                        Eventually, Antonio insists on bringing Roa to a psychiatrist. The psychiatrist asks Roa to take a few tests and then inquires him about his mood. After observing Roa for a period of time, based on the diagnostic criteria for the interchanging manic and major depressive episodes as well as the two’s durations, Roa is diagnosed with 
                        <span className="content-in-text-span">Bipolar I</span>. 
          </article>
          <blockquote className="content-quote">“Bipolar Is Not The Answer. It Is A Spectrum”</blockquote>
          <article>
                        You can think of the spectrum as a gradient. The more intense and rapid as the arrow move to the left, the milder and more enduring as the arrow move to the right. 
                        <figure className="content-in-text-figure">
                        <motion.img 
                        whileHover={{scale: 1.2}}
                        // drag
                        // dragConstraints={{top: 50, left: -50, right: 50, bottom: -50}}
                        whileTap={{
                          x: -200,
                          scale: 2}}
                          src={bipolarSpectrum} alt="bipolarSpectum" className='content-in-text-image'/>
                            <figcaption className="content-in-text-figurecaption">Illustration by Zihan Jin</figcaption>
                        </figure>
                        <br/><span className="content-in-text-span">Difference between Bipolar I and Bipolar II:</span><br/>
                        In Part I, our main character Roa is a classic Bipolar I patient. He has both manic and major depressive episodes interchanging in his everyday life. With that in mind, the differences between Bipolar I and Bipolar II resides in their level and frequency of mood fluctuation. Bipolar I patients show two extremes in their mood changes, while Bipolar II patients have severe depressions but milder excitations. Instead of manic episodes, the Bipolar II patients mostly experience hypomanic episodes (see the section above) switching back and force with the major depressive episodes.  
                        <br/><span className="content-in-text-span">Bipolar II- Hypomanic Episode:</span><br/>
                        Besides the “classic” two states (Maniac and major depressive) of Bipolar I, there is another episode called the hypomanic episode, which often experience by Bipolar II patients. As its name implied, it’s a “hypo” version of manic episode, the same thing except being milder. Hypomania can be diagnosed if mood elevated for four days, whereas the classic mania must have a duration of at least a week. 
                        <br/><span className="content-in-text-span">Cyclothymic Disorder:</span><br/>
                        Cyclothymic Disorder, also called Bipolar III, is an enduring version of the previous two levels of the spectrum. The symptoms of Cyclothymic disorder are milder comparing to both Bipolar I and II. The patients experience neither extremely manic nor extremely depressive episodes. Instead, they switch between two reduced versions: hypomanic episodes and mild depressive episodes. Neverttheless, despite the intensity of symptoms is reduced, Cyclothymic disorder is more persistent and last longer. For adults, Cyclothymic disorder must be diagnosed only if the patient have showed its symptoms for at least 2 years.
                        <br/><span className="content-in-text-span">Hyperthymic Temperament and Bipolar Personality:</span><br/>
                        Starting from here on the spectrum, hyperthymic temperament and bipolar personality are no longer considered as mental illnesses but only features of certain groups of people. Hyperthymic temperament refers to people with upbeat personality, always optimistic and full of plans and energy. They often sleep less but work more, being interested in a variety of things, showing great persistency. People with hyperthymic temperament could be boastful and self-centered, which lead to the fact that they could accomplish a lot but are hard to live with. 
                        <br/>
                        The last level on the Bipolar spectrum is something called bipolar personality. These people are the ones least distinguishable on the entire spectrum. They can be seen as people that are just creative and bold, with outstanding versatility and enthusiasm. 
                        <br/>
                        The reason for the last two levels to be mentioned here, however, relates to the genetic heredity of Bipolar disorders. Though not directly associated with one specific gene like sickle cell anemia or hemophilia, Bipolar Spectrum is long thought to have genetic risks. In some cases, people with Bipolar disorders will have their children evident of showing some features anywhere on the Bipolar spectrum. It is important to notice and pay attention on reducing such risks with correct guidance. 
                    </article>

                    <blockquote className="content-quote">“More Bipolar in Real Life”</blockquote>
                    <article>
                      <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
                        <div className='row-left'>
                        <figure className="content-in-text-figure">
                          <AnimatePresence>
                          <motion.img 
                          whileHover={{scale: 1.2}}
                          whileTap={{scale: 0.8}}
                          src={
                            bipolarTransition? muscialDancer : mirrorManSad
                          } 
                          onClick={()=>setBipolarTransition(!bipolarTransition)}
                          alt="bipolarTransition" 
                          className="content-in-text-image"
                          />
                          </AnimatePresence> 
                          <figcaption className="content-in-text-figurecaption">Tap to View Transition</figcaption>    
                        </figure>
                        </div>
                        <div className='row-right'>
   
                        There are many celebrities who previously or currently suffer from Bipolar disorder, especially for people showing extraordinary creativity, such as Mark Twain. When these people are in their manic episodes, they are productive and flooded with ideas. They could manifest their best works during the manic episode. On the other hand, the major depressive episode can be catastrophic and even lead to deaths. The sudden switch is devastative to relationships, properties, and even lead to suicidal behaviors. 
                       <br/>
                       The behavior of unrestrained buying is another iconic and observable behavior during the manic episode of Bipolar disorder. Kay Redfield Jamison, a psychiatric professor who previously suffered from Bipolar disorder, described the Bipolar purchase behavior in her book An Unquiet Mind. She had those whimsical ideas repetitively leading her to buy things that she doesn’t really need. Such behavior could become undermining when the patient’s mood state shifts into the major depressive episode. He or she would often experience worse “buyer’s guilt” and eventually exacerbate the mood downfall. 
                       <br/> 
                       Moreover, People with bipolar disorder usually can’t remember what they did during the manic episode. For example, maybe they cannot remember they wrote a twenty-thousand-words novel or accomplished a great deal. 
                       <br/>
                       
                       To some’s astonishment, the switching of states for people with bipolar disorder could take longer than previously thought. Also, the manic episode and major depressive episode both last at least a week. During each episode, patient would have to stay under that extreme mood state almost every day. If the duration and switch symptoms in both episodes match the diagnostic criteria, then a person can be diagnosed with Bipolar disorder. However, despite what is said theoretically, self-diagnosis is not recommended. For example, a severe change in mood caused by a certain life incidence is not a symptom of Bipolar disorder. Mistakes and confounding factors like that could exist, and there are more things that must be considered for a proper medical diagnosis. Therefore, when something seems to go wrong, finding a psychiatrist is always prioritized.                              
                        </div>
                      </div>
                    </article>

                    <blockquote className="content-quote">“A Double-Side Sword: Drugs”</blockquote>
                    <article>
                        One of the commonly used drugs is Lithium Carbonate. There are numbers of research trying to find out how it works, but the mechanism is still not clarified. Lithium carbonate acts as a mood stabilizer which decreases the severity of both episodes. It is a widely used drug for treating Bipolar disorder, though it does have some side effects. Shortly after intake of Lithium Carbonate, the patient would feel nauseous, thirsty, and dizzy. Potential long-term side effects include server nausea and vomiting, decreased thyroid gland activity, and hand tremors. 
                        <br/>
                        Based on real life cases, the use of other drugs such as zolpidem tartrate and agomelatine can be dangerous. Zolpidem tartrate is often used to treat insomnia. However, if the patient took an overdose of the drug, she can be “high” and hallucinates, which usually comes with headaches, nausea, and more intense insomnia. On the other hand, Agomelatine is prescribed to treat major depressive disorder or major depressive episode of Bipolar disorders. Similarly, when overdosed, the drug can invoke hallucination and increase the risks of hepatitis, nausea, diarrhea, and nervous system damages. Together, the worst effect of the two drugs is their shared danger in drug addiction. Therefore, when using drugs, it is crucial to
                        <span className="content-in-text-span">1. only take the amount recommended by your own doctor and 2. remember not to take other people’s drugs.</span> 
                        People respond to drugs differently when it comes to doses.
                        <span className="content-in-text-span">Any drug consumption, over-the-counter ones or prescribed ones, antiphlogistic drugs, antibiotics, or antipsychotic drug described above, must be taken under medical supervision. </span>
                    </article>

                    <div className="content-adnexed">
                        <h2>Why Are You on That Seesaw?</h2>
                        <hr className="greenline"/>

                        <div className='content-adnexed-box'>
                      <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>

                          <figure>
                              
                              <img src={bipolarDrag} alt="bipolar-drag" className='content-in-text-image' />
                              <figcaption className="content-in-text-figurecaption">Illustration by: Zihan Jin</figcaption> 
                              <VRTour/>   
                          </figure>
                          <article className="content-adnexed-text">
                              As mentioned previously, Bipolar disorder can be inherited and passed down through genes. The disorder is more common in people who have first-degree relatives with the disorder. If one of the physiological parents has bipolar, then the chance of the kid having bipolar is 10%. If both parents have it, the chance would rise to 40%.
                              Furthermore, there are physical changes in people with Bipolar, such as an extreme shift in hormone level between each episode. Still, the detailed change remains a mystery.
                              Just to give you a quick review about how many famous and creative people have suffered from the disease (Lieberman, 190), here is a list: Francis Ford Coppola, Ray Davies, Patty Duke, Carrie Fisher, Mel Gibson, Ernest Hemingway, Abbie Hoffman, Patrick Kennedy, Ada Lovelace, Marilyn, Monroe, Sinéad O'Connor, Lou Reed, Frank Sinatra, Britney Spears, Ted Turner, Jean-Claude Van Damme, Virginia Woolf, and Catherine Zeta-Jones.                             
                          </article>
                        </div>
                        </div>
                    </div>

                    <div className="workcited">
                        <p className="citation-title">Work Cited</p>
            
                        <p className="citation">American Psychiatric Association. (2013). Diagnostic and statistical manual of mental disorders (5th ed.). American Psychiatric Association.</p>
                        <p className="citation">Azeem, H. (2019, February 2). bipolar episode caught on tape | manic night. Www.youtube.com. https://www.youtube.com/watch?v=QPQst9Er62c&list=WL&index=1</p>
                        <p className="citation">Jamison, K. R. (1994). Touched with fire : manic-depressive illness and the artistic temperament. Free Press Paperbacks.</p>
                        <p className="citation">Jamison, K. R. (2015). An unquiet mind : a memoir of moods and madness. Picador.</p>
                        <p className="citation">LAHWF. (2018). Chatting with a Person with Bipolar Disorder. In YouTube. https://www.youtube.com/watch?v=UxgL6ZhOHMo</p>
                        <p className="citation">Lerma, E. V., Sterns, R. H., & Forman, J. P. (2019). UpToDate. Uptodate.com. https://www.uptodate.com/contents/renal-toxicity-of-lithium</p>
                        <p className="citation">Lieberman, D. Z., & Long, M. E. (2019). The molecule of more : how a single chemical in your brain drives love, sex, and creativity-and will determine the fate of the human race. Benbella Books, Inc.</p>
                        <p className="citation">Ogbru, O. (n.d.). Lithium (Lithobid): Mood Stabilizing Medications, Side Effects & Dosage (J. W. Marks, Ed.). MedicineNet. https://www.medicinenet.com/lithium/article.htm</p>
                        <p className="citation">Ragland, R. G., & Saxon, B. (1989). Invitation to psychology. Scott, Foresman.</p>
                    </div>
      </div>
    </div>
  )
}

export default BipolarDisorder