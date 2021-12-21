export function Audio({ audio }) {
  return <div className="mt-3 w-100">
    <span className="d-inline-block h4 mb-2">Выбери группу по песне:</span>

    <div style={{ maxWidth: '720px' }}>
      <audio className="w-100" src={audio} controls />
    </div>
  </div>;
}