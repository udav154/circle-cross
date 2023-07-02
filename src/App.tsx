import {useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import Spinner from './components/Spinner'
import Canvas from './apps/Scene'
import CONSTS from './settings'
import { TStatusGame } from './interfaces'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [gameStatus, setGameStatus] = useState<TStatusGame>(CONSTS.GAME_STATUSES.pending)

  const changeGameStaus = (status: TStatusGame) =>{
    setGameStatus(status)
  }
  
  useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false)
    }, 1000)
  }, [])
  
  if (isLoading) return <Spinner size={15} />
  
  return <Canvas changeGameStaus={changeGameStaus}/>
}

export default observer(App)
