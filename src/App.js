
import './App.css';
import terminal from './img/terminal.svg';
import spiral from './img/spiral.svg'
import monitor from './img/monitor.svg'
import calendar from './img/calendar.svg'
import refund from './img/refund.svg'
import chat from './img/chat.svg'
import rubble from './img/rubble.svg'
import block2__img from './img/block2_img.svg'
import Block1 from './components/block1/block1'
import Block4 from './components/block4/block4'
import Block5 from './components/block5/block5'
import Block6 from './components/block6/block6'


function App() {
	return (
		<div className="App">
			<div class="wrapper">
				<Header />
				<Main />
				
			</div>
		</div>
	);
}

const Header = ()=>{
	return (
	<header>
		<nav className="menu-container"> 
		<nav className="menu menu-left">
			<img className="logo" src="./img/logo.png" alt="logo"></img>
			<nav className="menu__elem">Чему вы научитесь</nav>
			<nav className="menu__elem" href="" value="Процесс обучения">Процесс обучения</nav>
			<nav className="menu__elem">Стоимость</nav>
			<nav className="menu__elem">Контакты</nav>
		</nav>
		<nav className="menu menu-right"> 
			<nav className="menu__elem--right">Регистрация</nav>
			<button className="btn--rounded button--blue">Войти</button>
		</nav>
		</nav>
	</header>
	)
}
const Main = ()=>{
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
					<img src = {terminal}></img>
					<div className='card__title'>Огромное количество практики</div>
					<p>Более 500 самостоятельных заданий и 20 полноценных больших проектов</p>
				</div>
				<div className='card'>
					<img src ={spiral}></img>
					<div className='card__title'>Современные методики обучения</div>
					<p>Спиральное обучение: погружаемся в материал постепенно, виток за витком</p>
				</div>
				<div className='card'>
					<img src ={monitor}></img>
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
		<Block6 />
	</main>
);}
// document.querySelector('.video_container__cover').addEventListener('click', (e)=>{e.target.style.opacity = '0'})

export default App;
