import { FC } from "react"
import classnames from 'classnames'
import styles from './styles/index.module.scss'

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  constrains?: 'large' | 'big' | 'medium' | 'small'
}

const Input: FC<IInput> = ({
  className = '',
  constrains = 'medium',
  ...props
}) => {

  return (
    <input
    className={classnames(
      styles.input,
      styles[`input__constrains_${constrains}`],
      className
    )}
      {...props}
    />
  )
}

export default Input