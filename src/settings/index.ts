const HEX_COLORS = {
  MAIN_BG: '#e7edfe',
  BLACK: '#000000',
  WHITE: '#ffffff',
  RED: '#FF0000',
  BLUE: '#0082e6',
  YELLOW: '#FF0',
}

const NUM_COLORS = {
  MAIN_BG: '0xe7edfe',
  BLACK: '0x000000',
  WHITE: '0xffffff',
  RED: '0xFF0000',
  BLUE: '0x0082e6',
  YELLOW: '0xFF0',
}

const STYLES = {
  stage_wrap: {
    width: '100vw',
    height: '100vh',
  },
  stage: {
    position: 'absolute',
    display: 'block',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  },
}

const STAGE_OPTIONS = {
  backgroundColor: HEX_COLORS.MAIN_BG,
}

const TYPES_ELEMENT = {
  SCENE: 'SCENE',
  VIEWPORT: 'VIEWPORT',
  CONTAINER: 'CONTAINER',
  FIELD: 'FIELD',
  INTERACTIVE_CELL: 'INTERACTIVE_CELL',
  STROKE_RECT: 'STROKE_RECT',
  STROKE: 'STROKE',
  CELL: 'CELL',
  CROSS: 'CROSS',
  CIRCLE: 'CIRCLE',
}

const CALC_CONST = {
  STROKE_WIDTH: 20,
  DRAWING_SPEED: 50,
}

const AXIS = {
  X: 'x',
  Y: 'y',
}

const GAME_STATUSES = {
  pending: 'pending',
  process: 'process',
  win: 'win',
  lose: 'lose',
}

const CELL_STATUSES = {
  cross: 'cross',
  circle: 'circle',
}

const QUEUE_VARIANTS = {
  user: 'user',
  bot: 'bot',
}

const QUEUE_MATCH = {
  [QUEUE_VARIANTS.bot]: CELL_STATUSES.circle,
  [QUEUE_VARIANTS.user]: CELL_STATUSES.cross,
}

const ROTATION = {
  _0: 0,
  _15: Math.PI / 12,
  _30: Math.PI / 6,
  _45: Math.PI / 4,
  _60: Math.PI / 3,
  _75: (5 * Math.PI) / 12,
  _90: Math.PI / 2,
  _105: Math.PI / 7,
  _120: (2 * Math.PI) / 3,
  _135: (3 * Math.PI) / 4,
  _150: (5 * Math.PI) / 6,
  _165: (11 * Math.PI) / 12,
  _180: Math.PI,
  _195: (13 * Math.PI) / 12,
  _210: (7 * Math.PI) / 6,
  _225: (5 * Math.PI) / 4,
  _240: (4 * Math.PI) / 3,
  _255: (17 * Math.PI) / 12,
  _270: (3 * Math.PI) / 2,
  _285: (19 * Math.PI) / 12,
  _300: (5 * Math.PI) / 3,
  _315: (7 * Math.PI) / 4,
  _330: (11 * Math.PI) / 6,
  _345: (23 * Math.PI) / 12,
  _360: 2 * Math.PI,
}
export default {
  TYPES_ELEMENT,
  STYLES,
  STAGE_OPTIONS,
  CALC_CONST,
  HEX_COLORS,
  NUM_COLORS,
  AXIS,
  ROTATION,
  QUEUE_MATCH,
  GAME_STATUSES,
  CELL_STATUSES,
  QUEUE_VARIANTS,
}
