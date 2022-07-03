import axios from 'axios';

import { CreateCommentDto } from '../data/dto/CreateCommentDto';
import { MessageDto } from '../data/dto/MessageDto';

export class CommentRepository {
  createComment = async (req: CreateCommentDto) => {
    const { body } = req;
    const response = await axios.post('http://localhost:3000/api/comment', body);

    if (response.status === 200) {
      return new MessageDto('Successfully created comment');
    }
  };
}
