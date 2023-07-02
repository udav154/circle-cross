import React, { useRef } from 'react'
import { AppContext, Stage } from 'react-pixi-fiber'
import ErrorBoundary from '../../components/ErrorBoundary'
import CONSTS from '../../settings'
import GameField from '../GameField'
import { TStatusGame } from '../../interfaces'
import StageLogic from '../StageLogic'
import GameContainer from '../GameContainer'
import InteractiveEmptyCells from '../InteractiveEmptyCells'
import FilledCell from '../FillelCell'

const { STYLES, CALC_CONST, } = CONSTS

interface IProps {
  changeGameStaus: (status: TStatusGame) => void
}

const Canvas: React.ComponentType<IProps> = ({
  changeGameStaus
}) => {
  const currentWrapper = useRef<HTMLDivElement | null>(null) // ? обертка канваса для подгонки его под ширину и высоту блока resize

  return (
    <div ref={currentWrapper} style={STYLES.stage_wrap}>
      <ErrorBoundary>
        <Stage
          className='scene'
          style={STYLES.stage as React.CSSProperties}
          options={{ backgroundAlpha: 0 }}
        >
          <AppContext.Consumer>
            {(app) => {
              setTimeout(
                () => {
                  app.resizeTo = currentWrapper?.current as HTMLDivElement
                },
                1
              )

              const sceneWidth = (app.view as unknown as HTMLElement).clientWidth
              const sceneHeight = (app.view as unknown as HTMLElement).clientHeight

              const dinamicConsts = {
                sceneWidth,
                sceneHeight,
                centerScene: { x: sceneWidth / 2, y: sceneHeight / 2 },
                cellWidth: sceneHeight / 5,
                strokeHeight: (sceneHeight / 5) * 3,
                strokeWidth: CALC_CONST.STROKE_WIDTH,
                fieldWidth: (sceneHeight / 5) * 3,
                circleDiametr: (sceneHeight / 5) * 0.8
              }

              return (
                <StageLogic>
                  {({
                    queue,
                    cells,
                    onClickCell
                  }) => {
                    return (
                      <GameContainer dinamicConsts={dinamicConsts}>
                        <GameField dinamicConsts={dinamicConsts} />
                        <InteractiveEmptyCells
                          dinamicConsts={dinamicConsts}
                          onClickCell={onClickCell}
                          cells={cells}
                        />
                        <FilledCell
                          dinamicConsts={dinamicConsts}
                          cells={cells} />
                      </GameContainer>
                    )
                  }
                  }
                </StageLogic>
              )
            }}
          </AppContext.Consumer>
        </Stage>
      </ErrorBoundary>
    </div>
  )
}

export default Canvas
