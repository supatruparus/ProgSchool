import css from './TestButton.module.css'
import Btn_rounded_orange from './../../../btn_rounded_orange/btn_rounded_orange';


export const TestButton = (props) =>{
		return (
		<section className={css.wrapper}>
			<Btn_rounded_orange text = 'Начать обучение' />
			<p>Попробуйте, первые уроки бесплатны, но нужно пройти тестирование</p>
		</section>
		)


}
