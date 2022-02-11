import './style.css'
import { Text } from './../../../text/text';
import gobblerImg from './gobbler.svg'
import BtnRoundedOrange from './../../../btn_rounded_orange/btn_rounded_orange';
export const FlexSpBtw = ()=>{
  return (
    <container className ="FlexSpBtw">
      <img src = {gobblerImg}></img>
      < Text text = 'Все блоки проходятся строго по порядку. Пропустить какой-то блок или начать обучение с середины нельзя, даже если вы считаете, что уже знаете какую-то часть материала. Только так мы можем гарантировать, что вы получите все знания, предусмотренные учебной программой.' 
      />
      <BtnRoundedOrange text = 'Начать обучение' />

    </container>
  
  )

}