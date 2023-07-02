import CONSTS from "../../settings"
import Container from "../../primitives/container"
import StrokeArea from "../../primitives/strokeArea"
import { usePixiApp } from "react-pixi-fiber"
import { iDinamicConsts } from "../../interfaces"

const { TYPES_ELEMENT, NUM_COLORS } = CONSTS

interface IProps {
  dinamicConsts: iDinamicConsts
}

const GameField: React.FC<IProps> = ({ dinamicConsts }) => {
  const { centerScene, fieldWidth, cellWidth, ...restparams } = dinamicConsts
  const app = usePixiApp()
  const halfCell = cellWidth / 2
  
  return (
    <Container
      width={fieldWidth}
      height={fieldWidth}
      isFrame={true}
      frameColor={NUM_COLORS.YELLOW}
      name={TYPES_ELEMENT.CONTAINER}
    >
      <StrokeArea
        halfCell={halfCell}
        fieldWidth={fieldWidth}
        cellWidth={cellWidth}
        renderer = {app.renderer}
        {...restparams}
      />
    </Container>)
}


export default GameField