import palette, { colors } from '../interfaces/palette.interface';
import paletteModel from '../models/palette.model';

class PaletteService {
    newPalette(palette: palette) {
        return new paletteModel(palette).save();
    }
    editColors(id: string, colors: colors) {
        return paletteModel.findByIdAndUpdate(id, colors);
    }
    editTags(id: string, tags: string[]) {
        return paletteModel.findByIdAndUpdate(id, { tags });
    }
    delete(id: string) {
        return paletteModel.findByIdAndDelete(id);
    }
}

export default new PaletteService();
