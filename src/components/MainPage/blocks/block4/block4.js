import css from './block4.module.css'
import Macbook from './img/macbook.svg'
import playButton from './img/play.svg'
function Block4(){
	function hide(){
		console.log(this)
	}
	
	return (
		<section className={css.block4}>
			<h1 className='title'>Как происходит обучение на YtYt?</h1>
			<main>
				<p>Обучение должно быть комфортным. Поэтому мы разработали собственную платформу для обучения программированию. На ней вы можете не только изучать теорию, но и запускать готовые примеры и даже писать свой собственный код.
				</p>
				<div className={css.video__container}>
					<img className={css.video_container__img} src={Macbook}></img>
					<iframe className={css.iframe} width="560" height="315" src="https://www.youtube.com/embed/lXpPS4wKDfE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					<div className={css.video_container__cover}></div>
					<button onClick = {console.log('click')} className={css.playButton}><img src={playButton}></img></button>
				</div>
				
			</main>
		</section>
	
	);
	}

export default Block4;