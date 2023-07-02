import React, { useContext } from 'react'
import CONSTS from '../../settings'
import { Context } from '../../main'
import { observer } from 'mobx-react-lite'

interface IProps {
  children: Function
}

const { QUEUE_MATCH } = CONSTS

const StageLogic: React.ComponentType<IProps> = ({
  children
}) => {
  const { store: {cells, changeCell,changeQueue } } = useContext(Context)

  const onClickCell = (row: number, col: number): void => {
    const { prev } = changeQueue()
    const newStatus = QUEUE_MATCH[prev]
    changeCell(row, col, newStatus)
  }

  return children({
    cells: cells,
    onClickCell
  })
}

export default observer(StageLogic)
