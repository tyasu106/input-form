import { useState } from "react";
import { Link } from "react-router-dom";

export const Step1 = () => {
  const [val, setVal] = useState("");
  const selectSex = (e) => setVal(e.target.value);

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
            <option value="1991">1991年(平成3年)</option>
            <option value="1992">1992年(平成4年)</option>
            <option value="1993">1993年(平成5年)</option>
            <option value="1994">1994年(平成6年)</option>
            <option value="1995">1995年(平成7年)</option>
            <option value="1996">1996年(平成8年)</option>
            <option value="1997">1997年(平成9年)</option>
            <option value="1998">1998年(平成10年)</option>
            <option value="1999">1999年(平成11年)</option>
            <option value="2000">2000年(平成12年)</option>
            <option value="2001">2001年(平成13年)</option>
            <option value="2002">2002年(平成14年)</option>
            <option value="2003">2003年(平成15年)</option>
            <option value="2004">2004年(平成16年)</option>
            <option value="2005">2005年(平成17年)</option>
            <option value="2006">2006年(平成18年)</option>
            <option value="2007">2007年(平成19年)</option>
            <option value="2008">2008年(平成20年)</option>
            <option value="2009">2009年(平成21年)</option>
            <option value="2010">2010年(平成22年)</option>
            <option value="2011">2011年(平成23年)</option>
            <option value="2012">2012年(平成24年)</option>
            <option value="2013">2013年(平成25年)</option>
            <option value="2014">2014年(平成26年)</option>
            <option value="2015">2015年(平成27年)</option>
            <option value="2016">2016年(平成28年)</option>
            <option value="2017">2017年(平成29年)</option>
            <option value="2018">2018年(平成30年)</option>
            <option value="2019">2019年(平成31年)</option>
          </select>
          <select name="month">
            <option value="1">1月</option>
            <option value="2">2月</option>
            <option value="3">3月</option>
            <option value="4">4月</option>
            <option value="5">5月</option>
            <option value="6">6月</option>
            <option value="7">7月</option>
            <option value="8">8月</option>
            <option value="9">9月</option>
            <option value="10">10月</option>
            <option value="11">11月</option>
            <option value="12">12月</option>
          </select>
          <select name="day">
            <option value="1">1日</option>
            <option value="2">2日</option>
            <option value="3">3日</option>
            <option value="4">4日</option>
            <option value="5">5日</option>
            <option value="6">6日</option>
            <option value="7">7日</option>
            <option value="8">8日</option>
            <option value="9">9日</option>
            <option value="10">10日</option>
            <option value="11">11日</option>
            <option value="12">12日</option>
            <option value="13">13日</option>
            <option value="14">14日</option>
            <option value="15">15日</option>
            <option value="16">16日</option>
            <option value="17">17日</option>
            <option value="18">18日</option>
            <option value="19">19日</option>
            <option value="20">20日</option>
            <option value="21">21日</option>
            <option value="22">22日</option>
            <option value="23">23日</option>
            <option value="24">24日</option>
            <option value="25">25日</option>
            <option value="26">26日</option>
            <option value="27">27日</option>
            <option value="28">28日</option>
            <option value="29">29日</option>
            <option value="30">30日</option>
            <option value="31">31日</option>
          </select>
        </div>
      </div>
      <Link to="/step2">次へ進む</Link>
    </div>
  );
};
