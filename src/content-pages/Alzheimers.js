import React, {useState}from 'react';
import {motion} from 'framer-motion';
import ContentTitleSnippet from '../components/ContentTitleSnippet';
import AlzheimersCart from '../webImage/alzheimers/alzheimers_cartoon.png'
import Symptoms from '../webImage/alzheimers/memory_issue.png'
import Plaque from '../webImage/alzheimers/plaque_deposit.png'
import NeuronLoss from '../webImage/alzheimers/alzheimers_brain.jpg'
import AlzheimersLady from '../webImage/alzheimers/alzheimers_cover.png'
import Pedigree from '../webImage/alzheimers/pedigree.png'
import Lifestyle from '../webImage/alzheimers/lifestyle.png'
import Complication from '../webImage/alzheimers/complication.png'

const treat = [
    {
      title: "Mild/moderate pharmacological treatment",
      describe: "For mild to moderate level patients, drugs such as galantamine, rivastigmine, and donepezil are used to target learning-related symptoms and memory problems. These drugs are cholinesterase inhibitors that can help to prevent the breakdown of a neurotransmitter acetylcholine (ACh). In simple words, acetylcholine is a major group of neurotransmitters that are responsible for brain functions such as learning and movement. Through inhibiting the breakdown of acetylcholine, cholinesterase inhibitors can promote the effectiveness of ACh, thereby alleviating learning deficits related to Alzheimer’s symptoms."
    },
    {
      title: "Disease modifying drug/therapy treatment",
      describe: "To treat underlying mechanisms of Alzheimer’s disease, a different method including treatments called disease-modifying drugs/therapies is used. Remember beta-amyloid, the pathological protein deposition that disturbs brain functions of Alzheimer’s patients? Drugs such as Aducanumab are to target these protein complexes and reduce toxic buildup of plaques, aiming to treat Alzheimer’s symptoms at neurological level. However, the effectiveness and direction of targeting beta-amyloid to treat Alzheimer’s have been exceptionally ambiguous and debated. Though neuroscientists have historically considered beta-amyloid as a risk factor of Alzheimer’s development, it is worth to note that the direct pathological role associated with this protein as well as its place in Alzheimer’s treatment are not verdictive. "
    },
    {
      title: "Moderate/severe pharmacological treatment",
      describe: "When the disease has deteriorated and get to moderate/severe level, drugs are more used to help the patient maintaining basic functions. N-methyl D-aspartate (NMDA) antagonist is a drug that targets the neurotransmitter glutamate. When glutamate level has reached over-abundance, it can subsequently trigger cell deaths. Therefore, to decelerate the process, NMDA is often used to inhibit glutamate functions, relieving neuronal loss that is often seen in Alzheimer’s brain. "
    },
    {
      title: "Non-pharmacological treatment",
      describe: "Aside from medication and drug use, non-pharmacological treatments are also available to patients who show behavioral/cognitive changes and mental problems in addition to physiological brain damage. Degraded cognitive ability, sleep deprivation, and mood disorders are common challenges that many Alzheimer’s patients may encounter. Musical treatments, aerobic exercises, and positive lifestyle changes are all therapeutic methods that have been used for recovery. Though the effectiveness of these treatments is relatively harder to evaluate, meta-analysis and systemic reviews in the past have received approval results in patient improvements.",
    }
  ]
const prevent = [
  {
    sign: "High cholesterol level/high BMI",
    action:"Aerobic exercises, daily walk, keep weight within the healthy range"
  },
  {
    sign: "High alcoholic intake",
    action: "Moderate alcoholic intake or abstinence"
  },
  {
    sign:"Saturated fat diet (milk, meat…)",
    action:"Fish-based protein diet; Mediterranean food"
  },
  {
    sign:"Homocysteine (vitamin deficiency)",
    action:"Vitamin B12 and B6. Other vitamin intake such as vitamin C, A, and D"
  },
  {
    sign:"Mental disorder such as anxiety, depression, and/or trauma",
    action:"Get clinical aid as soon as possible"
  },
  {
    sign:"Occupational exposure to toxic chemicals",
    action:"Get body examinations periodically; reduce exposure as much as possible."
  },
  {
    sign:"Infection",
    action:"Treat infection and get body examinations"
  }
]

const Alzheimers = ({pastRelease, parRatio}) => {

  const [treatment, setTreatment] = useState();
  const [act, setAct] = useState();

  return (
    <div>
      <ContentTitleSnippet pastRelease={pastRelease}/>

      <div className='content-display'>
        <blockquote className='content-quote'>“Mom, don't you remember me?”</blockquote>
        <div className='content-in-text-image'>
              <img
              src={AlzheimersCart} alt="alzheimers-cartoon" className="content-in-text-image"/>

              <figcaption className="content-in-text-figurecaption"> Illustration by: Zihan Jin</figcaption>
          </div>

        <blockquote className='content-quote'>Alzheimer’s Disease in Three Sentences</blockquote>
        <article className='narration'>
           A neurodegenerative disease targeting cognitive abilities of middle or older age populations, Alzheimer’s disease has become the most prevalent cause of dementia. 
          <br />
          <br />
          Usually sporadic and without a direct cause, patients suffering from the disease can face mild to severe life challenges, resulting in symptoms such as memory deficits, behavioral disorders, and personality changes that interfere with daily functions.
          <br />
          <br />
          Though today’s medicine hasn’t developed complete curation of the disease, therapies and drugs targeting specific physiological symptoms can help to slow down Alzheimer’s neurodegenerative nature. 

        </article>

        <blockquote className='content-quote'>Symptoms</blockquote>
        <article>
        <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
          <div className='row-left'>
            - Unable to form solid new/short term memories. 
            <br />
            <br />
            - Gradual degeneration of distant memory. Loose attention span.
            <br />
            <br />
            - Personality changes due to memory loss. Easily agitated or depressed. 
            <br />
            <br />
            - Impaired reasoning, difficulty handling complex tasks, and poor judgment. Note that the disturbed judgement here interferes with one’s normal functions, not temporary or conditional. Examples are unable to manage bank account or make poor financial decisions. 
            <br />
            <br />
            - <span className="content-in-text-span">MCI (Mild cognitive impairment)</span> is a common symptom found with many Alzheimer’s patients. Characterized by disturbed sensation and memory problem above average, patients suffering from MCI can lose cognitive abilities ranging from smell to movement difficulties. 
            <br />
            <br />
            - Language dysfunction such as inability to speak fluently or write coherently. 
            <br />
            <br />
            - Visuospatial dysfunction in recognizing familiar faces/objects/places. 
            <br />
            <br />
            - Behavioral changes: walking around, restless, yelling, bad temper.
            <br />
            <br />
            - Based on the severity of symptoms, patients can be diagnosed as mild, moderate, or severe types of Alzheimer’s disease. For mild type Alzheimer’s patients, they often experience inconvenience in daily functions and reduced efficiency in completing simple tasks. On the other hand, once a patient reached severe type of Alzheimer’s, he or she would need help from others even through very basic tasks: sit/stand straight, eat, etc. Normal body movement and walking can be stressful or even impossible.   
        </div>
        <div className='row-right'>
          <figure className="content-in-text-figure">
              <motion.img 
              whileHover={{scale: 1.2}}
              // drag
              // dragConstraints={{top: 50, left: -50, right: 50, bottom: -50}}
              whileTap={{
                x: -300,
                y: 200,
                scale: 3}}
              src={Symptoms} alt="alzheimers-symptoms" className="content-in-text-image"/>
              <figcaption className="content-in-text-figurecaption">Illustration by: Zihan Jin</figcaption>
            </figure>
          </div>
        </div>

        </article>

        <blockquote className='content-quote'>Neurological backstage: what happened behind the scenes? </blockquote>
        <article>
          To be diagnosed as Alzheimer’s, aside from behavioral dysfunctions and shifts in personality, pathological changes to the brain is a crucial criterion that must be evaluated. Most changes listed here are found in several specific brain regions, including limbic areas such as hippocampus or higher-level cortical regions. Typically, there are three major changes in the brain that characterize the onset of Alzheimer’s disease. 
          <br />
          <br />
{/* First row of this section */}
          <div >
            <span className='content-in-text-span'>Sign 1:  Filament collections</span> <br />
            Neurofibrillary tangle is made up of intraneuronal cytoskeletal filaments. Normally, intraneuronal cytoskeletal filaments are responsible for neural communication, learning, and network formation. Thinking of them as tunnels or conductive wires, they connect transmembrane receptors and conduct extrinsic signals as neurons are being stimulated. However, like hair tangles clogging your sink or shower drains, these intraneuronal cytoskeletal filaments can form tangles inside your brain, resulting in complexes called neurofibrillary tangle, namely Tau. For Alzheimer’s patients, the formation of these tangles can be detected through histological analysis of brain sections (it was tested through post-mortem analysis). 
          </div>

{/* Second row of this section */}

        <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
        <div className='row-left'>
            <figure className="content-in-text-figure-small">
                  <motion.img 
                  whileHover={{scale: 1.2}}
                  // drag
                  // dragConstraints={{top: 50, left: -50, right: 50, bottom: -50}}
                  whileTap={{
                    x: 300,
                    y: 50,
                    scale: 3}}
                  src={Plaque} alt="plaque-deposit" className="content-in-text-image"/>
                  <figcaption className="content-in-text-figurecaption">Figure: Neuroscience by Dale Purves, George J. Augustine, David Fitzpatrick, William C. Hall, Anthony-Samuel LaMantia, Richard D. Mooney, Michael L. Platt, Leonard E. White (z-lib.org).pdf</figcaption>
            </figure>
            </div>
          <div className='row-right'>
              
                <span className='content-in-text-span'>Sign 2: Plaque deposits</span>
                <br />
                Accumulation of abnormal protein is also an ominous sign of the onset of Alzheimer’s disease. Indeed, plaques and cholesterol buildups are common warning signs in stroke and hypertension patients. For AD patients, instead of locating in blood vessels, pathological depositions are found in extracellular space and made up of protein (called beta-amyloid, though some studies have casted doubt on this protein’s significance in contributing to Alzheimer’s development and further recovery). Together, this specific type of protein deposition is known as senile plaque, which is also detectable in brain’s histological sections. Accumulation of abnormal protein peptide is thought to be a key factor to the development of Alzheimer’s disease.              
          </div>
          
          </div>
{/* Third row of this section */}
          
          <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
          <div className='row-left'>
            <figure className="content-in-text-figure-small">
                  <motion.img 
                  whileHover={{scale: 1.2}}
                  // drag
                  // dragConstraints={{top: 50, left: -50, right: 50, bottom: -50}}
                  whileTap={{
                    x: 300,
                    y: 50,
                    scale: 3}}
                  src={NeuronLoss} alt="neuron-loss" className="content-in-text-image"/>
                  <figcaption className="content-in-text-figurecaption">Figure: https://www.nia.nih.gov/health/alzheimers-disease-fact-sheet#:~:text=Alzheimer'
                  s%20disease%20is%20named%20after,
                  of%20an%20unusual%20mental%20illness.</figcaption>
            </figure>
            </div>
          <div className='row-right'>
              
                <span className='content-in-text-span'>Sign 3: Neuron loss</span>
                <br />
                Alzheimer’s disease has been known for its neurodegenerative nature, which is characterized by the reduction/loss of brain neurons. Long term memory loss or failure in the formation of new memories can both be traced back to the malfunctions of microscopic learning. Losing neurons, the fundamental units of the brain, is like losing boxes where memories are stored. With the diffusion of neuron loss, the severity of Alzheimer’s disease can be accelerated and progress from mild to severe, eventually jeopardizing maintenance- or innate-level abilities. Thus, significant shrinkage in the number of neurons or brain volume is another diagnostic characteristic of Alzheimer’s brain. 
             
          </div>
          
          </div>
        </article>

        <blockquote className='content-quote'>How Prevalent is Alzheimer’s Disease? Who Is at Risks? </blockquote>
        <article>
            Across the globe, Alzheimer’s disease has become a “slogan” related to unhealthy aging. Indeed, this historically confounding and rare disease has now conquered its place in modern medical world. In older people, Alzheimer’s disease is ranked as the most common cause of dementia with a rate as high as 60-80%. Across countries, ages, and sex, the incidence rate of Alzheimer’s can vary. 
            <br />
            Here is a list of data that might help with your understanding:
            <br />
            <br />
            In the U.S., an estimated <span className='content-in-text-span'>10%</span> of people who are <span className='content-in-text-span'>65</span> or older have Alzheimer disease. 
            
            The percentage of people with Alzheimer disease increases with age: 
            
            <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
              
                <div className='content-dropdown-A'>
                  <div className='row-left'>
                (U.S. data)
                <br />
                <br />
                Age 65 - 74: 3% <br />
                Age 75 - 84: 17% <br />
                Age ≥ 85: 32% <br />
                </div>
              </div>
            </div>

            During 2020, in China, approximately 15 million people have been diagnosed with Alzheimer’s disease, which accounts for an incidence rate of 6.1%. According to data predicted by China Alzheimer’s Disease Report 2021, in 2050, the number of patients could increase to as much as 400 million people. 
            <br />
            In terms of sexual differences, in China, women are more susceptible to Alzheimer’s disease comparing with men: 
            <br />
            <br />
            <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
            <div className='content-dropdown-A'>
                <div className='row-left'>
                Women morbidity: 1188.9 per 100,000 <br />
                Women mortality: 30.8 per 100,000 <br />
                Men morbidity: 669.3 per 100,000 <br />
                Men mortality: 14.6 per 100,000 <br />
                </div>
              </div>
            </div>
            
            <br />
            Across cultures and nations, the longer life expectancy of industrial countries has increased population prevalence of Alzheimer’s disease.  
        </article>



      <blockquote className='content-quote'>Causes: Why Me?</blockquote>
      <div>
        <article>
          <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
            <div className='row-left'>
              <article className='narration'> <span className='content-in-text-span'>Family History (inheritance)</span></article> <br />
            </div> 
            <div className='row-right'>
              <figure className="content-in-text-figure">
                <motion.img 
                whileHover={{scale: 1.2}}
                // drag
                // dragConstraints={{top: 50, left: -50, right: 50, bottom: -50}}
                whileTap={{
                  x: -300,
                  y: 50,
                  scale: 3}}
                src={Pedigree} alt="pedigree" className="content-in-text-image"/>
                <figcaption className="content-in-text-figurecaption">Illustration by: Zihan Jin</figcaption>
              </figure>
            </div>        
          </div>
          
          Studies have examined and identified specific genetic factors associated with middle age-onset of Alzheimer’s disease. The inheritance pattern discovered for middle age Alzheimer’s is autosomal dominant, meaning that the genetic defects reside on autosomal chromosomes and both men and women have equal chance on receiving them. 
          <br /><br />
          Aside from family history, genetic mutation on chromosome 21 can also increase one’s risk of developing Alzheimer’s. It was proposed that genes on chromosome 21 encode for Amyloid Precursor Protein, which, if mutated, can result in dysfunctional subunits, leading to protein plaque accumulation (see the neurological section where we talked about brain changes related to Alzheimer’s). Other mutant genes associated with Alzheimer’s are presenilin 1 and presenilin 2, both inherited through autosomal dominant pattern. 
          <br /><br />
          More research has identified genes associated with the risks of later onset of AD (after age 60). An allele of a particular gene on chromosome 19 has been studied and proposed to have correlations with the risks of AD development. 
          <br /><br />
          Though handful of research are conducted through analyzing one or several particular genes, it is worth to note that the onset of AD is not solely determined by one gene or only triggered by inheritance. Environmental factors and a collaboration of several genes are all probable culprits of AD pathogenesis. 
        </article>
        
        <article>
          <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
              <div className='row-left'>
                <article className='narration'> <span className='content-in-text-span'>Complication due to other diseases</span></article> <br />
              </div> 
              <div className='row-right'>
                <figure className="content-in-text-figure">
                  <motion.img 
                  whileHover={{scale: 1.2}}
                  // drag
                  // dragConstraints={{top: 50, left: -50, right: 50, bottom: -50}}
                  whileTap={{
                    x: -300,
                    y: 50,
                    scale: 3}}
                  src={Complication} alt="complication" className="content-in-text-image"/>
                  <figcaption className="content-in-text-figurecaption">Illustration by: Zihan Jin</figcaption>
                </figure>
              </div>        
            </div>
            Narrowed vascular system due to other common aging problems may be another risk factor increasing the chance of one getting Alzheimer’s. To ensure proper functioning of neurons, the brain must receive enough amount of glucose and expend metabolic wastes through the body’s circulatory system. Blood vessels and vascular networks inside the brain are responsible for sufficient nutrients deliveries. Healthy glucose metabolism and the brain’s vascular system can be threatened by blood vessel plaques and cholesterol buildups. If the brain can’t replenish its neural network with the needed energy, neurons can loss connections and become “dull” when firing. Hence, patients with high blood pressure and stroke history, if untreated over time, can eventually increase their risks of developing Alzheimer’s because of neuronal loss or reduced neuron connections. Additionally, diabetes, a disease characterized by disturbed glucose homeostasis, is also a potential risk factor of Alzheimer’s. 
        </article>

        <article>
          <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
              <div className='row-left'>
                <article className='narration'> <span className='content-in-text-span'>Lifestyle</span></article> <br />
              </div> 
              <div className='row-right'>
                <figure className="content-in-text-figure">
                  <motion.img 
                  whileHover={{scale: 1.2}}
                  // drag
                  // dragConstraints={{top: 50, left: -50, right: 50, bottom: -50}}
                  whileTap={{
                    x: -300,
                    y: 50,
                    scale: 3}}
                  src={Lifestyle} alt="lifestyle" className="content-in-text-image"/>
                  <figcaption className="content-in-text-figurecaption">Illustration by: Zihan Jin</figcaption>
                </figure>
              </div>        
            </div>
            Scheduled exercises, balanced diet, and round sleep are all defense lines against the development of Alzheimer’s. During sleep, brain cells can clean up daily debris and “refresh” its environment for proper functions of the next day. It also rewires neurons to consolidate useful networks and relinquishes unused connections. Prolonged sleep loss can be detrimental to the brain’s healthy metabolism. With chronical memory deficits and accumulation of metabolic wastes/protein depositions, sleep problems can eventually increase one’s risks of getting Alzheimer’s. In terms of unhealthy habits, drug use and alcohol ingestion can both increase Alzheimer’s-related waste buildup in one’s brain, including beta-amyloid deposition.         </article>
      </div>

      <blockquote className='content-quote'>Treatment: Not Perfect but Still Work</blockquote>
      <article>
      <div className='question-board'>
        <div className='content-QA'>
          <div className='content-dropdown'>
              { treat.map((value)=>(  
              <div 
              className = {value.describe ===(treatment)? 'content-dropdown-Q active': 'content-dropdown-Q'}
              key={value.title} onClick={(event)=>{
                event.preventDefault();
                setTreatment(value.describe);
              }}
                > 
                {value.title}
              </div>   
          )) }
          </div>
          <div className='content-dropdown-A'>
            {treatment}
          </div>
        </div>

        </div> 
          <br />
          More information about drug use, prescription, and Alzheimer’s-related medication can be found <a href="https://www.nia.nih.gov/health/how-alzheimers-disease-treated" target="_blank" rel="noopener noreferrer"><span className='content-in-text-span'>here</span></a>
          <br />
          More information about non-pharmacological treatments of Alzheimer’s disease can be found <a href="http://www.nptherapies.org/pdf/NPT%20Fact%20Sheet.pdf" target="_blank" rel="noopener noreferrer"><span className='content-in-text-span'>here</span></a> 
          
        </article>

        <blockquote className='content-quote'>Then... Is There Anything I Can Do?</blockquote>
        <article>
          Emerging as an epidemic level disease that imposes threat on modern aging population, Alzheimer’s disease and its prevention have become one of the top-urgent problems that today’s society determined to resolve. As individuals currently at various life stages, people, whether above 65 or not, should be aware of the importance of healthy habits and lifestyles in preventing aging problems. Here is a summary of some risk factors and their related prevention. 
         <br />
        <div className='question-board'>
          <div className='content-QA'>
            <div className='content-dropdown'>
                { prevent.map((value)=>(  
                <div 
                className = {value.action ===(act)? 'content-dropdown-Q active': 'content-dropdown-Q'}
                key={value.sign} onClick={(event)=>{
                  event.preventDefault();
                  setAct(value.action);
                }}
                  > 
                  {value.sign}
                </div>   
            )) }
            </div>
            <div className='content-dropdown-A'>
            {act}
          </div>
          </div>
        </div>

        
        </article>

      
        <div className="content-adnexed">
            <h2>IT'S NOT A NEW THING: SOME HISTORY ABOUT ALZHEIMER'S</h2>
            <hr className="greenline"/>
            <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>

              <div className='row-left'>
              <article className="content-adnexed-text">
              Though prevalent in today’s world, Alzheimer’s disease has its history dated back in 1906. The disease was first discovered by Dr. Alois Alzheimer, who also had the disease named after himself. Receiving a woman suffering from an unusual brain illness, Dr. Alois Alzheimer noticed the abnormal changes in the patient’s brain and her behavioral symptoms resembling today’s Alzheimer’s patients, including language dysfunctions, memory loss, and learning problem. After the woman’s death, Dr. Alois Alzheimer later discovered pathological protein clumps (the beta-amyloid deposition) and fiber tangles (the neurological fibrillary tangles Tau) through post-mortem analysis of the patient’s brain.             </article>
              </div>

              <div className='row-right'>
                <figure className='content-in-text-figure-small'>
                <img src={AlzheimersLady} alt="plaque" className='content-in-text-image'/>
              </figure>
              </div>
            </div>
            
           
        </div>

        <div className="workcited">
            <p className="citation-title">References</p>
            
                        <p className="citation">Alzheimer's Association. (2020). 2020 Alzheimer’s Disease Facts and Figures. Alzheimer’s & Dementia, 16(3), 391–460. https://doi.org/10.1002/alz.12068</p>
                        <p className="citation">Gosun Medical. (2022, September 21). 阿尔茨海默病日 | 积极预防干预，守护爱的记忆|阿尔茨海默病|记忆|心脑血管病|健忘|-健康界. Www.cn-Healthcare.com. https://www.cn-healthcare.com/articlewm/20220921/content-1438918.html</p>
                        <p className="citation">Lowe, D. (2022, July 25). Faked Beta-Amyloid Data. What Does It Mean? Www.science.org. https://www.science.org/content/blog-post/faked-beta-amyloid-data-what-does-it-mean</p>
                        <p className="citation">Merck & Co, Inc. (n.d.). Dementia - Neurologic Disorders. MSD Manual Professional Edition. Retrieved December 8, 2023, from https://www.msdmanuals.com/en-gb/professional/neurologic-disorders/delirium-and-dementia/dementia#v1036708</p>
                        <p className="citation">National Institute on Aging. (2019, May 22). Alzheimer’s Disease Fact Sheet. National Institute on Aging. https://www.nia.nih.gov/health/alzheimers-disease-fact-sheet#:~:text=Alzheimer</p>
                        <p className="citation">National Institute on Aging. (2023, April 1). How Is Alzheimer’s Disease Treated? National Institute on Aging. https://www.nia.nih.gov/health/how-alzheimers-disease-treated</p>
                        <p className="citation">Piller, C. (2022, July 21). Potential fabrication in research images threatens key theory of Alzheimer’s disease. Www.science.org. https://www.science.org/content/article/potential-fabrication-research-images-threatens-key-theory-alzheimers-disease</p>
                        <p className="citation">Priel, A., Tuszynski, J. A., & Woolf, N. J. (2009). Neural cytoskeleton capabilities for learning and memory. Journal of Biological Physics, 36(1). https://doi.org/10.1007/s10867-009-9153-0</p>
                        <p className="citation">Sindi, S., Mangialasche, F., & Kivipelto, M. (2015). Advances in the prevention of Alzheimer’s Disease. F1000Prime Reports, 7. https://doi.org/10.12703/p7-50</p>

      </div>

      </div>
    </div>
  )
}

export default Alzheimers