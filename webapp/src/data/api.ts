"use client";

import axios from "axios";

import { env } from "next-runtime-env";

type PropsType = {
  prompt: String;
  num?: number;
  steps?: number;
};

export function postImages(props: PropsType) {
  const url = env("NEXT_PUBLIC_API_URL");

  return axios
    .post(`${url}/v1/images/generations`, {
      model: "stablediffusion",
      n: props.num ?? 10,
      prompt: props.prompt,
      steps: props.steps ?? 20,
    })
    .then((response) => {
      debugger;
      return response.data;
    });
}
