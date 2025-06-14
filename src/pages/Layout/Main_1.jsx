import { useState } from 'react'
import '../../App.css'

function Main_1() {
  const [result, setResult] = useState("?")
  const [scoreInside, setScoreInside] = useState()
  const [score1st, setScore1st] = useState()
  const [score2nd, setScore2nd] = useState()
  const [scoreOutside, setScoreOutside] = useState()

  const [raw1st, setRaw1st] = useState('');
  const [raw2nd, setRaw2nd] = useState('');
  const [rawInside, setRawInside] = useState('');

  const [totalScore, setTotalScore] = useState('');

  const calculateAll = (inside, test1, test2) => {
    if (
      typeof inside === 'number' &&
      typeof test1 === 'number' &&
      typeof test2 === 'number'
    ) {
      const insideWeighted = inside * 0.5;
      const test1Weighted = test1 * 0.4 * 0.5;
      const test2Weighted = test2 * 0.6 * 0.5;
      const outside = test1Weighted + test2Weighted;
      const total = insideWeighted + outside;

      setScoreInside(insideWeighted.toFixed(2));
      setScore1st(test1Weighted.toFixed(2));
      setScore2nd(test2Weighted.toFixed(2));
      setScoreOutside(outside.toFixed(2));
      setTotalScore(total.toFixed(2));
      setResult(total >= 80 ? '합격' : '불합격');
    }
  };

  const handleInside = (e) => {
    const input = e.target.value;
    if (/^\d*\.?\d*$/.test(input)) {
      const number = parseFloat(input);
      if (number >= 1 && number <= 100) {
        setRawInside(number);
        calculateAll(number, raw1st, raw2nd);
      }
    }
  };

  const handle1st = (e) => {
    const input = e.target.value;
    if (/^\d*\.?\d*$/.test(input)) {
      const number = parseFloat(input);
      if (number >= 1 && number <= 100) {
        setRaw1st(number);
        calculateAll(rawInside, number, raw2nd);
      }
    }
  };

  const handle2nd = (e) => {
    const input = e.target.value;
    if (/^\d*\.?\d*$/.test(input)) {
      const number = parseFloat(input);
      if (number >= 1 && number <= 100) {
        setRaw2nd(number);
        calculateAll(rawInside, raw1st, number);
      }
    }
  };

  return (
    <>
      <div className="main">
        <div className="sub-title">최종 점수 구하기</div>
        <div className="calc">
          <div>
            <label for="value_inside">내부 평가 점수 *</label>
            <input type='text' name='value_inside' placeholder='ex) 100' onChange={handleInside} required></input>
          </div>
          <div>
            <label for="value_2nd">필기 점수 *</label>
            <input type='text' name='value_2nd' placeholder='ex) 30' onChange={handle1st} required></input>
          </div>
          <div>
            <label for="value_1st">실기 점수 *</label>
            <input type='text' name='value_1st' placeholder='ex) 90' onChange={handle2nd} required></input>
          </div>
        </div>
        <div className="result">
          <div className="sub-title"><p>결과 - {result}</p></div>
          <p>총점(반영 내부 + 반영 외부)<br/>- {totalScore}</p><br/>
          <p>반영 내부 평가 점수<br/>- {scoreInside} </p><br/>
          <p>반영 외부 평가 점수(반영 필기 + 반영 실기)<br/>- {scoreOutside} </p><br/>
          <p>반영 필기 점수<br/>- {score1st} </p><br/>
          <p>반영 실기 점수<br/>- {score2nd} </p>
        </div>
      </div>
    </>
  )
}

export default Main_1