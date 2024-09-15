import tag from '../interfaces/tag.interface';
import tagModel from '../models/tag.model';

class TagService {
    newTag(tag: tag) {
        return new tagModel(tag).save();
    }
}

export default new TagService();
