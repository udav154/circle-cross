import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './styles/index.module.scss'

interface ITypography extends React.HTMLAttributes<HTMLParagraphElement> {
  size: 100 | 80 | 60 | 50 | 48 | 46 | 40 | 36 | 30 | 24 | 22 | 20 | 18 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8  
  weight?: 400 | 700 | 500
  color?: 'red' | 'primary' | 'primary2'
  className?: string
  children: React.ReactNode
}

export const Typography: FC<ITypography> = ({
  size = 100,
  weight = 400,
  color = 'primary',
  className='',
  children
}) => {

  const currentSize = `typography_${size}`
  const currentWeight = `typography__wight_${weight}`
  const currentColor = `typography__color_${color}`

  return (
    <p
      className={classNames(
        styles.typography,
        {
          [styles[currentSize]]: size,
          [styles[currentWeight]]: weight,
          [styles[currentColor]]: color
        },
        className
      )}
    >
      {children}
    </p>
  )
}
