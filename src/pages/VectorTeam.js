import React from 'react'
import '../css/team.css'
import { motion} from 'framer-motion'


import TeamProfile from '../components/TeamProfile'

const VectorTeam = ({vectorAuthorInfo, parRatio }) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{
      opacity:1,
      // rotate: [0, 45, 0]
    }}
    exit={{opacity: 0}}
    transition={{duration: 1}}
    className='main-content'
    >
        <div className="vector-team-title">
        
        <h1 className='vector-team-title-text' >Hey! Welcome to our Vector Team</h1>
      
        <blockquote className="vector-team-quote">“Plasmid is an extrachromosomal ring of DNA especially of bacteria that replicates autonomously.”
            <br/>
            “Vector is an agent (such as a plasmid or virus) that contains or carries modified genetic material (such as recombinant DNA) and can be used to introduce exogenous genes into the genome of an organism. “
            <br/>
            ------Merriam Webster Dictionary
        </blockquote>
        <hr className="greenline"/>

        </div>

        <div className={ parRatio <= 0.8 ? "vector-team-row-vert" : "vector-team-row"}>
               <div className="row-left">
                   <h2>Vector who?</h2>
                   <article className="vector-team-introduction">
                   <span className='content-in-text-span'>Location: </span>United States and Canada
                   <br />
                   <span className='content-in-text-span'>Education: </span>Enrolled undergraduate standing
                <br />
                   Our team is comprised of two undergraduate students who are both equally passionate in life science, psychology, and neuroscience. After noticing some stigmas and misunderstandings associated with physical diseases/mental disorders, coupling with our personal background and experience, we decided to do something. That’s when we took our action: started to build the website and compose the presented content. 
                <br />
                <br />
                <span className='content-in-text-span'>Email Eva: </span><a href="mailto: zihan@plasmidvector.com">zihan@plasmidvector.com</a> or 
                <br />
                <span className='content-in-text-span'>Email Carrey: </span><a href="mailto: xiaoyan@plasmidvector.com">xiaoyan@plasmidvector.com</a>
                   </article>
               </div>

               <div className={ parRatio <= 0.8 ? "who-right-vert" : "who-right"}>
                  <TeamProfile vectorAuthorInfo={vectorAuthorInfo} parRatio={parRatio} />
               </div>
           </div>
          
        <div className='vector-team-row'>
          <div className='row-left'>
            <h2>Why Vector?</h2>
            <article className='vector-team-introduction'>
            <h3>1.	Have you ever been through this situation?...</h3>
            When you told someone that you were diagnosed with X disease, they showed a sorry but bewildered expression on their face because X disease is not as well understood as catching a cold or a pandemic. Facing their misunderstanding, you agonize but feel helpless to explain anything. 
            <br />
            When you were diagnosed with Y mental disorder, you were too afraid to tell someone else and seek for help because they might think you are pretending or trying to get people’s attention. 
            <br />
            Later, when you suffer from the mental disorder, you saw people joking about your problem and calumniating the disorder as “drama queen” or “not even exist”. There are others who start to sarcastically act like they are sick. 
            <br /> <br />
            If you ever been through any of them, you are strong. It is tough to experience any type of stigma. These are not right. Right now, we, our Plasmid Vector site, want to help. We might still be a weak voice, but we want to contribute our effort. At least with one word, one story, and one reader, there could be hope for one more person to grab a better picture of the world behind these mental/physical disorders/diseases. 
            <h3>2.	Curiosity, passion</h3>
            Most straightforwardly, everything begins with a single but sonorous reason: curiosity. Coupling with today’s climbing prevalence of some of our included diseases, we can’t help but dive into research and seek for a better understanding of them. 
            <h3>3.	Verify our interest as temporary or persistent</h3>
            We are college students who are currently exploring what we want to do and what we like to study as our career focus. We have found our “embryonic” thoughts (health related, biology, natural science, neuroscience, psychology…) which bring us together to work on this project. Through researching the diseases on our own and translating that information into various media (seasoning it with graphics, color, stories), this transitioning process would inevitably give us an idea of to what extent we enjoy learning and grasping ideas in this field. If we enjoy this project, and we still feel this binding interest after all, this field might be a persistent rather than temporary interest that we can consolidate in the future. 
            </article>
          </div>
        </div>
   </motion.div>
  )
}

export default VectorTeam