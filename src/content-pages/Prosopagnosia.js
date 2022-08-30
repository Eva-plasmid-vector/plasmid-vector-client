import React from 'react';
import {motion} from 'framer-motion';
import ContentTitleSnippet from '../components/ContentTitleSnippet';

import AtlasPeople from '../webImage/prosopagnosia/atlas_people.png';
import CategoriesPA from '../webImage/prosopagnosia/categories_PA.png';
import ExamPage from '../webImage/prosopagnosia/exam_page.png';
import HelpColor from '../webImage/prosopagnosia/help_color.png';
import PasswordFace from '../webImage/prosopagnosia/password_face.png';
import ProsopagnosiaComic from '../webImage/prosopagnosia/prosopagnosia_comic.png';
import Strategies from '../webImage/prosopagnosia/strategies.png';


const Prosopagnosia = ({pastRelease, parRatio}) => {
  return (
    <>
        <ContentTitleSnippet pastRelease={pastRelease}/>
        <div className='content-display'>
        <blockquote className='content-quote'>“It Is Not Because I Don’t Care About You! REMEMBERING FACES Is So Hard!”</blockquote>
        <div className='content-in-text-image'>
              <img
              src={ProsopagnosiaComic} alt="prosopagnosia-comic" className="content-in-text-image"/>
              <figcaption className="content-in-text-figurecaption">Illustration by: Zihan Jin</figcaption>
            </div>
        <blockquote className='content-quote'>Symptoms: Some features of Someone Suffering from Prosopagnosia</blockquote>
        <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
            <div className='row-left'>
            <article>
            Remember one time during your history exam, your teacher asks you to write a name under a given picture of one historical leader. What does it feel like when your brain tells you it doesn’t have the memory of that person’s face? Anxious? Afraid? Helpless?
            <br />
            Yet, that is probably what prosopagnosia patients experience every day. For the history exam, maybe you just didn’t pay attention during class or forgot to review the materials. But for prosopagnosia patients, it is not as simple as that. 
            <br />
            <br />
             One shared, core symptom of prosopagnosia is the patient’s inability to recall and recognize facial features of others, despite successfully seeing these features with their eyes. In other words, the problem of “face blindness” isn’t necessarily about being physically blind. For most patients, their ability to interpret emotional expressions and facial features remains intact. They can still read other people’s feelings and perceive ideas through facial expressions. The “blindness” is not about visualizing and understanding but resides in memorizing and recalling. 
            <br />
            <br />
            Because of such difficulty in documenting other people’s faces, prosopagnosia patients often feel anxious, hesitant when surrounded by unrecognizable people. Thus, they might choose to avoid social events or prefer to stay with close friends/family. To others, prosopagnosia patients could seem aloof and indifferent, which is usually a direct result of the disorder’s symptoms instead of an accurate depiction of the patient’s personality. In fact, depending on the severity of the disorder, prosopagnosia patients might face challenges beyond social aspects. For some extreme cases (profound level), the patients might not be able to recognize their own faces, their infants/children’s faces, or intimate friends and family member’s faces. Additionally, beside distinguishing faces, prosopagnosia’s deficits can be compounded by inability to recognize directions, objects, numbers, characters, or any type of pattern-wise similarity. Consequently, some related life functions, such as walking/navigating by themselves or solving language/math problems with conventional methods, could also be affected. 
            <br />
            <br />
            Still, don’t panic if you are not good at faces. It doesn’t mean you are already a prosopagnosia patient. As with other brain functions such as language and memory, people’s ability of memorizing and distinguishing faces varies between individuals. Some people might be extremely good at recognizing facial features. Conversely, some might need extra effort to familiarize with new faces. Such discrepancy doesn’t make people on the two ends of the spectrum abnormal, which means a weaker face-recognizer doesn’t always equal to a prosopagnosia patient. You will need further clinical diagnosis to verify the severity and subtypes. Don’t worry, we will cover those later. 
            </article>
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
                          src={ExamPage} alt="exam-page" className='content-in-text-image'/>
                </figure>
            </div>
        </div>
        <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
            <div className='row-left'>
            <article className='narration'>
                Imagine there exists a “PEOPLE THAT I KNOW” atlas inside every person’s brain. When you greet someone, normally, they can use your face as the “password” to access their atlas and recognize your identity, such as “FRIEND FROM MATH CLASS” or “SPORTS TEAM MEMBER”. However, for prosopagnosia patients, they didn’t have a proficient “face ID” system installed for their brain’s security system. When you say “hi” to them, they might need other type of “password”, such as your voice or gait, to access your information inside of their mind. 
            </article>
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
                          src={AtlasPeople} alt="atlas-people" className='content-in-text-image'/>
                </figure>
            </div>
        </div>
        <blockquote className='content-quote'>Then… How Many People Are Suffering From It?</blockquote>
        <article>
        In previous studies (Bowles, et al., 2009; Duchaine & Nakayama, 2006; Passmore, 2007), the revealed prevalence of prosopagnosia ranges from 2 to 2.9% based on various sample sizes. Still, due to the disease’s relatively confounding nature, people born with the disorder or face only mild symptoms may completely oversee the disorder’s life impacts. Also, it is necessary to acknowledge that the research of the disease remains in its emerging stage. More statistics and larger samples are needed to make broader conclusions. 
        </article>
        <blockquote className='content-quote'>Classification and Causes: Let’s Take One Step Closer!</blockquote>
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
                          src={CategoriesPA} alt="categories-PA" className='content-in-text-image'/>
                </figure>
            </div>
            <div className='row-right'>
                <article>
                Despite nicknamed “face blindness”, prosopagnosia is a <span className='content-in-text-span'>neurological disorder</span>. In terms of pathogenesis, it is usually classified as congenital, which means the disorder usually presents since birth. Nevertheless, there still exist cases of acquired prosopagnosia due to brain injuries such as stroke. 
                <br />
                <br />
                Guess what, the two common sub-categories of prosopagnosia are <span className='content-in-text-span'>heredity prosopagnosia (HPA)</span> and <span className='content-in-text-span'>acquired prosopagnosia (PA)</span>. 
                <br />
                <br />
                More classification terms could appear in some prosopagnosia studies and manuals. Let’s talk about a few. (If this additional piece of information sounds confusing, just remind yourself there are heredity and acquired prosopagnosia. It is enough to understand the disorder). 
                <br />
                <span className='content-in-text-span'> -	Categorize by time:</span>
                Concerning heredity prosopagnosia, some also use terms such as “congenital”, “developmental”, and “childhood” to describe the onset time of the disorder. Still, these smaller categories all belong to the large tree of HPA, where the patient manifests the disorder without any brain damage. 
                <br />
                <span className='content-in-text-span'> -	Categorize by syndrome: :</span>
                It is also common to see leading terms such as “syndrome” and “non-syndrome”. As straightforward as they seem, they mean “with syndrome” and “without syndrome”. This pair of descriptive words is used for clinical indications. For some prosopagnosia patients, the neurological disorder is accompanied by syndromes such as Autism Spectrum Disorder. Yet for some patients there exist no syndromes.
                <br />
                <br />
                Comparing with acquired prosopagnosia, heredity prosopagnosia is more prevalent and harder to be diagnosed/discovered. Indeed, parents with prosopagnosia can give births to children also affected by the disorder. Studies have analyzed the direct inheritance pattern of prosopagnosia, and some verified the heredity nature of the disorder by revealing its autosomal dominant inheritance pattern. Moreover, genetic mutation can also result in prosopagnosia. Yet the specification of one or more associated genes remains unanswered. 
                <br />
                <br />
                Aside from direct genetic contribution of the disorder, other congenital deficits are also causes of prosopagnosia. Neural migration in the brain can be a possible threat. Visual deprivation occurred during infantile period, such as congenital cataracts, is also related to recognition-related dysfunctions. 
                <br />
                <br />
                Now, whether it is hereditary or acquired cause, you probably are wondering what comes wrong with prosopagnosia that connects the disorder with abnormal brain neuronal functions. 
                <br />
                <br />
                Recalling how brain is a sophisticated “machine”. Instead of dividing into clear compartments with specific tasks (like our cells), all sections of the brain work together to reach a balanced state and help people function. Though there are myths and discoveries dubbing brain regions with characterized “missions”, such as amygdala is the processor of fear, frontal cortex is the executor of decisions, the reality could be way more complicated than what we expected. 
                <br />
                <br />
                Here, concerning the neural pathogenesis of prosopagnosia, it is a great example of how various brain regions contribute to the completion of a single task. Critical brain areas associated with the onset of the prosopagnosia are temporal and occipital lobe. Brain damage of temporal lobe and the fusiform face area of the occipital lobe can both lead to dysfunctions resembling that of face blindness.  The takeaway messages are that 
                <span className='content-in-text-span'>(1) brain is a vulnerable entity that requires its every section to work properly </span>
                 and <span className='content-in-text-span'>(2) we know prosopagnosia’s behavioral dysfunction has its root in the brain.</span>      
                </article>
            </div>
        </div>
        <blockquote className='content-quote'>Strategies of Familiarization: Alternative Ways to Distinguish People</blockquote>
        <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
            <div className='row-left'>
            <article>
                At this point, you might ask: then why most patients of prosopagnosia still recognize many of their friends and have no problems with knowing their family members? 
                <br />
                Remember the “password” simile mentioned earlier? Face recognition is not the only way to distinguish people. There are alternative strategies that prosopagnosia patients can use once they adapt to their special “system”. If a person still finds it hard to identify different people, there are ways that one can pick up to “dodge” awkwardness and social interactions.  
                <br />
                <br />
                <span className='content-in-text-span'>            -	Compensation strategy: Using clues aside from faces</span>
                <br />
                This first group of strategies might be the most used one for identity recognition and distinguishment. Instead of using facial features, patients can use mannerism, style, voice, and setting to identify a person. The following list provides some examples for each of the feature that might be useful for a prosopagnosia patient. 
                <br />
                <span className='content-in-text-span'>Mannerism:</span> Gait, gestures, movement <br />
                <span className='content-in-text-span'>Style:</span> Hair style, clothes, shoes, accessories, height, size<br />
                <span className='content-in-text-span'>Voice:</span> Sound, pitch, tone, speaking style <br />
                <span className='content-in-text-span'>Setting:</span> Classroom, street, stores, house, weather, landmarks <br />
                <br />
                <span className='content-in-text-span'>            -	Explanatory strategy</span>
                <br />
                As implied by its name, this strategy simply involves the patient explaining his or her indifference using everyday excuses. For example, when walking passed a friend without instantly recognizing them, the patient might say something like “not paying attention”, “bad eyesight”, or “suffering from a headache”.
                <br />
                <br />
                <span className='content-in-text-span'>            -	Avoidance strategy</span>
                <br />
                Instead of confronting with the disorder’s symptoms, some prosopagnosia patients might choose to avoid attending events/occasions that might trigger obvious features of HPA. If the event is unavoidable, they might choose to find a close companion that can go with them. Despite resolving temporary awkwardness and discomfort, however, this strategy could lead to other complications through long term depressive mood and loneliness.             <br />
                <br />
            </article>
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
                          src={Strategies} alt="strategies" className='content-in-text-image'/>
                </figure>
            </div>
        </div>

        <blockquote className='content-quote'>In terms of Research: Progress of Diagnosing and Treating the Disorder</blockquote>
        <article>
        Comparing with Alzheimer’s and Parkinson’s, prosopagnosia is doubtless one emerging while understudied neurological disorder. More research and study are needed to establish a better system of diagnosis and treatment of the disorder. Still, comparing with treatment methods, diagnostic tests of prosopagnosia are relatively better utilized and understood. 
        <br />
        <br />
        Here are some examples of prosopagnosia diagnostic tests. Just a reminder: most of these tests are selected and accompanied by clinical interviews. Test results alone can’t depict a full picture. If you suspect yourself needing clinical support, the tip here is to seek for complete diagnostic help at your local medical institutions. 
        <br />
        <br />
        <span className='content-in-text-span'>
        Benton Facial Recognition Test (BFRT) <br />
        Warrington Recognition Memory Test for Faces (RMF) <br />
        Cambridge Face Memory Test 
        </span>
        <br />
        <br />
        Unfortunately, there is no direct medication of prosopagnosia. Sometimes, if the patient needs extra help, some drugs are prescribed to treat complications of prosopagnosia such as depression and anxiety. Among the existed treatment methods, most are behavioral training paradigms that can help the patients to find effective recognition strategies other than facial features. Usually, acquired prosopagnosia (PA) patients would realize their difficulties faster than heredity prosopagnosia (HPA) patients. For PA patients, the impaired recognition can be compared with their life experiences before the brain damage. Thus, it is often easier for them to realize the problem and pick up alternative strategies. However, for HPA patients, it might take a prolonged period for them to realize their difficulties, especially when the disorder developed as early as during childhood. 
        <br />
        <br />
        Click this link to learn more about coping strategies suggested by a prosopagnosia research site: 
        <span className='content-in-text-span'> <a href="https://www.prosopagnosiaresearch.org/face-blindness/coping-strategies" target="_blank" rel="noopener noreferrer">https://www.prosopagnosiaresearch.org/face-blindness/coping-strategies</a></span>   
        </article>

        <blockquote className='content-quote'>In terms of Suggestions: Are There Ways to Help? </blockquote>
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
                          src={HelpColor} alt="help-color" className='content-in-text-image'/>
                </figure>
            </div>
            <div className='row-right'>
                <article>
                Before there is a completed treatment method that can directly reduce the symptoms of prosopagnosia, the best way to help the patient is to provide as much social support as you can. Even if the person is not clinically diagnosed with prosopagnosia, you can still do these things if she or he is bad at faces or has mild level of face blindness. 
                <br />
                <article className='narration'>
                1.	Identify yourself with clearer cues (Introduce yourself every time you see them). 
                <br />
                </article>
                <article className='narration'>
                2.	Try to talk to them. See if they are really indifferent and unwilling to speak or simply confused by your identity and their current surroundings. 
                <br />
                </article>
                <article className='narration'>
                3.	Don’t leave name clues or messages to them that require face/pattern identification. 
                <br />
                </article>
                <article className='narration'>
                4.	If you need their help to memorize specific people/objects, use obvious color and feature-related visual stimuli. 
                <br />
                </article>
                <article className='narration'>
                5.	Don’t laugh or mock at someone if he or she find it seriously hard to distinguish between similar objects. Jokes like that could be hurtful if the person can’t help it. 
                </article>
                </article>
            </div>
        </div>

        <div className="content-adnexed">
            <h2>Not just headache that hurts…</h2>
                <hr className="greenline"/>
                    <div className='content-adnexed-box'>
                        <article>
                        <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
                            <div className='row-left'>
                            Prosopagnosia didn’t come into focus before the 19th century. Indeed, the limited development in technology and neuroscience set up barriers for the understanding of brain related dysfunctions, including prosopagnosia. Until the late 20th century, scientists started to conduct research on the neurological disorder. Imagine how hard it is for people who suffered from the disorder without knowing it. 
                            <br />
                            Though not physically painful, social and behavioral challenges associated with prosopagnosia often impose serious threats on the mental health of its patients. Sometimes, the mental suffering could result in safety issues. Because of their inability to connect with and recognize huge amount of people, prosopagnosia patients could be socially neglected and ostracized, leading to loneliness and depression. They may also find it harder to establish friendship, especially during early childhood and adolescent. 
                            <br />
                            Depending on the severity, some patients can be rejected from many career-wise and educational opportunities if the job requires consistent interaction and identification of people/objects (imagine waitress). When the symptoms of prosopagnosia reach a profound level, impaired recognition of the patients themselves and their children can lead to serious safety issues.  
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
                                    src={PasswordFace} alt="password-face" className='content-in-text-image'/>
                                </figure>
                            </div>
                        </div>
                        </article>                        
                    </div>         
        </div>
        <div className="workcited">
            <p className="citation-title">References</p>
            <p className="citation">Barton, J. J. S., & Corrow, S. L. (2016). The problem of being bad at faces. Neuropsychologia, 89, 119–124. https://doi.org/10.1016/j.neuropsychologia.2016.06.008</p>
            <p className="citation">Bowles DC, McKone E, Dawel A, Duchaine B, Palermo R, Schmalzl L, Rivolta D, Wilson CE, Yovel G. Diagnosing prosopagnosia: effects of ageing, sex, and participant-stimulus ethnic match on the Cambridge Face Memory Test and Cambridge Face Perception Test. Cogn Neuropsychol. 2009; 26:423–455. [PubMed: 19921582] </p>
            <p className="citation">Diaz, A. L. (2008). Do I Know You? A Case Study of Prosopagnosia (Face Blindness). The Journal of School Nursing, 24(5), 284–289. https://doi.org/10.1177/1059840508322381</p>
            <p className="citation">Duchaine B, Nakayama K. The Cambridge Face Memory Test: results for neurologically intact individuals and an investigation of its validity using inverted face stimuli and prosopagnosic participants. Neuropsychologia. 2006; 44:576–585. [PubMed: 16169565] </p>
            <p className="citation">Kennerknecht, I., Grueter, T., Welling, B., Wentzek, S., Horst, J., Edwards, S., & Grueter, M. (2006). First report of prevalence of non-syndromic hereditary prosopagnosia (HPA). American Journal of Medical Genetics Part A, 140A(15), 1617–1622. https://doi.org/10.1002/ajmg.a.31343 </p>
            <p className="citation">Passmore, B. (2007, February). Er . . . what’s your name again? Retrieved November 11, 2007, from http://www.tes.co.uk/search/ story/?story_id=2339972 </p>

        </div>
        </div>
    </>
  )
}

export default Prosopagnosia