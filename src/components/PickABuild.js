import { ToggleButton, ToggleButtonGroup } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import PlaceholderImage from "../images/temporary_image.png"
import { useState } from "react";

const buildingImages = [
  PlaceholderImage,
  PlaceholderImage,
  PlaceholderImage,
  PlaceholderImage,
  PlaceholderImage,
  PlaceholderImage,
  PlaceholderImage,
  PlaceholderImage,
  PlaceholderImage,
  PlaceholderImage
]

const totalButtons = 5
export default function PickABuild() {
    const disabled_arr = new Array(totalButtons*2).fill(false);
    const [disabled, setDisabled] = useState(disabled_arr);
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState([undefined, undefined]);
    const [image, setImage] = useState(buildingImages[0]);  
    const buttons = Array.from({ length: totalButtons }, (_, index) => index + 1);
   

    

    const handleButtonClick = (buttons, group) => {

      let selectedButtons = [...selected];

      if (group === 1) {
        selectedButtons[0] = buttons[0]
      }
      else if (group === 2) {
        selectedButtons[1] = buttons[0]
      }

      
      console.log(selectedButtons, group);
      if (selectedButtons[0] !== undefined) {
        
        disabled_arr.fill(true, 0, totalButtons);
        disabled_arr[selectedButtons[0] - 1] = false;
        setDisabled(disabled_arr);
      }
      else{
        disabled_arr.fill(false, 0, totalButtons);
        setDisabled(disabled_arr);
      }
      if (selectedButtons[1] !== undefined) {
        
        disabled_arr.fill(true, totalButtons, totalButtons*2);
        disabled_arr[selectedButtons[1] - 1] = false;
        setDisabled(disabled_arr);
      }
      else{
        disabled_arr.fill(false, totalButtons, totalButtons * 2);
        setDisabled(disabled_arr);
      }

      if (selectedButtons[0] !== undefined && selectedButtons[1] !== undefined) {
        setVisible(true);
        setImage(buildingImages[selectedButtons[0] - 1]);
      }
      else {
        setVisible(false);
      }
      setSelected(selectedButtons);
   };
  

  return (
    <div>
      <h1>Pick A Build</h1>
      <ToggleButtonGroup type="checkbox" onChange={(event) => handleButtonClick(event, 1)} className="mb-5 text-center d-flex flex-wrap justify-content-center">
        {buttons.map((button, index) => (
            <ToggleButton
              key={index}
              variant="outline-secondary"
              id={`tbg-btn-${index + 1}`}
              value={index + 1}
              disabled={disabled[index]}
              className="ToggleButton"
            >
              <Image src={buildingImages[index]} alt="Placeholder Image" className="build-image" />
            </ToggleButton>
      ))}
      </ToggleButtonGroup>
        <ToggleButtonGroup type="checkbox" onChange={(event) => handleButtonClick(event, 2)}  className="mb-5 text-center d-flex flex-wrap justify-content-center">
        {buttons.map((button, index) => (
            <ToggleButton
              key={index + totalButtons}
              variant="outline-secondary"
              id={`tbg-btn-${index + totalButtons + 1}`}
              value={index + totalButtons + 1}
              disabled={disabled[index + totalButtons]}
              className="ToggleButton"
            >
              <Image src={buildingImages[index + totalButtons]} alt="Placeholder Image" className="build-image" />
            </ToggleButton>
      ))}
      </ToggleButtonGroup>
    {
        visible && (
          <div className="d-flex justify-content-center"> 
            <Image src={image} alt="Placeholder Image" className="placeholder-image" />
          </div>
        )
    }
   </div>
  );
}