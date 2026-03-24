'use client';

interface Props {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  return (
    <div className="alert alert-danger text-center">
      <h3>Не удалось загрузить список шлюзов</h3>
      <p>{error.message}</p>
      <button className="btn btn-outline-danger" onClick={() => reset()}>
        Попробовать снова
      </button>
    </div>
  );
}
