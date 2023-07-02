import * as PIXI from "pixi.js"
import {
  CustomPIXIComponent,
  CustomPIXIComponentBehavior,
} from "react-pixi-fiber"
import CONSTS from "../settings"
import {
  IBehavior,
  ICellProps,
} from "../interfaces"

const { TYPES_ELEMENT } = CONSTS


const behavior: IBehavior = {
  customDisplayObject: (props) => {
    const { dinamicConsts:
      {
        cellWidth,
      },
      row,
      col,
      onClickCell
    } = props as ICellProps
    const emptytexture = PIXI.Texture.EMPTY // Создаем пустую текстуру
    const interactiveCell = new PIXI.Sprite(emptytexture)

    interactiveCell.width = cellWidth
    interactiveCell.height = cellWidth
    const x = col * cellWidth
    const y = row * cellWidth

    interactiveCell.x = x
    interactiveCell.y = y

    interactiveCell.eventMode = 'static'
    interactiveCell.on('pointerdown', () => onClickCell(row,col))

    return interactiveCell
  },
  customApplyProps(instance, oldProps, newProps) {
    const {
      status
    } = newProps as ICellProps
    if (status) {
      instance.eventMode = 'auto'
    }
    // if (this.applyDisplayObjectProps) this.applyDisplayObjectProps(oldProps, newProps)
  },
  customDidAttach(instance) {
  }
}

export default CustomPIXIComponent(
  behavior as unknown as CustomPIXIComponentBehavior<any, unknown>,
  TYPES_ELEMENT.CELL,
)