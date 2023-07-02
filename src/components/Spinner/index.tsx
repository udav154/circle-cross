import CSSTransitionGroup from '../../components/CSSTransitionGroup'
import styles from './styles/index.module.scss'

interface ISpinner {
  size: number
}

const DEFAULT_SIZE = 15

const Spinner: React.FC<ISpinner> = ({
  size = DEFAULT_SIZE
}) => {

  return (
    <CSSTransitionGroup
      animation={'fadeIn'}
    >
      <div style={{ '--spinner-size': `${size}` } as React.CSSProperties} className={styles["pl"]}>
        <div className={styles["pl__outer-ring"]}></div>
        <div className={styles["pl__inner-ring"]}></div>
        <div className={styles["pl__track-cover"]}></div>
        <div className={styles["pl__ball"]}>
          <div className={styles["pl__ball-texture"]}></div>
          <div className={styles["pl__ball-outer-shadow"]}></div>
          <div className={styles["pl__ball-inner-shadow"]}></div>
          <div className={styles["pl__ball-side-shadows"]}></div>
        </div>
      </div>
    </CSSTransitionGroup>
  )
}

export default Spinner