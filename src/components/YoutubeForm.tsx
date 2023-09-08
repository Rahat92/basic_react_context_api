import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import style from "./YoutubeForm.module.css";
let renderCount = 0;

// types start
interface formValue {
  username: string;
  email: string;
  channel: string;
}
//types end

const YoutubeForm = () => {
  renderCount++;
  const form = useForm<formValue>();
  const { register, control, handleSubmit, formState } = form;

  const { errors } = formState;
  console.log(errors);
  const onSubmit = (data: formValue) => {
    console.log("form Submitted", data.username);
  };
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
          <div>
            <label className={style.label} htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              {...register("username", {
                required: {
                  value: true,
                  message: "Username is required",
                },
              })}
            />
            {errors.username && (
              <p style={{ color: "red" }}>{errors.username.message}</p>
            )}
          </div>
          <div>
            <label className={style.label} htmlFor="email">
              Email
            </label>
            <input type="email" id="email" {...register("email", {
              required: {
                value: true, 
                message: "Email is required"
              }
            })} />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className={style.label} htmlFor="channel">
              Channel
            </label>
            <input type="text" id="channel" {...register("channel", {
              required: {
                value: true,
                message: "Channel is required"
              }
            })} />
            {errors.channel && (
              <p style={{ color: "red" }}>{errors.channel.message}</p>
            )}
          </div>

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
