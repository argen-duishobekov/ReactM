import React from "react";
import { IMAGES } from './images';
import { Image } from './image'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useParams
  } from "react-router-dom";


export function ImageView() {
    let { id } = useParams();
    let image = IMAGES[parseInt(id, 10)];
  
    if (!image) return <div>Image not found</div>;
  
    return (
      <div>
        <h1>{image.title}</h1>
     
        <Image color={image.color} />
      </div>
    );
  }