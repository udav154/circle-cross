import * as PIXI from "pixi.js"
import {
  CustomPIXIComponent,
  CustomPIXIComponentBehavior,
} from "react-pixi-fiber"
import picture from '../assets/penStrike.png'
import CONSTS from "../settings"
import {
  IBehavior,
  ICreateStrokeCircle,
  ICreateStrokeSprite,
  IFilledCell
} from "../interfaces"

const { TYPES_ELEMENT, NUM_COLORS, ROTATION } = CONSTS

const createStroke = ({ texture, x, y, rotation, width, height }: ICreateStrokeSprite): PIXI.Sprite => {
  const stroke = PIXI.Sprite.from(texture)
  stroke.anchor.set(0.5, 0.5)
  stroke.tint = NUM_COLORS.BLACK
  stroke.x = x
  stroke.y = y
  stroke.rotation = rotation
  stroke.scale.set(0.3)
  stroke.height = height
  stroke.width = width
  return stroke
}

const createStrokeCross = (data: ICreateStrokeCircle): PIXI.Container<PIXI.DisplayObject> => {
  const container = new PIXI.Container()
  container.name = TYPES_ELEMENT.CROSS

  const stroke1 = createStroke({ rotation: ROTATION._45, ...data })
  const stroke2 = createStroke({ rotation: ROTATION._135, ...data })

  container.addChild(stroke1, stroke2)
  return container
}

const behavior: IBehavior = {
  customDisplayObject: (props) => {
    const { dinamicConsts:
      {
        cellWidth,
        strokeWidth,
      },
      row,
      col,
    } = props as IFilledCell
    const penTexture = PIXI.Texture.from(picture)
    const x = col * cellWidth
    const y = row * cellWidth
    const centerCellX = x + cellWidth / 2
    const centerCellY = y + cellWidth / 2

    const cross = createStrokeCross({
      texture: penTexture,
      x: centerCellX,
      y: centerCellY,
      width: strokeWidth,
      height: cellWidth
    })
    return cross

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