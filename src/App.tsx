import { useState } from "react";
import "./App.css";

function App() {
  const [colorR, setColorR] = useState(0);
  const [colorG, setColorG] = useState(0);
  const [colorB, setColorB] = useState(0);

  return (
    <div className="wrapper">
      <ColorGenerator
        value={colorR}
        onChangeR={(value) => {
          setColorR(value);
        }}
        onChangeG={(value) => {
          setColorG(value);
        }}
        onChangeB={(value) => {
          setColorB(value);
        }}
      />
      <Box colorR={colorR} colorG={colorG} colorB={colorB} />
    </div>
  );
}

type ColorGeneratorProps = {
  value: number;
  onChangeR: (value: number) => void;
  onChangeG: (value: number) => void;
  onChangeB: (value: number) => void;
};

function ColorGenerator(props: ColorGeneratorProps) {
  const [valueR, setValueR] = useState(props.value);
  const [valueG, setValueG] = useState(props.value);
  const [valueB, setValueB] = useState(props.value);

  return (
    <div className="main__container">
      <div className="container">
        <input
          type="range"
          min="0"
          max="255"
          value={valueR}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setValueR(Number(e.target.value));
            props.onChangeR(Number(e.target.value));
          }}
        />

        <p>Red: {valueR}</p>
      </div>
      <div className="container">
        <input
          type="range"
          min="0"
          max="255"
          value={valueG}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setValueG(Number(e.target.value));
            props.onChangeG(Number(e.target.value));
          }}
        />

        <p>Green: {valueG}</p>
      </div>
      <div className="container">
        <input
          type="range"
          min="0"
          max="255"
          value={valueB}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setValueB(Number(e.target.value));
            props.onChangeB(Number(e.target.value));
          }}
        />

        <p>Blue: {valueB}</p>
      </div>
    </div>
  );
}

type BoxProps = {
  colorR: number;
  colorG: number;
  colorB: number;
};

function Box(props: BoxProps) {
  return (
    <div
      className="square"
      style={{
        backgroundColor: ` rgb(${props.colorR}, ${props.colorG}, ${props.colorB})`,
      }}
    ></div>
  );
}

export default App;
