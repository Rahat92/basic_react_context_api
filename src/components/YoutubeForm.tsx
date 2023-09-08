import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import style from "./YoutubeForm.module.css";
let renderCount = 0;


// types start
interface formValue {
  username: string,
  email: string,
  channel: string
}
//types end


const YoutubeForm = () => {
  renderCount++;
  const form = useForm<formValue>();
  const { register, control, handleSubmit } = form;

  const onSubmit = (data:formValue) => {
    console.log('form Submitted', data.username)
  }
  return (
    <>
          <h1>YouTube Form {renderCount / 2}</h1>
      <div
        style={{
          display: "inline-block",
          border: "1px solid black",
          padding: "1rem",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={style.label} htmlFor="username">
            Username
          </label>
          <input type="text" id="username" {...register("username")} />

          <label className={style.label} htmlFor="email">
            Email
          </label>
          <input type="email" id="email" {...register("email")} />

          <label className={style.label} htmlFor="channel">
            Channel
          </label>
          <input type="text" id="channel" {...register("channel")} />

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button>Submit</button>
          </div>
          <DevTool control={control} />
        </form>
      </div>
    </>
  );
};

export default YoutubeForm;
