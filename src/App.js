
import './App.css';
import { Main } from './components/MainPage/MainPage';


function App() {
	return (
		<div className="App">
			<div className='wrapper'>
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

// document.querySelector('.video_container__cover').addEventListener('click', (e)=>{e.target.style.opacity = '0'})

export default App;
