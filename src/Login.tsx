import { useContext, useLayoutEffect, useState } from "react";
import { UserInfoProviderContext } from "./Providers/UserProvider";
import { Box, TextField } from "@mui/material";
import { MyButton } from "./Common/MyButton";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Input = {
  id: string;
  name: string;
};

export const Login = () => {
  const { setUserInfo } = useContext(UserInfoProviderContext);
  const [id, setId] = useState("");
  const [userNm, setNm] = useState("");
  const navigate = useNavigate();

  useLayoutEffect(() => {
    setUserInfo({ id: id, userNm: userNm });
  }, [setUserInfo, id, userNm]);

  //#region form監視
  // 初期化
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm<Input>();

  // フォーム送信ボタンを押された時の処理
  const onsubmit = (data: Input) => {
    navigate("/Home");
    reset(); // フォームに入力した値をリセット
  };

  //#endregion

  const onClick = () => {
    // var newWindow = window.open("", "Page2", "noreferrer");
    // if (newWindow != null) {
    //   var form = document.createElement("form");
    //   form.id = "form";
    //   form.method = "POST";
    //   form.name = "Page2";
    //   form.action = "Page2-1";
    //   form.target = "Page2-1";
    //   var input = document.createElement("input");
    //   input.id = "input";
    //   input.name = "Page2";
    //   input.value = "inputのvalue";
    //   form.insertAdjacentHTML(
    //     "beforeend",
    //     `<input id="id" value="Loginのvalue">名前</input>`
    //   );
    //   form.appendChild(input);
    //   newWindow.document.body.appendChild(input);
    //   form.submit();
    //   form.remove();
    // }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)}>
        <Box sx={{ textAlign: "center", margin: "10px" }}>
          <h1>2024上半期_React実装</h1>
          <p>ID:{errors.id?.message}</p>
          <input
            {...register("id", { required: "必須入力です" })}
            onChange={(e) => setId(e.target.value)}
            style={{ fontSize: "20px", height: "40px", width: "220px" }}
          />
          <p>ユーザー名:{errors.name?.message}</p>
          <input
            {...register("name", {
              required: "必須入力です"
            })}
            onChange={(e) => setNm(e.target.value)}
            style={{ fontSize: "20px", height: "40px", width: "220px" }}
          />
          <br />

          <input
            style={{
              background: "lightBlue",
              border: "solid 1px",
              height: "44px",
              width: "230px",
              margin: "30px",
              fontWeight: "normal",
              fontSize: "16px",
              textAlign: "center",
              verticalAlign: "middle"
            }}
            type="submit"
            value="ログイン"
          />
        </Box>
      </form>
    </>
  );
};
