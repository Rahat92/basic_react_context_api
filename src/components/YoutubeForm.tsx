import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import style from "./YoutubeForm.module.css";
let renderCount = 0;

// types start
interface formValue {
  username: string;
  email: string;
  phoneNumbers: string[];
  social: {
    facebook: string;
    tweeter: string;
  };
  phNumbers: {
    number: string;
  }[];
  age: number;
  dob: Date;
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
        phoneNumbers: ["", ""],
        social: {
          facebook: "facebook",
          tweeter: "tweeter",
        },
        phNumbers: [{ number: "" }],
        age: 0,
        dob: new Date(),
      };
    },
  });
  const { register, control, handleSubmit, formState } = form;
  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const { errors } = formState;
  console.log(errors);
  const onSubmit = (data: formValue) => {
    console.log("form Submitted", data.dob);
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
            <label className={style.label} htmlFor="primaryPhoneNumber">
              Primary Phone No.
            </label>
            <input
              type="text"
              id="primaryPhoneNumber"
              {...register("phoneNumbers.0", {
                required: {
                  value: true,
                  message: "Primary Phone Number is required",
                },
              })}
            />
            {errors.phoneNumbers && (
              <p style={{ color: "red" }}>
                {errors.phoneNumbers[0] && errors.phoneNumbers[0].message}
              </p>
            )}
          </div>
          <div>
            <label className={style.label} htmlFor="secondaryPhoneNumber">
              Secondary Phone No.
            </label>
            <input
              type="text"
              id="secondaryPhoneNumber"
              {...register("phoneNumbers.1", {
                required: {
                  value: true,
                  message: "Secondary Phone Number is required",
                },
              })}
            />
            {errors.phoneNumbers && (
              <p style={{ color: "red" }}>
                {errors.phoneNumbers[1] && errors.phoneNumbers[1].message}
              </p>
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
          <div>
            <label className={style.label} htmlFor="tweeter">
              Age
            </label>
            <input
              type="number"
              id="age"
              {...register("age", {
                valueAsNumber: true,
                required: {
                  value: true,
                  message: "Age is required",
                },
              })}
            />
            {errors.age && (
              <p style={{ color: "red" }}>{errors.age && errors.age.message}</p>
            )}
          </div>
          <div>
            <label className={style.label} htmlFor="dob">
              Date Of Birth
            </label>
            <input
              type="date"
              id="dob"
              {...register("dob", {
                valueAsDate: true,
                required: {
                  value: true,
                  message: "Date of birth is required",
                },
              })}
            />
            {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
          </div>
          <div>
            <label>List of phone numbers</label>
          </div>
          {fields.map((field, index) => {
            return (
              <div key={field.id}>
                <input
                  type="text"
                  placeholder="phoneNumber"
                  {...register(`phNumbers.${index}.number` as const)}
                />
                {index > 0 && <button onClick={() => remove(index)}>X</button>}
              </div>
            );
          })}
          <div>
            <button onClick={() => append({ number: "" })} type="button">
              add more phone numbers
            </button>
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
