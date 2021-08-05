import { useState } from "react";
import { Link } from "react-router-dom";

export const Step1 = () => {
  const [val, setVal] = useState("");
  const selectSex = (e) => setVal(e.target.value);

  const [birthYear, setBirthYear] = useState(new Date().getFullYear());
  const [birthMonth, setBirthMonth] = useState(new Date().getMonth() + 1);
  const [birthDay, setBirthDay] = useState(new Date().getDay());

  const selectBirthYear = (e) => {
    setBirthYear(e.target.value);
  };
  const selectBirthMonth = (e) => {
    setBirthMonth(e.target.value);
  };
  const selectBirthDay = (e) => {
    setBirthDay(e.target.value);
  };
  // 生年月日入力欄生成
  const setYear = () => {
    let list = [];
    for (let i = 1950; i <= new Date().getFullYear(); i++) {
      list.push(
        <option key={`year_${i}`} value={i}>
          {i}年
        </option>
      );
    }
    return list;
  };

  const setWareki = () => {
    let list = [];
    for (let w = 1950; w <= new Date().getFullYear(); w++) {
      if (w > 1988) {
        return list.push(
          <option key={`year_${w}`} value={w}>
            {w}年 {"平成" + (w - 1988)}年
          </option>
        );
      } if (w > 1925) {
        return list.push(
          <option key={`year_${w}`} value={w}>
            {w}年 {"昭和" + (w - 1925)}年
          </option>
        );
      }
    }
  };

  const setMonth = () => {
    let list = [];
    for (let i = 1; i <= 12; i++) {
      list.push(
        <option key={`month_${i}`} value={i}>
          {i}月
        </option>
      );
    }
    return list;
  };
  const setDay = () => {
    let list = [];
    const lastday = new Date(
      Number(birthYear),
      Number(birthMonth),
      0
    ).getDate();
    for (let i = 1; i <= lastday; i++) {
      list.push(
        <option key={`day_${i}`} value={i}>
          {i}日
        </option>
      );
    }
    return list;
  };
  return (
    <div className="min-h-screen text-gray-600 text-sm font-mono">
      <div className="bg-white  p-8 w-full reunded">
        <div>お客様の情報を入力してください</div>
        <hr />
        <div>
          <div>-性別-</div>
          <label>
            <input
              type="radio"
              value="male"
              onChange={selectSex}
              checked={val === "male"}
            />
            男性
          </label>
          <label>
            <input
              type="radio"
              value="female"
              onChange={selectSex}
              checked={val === "female"}
            />
            女性
          </label>
          <br />
          <div>-生年月日-</div>
          <div>
            <select
              native
              value={birthYear}
              onChange={selectBirthYear}
              id="birth-year"
              name="year"
            >
              {setYear()}
            </select>
            <select
              native
              value={birthYear}
              onChange={selectBirthYear}
              id="birth-wareki"
              name="year"
            >
              {setWareki()}
            </select>
            <select
              native
              value={birthMonth}
              onChange={selectBirthMonth}
              id="birth-month"
              name="month"
            >
              {setMonth()}
            </select>
            <select
              native
              value={birthDay}
              onChange={selectBirthDay}
              id="birth-day"
              name="day"
            >
              {setDay()}
            </select>
          </div>
        </div>
      </div>
      <Link to="/step2">次へ進む</Link>
    </div>
  );
};
