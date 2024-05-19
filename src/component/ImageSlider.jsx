import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "images/1.png" },
  { url: "images/2.png" },
  { url: "images/3.png" },
  { url: "images/4.png" },
];

const ImageSlider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={500}
        height={630}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        loop={true}
      />
    </div>
  );
};

export default ImageSlider;
