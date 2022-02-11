import css from './TestButton.module.css'
import Btn_rounded_orange from './../../../btn_rounded_orange/btn_rounded_orange';
import arrowImg from './img/Arrow 1.svg'

//sadfasdg
export const TestButton = (props) =>{
		return (
		<section className={css.wrapper}>
			<Btn_rounded_orange img = {arrowImg} text = 'Начать обучение' />
			<p>Попробуйте, первые уроки бесплатны, но нужно пройти тестирование</p>
		</section>
		)


}
