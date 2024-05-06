import { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "./Photos";

export default function GalleryPictures({images}) {
  const [index, setIndex] = useState(-1);

  return (
    <>



<div className="grid grid-cols-2 lg:grid-cols-4 gap-5 items-start justify-center">



{images?.map((img , index)=>{

return (

  <div key={index} className="w-full">
    
      
      <img
      src={img} 
          // src={props.property.image}
          // alt={props.property.description}
          width={1500} 
          height={1000}
          className="block w-full lg:!h-[200px] object-cover object-center group-hover:scale-110 transition-all duration-300"
      />
  

  </div>




)


})}




  </div>




    
      {/* <PhotoAlbum photos={images} layout="rows" targetRowHeight={410} onClick={({ index }) => setIndex(index)} />

      <Lightbox
        slides={images}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      /> */}


    </>
  );
}

