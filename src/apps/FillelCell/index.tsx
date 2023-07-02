import Cross from '../../primitives/cross'
import Circle from '../../primitives/circle'
import CONST from '../../settings'
import { ICellData, IFilledCell, iDinamicConsts } from "../../interfaces"

const { CELL_STATUSES } = CONST

interface IProps {
  cells: ICellData[]
  dinamicConsts: iDinamicConsts
}

const renderVariant = {
  [CELL_STATUSES.circle]: (props: IFilledCell) => <Circle {...props} />,
  [CELL_STATUSES.cross]: (props: IFilledCell) => <Cross {...props} />,
}

const FilledCell: React.FC<IProps> = ({ cells, dinamicConsts }) => {

  return (
    cells.map((cell) => {
      return null
    })
  )
}

export default FilledCell