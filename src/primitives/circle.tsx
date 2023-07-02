import * as PIXI from "pixi.js"
import {
  CustomPIXIComponent,
  CustomPIXIComponentBehavior,
} from "react-pixi-fiber"
import circle from '../assets/Circle1.png'
import CONSTS from "../settings"
import {
  IBehavior,
  ICreateStrokeCircle,
  IFilledCell,
} from "../interfaces"

const { TYPES_ELEMENT, NUM_COLORS } = CONSTS

const createStrokeCircle = ({ texture, x, y, width, height }: ICreateStrokeCircle): PIXI.Sprite => {
  const circle = PIXI.Sprite.from(texture)
  circle.anchor.set(0.5, 0.5)
  circle.tint = NUM_COLORS.RED
  circle.x = x
  circle.y = y
  circle.height = height
  circle.width = width
  return circle
}


const behavior: IBehavior = {
  customDisplayObject: (props) => {
    const { dinamicConsts:
      {
        cellWidth,
        circleDiametr
      },
      row,
      col,
    } = props as IFilledCell

    const circleTexture = PIXI.Texture.from(circle)

    const x = col * cellWidth
    const y = row * cellWidth
    const centerCellX = x + cellWidth / 2
    const centerCellY = y + cellWidth / 2

    const strikeCircle = createStrokeCircle({
      texture: circleTexture,
      x: centerCellX,
      y: centerCellY,
      width: circleDiametr,
      height: circleDiametr
    })
    return strikeCircle
  },
  customApplyProps(instance, oldProps, newProps) {
    // if (this.applyDisplayObjectProps) this.applyDisplayObjectProps(oldProps, newProps)
  },
  customDidAttach(instance) {
  }
}

export default CustomPIXIComponent(
  behavior as unknown as CustomPIXIComponentBehavior<any, unknown>,
  TYPES_ELEMENT.CELL,
)