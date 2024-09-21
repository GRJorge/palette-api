import { color } from '../interfaces/palette.interface';
import Color from 'color';

class ColorService {
    hexToColor(hex: string): color {
        const colorObject = Color<string>(hex);
        const newColor: color = {
            hex,
            rgb: {
                r: colorObject.red(),
                g: colorObject.green(),
                b: colorObject.blue(),
            },
            hsl: {
                h: colorObject.hue(),
                s: colorObject.saturationl(),
                l: colorObject.lightness(),
            },
        };

        return newColor;
    }
}

export default new ColorService();
