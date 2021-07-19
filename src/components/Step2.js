import { useState } from "react";
import { Link } from "react-router-dom";

export const Step2 = () => {
  const [val, setVal] = useState("");
  const selectInsurance = (e) => {
    setVal(e.target.value);
    if (e.target.value === "no") {
    }
  };
  const selectYesNo = (
    <div>
      {" "}
      <label>
        <input
          type="radio"
          value="yes"
          onChange={selectInsurance}
          checked={val === "yes"}
        />
        はい
      </label>
      <label>
        <input
          type="radio"
          value="no"
          onChange={selectInsurance}
          checked={val === "no"}
        />
        いいえ
      </label>
    </div>
  );
  const questions = [
    {
      id: 0,
      question: "現在、生命保険に加入されていますか？",
      answer: selectYesNo,
    },
    {
      id: 1,
      question: "現在入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？",
      answer: selectYesNo,
    },
    {
      id: 2,
      question: "過去5年以内に、病気やけがで、手術をうけたことまたは継続して７日以上の入院をしたことがありますか？",
      answer: selectYesNo,
    },
  ];
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <div className="bg-white p-8 w-80 reunded">
        <div>以下にお答え下さい</div>
        <hr />
        {questions.map((q) => {
          return (
            <div>
              {q.question}
              {q.answer}
              <br/>
            </div>
          );
        })}
      </div>
      <Link to="/">前へ戻る</Link>
      <Link to="/step3">次へ進む</Link>
    </div>
  );
};
