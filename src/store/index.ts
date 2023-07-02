import { makeAutoObservable } from 'mobx'
import CONSTS from '../settings'
import { ICellData, TQueue } from '../interfaces'

const { STYLES, CALC_CONST, QUEUE_MATCH, QUEUE_VARIANTS } = CONSTS

const initCells: ICellData[] = [
  { row: 0, col: 0, status: null }, { row: 0, col: 1, status: null }, { row: 0, col: 2, status: null },
  { row: 1, col: 0, status: null }, { row: 1, col: 1, status: null }, { row: 1, col: 2, status: null },
  { row: 2, col: 0, status: null }, { row: 2, col: 1, status: null }, { row: 2, col: 2, status: null },
]


export default class Store {
  cells = initCells
  queue = QUEUE_VARIANTS.user

  constructor() {
    makeAutoObservable(this)
  }

  getCells = () => {
    return this.cells
  }

  clearCells = ( ): void => {
    this.cells = initCells
  }

  resetQueue = () => { 
    this.queue = QUEUE_VARIANTS.user
  }

  changeCell = (row: number, col: number, newStatus:TQueue ): void => {
    this.cells =  this.cells.map(el => {
      if (el.row === row && el.col === col) {
        return { ...el, status: newStatus }
      }
      return el
    })
  }

  changeQueue = (): {prev:TQueue, curr:TQueue} => {
    let prevQueue = this.queue
    const newQueue = this.queue === CONSTS.QUEUE_VARIANTS.bot ?
    CONSTS.QUEUE_VARIANTS.user :
    CONSTS.QUEUE_VARIANTS.bot

    this.queue = newQueue
    return {prev: prevQueue, curr: newQueue}
  }
}
