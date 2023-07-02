import * as PIXI from "pixi.js"
import {
  CustomPIXIComponent,
  CustomPIXIComponentBehavior,
} from "react-pixi-fiber"
import CONSTS from "../settings"
import { IBehavior, iDinamicConsts } from "../interfaces"

const { TYPES_ELEMENT } = CONSTS



const behavior: IBehavior = {
  customDisplayObject: (props) => {
    return new PIXI.Container()
  },
  customApplyProps(instance, oldProps, newProps) {
    console.log('UPDATE CONTAINER')
    const { 
      x=0,
      y=0,
      width,
      height,
      isFrame,
      frameColor,
      name
    } = newProps
  
    instance.x = x
    instance.y = y

    if (width) {instance.width = width}
    if (height) {instance.height = height}
    if (name) {
      instance.name = name
    } else instance.name =  TYPES_ELEMENT.CONTAINER
    
    if (isFrame) {
      // Для дебага область Контейнера
      const frame = new PIXI.Graphics()
      frame.lineStyle(10, frameColor)
      frame.drawRect(0, 0, width, height)
      instance.addChild(frame)
    }
    return instance
  },
  customDidAttach(instance) {
  }
}

export default CustomPIXIComponent(
  behavior as unknown as CustomPIXIComponentBehavior<any, unknown>,
  TYPES_ELEMENT.CONTAINER,
)