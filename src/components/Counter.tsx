type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

export default function Counter({
  count,
  onIncrease,
  onDecrease,
  onIncreaseBy,
}: CounterProps) {
  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={onIncrease}>
        +1
      </button>
      <button type="button" onClick={onDecrease}>
        -1
      </button>
      <button type="button" onClick={() => onIncreaseBy(10)}>
        +10
      </button>
    </div>
  );
}
