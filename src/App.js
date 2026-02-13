import { useMemo, useState } from 'react';
import './App.css';

const noMessages = [
  "Are you sure?",
  "Think again, babe.",
  "That button feels wrong.",
  "My heart says yes for both of us.",
  "One tiny yes, one huge smile.",
];

const burstHearts = [
  { x: '-38vw', d: '0ms' },
  { x: '-28vw', d: '120ms' },
  { x: '-16vw', d: '60ms' },
  { x: '16vw', d: '0ms' },
  { x: '28vw', d: '140ms' },
  { x: '38vw', d: '80ms' },
];

const burstConfetti = [
  { x: '-32vw', r: '-140deg', d: '0ms', c: '#ff6b81' },
  { x: '-26vw', r: '-100deg', d: '70ms', c: '#ffb24d' },
  { x: '-20vw', r: '-65deg', d: '20ms', c: '#fe7bb2' },
  { x: '-12vw', r: '-40deg', d: '110ms', c: '#ffd166' },
  { x: '12vw', r: '40deg', d: '40ms', c: '#ff6b81' },
  { x: '20vw', r: '65deg', d: '100ms', c: '#ffb24d' },
  { x: '26vw', r: '100deg', d: '10ms', c: '#fe7bb2' },
  { x: '32vw', r: '140deg', d: '120ms', c: '#ffd166' },
];

function App() {
  const [answer, setAnswer] = useState('');
  const [noCount, setNoCount] = useState(0);
  const [burstKey, setBurstKey] = useState(0);

  const noText = useMemo(() => {
    if (noCount === 0) return 'No';
    return noMessages[(noCount - 1) % noMessages.length];
  }, [noCount]);

  const yesScale = Math.min(1 + noCount * 0.08, 1.45);

  return (
    <main className="valentine-page">
      <div className="bg-orb orb-1" aria-hidden="true" />
      <div className="bg-orb orb-2" aria-hidden="true" />

      <section className="card">
        <p className="eyebrow">for my favorite person</p>
        <h1>Will you be my Valentine?</h1>
        <div className="button-row">
          <button
            className="btn btn-yes"
            type="button"
            style={{ transform: `scale(${yesScale})` }}
            onClick={() => {
              setAnswer('yes');
              setBurstKey((key) => key + 1);
            }}
          >
            Yes, absolutely!
          </button>

          <button
            className="btn btn-no"
            type="button"
            onClick={() => {
              setNoCount((count) => count + 1);
              setAnswer('no');
            }}
          >
            {noText}
          </button>
        </div>

        {answer === 'yes' && (
          <p className="response yes">YAY. Valentine date confirmed. I love you. ❤</p>
        )}

        {answer === 'no' && (
          <p className="response no">I am re-opening negotiations with snacks and kisses.</p>
        )}
      </section>

      <div className="hearts" aria-hidden="true">
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
      </div>

      {burstKey > 0 && (
        <div className="celebration-burst" key={burstKey} aria-hidden="true">
          {burstHearts.map((item, idx) => (
            <span
              key={`heart-${idx}`}
              className="burst-heart"
              style={{ '--x': item.x, '--d': item.d }}
            >
              ❤
            </span>
          ))}
          {burstConfetti.map((item, idx) => (
            <span
              key={`confetti-${idx}`}
              className="burst-confetti"
              style={{ '--x': item.x, '--r': item.r, '--d': item.d, '--c': item.c }}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default App;
