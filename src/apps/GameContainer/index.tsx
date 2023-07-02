import CONSTS from "../../settings"
import { iDinamicConsts } from "../../interfaces"

import Container from "../../primitives/container"

const { NUM_COLORS } = CONSTS

interface IProps {
  dinamicConsts: iDinamicConsts
  children: React.ReactNode
}

const GameContainer: React.FC<IProps> = ({ dinamicConsts, children }) => {
  const { centerScene, fieldWidth } = dinamicConsts

  const x = centerScene.x - fieldWidth / 2
  const y = centerScene.y - fieldWidth / 2

  return (
    <Container
      x={x}
      y={y}
      width={fieldWidth}
      height={fieldWidth}
      isFrame={true}
      frameColor={NUM_COLORS.BLUE}
    >
      {children}
    </Container>
  )
}

export default GameContainer