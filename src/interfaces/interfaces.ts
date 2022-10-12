export interface INote {
  id: string;
  heading: string;
  text: string;
}

export interface INoteFunc {
  note: INote;
  handleOpenDialog: (note: INote) => void;
  openDialog: boolean;
}
