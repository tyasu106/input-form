import { Link } from "react-router-dom";

export const Step3 = () => {
  return (
    <div className="min-h-screen text-gray-600 text-sm font-mono">
      <div className="bg-white  p-8 w-full reunded">
        ご相談内容をご記入ください
        <hr />
        <br />
        - ご相談内容 -
        <br />
        <br />
        <textarea className="h-96 w-9/12 border-2" rows="1"></textarea>
      </div>
        <Link to="/step2">前へ戻る</Link>
        <Link to="#">次へ進む</Link>
    </div>
  );
};
