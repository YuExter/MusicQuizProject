import success from '../assets/success.png';

export function Success() {
  return <div className="w-100 position-fixed top-50 start-50 translate-middle text-center">
    <img src={success} style={{ objectFit: 'contain' }} className="img-fluid" width={760} height={230} alt="success" />
  </div>;
}
