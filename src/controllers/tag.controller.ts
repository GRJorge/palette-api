import { Request, Response } from 'express';
import tag from '../interfaces/tag.interface';
import tagService from '../services/tag.service';
import errorService from '../services/error.service';

class TagController {
    async newTag(req: Request, res: Response) {
        const { type, tag } = req.body; //Emotions, Style
        const newTagData: tag = { type, tag };

        try {
            const newTagResult = await tagService.newTag(newTagData);

            res.status(201).json(newTagResult);
        } catch (error: any) {
            errorService.validationError(error, res);
        }
    }
}

export default new TagController();
