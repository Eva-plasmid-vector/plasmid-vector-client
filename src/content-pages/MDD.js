import React from 'react'
import ContentTitleSnippet from '../components/ContentTitleSnippet'

import Friends from '../webImage/major_depression/friend_kata_kasu_woman.png'
import Knife from '../webImage/major_depression/ceramic_houchou.png'
import SadGirl from '../webImage/major_depression/depress_woman.png'
import CrouchedGirl from '../webImage/major_depression/utsu_girl.png'
import Rope from '../webImage/major_depression/rope_moyai_musubi.png'
import CallGirl from '../webImage/major_depression/smartphone_talk06_girl.png'
import White from '../webImage/major_depression/figure_depressed.png'

const MDD = ({pastRelease, parRatio}) => {
  return (
    <div>
        <ContentTitleSnippet pastRelease={pastRelease} />
        <div className='content-display'>
          <blockquote className="content-quote">“I don’t know what it means to be HAPPY, but I know I’m NOT”</blockquote>
          <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
          <figure>
            <img src={CrouchedGirl} alt="crouched_girl" className='content-in-text-image'/>
          </figure>
          <article>
            In recent two weeks, Charlotte had lost interest in almost everything. Nothing can make her happy. She felt numb in front of her favorite food, speaking with indifference to her friends and family. She seldomly laughed and felt that tickling feeling inside her heart. She had lost 10% of her weight because of her poor appetite. She tried to sleep but she suffered from insomnia almost every day.
            <br />
            <br />
            Charlotte’s colleagues reported that she “seems to be exhausted every day, with two dark circles dangling under her eyes.” While talking to Charlotte, they were shocked by the hopelessness in her words: Charlotte continuously doubted her own future in a irrational, hysterical way. She would think herself as worthless in every situation and tasks. Despite her impeccable performances, she still insisted on a delusional thought that she should be guilty by underperformed and making mistakes. She can’t even make decisions on her own. Comparing to herself one year ago, she often fail to think logically and can’t analyze situations with calmness. 
            <article className='narration'>
            Chalotte’s Diary: 
            <br />
            Dear Diary: 
            <br />
            <br />
            It’s been a month since I started to feel this way. Now, I even lost interests in confiding. Before, I want to talk to someone, anyone. I wish I could describe my feelings outloud, maybe then someone would understand. But now, it seems hopeless. 
            <br />
            You know, too many people today, truth or not, say that they are suffering from depression. It feels like only people with extreme trauma and serious problems in life can claim themselves as depressed. I’m alive; I’m not injured or poor; I have place to sleep in and food to eat. I don’t have an “excuse” to be depressed. 
            <br />
            I don’t know why exactly I’m enduring this. My life is useless. I feels guilty that I can’t do anything right. I am useless, and I am continuing to be useless. 
            <br />
            My days are tired and monotonous. I work for someone else. I do my job at home and at work. I feel weak and lost in control of my life. I have no one to really talk to. People are busy on minding their own problems. I have no support. I feel isolated around with many, many people. 
            <br />
            Mom doesn’t believe in “depression” because there isn’t an actual virus infecting the person to making him or her sick. People would calm me down and persuade me that I’m just being too emotional and stressful. I wish it works that way. 
            <br />
            It would be much easier if I’m simply sad. 
            <br />
            It really hurts when my pain has no evidence. 
            </article>
          </article>
          </div>

          <blockquote className="content-quote">“Unfortunately, Not Everyone Could UNDERSTAND”</blockquote>
          <article>
            <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
              <div className='row-left'>
              Major depressive disorder is the most well-known psychological disorder in every current societies. When people talk about the problems associated with “depression”, which is an oversimplified but useful name, they usually refer to this disorder. Under different cultural contexts, the social pressure faced by patients having major depressive disorder can be different. For societies with better understanding of psychological disorders, people would generally treat the disease seriously and understand the proper way to interact with the patients during daily tasks. As a result, the rate of patients seeking a treat is high. On the other hand, with poor popularization of knowledge for psychological disorders, patients under such social circumstance usually tend to hide their symptoms due to the fear of being accused and mocked by the others around them. Therefore, these patients tend to not seek for treatments while suffering from the distraught symptoms.                 
              </div>
              <div className='row-right'>
              <figure className='content-in-text-figure-small'>
            <img src={White} alt="white_sad" className='content-in-text-image'/>
          </figure>
              </div>
            </div>
          </article>

          <blockquote className="content-quote">“Some Statistics”</blockquote>
          <article>
          According to DSM-V, the incidence rate of major depressive disorder in the U.S. is around 7% of the general population. It is most prevalent around the age of 18 to 29 years old.  
          </article>

          <blockquote className="content-quote">“Stop Saying Depression Is Only Emotional”</blockquote>
          <article>
          The secretion of cortisol, a stress hormone, is higher in people with depression. This means they are generally more sensitive than the average. Together with lower level of serotonin, the patients will experience extreme emotional up&downs. 
          <br />
          To make things sound even worse, the physical changes associated with severe depression can shrink one’s hippocampus up to 15%, so people with severe depression may encounter obstacles in short-term memory. 
          </article>


          <blockquote className="content-quote">“Self-Injury Is No Funny. Let’s Take A Closer Look!”</blockquote>
          
          <article>
            <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
              <div className='row-left'>
              <figure className='content-in-text-figure-small'>
              <img src={Knife} alt="suicide_knife" className='content-in-text-image'/>
              </figure>
              </div>

              <div className='row-right'>
              Through movies and examples in life, people experiencing depression are often assumed to be self-destructive. Depending on the level of severity, once discovered by others, such behavior could distance the patient from people around them. 
          <br />
          But do we really know what self-injury is? 
          <br />
          There are many kinds of self-destructing behaviors: cutting oneself, pulling hair, dieting, being an alcoholic…etc. The purpose of them is to displace those strong negative emotions they have, but this is the wrong way to do it. 
          <br />
          Some people experience a sense of pleasure after self-destructing behaviors. This is because of an overlap of brain areas dealing with mental pain and physical pain. Precisely, such effect is called Pain Offset Relief. When physical pain diminishes after self-injury behaviors, mental pain is also reduced. 
          <br />
          Don’t panic. There is a way to reverse such unhealthy mindset. It can be treated through proper conditioning, or, specifically, pain offset relief conditioning. 
              </div>
            </div>
        
          </article>

          <blockquote className="content-quote">“Alert! Signs of Self-Destructing Behaviors!”</blockquote>
         
          <article>
            <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
              <div className='row-left'>
                Noticeably, self-destructing behaviors are symptoms of a number of mental disorders. There are certain detectable signs that one is committing self-injury. Some examples are: using accidents as excuses to explain frequent wounds on the body, avoiding socialization, being self-abased, and becoming less talkative. 
                <br />
                If you ever encounter someone who hurt themselves badly and want to help, you can start by asking them how’s their day and show moderate support. However, it will do the reverse if others start to push too hard. 

        
                Here is an article about self-harm from the University of Alberta
                <br />
                <div className='content-dropdown-A'>
                English version: 
                <span className='content-in-text-span'>
              https://www.ualberta.ca/media-library/ualberta/students/university-wellness-services/ccs/handouts/english/self-harm.pdf
                </span>
                </div>
                <br />
                <div className='content-dropdown-A'>
                Simplified Chinese version: 
                <span className='content-in-text-span'>
              https://www.ualberta.ca/media-library/ualberta/students/university-wellness-services/ccs/handouts/simplified/selfharm-sc.pdf
                </span>
                </div>
              </div>
              <div className='row-right'>
              <figure className='content-in-text-figure-small'>
                <img src={Rope} alt="rope_suicide" className='content-in-text-image'/>
                
              </figure>
              </div>
            </div>
          
          </article>

          <blockquote className="content-quote">“Then, how can the amount of self-injury be reduced?”</blockquote>
          <article>
          There are three independent tips that can help with reducing self-injury inclination. First, try aerobic exercises for about 30 minutes, which can increase the body serotonin level. Second, try to submerge your face in cold water for half a minute. Finally, take some deep breaths for about a minute, and relax your muscles. 
          <br />
          When negative emotions attack you, and you couldn’t help to hurt yourself, try the following things: flick with a rubber band, cry, count numbers, relieve your deepest negative feelings to someone you trust, write about your negative emotions and then burn or tear it. 
          <br />
          There is a method called cognitive delusion, which is basically meditating in third person perspective. Sit down and take a deep breath, close your eyes. Think of yourself not in the first person but third person perspective. 
          <br />
          For example, remember Charlotte in the beginning of the article?. Now, she is sad because her mother says she is never good at anything. She is devastated and want to relieve that pain through cutting her arm. Following the cognitive delusion method, Charlotte would sit down and take a deep breath, close her eyes, and think to herself in her head: I found out Charlotte is sad. I found out Charlotte is sad because her mother thinks she’s useless. 
          <br />
          This method can help with temporarily relieving emotional pain. But only temporarily. Still, the best solution to relieve unbearable emotional damage is to find a psychiatrist and go through clinical treatments. 
          </article>

          <blockquote className="content-quote">“Hey! Maybe There Is A Proper Way of Suicide Prevention?”</blockquote>
          <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>

          
          <article>
          First, we need to have a clearer view of suicide. Though it sounds like a joke at the moment, people planning to commit suicide would talk about their actual plans and thoughts. Therefore, it is better to take those thoughts seriously instead of challenging for it. It is always worth helping. If somebody says something about suicide or implies such ideas, it would help to talk about it rationally. Do not think it is a taboo. The worst thing is to do nothing, so don’t worry about doing the wrong thing. 
          <br />
          <br />
          
          <span className='content-in-text-span'>QPR (Question, Persuade, Refer)</span> is one of the most effective methods of preventing suicide. The goal is to prevent the current suicidal thought and bring the patient to doctors. Because you don’t necessarily need to be a clinical professional to use this method, it is well adopted and informative. 
          <br />
          <br />
          <span className='content-in-text-span'>Question</span> <br />
          Question directly to the person under a safe, personal circumstance. Asking him/her publicly can worsen the situation. DO NOT ask any sarcastic questions that sound playful or criticizing. An example of questions you can ask looks like this: Are you serious about planning to commit suicide? Even if the person avoided answering, just keep to show that you care about it and ask them for a specific answer. Let them say anything they want. While they speak, just be a quiet and supportive listener.
          <br />
          <br />
          <span className='content-in-text-span'>Persuade</span> <br />
          Try to understand him/her. Say you feel sorry about what happened and whatever they have been through. DO NOT judge suicide as the correct or wrong way of dealing with stress. DO NOT try to convince them with your own opinions. DO NOT lecture and give out life lessons. DO NOT pretend to be happy and try to cheer them up in the normal, simple fashion. Try to ask them to see a doctor. If they refuse and say that there is no need to find a doctor right now, you can state that “only the professionals can determine whether you are alright or not”. The goal of persuasion is to reach out for professional help.
          <br />
          <br />
          <span className='content-in-text-span'>Refer</span> <br />
          Try to refer to as many professional help as possible. Introduce them to the suicide hotline, 1-800-273-TALK or 741741 in the U.S. and 400-161-9995 in mainland China. If they can’t remember these phone numbrs, any type of health emergency call would be better than not calling at all (In mainland China, 120 and 110 are trained to deal with suicidal problems). <span className='content-in-text-span'>If the person is currently thinking about commiting suicide, don’t let them be alone by themselves. </span>Remember to text, call, or visit them continuously. Show your support. You can also ask them who is the best person to talk to and reach out to that person. Try your best during the whole process, but don’t push too hard. 
          </article>

          <figure className='content-in-text-figure'>
            <img src={CallGirl} alt="calling_girl" className='content-in-text-image'/>
          </figure>
          </div>

          <blockquote className="content-quote">“DOs and DON’Ts if you are NOT the patient but trying to help”</blockquote>
          <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>

            <figure className='content-in-text-figure-small'>
              <img src={Friends} alt="friends_help" className='content-in-text-image'/>
            </figure>

            <article>
            <span className='content-in-text-span'>DON’T</span> let the patients get emotonally attached to you. 
            <br />
            If you are a fragile and sensitive person, <span className='content-in-text-span'>DON’T</span> get yourself convinced by the patient’s negative thoughts. 
            <br />
            If you can handle it, <span className='content-in-text-span'>DO</span> become a attentive listener if the patient needs to confide. 
            <br />
            <br />
            <span className='content-in-text-span'>DON’T</span> try to become the doctor if you have no idea how exactly things should be done.  
            <br />
            <span className='content-in-text-span'>DO</span> show you care and worry about the patient. Be supportive and serious. Let them feel meaningful. 
            <br />
            <br />
            <span className='content-in-text-span'>DON’T</span> judge what the patient said. 
            <br />
            <span className='content-in-text-span'>DON’T</span> give instructions and protruding advices. 
            <br />
            <span className='content-in-text-span'>DO</span> ask the patient to receive proper treatment from doctors and professionals. 
            <br />
            <br />
            <span className='content-in-text-span'>DON’T</span> feel guilty if the patient didn’t become better after your effort of helping. 
            <br />
            <span className='content-in-text-span'>DON’T</span> explicitly express your disappointment to the patient. 
            <br />
            <span className='content-in-text-span'>DO</span> reach out for people that the patient feels safe with, such as family or other friends. 
            <br />
            <br />
            </article>
          </div>

          <div className="content-adnexed">
                        <h2>DON’T BE AFRAID</h2>
                        <hr className="greenline"/>

                        <div className='content-adnexed-box'>
                          <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>

                         
                          <figure className='content-in-text-figure'>
                              <img src={SadGirl} alt="sad_girl" className='content-in-text-image'/>
                          </figure>
                          <article className="content-adnexed-text">
                              It’s worthwhile to repeat a thousand times: <span className='content-in-text-span'>GO AND FIND A DOCTOR!</span>If you can’t recover from a bone fracture on your own, you can’t recover from major depression on your own. In fact, the later might hurt worse. 
                              <br />
                              The following are some possible therapeutic treatments for major depression patients. However, the therapies mentioned here are just one little slice of the whole treatment system. It’s just a broad overview comparing with the real-life treatment.
                              <br />
                              <br />     
                              -	Medicines, mainly antidepressants, can help with mitigating the symptoms of depression. Prozac® is an example of an antidepressant. Specifically, one branch of it is called SSRI (Selective Serotonin Reuptake Inhibiter). It increases the serotonin level in your body, a substance that is commonly reduced in patients with major depression.
                              <br />
                             -	Brain stimulation is another example of the treatments for depression. We will discuss two types of it. The reason why they worked in terms of treating depression is still quite obscure, but we can perceive it as a process of rebooting the patient’s brain. 
                              <br />
                              <span className='content-in-text-span'>Electroconvulsive Therapy(ECT)</span> <br />
                              This is an old but effective way of treating depression. Today, ETC often accompany by anesthetics to prevent seizures. It’s well-known for treating severe depression.
                              <br />
                              <span className='content-in-text-span'>Magnetic Stimulation</span> <br />
                              This technique uses Repetitive Transcranial Magnetic Stimulation(RTMS) to stimulate the patient’s brain. The procedure is painless and performed during wakeness. Comparing with ECT, magnetic stimulation reduced risks of side effects, such as seizures and memory loss.            
                          </article>
                          </div>
                        </div>
                    </div>

         <div className="workcited">
            <p className="citation-title">References</p>
            <p className="citation">American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders. 5th ed., Arlington, VA, American Psychiatric Association, 2013.</p>
            <p className="citation">American Psychological Institution. “How to Help in an Emotional Crisis.” Apa.org, 2021, www.apa.org/topics/mental-health/help-emotional-crisis.</p>
            <p className="citation">Belmaker, R.H., and Galila Agam. “Major Depressive Disorder.” New England Journal of Medicine, vol. 358, no. 1, 3 Jan. 2008, pp. 55–68, 10.1056/nejmra073096. Accessed 8 Aug. 2019.</p>
            <p className="citation">Family Caregiver Alliance. “Depression and Caregiving.” Family Caregiver Alliance, www.caregiver.org/resource/depression-and-caregiving/.</p>
            <p className="citation">QPR Institute. “QPR Institute | Practical and Proven Suicide Prevention Training.” Qprinstitute.com, 2019, qprinstitute.com.</p>
            <p className="citation">Wade, Carole, et al. Invitation to Psychology. Hoboken, Nj, Pearson, 2022.</p>
        </div>
        </div>
    </div>
  )
}

export default MDD