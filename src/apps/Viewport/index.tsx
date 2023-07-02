import {
  CustomPIXIComponent,
  CustomPIXIComponentBehavior,
} from "react-pixi-fiber"
import { DisplayObject } from "pixi.js"
import { Viewport } from "pixi-viewport"
import { IBehavior } from "../../interfaces"
import CONSTS from '../../settings'

const { TYPES_ELEMENT } = CONSTS

const behavior: IBehavior = {
  customDisplayObject: props => {

    const { app } = props
    const { renderer } = app

    const viewport = new Viewport({
      screenWidth: renderer.width,
      screenHeight: renderer.height,
      events: renderer.events
    })
    console.log('viewport', viewport)
    viewport.moving = false
    viewport.zooming = false
    // viewport.fit()
    return viewport
  },
  customApplyProps( instance,oldProps, newProps) {
    // instance.removeAllListeners();
    instance.name = TYPES_ELEMENT.VIEWPORT
    if (this.applyDisplayObjectProps)
      this.applyDisplayObjectProps(oldProps, newProps)
  },
}

export default CustomPIXIComponent(
  behavior as unknown as CustomPIXIComponentBehavior<DisplayObject, any>,
  TYPES_ELEMENT.VIEWPORT,
)
