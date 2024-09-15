import { Request, Response } from 'express';
import tag from '../interfaces/tag.interface';
import tagService from '../services/tag.service';

class TagController {
    async newTag(req: Request, res: Response) {
        const { type, tag } = req.body; //Emotions, Style
        const newTagData: tag = { type, tag };

        try {
            const newTagResult = await tagService.newTag(newTagData);

            res.status(201).json(newTagResult);
        } catch (error: any) {
            let status = 500;

            if (error.code === 11000 || error.name === 'ValidationError') {
                status = 400;
            }

            res.status(status).json(error);
        }
    }
}

export default new TagController();
