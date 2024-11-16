"use client";

import React, { useState } from "react";

import { Box, TextField, Button } from "@mui/material";

import { postImages } from "@/data/api";
import type { Image } from "@/types/image";
import { ImageCard } from "./ImageCard";

export function ImagePage() {
  const [numImages, setNumImages] = useState(10);
  const [steps, setSteps] = useState(10);
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState<Image[]>([]);

  const handleSubmit = () => {
    postImages({ prompt: prompt, num: numImages, steps: steps }).then((data) =>
      setImages(data)
    );
  };

  return (
    <Box className="flex flex-col gap-4 my-4">
      <TextField
        className="flex justify-around"
        value={prompt}
        onChange={(e) => {
          setPrompt(e.target.value);
        }}
        multiline
        minRows={5}
        label="Image generation prompt"
      ></TextField>
      <Button variant="contained" fullWidth onClick={handleSubmit}>
        Generate
      </Button>
      <Box>
        {images.map((image, index) => {
          return <ImageCard image={image} key={`image-${image.index}`} />;
        })}
      </Box>
    </Box>
  );
}

export default ImagePage;
