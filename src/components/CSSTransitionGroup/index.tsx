import React, { ComponentType, FC } from 'react'
import classNames from 'classnames'
import style from './style/index.module.scss'

interface ICSSTransitionGroup extends Record<string, any> {
  children: React.ReactNode
  animation?:
  | 'fadeIn'
  | 'fadeInLeft'
  | 'fadeInTop'
  | 'fadeInBottom'
  className?: string
  component?: ComponentType
}

const Div: FC<ICSSTransitionGroup> = ({ ...props }) => (
  <div {...(props as any)} />
)
const CSSTransitionGroup: FC<ICSSTransitionGroup> = ({
  children,
  animation = 'fadeIn',
  className,
  component = Div,
  ...props
}) => {
  const Component = component ?? Div

  return (
    <Component
      className={classNames(
        style.container,
        style[`container__${animation}`],
        className
      )}
      {...(props as any)}
    >
      {children}
    </Component>
  )
}

export default CSSTransitionGroup
