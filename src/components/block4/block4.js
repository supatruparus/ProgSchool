import './block4.css'
import Macbook from '../../img/Macbook.jpg'
function Block4(){
	
	return (
		<section className='block4'>
			<h1 className='title'>Как происходит обучение на YtYt?</h1>
			<main>
				<p>Обучение должно быть комфортным. Поэтому мы разработали собственную платформу для обучения программированию. На ней вы можете не только изучать теорию, но и запускать готовые примеры и даже писать свой собственный код.
				</p>
				<div className='video_container'>
					<img className='video_container__img' src={Macbook}></img>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/lXpPS4wKDfE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<div className='video_container__cover'></div>
				</div>
				
			</main>
		</section>
	
	);
	}

export default Block4;