import React from "react";
import { BrowserRouter as Router,Link,useLocation} from "react-router-dom";
import { IMAGES } from './images';
import {Thumbnail} from './Thumbnail';



export function Gallery() {
    let location = useLocation();
  
    return (
      <div>
        {IMAGES.map(i => (
          <Link
            key={i.id}
            to={{
              pathname: `/img/${i.id}`,
              // This is the trick! This link sets
              // the `background` in location state.
              state: { background: location }
            }}
          >
            <Thumbnail color={i.color} />
          
            <p>{i.title}</p>
          </Link>
        ))}
      </div>
    );
  }