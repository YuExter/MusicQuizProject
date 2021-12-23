import wasted from '../assets/wasted.png';

export function Wasted({ wrongAnswers }) {
  const preparedAnswers = wrongAnswers.map(step => step + 1).join(', ');

  return (
    <div id="wasted" className="position-fixed top-50 start-50 translate-middle">

      <div className="text-center">
        <span className="d-inline-block">Wrong answers:</span>
        <span className="badge bg-danger">{preparedAnswers}</span>
      </div>

      <div className="mt-4">
        <img className="rounded img-fluid" src={wasted} width="760" height="230" alt="success" />
      </div>
    </div>
  );
}