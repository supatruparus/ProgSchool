import Block5_elem from "./block5-elem";
import css from "./block5.module.css";
function Block5() {
  return (
    <section className={css.wrapper}>
      <Block5_elem
        number="01"
        title="Весь материал разбит на небольшие уроки"
        text="Теория и практика подаются маленькими порциями. Так вам будет легче усваивать новые знания."
      />
      <Block5_elem
        number="02"
        title="Обучение через практику"
        text="Всё, что вы узнали, вы тут же начинаете применять на практике. Вы сразу видите результаты своего труда."
      />
      <Block5_elem
        number="02"
        title="Нет ограничений по времени"
        text="Можно совмещать учёбу с работой и другими делами. Не нужно выпрашивать академический отпуск, если пришлось сделать перерыв."
      />
    </section>
  );
}
export default Block5;
