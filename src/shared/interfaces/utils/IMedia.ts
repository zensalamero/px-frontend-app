export interface IAttributes {
  attachment_url: string;
  file_type: 'image' | 'video' | 'audio';
  id: string;
  tag_list: string[];
}

export interface IMediaResponse {
  data: IMedia[];
}

interface IMedia {
  attributes: IAttributes;
  id: string;
  type: string;
}

export default IMedia;
