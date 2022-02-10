import terminal from './img/terminal.svg';
import spiral from './img/spiral.svg'
import monitor from './img/monitor.svg'
import calendar from './img/calendar.svg'
import refund from './img/refund.svg'
import chat from './img/chat.svg'
import rubble from './img/rubble.svg'
import block2__img from './img/block2_img.svg'
import Block1 from './blocks/block1/block1'
import Block4 from './blocks/block4/block4'
import Block5 from './blocks/block5/block5'
import {TestButton} from './blocks/TestButton/TestButton'
import { Metodics } from './blocks/block7-Metodics/Metodics';
import { Block_prices } from './blocks/Block_prices/Block_price';
import { Block_table } from './blocks/block_table/Block_table';


export const Main = ()=>{
  return(
    <main class="main"> 
      <Block1 />
      <section className="block2"> 
        <h1 className="title">Какие технологии вы изучите:</h1>
        <main className="block2__content">
          <img class="block2__img" src={block2__img} alt="PC"></img>
          <div className='block2__rightSide'>
            <div className="block2__buttons"> 
          <button className="btn--rounded block2__btn">Язык программирования Python</button>
          <button className="btn--rounded block2__btn">Сети</button>
          <button className="btn--rounded block2__btn">Базы данных</button>
          <button className="btn--rounded block2__btn btn--rounded-lightgreen">Фреймворки Flack и Django</button>
          <button className="btn--rounded block2__btn btn--rounded-lightblue">Отладка и тестирование</button>
          <button className="btn--rounded block2__btn btn--rounded-darkblue">Docker</button>
          <button className="btn--rounded block2__btn btn--rounded-purple">Git</button>
            </div>
          <p>Это необходимый минимум для современного backend-разработчика</p>
          </div>
          
  
        </main>
        
      </section>
      <section className='block3'>
        <header className='title'>
        Обучение в YtYt – это<br></br> удобно и результативно
        </header>
        <main className = 'block3__cards'>
          <div className='card'>
            <img src = {terminal} alt = "terminal"></img>
            <div className='card__title'>Огромное количество практики</div>
            <p>Более 500 самостоятельных заданий и 20 полноценных больших проектов</p>
          </div>
          <div className='card'>
            <img src ={spiral} alt ="spiral"></img>
            <div className='card__title'>Современные методики обучения</div>
            <p>Спиральное обучение: погружаемся в материал постепенно, виток за витком</p>
          </div>
          <div className='card'>
            <img src ={monitor} alt= 'monitor'></img>
            <div className='card__title'>Простое и понятное изложение</div>
            <p>Вместо заумных терминов – примеры из реального мира</p>
          </div>
          <div className='card'>
            <img src ={calendar}></img>
            <div className='card__title'>Гибкий график занятий</div>
            <p>Учитесь в любое время в удобном для вас темпе</p>
          </div>
            
          <div className='card'>
            <img src ={chat}></img>
            <div className='card__title'>Прямая связь с опытными программистами</div>
            <p>Задавайте вопросы и отправляйте свой код на проверку</p>
          </div>
          <div className='card'>
            <img src ={rubble}></img>
            <div className='card__title'>Оплата небольшими частями</div>
            <p>Платите только за тот материал, который сейчас изучаете, а не за весь курс сразу</p>
          </div>
          <div className='card'>
            <img src ={refund}></img>
            <div className='card__title'>Быстрый и легкий возврат</div>
            <p>Если передумаете учиться –вернем деньги за 3 рабочих дня</p>
          </div>
        </main>
      </section>
      <Block4 />
      <Block5 />
      <center><TestButton /></center>
      <Metodics />
      <Block_prices />
      <Block_table marginTop="15px"/>
      
    </main>
  );}