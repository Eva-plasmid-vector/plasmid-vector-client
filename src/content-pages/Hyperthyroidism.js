import React from 'react'
import ContentTitleSnippet from '../components/ContentTitleSnippet'

import HTInfographic from '../webImage/hyperthyroidism/hyperthyroidismInfo.png'

const Hyperthyroidism = ({pastRelease}) => {
  return (
    <div>
         <ContentTitleSnippet pastRelease = {pastRelease}/>
         <div className='content-display'>
            <img src={HTInfographic} alt="Infographic" className='content-in-text-image'/>
         </div>
        <div className="workcited">
            <p className="citation-title">Work Cited</p>
            <p className="citation">Henry Ford Health System. “10 Misconceptions about Thyroid Disease.” Www.henryford.com, 1 Mar. 2021, www.henryford.com/blog/2021/03/10-misconceptions-about-thyroid-disease. Accessed 15 Jan. 2022.</p>
            <p className="citation">www.facebook.com/WebMD. “What Is Hyperthyroidism? What Are the Symptoms?” WebMD, WebMD, 27 Mar. 2017, www.webmd.com/a-to-z-guides/overactive-thyroid-hyperthyroidism. Accessed 15 Jan. 2022.</p>
            <p className="citation">Lakna. “Difference between T3 and T4.” Pediaa.com, 20 July 2018, pediaa.com/difference-between-t3-and-t4/. Accessed 15 Jan. 2022.</p>
            <p className="citation">Li, Hong, et al. “Clinical Evaluation of Various Thyroid Hormones on Thyroid Function.” International Journal of Endocrinology, vol. 2014, no. 10.1155/2014/618572, 2014, pp. 1–5, 10.1155/2014/618572. Accessed 12 Dec. 2021. Clinical evaluation of thyroid hormones.</p>
            <p className="citation">National Institute of Diabetes and Digestive and Kidney Diseases. “Graves’ Disease | NIDDK.” National Institute of Diabetes and Digestive and Kidney Diseases, 17 Mar. 2019, www.niddk.nih.gov/health-information/endocrine-diseases/graves-disease. Accessed 15 Jan. 2022.</p>
            <p className="citation">Santin, Ana Paula, and Tania Weber Furlanetto. “Role of Estrogen in Thyroid Function and Growth Regulation.” Journal of Thyroid Research, vol. 2011, no. 10.4061/2011/875125, 2011, pp. 1–7, 10.4061/2011/875125.</p>
            <p className="citation">Taylor, Peter N., et al. “Global Epidemiology of Hyperthyroidism and Hypothyroidism.” Nature Reviews Endocrinology, vol. 14, no. 5, 23 Mar. 2018, pp. 301–316, www.nature.com/articles/nrendo.2018.18, 10.1038/nrendo.2018.18. Accessed 15 Jan. 2022.</p>
            <p className="citation">“Thyroid Autoantibodies (TPOAb, TgAb and TRAb).” Medscape, 13 Jan. 2003, www.medscape.com/viewarticle/452668. Accessed 15 Jan. 2022.</p>
            <p className="citation">UMHS. “Thyroid Hormone Production and Function | Michigan Medicine.” Uofmhealth.org, 2018, www.uofmhealth.org/health-library/ug1836. Thyroid hormones.</p>

        </div>
    </div>
  )
}

export default Hyperthyroidism