import React, {useState} from 'react'
import ContentTitleSnippet from '../components/ContentTitleSnippet'

import AnorexiaSubtypes from '../webImage/eating_disorder/anorexia_subtypes.png'
import AgeStatistics from '../webImage/eating_disorder/anorexia_statistics_age.png'
import YearStatistics from '../webImage/eating_disorder/anorexia_statistics_year.png'
import StarvingGirl from '../webImage/eating_disorder/starving_girl.png'

import Diary1 from '../webImage/eating_disorder/elsa_diaries/elsa_diary_d1.PNG'
import Diary2 from '../webImage/eating_disorder/elsa_diaries/elsa_diary_d2.png'
import Diary3 from '../webImage/eating_disorder/elsa_diaries/elsa_diary_d3.PNG'
import Diary4 from '../webImage/eating_disorder/elsa_diaries/elsa_diary_d4.PNG'
import Diary5 from '../webImage/eating_disorder/elsa_diaries/elsa_diary_d5.PNG'
import Diary6 from '../webImage/eating_disorder/elsa_diaries/elsa_diary_d6.PNG'
import Diary7 from '../webImage/eating_disorder/elsa_diaries/elsa_diary_d7.PNG'
import Diary8 from '../webImage/eating_disorder/elsa_diaries/elsa_diary_d8.PNG'



const AnorexiaNervosa = ({pastRelease, parRatio}) => {

  const diaryX = [
    {
      title: Diary1,
      id: 1
    },
    {
      title: Diary2,
      id: 2
    },
    {
      title: Diary3,
      id: 3
    },
    {
      title: Diary4,
      id: 4
    },
    {
      title: Diary5,
      id: 5
    },
    {
      title: Diary6,
      id: 6
    },
    {
      title: Diary7,
      id: 7
    },
    {
      title: Diary8,
      id: 8
    }
  ]
  const commonQ = [
    {
      question: 'Is Anorexia Nervosa a disorder of hating food?',
      id: 1,
      answer: "Not necessarily. The reason for patients of Anorexia Nervosa having fear toward food is weight gain associated with eating. Most patients wouldn’t hate but feel obsessed with ideas associated food. They might dream of themselves eating, constantly cooking for others, or watching other people eat in public. "
    },
    {
      question: "Is it because their stomach doesn’t want to eat food?",
      id: 2,
      answer: "No. Anorexia Nervosa might result in gastrointestinal anomalies due to long term disturbance in eating patterns. However, it is not typically associated with food abhorrence. It is not because they are picky eaters nor because they hate food itself. "
    },
    {
      question: "Is the pathogenesis of Anorexia only associated with feelings and emotions?",
      id: 3,
      answer: "Not really. Anorexia Nervosa is indeed not a type of reductive diseases. However, it is genetically heritable with a risk of 24-74%. Patients often show severe physical symptoms, ranging from coldness, dry skin, anemia, dropping hormone level, low blood pressure, low heart rate, amenorrhea (stopping period), and hair loss. The disorder could also couple with other pental disorders such as bipolar, major depressive disorder, and bulimia (another type of eating disorder). Together, the complexion can impose urgent threats on the life of the patient. "
    },
    {
      question: "Is Anorexia due to weight loss?",
      id: 4,
      answer: "Anorexia is often detected by weight loss, but they don’t have a cause-and-effect relationship. Weight loss is often a major part of Anorexia nervosa, in which patients seek for skinnier body or lower weight through extreme methods such as food restrictions and compulsive exercises. However, natural weight loss or weight loss associated with other diseases don’t necessarily imply Anorexia Nervosa. The difference lies in the motivations and process. "
    },
    {
      question: "Is the fear of gaining weight and have body image anxiety Anorexia Nervosa? ",
      id: 5,
      answer: "Patients of Anorexia Nervosa would face fear of gaining weight and body image anxiety. Nevertheless, due to how prevalent such fear and anxiety is in today’s world, people can’t directly equate the mental disorder with complaints of body shapes. Indeed, if one has been bothered by his or her own appearance and gained intolebrable fear toward weight gain, it will increase the potential of developing Anorexia Nervosa and have prolonged effect on the person’s mood and mental stability. "
    },
    {
      question: "Is eating disorder a disease of models?",
      id: 6,
      answer: "No. Stereotypically, people with the career of models are labeled with phrases such as “skinny”, “tall”, and “bony”. Rumors are spread that all models are bothered by eating disorders. Despite the status quo has embedded the idea deep in people’s mind, its bias and falsehood would exacerbate the situation of eating disorder patients. Eating disorder has no difference from any other psychological disorders. Its susceptibility vary from person to person, while anyone could suffer from it. "
    }
  ]

  const [currentAnswer, setCurrentAnswer] = useState();
  const [currentDay, setCurrentDay] = useState('');


  return (
    <div>
        <ContentTitleSnippet pastRelease = {pastRelease}/>
        <div className='content-display'>
        
        <article>
            <blockquote className="content-quote">“Achievement”</blockquote>
            <article className='narration'>Elsa feels calm when she’s starving. She equates the feeling of hunger to self-discipline. When she eat, guilt devours her like covering her mouth with a thick blanket. She suffocates.  </article>

            Two years ago, Elsa decided that she’s going to start dieting. Just like all of the teenage girls in her school, she wanted to lose some weight. 
            To be honest, she wasn’t fat at all. Growing up, her body retained its healthy shape and normal BMI. 
            Unfortunately, that’s not how Elsa sees herself. Merely “not fat” was not something she wanted. 
            She wished that she could be skinny, real skinny, like those pretty girls whose pictures went viral on social media. 
            <br/>
            <br/>
            In the beginning, Elsa coupled dieting with immense amount of exercise. 
            She made a rigorous exercise plan and strictly followed it. Whenever she felt herself eating to much food during a meal or regained some weight, she would exercise even harder. 
            For her, exercise was a way to relieve her guilt for eating, it made her feel self-disciplined. 
            <br/>
            <br/>
            Elsa started with eating food with “low calories”. 
            No more of cheese, pizza, or strawberry cake. 
            Like all people who try to lose weight, she only trust salad, fruits and avoid any carbohydrates. 
            She often could hear her stomach groaning at night. She is starving while feeling extremely good. 
            Of course, Elsa would say to herself that hunger must equal to saying good-bye to her thick thighs and waist. 
            <br/>
            <br/>
            To some extent, her diet plan worked. Elsa calculated BMI, the body mass index, and witnessed the number sliding from 18 to 14 after six months of food restriction. 
            Before, when she saw pictures of those skinny girls online, she would be bowled over by her inferiority and disgust toward her own body. 
            But now, Elsa only feels relieved. She becomes one of them. For the first time, she feels that she is also “hot”, “beautiful“, “gorgeous”, because her weight is “qualified”. 
            She is enthralled with that peculiar sense of achievement. She forgets how afflicting that hurger tortured her day to night. She forgets her dizziness, coldness, and fatigue. Because of the lack of nutrition, her hair have been loosing madly, and her period has stopped. But Elsa doesn’t want to cut out her diet. 
            It is the only way to maintain her current weight. At this moment, the worst thing could ever happen to her is to give it up. 
            
            <blockquote className="content-quote">"Fear"</blockquote>
            <article className='narration'>
            Elsa’s always thinking about food. Those ideas haunt her mind. She is afraid of eating, gaining weight, and becoming fat. That fear filled up her throat and stomach. 
            </article>
            Elsa used to be afraid of spiders. Now, her biggest fear is to become fat. 
            Routinely, she would stand on a scale and weigh herself everyday, measuring her body shape with a tapeline, calculating the calories of any food she put into her mouth. 
            She couldn’t tolerate any weight gain, even by decimal places of the number on her scale. To one’s surprise, such fear only became worse and worse as she became skinner and skinner. 
            <br/>
            <br/>
            Elsa abhors eating food because she deems that she would gain weight afterward. 
            She feels ashamed, aversive, and regretful that she didn’t manage to be “self-disciplined”. 
            She avoid eating with others, exterminating any social events while making up reasons for her absence. 
            However, she wouldn’t admit her fear toward weight gain and fat. When her friend asks her why she wouldn’t eat, she would cover it up with excuses such as “gastrointestinal problems”, or “I just don’t like the food”. 
            <br/>
            <br/>
            Ironically, despite how much Elsa hated eating herself, her mind is obsessed with food. 
            She hoarded recipes online and cooked them for her family and friends. She would watch food videos and mukbangs online, inspecting others while they eat. 
            It would relieve her excruciating feelings when she felt herself associated with food. 
            <br/>
            <br/>
            After Elsa’s countless rejections of hanging out, she distanced herself from her friends. Her family would accuse her for being childish and ruining her own body. Elsa felt guilty and frustrated, but she doesn’t know how to explain her feelings to others. Her fear hunts her everywhere. 

            <blockquote className="content-quote">"Perception"</blockquote>
            <article className='narration'>Elsa can’t see how others see her. She hates the fat body that she thinks of herself. It becomes even worse as she becomes skinnier. </article>
            Elsa constantly receive comments telling her that she’s way too skinny. 
            “You are so skinny!” “Eat more food!” “You look like a walking skeleton”. She saw them as compliments despite she doesn’t believe in those words. 
            Everytime she stands in from of the mirror, she sees herself swelled at her ankle, waist, and thigh. No matter what others have told her, she couldn’t get that “I am fat” message off of her mind. 
            She associate her self-esteem with the number on the weight scale. Days with decreasing weight, she could stand straight and feel confident; days with increasing weight, she must turn around and walk faster when she passed a mirror. 
            <br/>
            <br/>
            To the seventh month of dieting, Elsa passed out in school during one PE session due to anemia. She was sent to the hospital and fully examined. Eventually, Elsa was diagnosed with Anorexia Nervosa. 
        </article>

        <article>
        <blockquote className="content-quote">Click the Days to View Elsa's Food Diary</blockquote>
        <div className='content-QA'>
          <div className='content-dropdown'>
              { diaryX.map((value)=>(  
              <div 
              className = {value.title ===(currentDay)? 'content-dropdown-Q active': 'content-dropdown-Q'}
              key={value.id} onClick={(event)=>{
                event.preventDefault();
                setCurrentDay(value.title);
              }}
                > 
                Day {value.id}
              </div>   
          )) }
          </div>
          {currentDay !== '' &&
          <div className='content-dropdown-A'>
          <img src={currentDay} alt="diary" className='content-in-text-image'/>
        </div>
          }
        </div>

        </article>

       <article>
       <blockquote className="content-quote">SUBTYPES OF ANOREXIA NERVOSA</blockquote>
       <figure className='content-in-text-image'>
           <img src={AnorexiaSubtypes} alt="anorexia-subtypes" className='content-in-text-image'/>
           <figcaption className="content-in-text-figurecaption">Illustration by: Zihan Jin</figcaption>
       </figure>
       </article>
       <article>
       <blockquote className="content-quote">MISUNDERSTANDINGS</blockquote>

       <figure className='content-in-text-figure'>
           <img src={AgeStatistics} alt="age-statistics" className='content-in-text-image'/>
           <figcaption className="content-in-text-figurecaption">Prevalence, incidence, and DALY rates of anorexia nervosa by age in China, 2019.</figcaption>
        </figure>
        <figure className='content-in-text-figure'>
            <img src={YearStatistics} alt="year-statistics" className='content-in-text-image'/>
            <figcaption className="content-in-text-figurecaption">Trends in age-standardized prevalence, incidence, and DALY rates of anorexia nervosa in China from 1990 to 2019.</figcaption>
        </figure>
       
       According to ANAD, eating disorders affected 9% of the population worldwide. About 26% of people with eating disorder committed suicide, which meakes it among the deadliest mental illnesses, second only to opioid overdose.
        Normally, the disorder is thought to be dominant in post-industrialized or high income countries. Nevertheless, until today, countries such as China have shown sheer rise in its prevalence despite still lack of education and popularization of the disorder itself. <span className='content-in-text-span'>See left figure </span> 
        Speaking in terms of gender, it has been previously shown that Anorexia Nervosa is far more common in female than in male, with the incidence rate peaked at the ages of 15 – 19.  <span className='content-in-text-span'>See right figure</span> (Images source: Image Source: Li Z, Wang L, Guan H, Han C, Cui P, Liu A and Li Y (2021) Burden of Eating Disorders in China, 1990-2019: An Updated Systematic Analysis of the Global Burden of Disease Study 2019. Front. Psychiatry 12:632418. doi: 10.3389/fpsyt.2021.632418;)
        <br />
          
          Still, there is an immense gap need to be filled for people in general to fully understand and adopt eating disorder, including Anorexia Nervosa and Bulimia, with its commonality. <span className='content-in-text-span'>Here are several questions that might be asked and encountered for people who first get to know this disorder: </span>
       </article>

       <div className='question-board'>

        <div className='content-QA'>
          <div className='content-dropdown'>
              { commonQ.map((value)=>(  
              <div 
              className = {value.answer ===(currentAnswer)? 'content-dropdown-Q active': 'content-dropdown-Q'}
              key={value.id} onClick={(event)=>{
                event.preventDefault();
                setCurrentAnswer(value.answer);
              }}
                > 
                {value.question}
              </div>   
          )) }
          </div>
          <div className='content-dropdown-A'>
            {currentAnswer}
          </div>
        </div>
      
       </div>

       <div className="content-adnexed">
            <h2>WHAT CAN YOU DO TO HELP THEM?</h2>
            <hr className="greenline"/>
            <div className={ parRatio <= 0.8? 'content-row-vert' : 'content-row'}>
              <div className='row-left'>
              <article className="content-adnexed-text">
              Despite its high mortality rate, Anorexia nervosa could be hard to recover from. The endurance of the disease vary from months to years, even to decades. Today, facing the spreading of comments such as “I’m on a diet”, “you should lose weight” or “you should gain weight”, patients of Anorexia Nervosa can almost be triggered anytime, anywhere during daily life. The first thing to do, as a family, friend, or person who wants to help, is to approach the patient through talks. Ask them about their feelings and situations in moderate ways. One red flag is that you should not ask them or force them to eat any food. It will only exacerbate the patient’s aversive reaction. Once possible, it is urgent to send the patient for clinical help and consult for therapeutic plan depending on the level of severity. 
            </article>
              </div>
              <div className='row-right'>
              <figure className='content-in-text-figure-small'>
              <img src={StarvingGirl} alt="starving-girl" className='content-in-text-image'/>
            </figure>
              </div>
            </div>
            
           
        </div>

       <div className="workcited">
            <p className="citation-title">Work Cited</p>
            
                        <p className="citation">American Psychiatric Association. (2013). Diagnostic and Statistical Manual of Mental Disorders (5th ed.). American Psychiatric Association.</p>
                        <p className="citation">ANAD. (n.d.). Eating Disorder Statistics | General & Diversity Stats | ANAD. National Association of Anorexia Nervosa and Associated Disorders. Retrieved July 18, 2022, from https://anad.org/eating-disorders-statistics/?gclid=CjwKCAjw14uVBhBEEiwAaufYx8dmAq-zU8BajUjokEhpZHqWV4tOEsj-Tpt0Bo8yhk9G5_WEmMtUDxoCVU4QAvD_BwE</p>
                        <p className="citation">Li, Z., Wang, L., Guan, H., Han, C., Cui, P., Liu, A., & Li, Y. (2021). Burden of Eating Disorders in China, 1990-2019: An Updated Systematic Analysis of the Global Burden of Disease Study 2019. Frontiers in Psychiatry, 12. https://doi.org/10.3389/fpsyt.2021.632418</p>
      </div>

        </div>
    </div>
  )
}

export default AnorexiaNervosa