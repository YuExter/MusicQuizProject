import audio1 from '../assets/audio/audio1.mp3';

export function Audio() {
  return <div className="mt-3">
    <span>Выбери фото с концерта, с которого эта песня:</span>

    <div style={{ maxWidth: '720px' }}>
      <audio className="w-100" src={audio1} controls />
    </div>
  </div>;
}