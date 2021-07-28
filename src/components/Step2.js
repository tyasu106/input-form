import { useState } from "react";
import { Link } from "react-router-dom";

export const Step2 = () => {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState("");
  const [isShowQue, setIsShowQue] = useState(false);
  const [isShowQue2, setIsShowQue2] = useState(false);
  const [isShowQue3, setIsShowQue3] = useState(false);

  const que1 = {
    id: 0,
    question: "現在、生命保険に加入されていますか？",
    state: isShowQue,
  };
  const que2 = {
    id: 1,
    question:
      "現在入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？",
    state: isShowQue2,
  };
  const que3 = {
    id: 2,
    question:
      "過去5年以内に、病気やけがで、手術をうけたことまたは継続して７日以上の入院をしたことがありますか？",
    state: isShowQue3,
  };

  const selectQuestion = (e) => {
    if (e.target.value === "q1_no") {
      setVal(e.target.value);
      setIsShowQue(true);
    } else {
      setVal(e.target.value);
      setIsShowQue(false);
    }
  };
  const selectQuestion2 = (e) => {
    if (e.target.value === "q2_no") {
      setVal2(e.target.value);
      setIsShowQue2(true);
    } else {
      setVal2(e.target.value);
      setIsShowQue2(false);
    }
  };
  const selectQuestion3 = (e) => {
    if (e.target.value === "q3_no") {
      setVal3(e.target.value);
      setIsShowQue3(true);
    } else {
      setVal3(e.target.value);
      setIsShowQue3(false);
    }
  };
  return (
    <div className="min-h-screen text-gray-600 text-sm font-mono">
      <div className="bg-white p-8 w-full reunded">
        <div>以下にお答えください</div>
        <hr />
        {que1.question}
        <br />
        <label>
          <input
            type="radio"
            value="q1_yes"
            onChange={selectQuestion}
            checked={val === "q1_yes"}
          ></input>
          はい
        </label>
        <label>
          <input
            type="radio"
            value="q1_no"
            onChange={selectQuestion}
            checked={val === "q1_no"}
          ></input>
          いいえ
        </label>
        {que1.state && <div>{que2.question}</div>}
        {que1.state && (
          <div>
            {" "}
            <label>
              <input
                type="radio"
                value="q2_yes"
                onChange={selectQuestion2}
                checked={val2 === "q2_yes"}
              ></input>
              はい
            </label>
            <label>
              <input
                type="radio"
                value="q2_no"
                onChange={selectQuestion2}
                checked={val2 === "q2_no"}
              ></input>
              いいえ
            </label>
          </div>
        )}
        {que2.state && <div>{que3.question}</div>}
        {que2.state && (
          <div>
            {" "}
            <label>
              <input
                type="radio"
                value="q3_yes"
                onChange={selectQuestion3}
                checked={val3 === "q3_yes"}
              ></input>
              はい
            </label>
            <label>
              <input
                type="radio"
                value="q3_no"
                onChange={selectQuestion3}
                checked={val3 === "q3_no"}
              ></input>
              いいえ
            </label>
          </div>
        )}
      </div>
      <Link to="/">前へ戻る</Link>
      <Link to="/step3">次へ進む</Link>
    </div>
  );
};
