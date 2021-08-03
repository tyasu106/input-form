import { useState } from "react";
import { Link } from "react-router-dom";

export const Step1 = () => {
  const [val, setVal] = useState("");
  const selectSex = (e) => setVal(e.target.value);

  const years = [
    { value: "1991", year: "1991年(平成3年)" },
    { value: "1992", year: "1992年(平成4年)" },
    { value: "1993", year: "1993年(平成5年)" },
    { value: "1994", year: "1994年(平成6年)" },
    { value: "1995", year: "1995年(平成7年)" },
    { value: "1996", year: "1996年(平成8年)" },
    { value: "1997", year: "1997年(平成9年)" },
    { value: "1998", year: "1998年(平成10年)" },
    { value: "1999", year: "1999年(平成11年)" },
    { value: "2000", year: "2000年(平成12年)" },
    { value: "2001", year: "2001年(平成13年)" },
    { value: "2002", year: "2002年(平成14年)" },
    { value: "2003", year: "2003年(平成15年)" },
    { value: "2004", year: "2004年(平成16年)" },
    { value: "2005", year: "2005年(平成17年)" },
    { value: "2006", year: "2006年(平成18年)" },
    { value: "2007", year: "2007年(平成19年)" },
    { value: "2008", year: "2008年(平成20年)" },
    { value: "2009", year: "2009年(平成21年)" },
    { value: "2010", year: "2010年(平成22年)" },
    { value: "2011", year: "2011年(平成23年)" },
    { value: "2012", year: "2012年(平成24年)" },
    { value: "2013", year: "2013年(平成25年)" },
    { value: "2014", year: "2014年(平成26年)" },
    { value: "2015", year: "2015年(平成27年)" },
    { value: "2016", year: "2016年(平成28年)" },
    { value: "2017", year: "2017年(平成29年)" },
    { value: "2018", year: "2018年(平成30年)" },
    { value: "2019", year: "2019年(平成31年)" },
  ];
  const months = [
    { value: "1", month: "1月" },
    { value: "2", month: "2月" },
    { value: "3", month: "3月" },
    { value: "4", month: "4月" },
    { value: "5", month: "5月" },
    { value: "6", month: "6月" },
    { value: "7", month: "7月" },
    { value: "8", month: "8月" },
    { value: "9", month: "9月" },
    { value: "10", month: "10月" },
    { value: "11", month: "11月" },
    { value: "12", month: "12月" },
  ];
  const days = [
    { value: "1", day: "1日" },
    { value: "2", day: "2日" },
    { value: "3", day: "3日" },
    { value: "4", day: "4日" },
    { value: "5", day: "5日" },
    { value: "6", day: "6日" },
    { value: "7", day: "7日" },
    { value: "8", day: "8日" },
    { value: "9", day: "9日" },
    { value: "10", day: "10日" },
    { value: "11", day: "11日" },
    { value: "12", day: "12日" },
    { value: "13", day: "13日" },
    { value: "14", day: "14日" },
    { value: "15", day: "15日" },
    { value: "16", day: "16日" },
    { value: "17", day: "17日" },
    { value: "18", day: "18日" },
    { value: "19", day: "19日" },
    { value: "20", day: "20日" },
    { value: "21", day: "21日" },
    { value: "22", day: "22日" },
    { value: "23", day: "23日" },
    { value: "24", day: "24日" },
    { value: "25", day: "25日" },
    { value: "26", day: "26日" },
    { value: "27", day: "27日" },
    { value: "28", day: "28日" },
    { value: "29", day: "29日" },
    { value: "30", day: "30日" },
    { value: "31", day: "31日" },
  ];
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
          <select name="year">
            {years.map((year) => {
              return <option value={year.value}>{year.year}</option>;
            })}
          </select>
          <select name="month">
            {months.map((month) => {
              return <option value={month.value}>{month.month}</option>;
            })}
          </select>
          <select name="day">
            {days.map((day) => {
              return <option value={day.value}>{day.day}</option>;
            })}
          </select>
        </div>
      </div>
      <Link to="/step2">次へ進む</Link>
    </div>
  );
};
