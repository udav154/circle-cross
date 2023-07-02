import { FC } from "react"
import classnames from 'classnames'
import Spinner from "../Spinner"
import styles from './styles/index.module.scss'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  positionLabel?: 'center' | 'right' | 'left'
  size?: 'large' | 'big' | 'medium' | 'small'
  load?: boolean
  children: React.ReactNode
}

const Button: FC<IButton> = ({
  className = '',
  size = 'medium',
  positionLabel = 'center',
  load = false,
  children,
  ...props
}) => {

  return (
    <button
      className={classnames(
        styles.button,
        styles[`button__position_${positionLabel}`],
        styles[`button__size_${size}`],
        {
          [styles.button__load]: load,
        },
        className
      )}
      {...props}
    >
      {load ?
        <div>
          <Spinner size={8} />
        </div>
        :
        <>{children}</>
      }
    </button>
  )
}

export default Button
