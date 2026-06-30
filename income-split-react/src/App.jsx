import { useState } from 'react';
import './App.css';

const fmt = (n) =>
  '₹' +
  Number(n.toFixed(2)).toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export default function App() {
  const [incomeA, setIncomeA] = useState('');
  const [incomeB, setIncomeB] = useState('');
  const [showResults, setShowResults] = useState(false);

  const x = parseFloat(incomeA) || 0;
  const y = parseFloat(incomeB) || 0;

  const munipalliBrahmaji = 0.7 * x;
  const munipalliRanganath = 0.3 * x;
  const cheyeruBrahmaji = 0.3 * y;
  const cheyeruRanganath = 0.7 * y;
  const brahmaji = munipalliBrahmaji + cheyeruBrahmaji;
  const ranganath = munipalliRanganath + cheyeruRanganath;
  const brahmajiBalance = y > x ? y - brahmaji : 0;
  const ranganathBalance = x > y ? x - ranganath : 0;

  const calculate = () => setShowResults(true);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      calculate();
    }
  };

  return (
    <main className="app-shell" onKeyDown={handleKeyDown}>
      <header>
        <p className="eyebrow">Financial Toolkit</p>
        <h1>Income Split Calculator</h1>
        <p>
          Split income across Munipalli and Cheyeru between Brahmaji and
          Ranganath using a 70/30 rule.
        </p>
      </header>

      <section className="inputs" aria-label="Income inputs">
        <div className="input-group">
          <label htmlFor="incomeA">
            Munipalli Income <span className="bank-tag tag-a">MUNIPALLI</span>
          </label>
          <div className="input-prefix">
            <span>₹</span>
            <input
              id="incomeA"
              type="number"
              value={incomeA}
              onChange={(event) => setIncomeA(event.target.value)}
              placeholder="0"
              min="0"
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="incomeB">
            Cheyeru Income <span className="bank-tag tag-b">CHEYERU</span>
          </label>
          <div className="input-prefix">
            <span>₹</span>
            <input
              id="incomeB"
              type="number"
              value={incomeB}
              onChange={(event) => setIncomeB(event.target.value)}
              placeholder="0"
              min="0"
            />
          </div>
        </div>
      </section>

      <button className="calc-btn" type="button" onClick={calculate}>
        Calculate Split
      </button>

      <section className={`results ${showResults ? 'visible' : ''}`}>
        <span className="results-title">Results</span>

        <div className="bank-table" role="table" aria-label="Income split">
          <div className="bank-table-header" role="row">
            <span>Bank</span>
            <span>Total Income</span>
            <span>Brahmaji</span>
            <span>Ranganath</span>
          </div>
          <div className="bank-table-row" role="row">
            <span className="bank-name bank-a-name">MUNIPALLI</span>
            <span className="val">{fmt(x)}</span>
            <span className="val">{fmt(munipalliBrahmaji)}</span>
            <span className="val">{fmt(munipalliRanganath)}</span>
          </div>
          <div className="bank-table-row" role="row">
            <span className="bank-name bank-b-name">CHEYERU</span>
            <span className="val">{fmt(y)}</span>
            <span className="val">{fmt(cheyeruBrahmaji)}</span>
            <span className="val">{fmt(cheyeruRanganath)}</span>
          </div>
          <div className="bank-table-row total-row" role="row">
            <span className="bank-name muted-name">TOTAL</span>
            <span className="val">{fmt(x + y)}</span>
            <span className="val person-m">{fmt(brahmaji)}</span>
            <span className="val person-n">{fmt(ranganath)}</span>
          </div>
        </div>

        <div className="person-cards balance-cards">
          <article className="person-card m">
            <div className="name">BRAHMAJI BALANCE</div>
            <div className="total">{fmt(brahmajiBalance)}</div>
          </article>
          <article className="person-card n">
            <div className="name">RANGANATH BALANCE</div>
            <div className="total">{fmt(ranganathBalance)}</div>
          </article>
        </div>
      </section>
    </main>
  );
}
