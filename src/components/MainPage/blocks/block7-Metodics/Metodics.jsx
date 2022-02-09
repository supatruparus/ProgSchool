import css from './metodics.module.css'
import image1 from './image1.svg'
import image2 from './image2.svg'
import { Flex } from '../../flex_components/flex_column_title_text'




export const Metodics = () =>{
  return(
    <section className={css.wrapper}>
      <img className={css.img} src = {image1} alt = ''></img>
      <Flex
        title='Помощь и поддержка'
        text ='Если в процессе обучения возникнут сложности, вы всегда сможете задать вопрос своему наставнику.'
        text2 = 'Раз в несколько уроков вы будете получать большое задание, которое нужно будет сдавать на проверку код-ревьюеру. Он внимательно изучит ваш код, найдет ошибки и поможет вам стать лучше.'
      />
      <Flex
        title ='Методика обучения'
        text = 'Весь учебный материал структурирован по принципу «спирального обучения». Сначала вы получаете базовые знания, а затем на каждом витке спирали углубляетесь в изученные темы, доводя их понимание до совершенства. Такой подход упрощает обучение и гарантирует, что вы не пропустите ничего важного.'
      />
      <img className={css.img} src = {image2} alt = ''></img>
        
    
    </section>
  
  )

}