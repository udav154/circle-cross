import { ICellData, iDinamicConsts } from "../../interfaces"
import InteractiveCell from "../../primitives/interactiveEmptyCell"

interface IProps {
  cells: ICellData[]
  dinamicConsts: iDinamicConsts
  onClickCell: Function
}

const InteractiveCells: React.FC<IProps> = ({ cells, dinamicConsts, onClickCell }) => {


  return (
    cells.map((cell) => {
      return (
        <InteractiveCell
          key={`${cell.row}${cell.col}`}
          dinamicConsts={dinamicConsts}
          onClickCell={onClickCell}
          {...cell}
        />
      )
    })
  )
}

export default InteractiveCells