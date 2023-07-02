import * as PIXI from 'pixi.js'
import CONST from '../settings'

export type TAnyDeepObject = { [key: string]: unknown | any }

export interface IBehavior {
  applyDisplayObjectProps?: (O: TAnyDeepObject, N: TAnyDeepObject) => void
  customDidAttach?: (K: TAnyDeepObject) => void
  customDisplayObject?: (I: TAnyDeepObject) => void
  customApplyProps?: (
    I: TAnyDeepObject,
    O: TAnyDeepObject,
    N: TAnyDeepObject
  ) => void
}

export type TStatusGame = typeof CONST.GAME_STATUSES[keyof typeof CONST.GAME_STATUSES]

export type TStatusCell  = typeof CONST.CELL_STATUSES[keyof typeof CONST.CELL_STATUSES]

export type TQueue  = typeof CONST.QUEUE_VARIANTS[keyof typeof CONST.QUEUE_VARIANTS]

export interface ICellData {
  row: number
  col: number
  status: TStatusCell | null
}

export interface IData {
  queue: TQueue,
  cells: ICellData[]
}

export interface ICreateStrokeSprite {
  texture: PIXI.Texture<any>
  x: number
  y: number
  rotation: number
  width: number
  height: number
}

export interface ICreateStrokeRect {
  strokeX: number
  strokeY: number
  rotation: number
  fieldWidth: number
  strokeWidth: number
  strokeHeight: number
}

export interface iDinamicConsts {
  sceneWidth: number
  sceneHeight: number
  centerScene: { x: number; y: number }
  cellWidth: number
  strokeHeight: number
  strokeWidth: number
  fieldWidth: number
  circleDiametr: number
}

export interface ICreateStrokeCircle {
  texture: PIXI.Texture<any>
  x: number
  y: number
  width: number
  height: number
}

export interface IFilledCell extends ICellData {
  dinamicConsts: iDinamicConsts
}

export interface ICellProps extends IFilledCell {
  onClickCell: (row: number, col: number) => void
}
