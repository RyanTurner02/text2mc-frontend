import Form from "react-bootstrap/Form";
import { useState } from "react";
import Image from "react-bootstrap/Image";
import House1 from "../images/interpolation_slider_images/House 1.png";
import House2 from "../images/interpolation_slider_images/House 2.png";
import House3 from "../images/interpolation_slider_images/House 3.png";
import House4 from "../images/interpolation_slider_images/House 4.png";
import House5 from "../images/interpolation_slider_images/House 5.png";
import House6 from "../images/interpolation_slider_images/House 6.png";

export default function LatentBuildSlider() {
  const [interpolationValue, setInterpolationValue] = useState(0);
  const [interpolationImageSrc, setInterpolationImageSrc] = useState(House1);
  const interpolationImages = [House1, House2, House3, House4, House5, House6];

  const updateInterpolation = (event) => {
    const sliderValue = event.target.value;
    setInterpolationValue(sliderValue);
    setInterpolationImageSrc(interpolationImages[sliderValue]);
  };

  return (
    <div>
      <div className="text-center">
        <Image className="interpolations-image" src={interpolationImageSrc} alt="Interpolation of a house" fluid />
      </div>
      <Form>
        <div>
          <Form.Label>Latent Space Interpolation: House {Number(interpolationValue) + 1}</Form.Label>
        </div>
        <Form.Range
          min="0"
          max={interpolationImages.length - 1}
          value={interpolationValue}
          onChange={updateInterpolation}
        />
      </Form>
    </div>
  );
}
