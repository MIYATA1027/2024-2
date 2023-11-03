import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type load = {
  doc: string;
  strage: string;
  input: string;
};

export const Page2 = () => {
  const [load, setLoad] = useState<load>();
  useEffect(() => {
    var doc = document.getElementById("id") as HTMLInputElement;
    var strage = document.getElementById("strage") as HTMLInputElement;
    var input = document.getElementById("input") as HTMLInputElement;

    var temp: load = {
      doc: doc?.value,
      strage: strage?.value,
      input: input?.value
    };
    setLoad(temp);
  }, []);

  let navigate = useNavigate();
  return (
    <>
      <h3>Page2です。</h3>
      <div>{load?.doc}</div>
      <div>{load?.strage}</div>
      <div>{load?.input}</div>
      <button onClick={() => navigate("/Home")}>戻る</button>
    </>
  );
};
