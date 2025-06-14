import { useState } from 'react';
import '../../App.css';

function Main_3() {
  const [result, setResult] = useState('?');
  const [scoreInside, setScoreInside] = useState('');
  const [score1st, setScore1st] = useState('');
  const [score2nd, setScore2nd] = useState('');
  const [scoreOutside, setScoreOutside] = useState('');
  const [totalScore, setTotalScore] = useState('');

  const [rawInside, setRawInside] = useState('');
  const [raw2nd, setRaw2nd] = useState('');

  const calculateRequiredWritten = (inside, practical) => {
    if (typeof inside === 'number' && typeof practical === 'number') {
      const insideWeighted = inside * 0.5;
      const practicalWeighted = practical * 0.3;
      const totalSoFar = insideWeighted + practicalWeighted;

      const requiredWritten = (80 - totalSoFar) / 0.2;
      const writtenWeighted = requiredWritten * 0.2;
      const outside = writtenWeighted + practicalWeighted;
      const total = totalSoFar + writtenWeighted;

      setScoreInside(insideWeighted.toFixed(2));
      setScore2nd(practicalWeighted.toFixed(2));
      setScore1st(writtenWeighted.toFixed(2));
      setScoreOutside(outside.toFixed(2));
      setTotalScore(total.toFixed(2));

      if (requiredWritten > 100) {
        setResult("100점 초과");
      } else if (requiredWritten <= 0) {
        setResult("없음(합격)");
      } else {
        setResult(`${requiredWritten.toFixed(2)}점 이상`);
      }
    }
  };

  const handleInside = (e) => {
    const input = e.target.value;
    if (/^\d*\.?\d*$/.test(input)) {
      const number = parseFloat(input);
      if (number >= 1 && number <= 100) {
        setRawInside(number);
        calculateRequiredWritten(number, raw2nd);
      }
    }
  };

  const handle2nd = (e) => {
    const input = e.target.value;
    if (/^\d*\.?\d*$/.test(input)) {
      const number = parseFloat(input);
      if (number >= 1 && number <= 100) {
        setRaw2nd(number);
        calculateRequiredWritten(rawInside, number);
      }
    }
  };

  return (
    <div className="main">
      <div className="sub-title">최소 필기 점수 구하기</div>
      <div className="calc">
        <div>
          <label htmlFor="value_inside">내부 평가 점수 *</label>
          <input type="text" name="value_inside" placeholder="ex) 90" onChange={handleInside} required />
        </div>
        <div>
          <label htmlFor="value_2nd">실기 점수 *</label>
          <input type="text" name="value_2nd" placeholder="ex) 70" onChange={handle2nd} required />
        </div>
      </div>
      <div className="result">
        <div className="sub-title"><p>최소 필기 점수 - {result}</p></div>
        <p>총점(반영 내부 + 반영 외부)<br />- {totalScore}</p><br />
        <p>반영 내부 평가 점수<br />- {scoreInside}</p><br />
        <p>반영 외부 평가 점수(필기 + 실기)<br />- {scoreOutside}</p><br />
        <p>반영 필기 점수<br />- {score1st}</p><br />
        <p>반영 실기 점수<br />- {score2nd}</p>
      </div>
    </div>
  );
}

export default Main_3;