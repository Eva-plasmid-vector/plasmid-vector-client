import React from 'react'
import ContentTitleSnippet from '../components/ContentTitleSnippet'

import Billy24 from '../webImage/DID/24billy.jpg'
import Sadgirl from '../webImage/DID/sadgirl.png'
import Clarification from '../webImage/DID/clarification.png'

const DID = ({pastRelease}) => {
  return (
    <div>
        <ContentTitleSnippet pastRelease={pastRelease} />
        <div className='content-display'>
        <article className='narration'>
        *The story, all names, characters, and incidents portrayed in this production are fictitious. No identification with actual persons (living or deceased), places, buildings, and products is intended or should be inferred.*
        </article>
        <blockquote className="content-quote">“That’s not ME! I didn’t break your computer. HE did.”</blockquote>
        <article>

          <figure className="content-in-text-figure">
            <img src={Billy24} alt="24billy" className='content-in-text-image'/>
            <figcaption className="content-in-text-figurecaption">Movie poster of 24billy</figcaption>
          </figure>

        Recently, Aria was acting weird. 
        <br />
        There wasn’t anything particularly different, though sometimes she would find herself in bed, all dressed and showered, but without the memory of doing any of those things. 
        <br />
        As reported by Aria’s friends, Aria often shifted to “another person” without foreseeable signs. Last time, while hanging out with her friends downtown at the mall, Aria involuntarily shifted her personality and started to talk in a irritable tone. Her second personality (didn’t realize at that time) seriously intimidated and enraged her friends (Though Aria apologized and was forgiven, she has no idea what happened that day but still explained herself as being overstressed and in a bad mood). Time to time, Aria’s friends described her shifting up-and-downs, such as being verbally aggressive and displaying violent tendencies, as distressful. However, the problem was with Aria herself. She was in a “sleepy” stage, not aware of any of her behaviors, when the “other person” emerged. 
        <br />
        Eventually, after waking up and finding her friend’s laptop broken in her hands, Aria and her friends couldn’t bear this anymore. She decided to go to a psychiatrist.
        <br />
        Under observation, the psychiatrist spotted Aria’s symptoms. While speaking, she would constantly change her tone and voice and switch her actions back and forth. The boundary between transformations could be identified by others distinctively, but Aria would not remember anything after the switch. 
        <br /> <br />
        The psychiatrist recorded this as a distinct personality state. When he talked to Aria’s second personality, he learned that the second “Aria” had given himself a new name, Aaron, and identified himself as a boy. Aaron speaks not only English but also Japanese, though Aria herself cannot speak this language. Even more surprising: Aria’s hormone levels varied significantly between the two personalities. Through further investigations, the psychiatrist found these symptoms disrupting Aria’s daily functioning and social interactions <span className='content-in-text-span'>(SYMPTOM: DISRUPTION OF DAILY TASKS)</span>.
         Then, after consistent counselling and conversations, she eventually confides to the psychiatrist that she has suffered from extreme childhood trauma, the loss of her brother Aaron when she was seven. <span className='content-in-text-span'>(SYMPTOM: AMNESIA OF TRAUMATIC EVENTS)</span>. 
         <article className='narration'>
        Aria was always by herself. Growing up, her parents were working in another city. For most of the time, they were the electrical frequencies of Aria grandparents’ telephone. She often missed them, but she got used to being alone. Sure, three years old was still too young to know how to tell others she missed them. She would often sit around in the house, listening to her grandparents telling their neighbors how an obedient child she was. 
        <br /><br />
        But things changed when Aaron, her little brother, was born. Another inhabitants joining her solitude. Aaron came into Aria’s life when she was turning four. 
        <br /><br />
        Aria liked her new role: a sister. She enjoyed watching Aaron though she couldn’t take care of him yet. She would talk to him when noone’s around, sharing her drawings and singing the new song that she learned from grandma. 
        <br /><br />
        Aria wished she would hold Aaron up when she grew a little stronger. She waited for the day that Aaron would walk. Then she could hold his hand and take him to the garden. 
        <br /><br />
        Aaron is, and she was pretty sure using present tense is correct, Aria’s best friend. 
        <br /><br />
        But Aaron left her when he was three. 
        <br /><br />
        Nobody has warned Aria that Aaron was a premature delivery. He was born with such a weakness that would keep him forever in his childhood. Three years old, in fact, was longer than expected. Aria wouldn’t believe that Aaron was absent forever. She would scream and run away when her grandparents tried to explain the truth to her. However, as time went on, she stopped to react to others’ words. Aria became extremely calm when others started to talk about Aaron’s death, which her grandparents thought of her as “grown up.” 
        <br />
        At first, Aria would often mumble to herself inside her head as if she was talking to Aaron. It relieves her pain by doing that. She would often imagine herself as Aaron, imitating his actions and learn things in his way. Eating her favorite food, going to school, doing homework, she wondered what would Aaron do. When no one was around, Aria tried to live a life for Aaron. 
        <br />
        Months after Aaron left her, Aria seemed to forget that Aaron has ever existed. She stopped dreaming about him and waking up in the middle of the night with tear-soaked pillow. She stopped pretending to be him and preserving his habits in her own actions. In front of people, Aria looked normal and joyful, growing up like a normal seven-eight years old girl. She surely got over with it, her grandpa would say, maybe she was used to it. 
        <br /><br />
        The truth is, Aria never forget about Aaron. She was so obsessed with the thought of having him back in life, which eventually gave birth to a separated “Aaron” inside of herself. She wasn’t conscious about the other personality inhabituating her mind. “Aaron” would hide himself away from people, who only showed up when they were by themselves. 

        </article>
        
        Considering these factors, Aria was diagnosed with <span className='content-in-text-span'>Dissociative Identity Disorder (DID)</span>. 
        </article>

        <blockquote className="content-quote">“Oh, what is AMNESIA OF TRAUMATIC EVENTS?”</blockquote>
        
        <article>
          <div className='content-row'>
            <div className='row-left'>
            Amnesia of traumatic events is a common symptom seen in patients with DID. Though not directly causing the disease, this symptom is often particularly associated with the discovery of DID: the body’s defense mechanism toward traumatic events. For some individuals, the traumatic part of their memory will be held by the second personality. Recalling those memories often causes distress to the patient. Thus, as a way of self-protection, the patient’s body developed a second personality to seal those memories away. A notable collection of such memories is early-life trauma, including parental abuse, childhood or/and adulthood maltreatment, and unforgettable painful experiences. Nevertheless, the traumatic event differs between individuals based on their life experiences and genetic determinants (the susceptibility toward such trauma also varies based on genetic influences). Therefore, general examples are often not applicable for specific diagnosis. 
            </div>
            <div className='row-right'>
              <figure className="content-in-text-figure">
              <img src={Sadgirl} alt="sad_girl" className='content-in-text-image-small'/>
              </figure>
            </div>
          </div>
        </article>

        <blockquote className="content-quote">“In CLARIFICATION…”</blockquote>
        <article>
        People sometimes confuse this disorder with schizophrenia. However, there are significant differences between these two disorders. Schizophrenia describes a dispersed state of mind whereas DID can be thought of as holding two people inside one body. Patients with schizophrenia have many differences from patients with DID. The characters pulled together by the former are at least controlled by the patients without having free wills on their own, but the later ones with DID typically have zero control over their second personalities.
        </article>

        <div className="content-adnexed">
            <h2>More About DID</h2>
              <hr className="greenline"/>

                <div className='content-adnexed-box'>
                <div className='content-row'>
                <div className='row-left'> 
                  <article className="content-adnexed-text">
                      DID is highly recognizable among other kinds of psychological disorders. Despite that, it’s extremely rare with an incidence rate around 1.5% in the U.S. population (American Psychiatric Association). It is usually not easy to be diagnosed by psychiatrists nor faked by patients. Moreover, due to the rareness and risks of the disease, patients diagnosed with DID are often obliged to report for such condition, either to his or her community or any adminitrations. As a result, afraid of possible negative connotations, many parents, relatives, or patients themselves are reluctant to admit or attribute the symptoms to clinical psychosis, which somehow contributed to the low incidence rate. 
                  </article>
                </div> 
                <div className='row-right'>
                <figure>
                <img src={Clarification} alt="clarification" className='content-in-text-figure'/>
                </figure>
                </div>
                </div>
                          
                        

                        </div>
                    </div>

                    <div className="workcited">
                        <p className="citation-title">Work Cited</p>
            
                        <p className="citation">American Psychiatric Association. (2013). Diagnostic and statistical manual of mental disorders (5th ed.). American Psychiatric Association.</p>
                        <p className="citation">Preston, K., Ruth, B., & Porter, S. (2021, September 22). Monsters Inside: The 24 Faces of Billy Milligan. IMDb. https://www.imdb.com/title/tt15287836/</p>
                       
                    </div>
        </div>
    </div>
  )
}

export default DID