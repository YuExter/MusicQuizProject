import classNames from 'classnames';
import styles from './List.module.css';

export function List({ currentQuest, answer, onAnswer }) {
  const handleAnswerChange = ({ target: { value } }) => {
    onAnswer(value);
  };

  return (
    <ul className="list-group mt-3" key={currentQuest.id}>
      {currentQuest.variants.map((item) => (
        <li key={item.id} className={classNames('list-group-item', {
          active: answer === item.value,
        })}>
          <input type="radio" id={item.value} name={`quest-${item.id}`} value={item.value} className={styles['radio']}
                 onChange={handleAnswerChange} />
          <label htmlFor={item.value}>
            <img src={item.image} alt={item.value} className={classNames('rounded', 'img-fluid', styles['image'])}
                 style={{ objectFit: 'contain' }} />
          </label>
        </li>
      ))}
    </ul>
  );
}
