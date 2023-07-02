import * as PIXI from "pixi.js"
import {
  CustomPIXIComponent,
  CustomPIXIComponentBehavior,
} from "react-pixi-fiber"
import picture from '../../assets/penStrike.png'
import circle from '../../assets/Circle1.png'
import CONSTS from "../../settings"
import {
  IBehavior,
  ICellProps,
  ICreateStrokeCircle,
  ICreateStrokeSprite
} from "../../interfaces"

const { TYPES_ELEMENT, NUM_COLORS, AXIS, CALC_CONST, ROTATION } = CONSTS

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

// const createMaskStrokeCross = ({ texture, x, y, width, height }) => {
//   const container = new PIXI.Container()
//   container.name = TYPES_ELEMENT.CROSS

//   const stroke1 = createStroke({ texture, x, y, width, height, rotation: ROTATION._45 })
//   const stroke2 = createStroke({ texture, x, y, width, height, rotation: ROTATION._135 })

//   container.addChild(stroke1, stroke2)
//   return container
// }

// const createMaskCircle = ({ rotation, strokeX, strokeY, fieldWidth, strokeWidth, strokeHeight }: ICreateStrokeRect) => {
//   const rect = new PIXI.Graphics()
//   rect.lineStyle(10, NUM_COLORS.MAIN_BG)

//   const x = rotation ? strokeX - fieldWidth / 2 : strokeX - strokeWidth / 2
//   const y = rotation ? strokeY - strokeWidth / 2 : strokeY - fieldWidth / 2

//   const rectHeight = rotation ? strokeWidth : strokeHeight
//   const rectWidth = rotation ? strokeHeight : strokeWidth

//   rect.beginFill(NUM_COLORS.MAIN_BG)
//   rect.drawRect(x, y, rectWidth, rectHeight)
//   rect.endFill()
//   rect.name = TYPES_ELEMENT.STROKE_RECT
//   return rect
// }

const behavior: IBehavior = {
  customDisplayObject: (props) =>{ 
   const cellContainer =  new PIXI.Container();
   const { dinamicConsts:
    { centerScene,
      fieldWidth,
      cellWidth,
      strokeWidth,
      circleDiametr
    },
    row,
    col,
    status,
    step
  } = props as ICellProps
  cellContainer.children.length = 0
  cellContainer.x = centerScene.x - fieldWidth / 2
  cellContainer.y = centerScene.y - fieldWidth / 2

  const circleTexture = PIXI.Texture.from(circle)
  const penTexture = PIXI.Texture.from(picture)
  const emptytexture = PIXI.Texture.EMPTY // Создаем пустую текстуру
  const interactiveCell = new PIXI.Sprite(emptytexture)

  interactiveCell.width = cellWidth
  interactiveCell.height = cellWidth
  const x = col * cellWidth
  const y = row * cellWidth
  const centerCellX = x + cellWidth / 2
  const centerCellY = y + cellWidth / 2

  interactiveCell.x = x
  interactiveCell.y = y

  interactiveCell.eventMode = !status ? 'static' : 'auto'
  interactiveCell.on('pointerdown', () => step(row, col))

  instance.addChild(interactiveCell)

  if (status === CONSTS.CELL_STATUSES.cross) {
    const cross = createStrokeCross({ texture: penTexture, x: centerCellX, y: centerCellY, width: strokeWidth, height: cellWidth })
    instance.addChild(cross)
  }

  if (status === CONSTS.CELL_STATUSES.circle) {
    const strikeCircle = createStrokeCircle({ texture: circleTexture, x: centerCellX, y: centerCellY, width: circleDiametr, height: circleDiametr })
    instance.addChild(strikeCircle)
  }
  },
  customApplyProps(instance, oldProps, newProps) {
    // if (
    //   isEqual(
    //     [oldProps?.dinamicConsts, oldProps?.row, oldProps?.col, oldProps?.status],
    //     [newProps?.dinamicConsts, newProps?.row, newProps?.col, newProps?.status]
    //   )
    // ) return

    const { dinamicConsts:
      { centerScene,
        fieldWidth,
        cellWidth,
        strokeWidth,
        circleDiametr
      },
      row,
      col,
      status,
      step
    } = newProps as ICellProps
    instance.children.length = 0
    instance.x = centerScene.x - fieldWidth / 2
    instance.y = centerScene.y - fieldWidth / 2

    const circleTexture = PIXI.Texture.from(circle)
    const emptytexture = PIXI.Texture.EMPTY // Создаем пустую текстуру
    const penTexture = PIXI.Texture.from(picture)
    const interactiveCell = new PIXI.Sprite(emptytexture)

    interactiveCell.width = cellWidth
    interactiveCell.height = cellWidth
    const x = col * cellWidth
    const y = row * cellWidth
    const centerCellX = x + cellWidth / 2
    const centerCellY = y + cellWidth / 2

    interactiveCell.x = x
    interactiveCell.y = y

    interactiveCell.eventMode = !status ? 'static' : 'auto'
    interactiveCell.on('pointerdown', () => step(row, col))

    instance.addChild(interactiveCell)

    if (status === CONSTS.CELL_STATUSES.cross) {
      const cross = createStrokeCross({ texture: penTexture, x: centerCellX, y: centerCellY, width: strokeWidth, height: cellWidth })
      instance.addChild(cross)
    }

    if (status === CONSTS.CELL_STATUSES.circle) {
      const strikeCircle = createStrokeCircle({ texture: circleTexture, x: centerCellX, y: centerCellY, width: circleDiametr, height: circleDiametr })
      instance.addChild(strikeCircle)
    }

    // Для дебага область Ячейки
    // const frame = new PIXI.Graphics()
    // frame.lineStyle(2, 0xFF0000)
    // frame.drawRect(col * cellWidth, row * cellWidth, cellWidth, cellWidth)
    // instance.addChild(frame)

    if (this.applyDisplayObjectProps) this.applyDisplayObjectProps(oldProps, newProps)
  },
  customDidAttach(instance) {
  }
}

export default CustomPIXIComponent(
  behavior as unknown as CustomPIXIComponentBehavior<any, unknown>,
  TYPES_ELEMENT.CELL,
)