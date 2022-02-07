import './block1.css'
import block1_svg from '../../img/block1_svg.svg'

function Block1(){
	return (
		<section class="block1"> 
      <main>
      <h1 class="block1__title">
        Школа <strong class = "strong--quetes">программирования</strong> для тех, кому нужны реальные навыки,а не просто сертификат
        
      </h1>
      <p>Пройдите тестирование, чтобы получить доступ к бесплатным вводным урокам</p>
      <button class="button--rounded" type="button">Пройти тестирование</button>
      </main>

      <img class="block1__img" src={block1_svg} alt="PC"></img>
      <div class="button-down"> </div>
    </section>
	);
	}
export default Block1