import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import style from "./YoutubeForm.module.css";
let renderCount = 0;

// types start
interface formValue {
  username: string;
  email: string;
  phone: string;
  social: {
    facebook: string;
    tweeter: string;
  };
}
//types end

const YoutubeForm = () => {
  renderCount++;
  const form = useForm<formValue>({
    defaultValues: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();
      return {
        username: data.name,
        email: data.email,
        phone: data.phone,
        social: {
          facebook: "facebook",
          tweeter: "tweeter",
        },
      };
    },
  });
  const { register, control, handleSubmit, formState } = form;

  const { errors } = formState;
  console.log(errors);
  const onSubmit = (data: formValue) => {
    console.log("form Submitted", data);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Basic Form {renderCount / 2}</h1>
      <div
        style={{
          // border: "1px solid black",
          boxShadow: "0 0 1px .5px gray",
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
            <input
              type="email"
              id="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                validate: (value) => {
                  return !value.startsWith("admin") || "Admin is not allowed";
                },
              })}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className={style.label} htmlFor="phone">
              Phone No.
            </label>
            <input
              type="text"
              id="phone"
              {...register("phone", {
                required: {
                  value: true,
                  message: "Phone is required",
                },
              })}
            />
            {errors.phone && (
              <p style={{ color: "red" }}>{errors.phone.message}</p>
            )}
          </div>
          <div>
            <label className={style.label} htmlFor="facebook">
              Facebook
            </label>
            <input
              type="text"
              id="facebook"
              {...register("social.facebook", {
                required: {
                  value: true,
                  message: "Facebook is required",
                },
              })}
            />
            {errors.social && (
              <p style={{ color: "red" }}>
                {errors.social.facebook && errors.social.facebook.message}
              </p>
            )}
          </div>

          <div>
            <label className={style.label} htmlFor="tweeter">
              Tweeter
            </label>
            <input
              type="text"
              id="tweeter"
              {...register("social.tweeter", {
                required: {
                  value: true,
                  message: "Tweeter is required",
                },
              })}
            />
            {errors.social && (
              <p style={{ color: "red" }}>
                {errors.social.tweeter && errors.social.tweeter.message}
              </p>
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <button>Submit</button>
          </div>
          <DevTool control={control} />
        </form>
      </div>
    </div>
  );
};

export default YoutubeForm;
