export type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';
export type BackgroundColor = 'bgBlack' | 'bgRed' | 'bgGreen' | 'bgYellow' | 'bgBlue' | 'bgMagenta' | 'bgCyan' | 'bgWhite' | 'bgGray';
export type Style = 'blink' | 'bright' | 'dim' | 'hidden' | 'reverse' | 'reset' | 'underscore';

export type LogBoxConfig = {
  color: Color,
  indent?: number,
  padding?: number,
  bufferLines?: boolean,
  symbol?: string,
};

export type LogBoxLine = {
  color: Color,
  message: string,
};

export type StatusConfig = {
  indent?: number,
  tagMessage?: string,
};

export type CustomStatusConfig = {
  indent?: number,
  tagColor: Color,
  tagMessage: string,
};