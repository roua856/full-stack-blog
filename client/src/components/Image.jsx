import { IKImage } from "imagekitio-react";

const Image = ({src, className, w, h, alt}) => {
  return (
    <IKImage 
    urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT} 
    //path="/blogs-logo.png" 
     path= {src}
     //src="https://ik.imagekit.io/raaaxwudj/blogs-logo.png"
     className={className}
     //classsName="w-8 h-8"
     loading="lazy"
     lqip={{ active: true, quality: 20 }}
     alt={alt}
     width={w}
     height={h}
     transformation={[
       {
        width: w,
        height: h,
       },
     ]}
     //alt="" 
     />

  
  );
};

export default Image