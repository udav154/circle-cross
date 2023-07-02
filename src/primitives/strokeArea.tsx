import * as PIXI from "pixi.js"
import {
  CustomPIXIComponent,
  CustomPIXIComponentBehavior,
} from "react-pixi-fiber"
import CONSTS from "../settings"
import { IBehavior, ICreateStrokeRect, ICreateStrokeSprite, iDinamicConsts } from "../interfaces"
import picture from '../assets/penStrike.png'


const { TYPES_ELEMENT, NUM_COLORS, AXIS, CALC_CONST, ROTATION } = CONSTS

const createStrokeSprite = ({ texture, x, y, rotation, width, height }: ICreateStrokeSprite): PIXI.Sprite => {
  const stroke = PIXI.Sprite.from(texture)
  stroke.anchor.set(0.5, 0.5)
  stroke.tint = NUM_COLORS.BLACK
  stroke.x = x
  stroke.y = y
  stroke.rotation = rotation
  stroke.scale.set(0.3)
  stroke.height = height
  stroke.width = width
  stroke.name = TYPES_ELEMENT.STROKE
  return (stroke)

}

const createStrokeRect = ({
  rotation,
  strokeX,
  strokeY,
  fieldWidth,
  strokeWidth,
  strokeHeight
}: ICreateStrokeRect): PIXI.Graphics => {
  const rect = new PIXI.Graphics()
  rect.lineStyle(10, NUM_COLORS.MAIN_BG)

  const x = rotation ? strokeX - fieldWidth / 2 : strokeX - strokeWidth / 2
  const y = rotation ? strokeY - strokeWidth / 2 : strokeY - fieldWidth / 2

  const rectHeight = rotation ? strokeWidth : strokeHeight
  const rectWidth = rotation ? strokeHeight : strokeWidth

  rect.beginFill(NUM_COLORS.MAIN_BG)
  rect.drawRect(x, y, rectWidth, rectHeight)
  rect.endFill()
  rect.name = TYPES_ELEMENT.STROKE_RECT
  return rect
}

const behavior: IBehavior = {
  customDisplayObject: (props) => {
    console.log('MOUNT FIELD')
    const {
      fieldWidth,
      cellWidth,
      strokeHeight,
      strokeWidth
    } = props as iDinamicConsts
    const fieldContainer = new PIXI.Container()

    const halfFIeld = fieldWidth / 2
    const halfCell = cellWidth / 2
    const increasedHalfField = halfFIeld + halfCell
    const redusedHalfField = halfFIeld - halfCell

    const texture = PIXI.Texture.from(picture)
    const strokeData = [
      { x: redusedHalfField, y: halfFIeld, rotation: ROTATION._0 },
      { x: increasedHalfField, y: halfFIeld, rotation: ROTATION._0 },
      { x: halfFIeld, y: redusedHalfField, rotation: ROTATION._90 },
      { x: halfFIeld, y: increasedHalfField, rotation: ROTATION._90 }
    ]

    const strokes = strokeData.reduce((arr, el, idx) => {
      const { x, y, rotation } = strokeData[idx]
      const stroke = createStrokeSprite({ texture, height: strokeHeight, width: strokeWidth, ...el })
      const rect = createStrokeRect({ rotation, strokeX: x, strokeY: y, fieldWidth, strokeWidth, strokeHeight })
      arr.push(stroke, rect)
      return arr
    }, [] as PIXI.DisplayObject[])

    fieldContainer.addChild(...strokes)
    return fieldContainer
  },
  customApplyProps(instance, oldProps, newProps) {
  },
  customDidAttach(instance) {
    let count = 0
    let countChildren = instance.children.length - 1
    for (let i = countChildren; i > 0; i--) {
      const child = instance.children[i]
      if (child.name !== TYPES_ELEMENT.STROKE_RECT) continue
      const ticker = new PIXI.Ticker()

      const dragRect = () => {
        const mainAxis = child.height > child.width ? AXIS.Y : AXIS.X
        child[mainAxis] += CALC_CONST.DRAWING_SPEED
      }
      ticker.add(dragRect)

      setTimeout(() => {
        ticker.start()
      }, 300 * count)
      count += 1

      setTimeout(() => {
        ticker.stop()
      }, 500 * (count + 1))
    }
  }
}

export default CustomPIXIComponent(
  behavior as unknown as CustomPIXIComponentBehavior<any, unknown>,
  TYPES_ELEMENT.FIELD,
)
