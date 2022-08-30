import React from 'react';
import {motion} from 'framer-motion';
import ContentTitleSnippet from '../components/ContentTitleSnippet';

import Joint from '../webImage/scleroderma/joint.png';
import Leg from '../webImage/scleroderma/leg.jpeg';
import Lung from '../webImage/scleroderma/lung.jpeg';
import Scalp from '../webImage/scleroderma/scalp.jpeg';
import SclerodermaPerson from '../webImage/scleroderma/scleroderma_person.png';

const Scleroderma = ( {pastRelease, parRatio} ) => {
  return (
    <>
        <ContentTitleSnippet pastRelease={pastRelease}/>
        <div className='content-display'>
        <blockquote className='content-quote'>“My Armor Is ILL!”</blockquote>
        <div className='content-in-text-image'>
              <img
              src={SclerodermaPerson} alt="scleroderma-person" className="content-in-text-image"/>
              <figcaption className="content-in-text-figurecaption">Illustration by: Zihan Jin</figcaption>
            </div>

        <blockquote className='content-quote'>Hum… If It Sounds Strange to You, Don’t Worry! We’ll Start with the Basics: Scleroderma Forms</blockquote>
        <article>
        Scleroderma can be split into 2 forms: <span className='content-in-text-span'>localized scleroderma (LoS)</span> and <span className='content-in-text-span'>systemic scleroderma (systemic sclerosis (SSc))</span>. 
        </article>
        <blockquote className='content-quote'>First Form: Localized Scleroderma (LoS) </blockquote>
        <article>
        LoS is only the hardening of the skin and underlying tissue. The LoS has five clinical forms according to Mayo Clinic, they are Plaque morphea, Bullous morphea, Generalized morphea, Deep morphea, and Linear scleroderma. But those five forms can be simplified into morphea scleroderma and liner scleroderma. 
        <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
          <div className='row-left'>
            <span className='content-in-text-span'>Morphea scleroderma</span> is the most common form. For plaque morphea, at first, there would be a skin plaque. The plaque started in red, after some time it would turn sclerous and white. There would be a purple ring surrounding the plaque at the start, indicating inflammation. Usually, this is painless besides some itchiness. At the last stage, the skin color there would become shallower eternally since the decrease of pigment in the lesion. If erosions or bullae appearance is shown on the plaque morphea, then it could be bullous morphea. But bullous morphea is a relatively rare form. Generalized morphea is plaques involving more than 2 body sites. Deep scleroderma is a relatively different one from other morphea sclerodermas. It usually happens on the upper trek, near the spine, and is defined as having a single lesion there. The appearance can be normal, atrophic, or hardened. It could be asymptomatic. Morphea scleroderma usually appears anywhere else besides the face. 
          </div>
          <div className='row-right'>
            <div className='content-in-text-image'>
          <motion.img 
                        whileHover={{scale: 1.2}}
                        // drag
                        // dragConstraints={{top: 50, left: -50, right: 50, bottom: -50}}
                        whileTap={{
                          x: -200,
                          scale: 2}}
                          src={Leg} alt="leg" className='content-in-text-image'/>
            <figcaption className="content-in-text-figurecaption">Deep scleroderma at right lower limb</figcaption>      
            </div>
          </div>
        </div>
        <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
          <div className='row-left'>
          <div className='content-in-text-image'>
          <motion.img 
                        whileHover={{scale: 1.2}}
                        // drag
                        // dragConstraints={{top: 50, left: -50, right: 50, bottom: -50}}
                        whileTap={{
                          x: 200,
                          scale: 2}}
                          src={Scalp} alt="en coup de sabre" className='content-in-text-image'/>
            <figcaption className="content-in-text-figurecaption">en coup de sabre</figcaption>      
            </div>
          </div>
          <div className='row-right'>
            <span className='content-in-text-span'>Linear scleroderma</span> is the obvious hardening and thickening of the skin. It usually appears on limbs and face. This is common in children. On the face, it usually begins with the forehead, it’s called en coup de sabre (French “cut from a sword”). The sclerotic band can expand to the scalp (scarring alopecia), nose, and even to the lip. The skin affected would fade or darken. Linear scleroderma is related to Parry-Romberg syndrome, but this is something off-topic. The linear scleroderma (monomelic) on limbs usually affects children and it can spread to muscles and tendons. This could lead to a situation called pansclerotic morphea, which is the retardation of limbs and deformity of bones and joints. 
          </div>
        </div>
        </article>

        <blockquote className='content-quote'>Second Form: Systemic Scleroderma (SSc) </blockquote>
        <article>
        SSc is usually severe since the hardening can go all the way to organs. The characteristic of SSc is cutaneous sclerosis with visceral complications. There are many symptoms (complications) and people diagnosed with systemic scleroderma may not show all of them. 


        <div className='row-left'>
        <span className='content-in-text-span'>Raynaud’s phenomenon (RP)</span>  is one of the classic symptoms of systemic scleroderma, almost 95% of the patients have it. Under a cold environment, people with RP would have pallor and anesthesia of fingers and toes with red or purple dots. Over half of the patients with systemic scleroderma would exhibit digital ulcerations, which is the blockage of blood due to a narrow blood vessel, this is one of the causes why their fingers are pale in cold places. More than 95% of people with SSc exhibit some vascular anomalies. 
        </div>

        <div className='row-left'>
        <span className='content-in-text-span'>Skin manifestations</span> include symptoms like symmetrical lesions, small or curled nails, thin nose and lip. Due to the hardening of the skin, opening the mouth to speak or eat could be harder than usual. Other cutaneous signs may be pigmentation disorder and telangiectasia. 
        </div>

        <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
          <div className='row-left'>
            <span className='content-in-text-span'>Pulmonary impairment</span> includes interstitial lung disease (ILD) and pulmonary arterial hypertension (PAH). Death can be caused by pulmonary impairment. In every 10 people who have SSc, there are 9 having evidence of ILD. By using high-resolution computed tomography (HRCT) to shoot the lung, people with ILD would show crackles or honeycomb/ground-glass like lines on the photo. If ILD affects more than 20% of lung parenchyma, then there is a great risk of dying. PAH appears in 13% of SSc patients.  It is defined as having a pulmonary arterial pressure average of more than 25 mmHg at rest. If PAH gets severe, it may cause hemoptysis, syncope, and Ortner's syndrome(dysphonia).
          </div>
          <div className='row-right'>
          <div className='content-in-text-image'>
          <motion.img 
                        whileHover={{scale: 1.2}}
                        // drag
                        // dragConstraints={{top: 50, left: -50, right: 50, bottom: -50}}
                        whileTap={{
                          x: -200,
                          scale: 2}}
                          src={Lung} alt="Lung" className='content-in-text-image'/>
            <figcaption className="content-in-text-figurecaption">HRCT of two typical cases A: Ground-glass opacities， B: Honeycomb and ground-glass opacities</figcaption>      
            </div>
          </div>
        </div>
        <div className='row-left'>
        <span className='content-in-text-span'>Gastrointestinal manifestations</span> usually affect the whole digestive tract of SSc patients. About 75-95% of SSc patients have gastroesophageal reflux disease (GERD). The key symptom of GERD is the reflux of gastric juice toward the esophagus and mouth cavity. Other gastrointestinal manifestations can be watermelon stomach, gastroparesis, nutrient deficiency due to bacterial growth, malabsorption, fecal incontinence, and rectal prolapse. 
        </div>

        <div className='row-left'>
        <span className='content-in-text-span'>Cardiac manifestations</span> are common but people with cardiac manifestations that can lead to estimated 2-year mortality are only 15% of the patients. It includes myocardial disease, conduction system defects, arrhythmias, and pericardial disease.  
        </div>

        <div className='row-left'>
        <span className='content-in-text-span'>Renal involvement</span> can be scleroderma renal crisis (SRC), it’s usually characterized by hypertension and acute renal failure. 
        </div>
        <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
        <div className='row-left'>
        <div className='content-in-text-image'>
          <figure className='content-in-text-figure-small'>
          <motion.img 
                        whileHover={{scale: 1.2}}
                        // drag
                        // dragConstraints={{top: 50, left: -50, right: 50, bottom: -50}}
                        whileTap={{
                          x: 200,
                          scale: 2}}
                          src={Joint} alt="Joint" className='content-in-text-image'/>
          </figure>
            <figcaption className="content-in-text-figurecaption">Arthritis/Resemblance of Arthritis</figcaption>      
            </div>
        </div>
        <div className='row-right'>
        <span className='content-in-text-span'>Musculoskeletal Manifestations</span> affect joints, muscles, and tendons. Joints may have arthritis and arthralgia. Muscles may be painful, weak, and inflamed. Tendons may be rubbed and inflamed. 
        </div>
        </div>
        </article>

        <div className="content-adnexed">
            <h2>Some Clinical Tips: Seek for Doctor and Medications</h2>
                <hr className="greenline"/>
                    <div className='content-adnexed-box'>
                        <article>
                        <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
                            <div className='row-left'>
                            If you are concerned with having scleroderma, there are clinical assessments available to you. Usually, the doctor would diagnose and consider the patient’s symptoms based on several conditions, including direct assessment of scleroderma and the disease’s complications.
                            <br />
                            Unfortunately, none of the current treatments can fully cure systemic scleroderma, but there are medications that target the progression of the disease. Different combinations of medications would be prescribed based on various symptoms. For localized scleroderma, the main drug used is corticosteroids. However, for different subtypes of LoS, the selected drug/drug combination may vary.
                            </div>

                        </div>
                        </article>                        
                    </div>         
        </div>
        <div className="workcited">
            <p className="citation-title">References</p>
            <p className="citation">Careta, M. F., & Romiti, R. (2015). Localized scleroderma: clinical spectrum and therapeutic update. Anais Brasileiros de Dermatologia, 90(1), 62–73. https://doi.org/10.1590/abd1806-4841.20152890</p>
            <p className="citation">Clinic, M. (n.d.). Scleroderma - Symptoms and causes. Mayo Clinic. https://www.mayoclinic.org/diseases-conditions/scleroderma/symptoms-causes/syc-20351952#:~:text=Scleroderma%20(sklair%2Doh%2DDUR</p>
            <p className="citation">Odonwodo, A., Badri, T., & Hariz, A. (2020). Scleroderma. PubMed; StatPearls Publishing. https://www.ncbi.nlm.nih.gov/books/NBK537335/</p>
            <p className="citation">Schoenfeld, S. R., & Castelino, F. V. (2015). Interstitial Lung Disease in Scleroderma. Rheumatic Diseases Clinics of North America, 41(2), 237–248. https://doi.org/10.1016/j.rdc.2014.12.005</p>
        </div>
        </div>
    </>
  )
}

export default Scleroderma