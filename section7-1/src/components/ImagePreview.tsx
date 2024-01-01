import React, { memo, useCallback, useEffect, useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

const ImagePreview = ({ src }) => {
  // console.log("ImagePreview");
  const imgRef = useRef(null);
  const [mouseOver, setMouseOver] = useState(false);
  const [mouseX, setMouseX] = useState(null);
  const [mouseY, setMouseY] = useState(null);
  const [imageView, setImageView] = useState<Position | null>();

  // const onMouseEnter = () => {
  //   setMouseOver(true);
  // };
  // const onMouseLeave = () => {
  //   setMouseOver(false);
  // };
  const onMouseEnter = (e: React.MouseEvent) => {
    console.log("onMouseEnter");
    if (imgRef.current) {
      setMouseX(imgRef.current.getBoundingClientRect().right);
      setMouseY(imgRef.current.getBoundingClientRect().top);
      // console.log("onMouseEnter");
      // console.log(e);
      // setImageView({
      //   x: imgRef.current?.getBoundingClientRect().right,
      //   y: imgRef.current?.getBoundingClientRect().top,
      // });
      // console.log("imgRef");
      // console.log(imgRef.current.getBoundingClientRect());
      // console.log(imageView);
    }
  };

  const onMouseLeave = useCallback(() => {
    console.log("onMouseLeave");
    if (imgRef.current) {
      // setImageView(null);
      setMouseX(null);
      setMouseY(null);
    }
  }, []);

  useEffect(() => {
    setImageView(null);
  }, []);

  // useEffect(() => {
  //   if (imgRef.current) {
  //     // console.log("useCallback");
  //     if (mouseOver) {
  //       setImageView({
  //         x: imgRef.current?.getBoundingClientRect().right,
  //         y: imgRef.current?.getBoundingClientRect().top,
  //       });
  //     } else {
  //       setImageView(null);
  //     }
  //   }
  // }, [mouseOver]);
  return (
    <>
      <div
        className="Image"
        style={{ width: 500, height: 500 }}
        onMouseLeave={() => {
          setMouseX(null);
          setMouseY(null);
        }}
      >
        <img
          src={src}
          style={{ width: "100%" }}
          ref={imgRef}
          onMouseEnter={onMouseEnter}
        />
      </div>

      <ImageView src={src} mouseX={mouseX} mouseY={mouseY} />
    </>
  );
};
export default React.memo(ImagePreview);

const ImageView = React.memo(({ src, mouseX, mouseY }) => {
  console.log("ImageView");
  // console.log("position", position);
  return (
    <>
      {mouseX && mouseY && (
        <div
          style={{
            backgroundImage: `url(${src})`,
            top: 0,
            width: 2000,
            height: 2000,
            position: "absolute",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: mouseX,
            backgroundPositionY: mouseY,
            // backgroundPositionX: 500,
            // backgroundPositionY: 500,
          }}
        ></div>
      )}
    </>
  );
});
