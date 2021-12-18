export function Audio({audio}) {
  return <div className="mt-3">
    <span>Выбери фото с концерта, с которого эта песня:</span>

    <div style={{ maxWidth: '720px' }}>
      <audio className="w-100" src={audio} controls />
    </div>
  </div>;
}