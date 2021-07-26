import { useState } from "react";
import { Link } from "react-router-dom";

export const Step2 = () => {
  const [val, setVal] = useState("");

  const que1 = {
    id: 0,
    question: "現在、生命保険に加入されていますか？",
    state: false,
  };
  const que2 = {
    id: 1,
    question:
      "現在入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？",
    state: false,
  };
  const que3 = {
    id: 2,
    question:
      "過去5年以内に、病気やけがで、手術をうけたことまたは継続して７日以上の入院をしたことがありますか？",
    state: false,
  };

  const selectInsurance = (e) => {
    if (e.target.value === "q1_no") {
      setVal(e.target.value);
      que1.state = true;
    } else {
      setVal(e.target.value);
      que1.state = false;
    }
    console.log(que1.state);
  };
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <div className="bg-white p-8 w-80 reunded">
        <hr />
        {que1.question}
        <br />
        <label>
          <input
            type="radio"
            value="q1_yes"
            onChange={selectInsurance}
            checked={val === "q1_yes"}
          ></input>
          はい
        </label>
        <label>
          <input
            type="radio"
            value="q1_no"
            onChange={selectInsurance}
            checked={val === "q1_no"}
          ></input>
          いいえ
        </label>
        {que1.state && <div>{que2.question}</div>}
      </div>
      <Link to="/">前へ戻る</Link>
      <Link to="/step3">次へ進む</Link>
    </div>
  );
};
