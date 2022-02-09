
import css from './prices.module.css'
import svg1 from './images/svg1.svg'
import svg2 from './images/img2.svg'
import { Text } from '../../../text/text'
export const Block_prices = ()=> {
  return(
    <div className="container">
      <h1 className="title">Стоимость обучения</h1>
      <div className="flex_spacebetween">
        <div className = {css.block}>
          <img src={svg1} alt = ''></img>
          <Text text = 'Весь курс разбит на несколько блоков. Оплата поэтапная вы платите только за тот блок, который сейчас проходите.'/>
        </div>
        <div className={css.block}>
          <img src={svg2} alt = ''></img>
          <Text text ='Любой из блоков вы можете оплатить в рассрочку'/>
        </div>
        <div className={css.block}>
          <img src={svg1} alt = ''></img>
          <Text text ="Если передумаете учиться, то возврат можно оформить в любой момент. Возвращаем деньги за 3 рабочих дня." />
        </div>
        
      </div>
    </div>
  
  )

}