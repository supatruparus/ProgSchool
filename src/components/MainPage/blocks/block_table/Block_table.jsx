import './block_table.css'
import { Line } from './components/table_line'
export const Block_table = (props)=>{
  
  return(
  <section>
    <table className='table' style={{marginTop: props.marginTop}}>
      <Line className='table__title' col1='Блок' col2='Стоимость (₽)' col3 = 'Расчетное время обучения (мес.) *' />
      <Line className='table__line_bgGray' col1='Введение в программирование' col2='Бесплатно' col3 = '0.5'/>
      <Line col1='Основы программирования на Python' col2='9900' col3 = '1'/>
      <Line className='table__line_bgGray' col1='Python, продвинутый уровень' col2='14900' col3 = '2.5'/>
      <Line col1='Сети + фреймворк Flask' col2='14900' col3 = '2.5'/>
      <Line className='table__line_bgGray' col1='Базы данных' col2='14900' col3 = '2'/>
      <Line col1='Фреймворк Django' col2='14900' col3 = '2'/>
      <Line className='table__line_bgGray' col1='Разработка «боевого» проекта ' col2='9900' col3 = '1.5'/>
      <Line className = 'table__line_bold' col1='Итого' col2 ='79 400' col3='12' />
    </table>
    <footer className='footer_hell'>* если занятиям уделяется около 20 часов в неделю</footer>
  </section>
    
    
  )
}