import { RouteComponentProps } from "react-router";
import BookModel from "../../../model/Book";
import NoteModel from "../../../model/Note";

export interface ActionDialogProps extends RouteComponentProps<any> {
  book: BookModel;
  books: BookModel[];
  deletedBooks: BookModel[];
  notes: NoteModel[];
  currentBook: BookModel;
  left: number;
  top: number;
  mode: string;
  handleFetchBooks: () => void;
  handleDeleteDialog: (isShow: boolean) => void;
  handleFetchBookmarks: () => void;
  handleFetchNotes: () => void;
  t: (title: string) => string;
  handleReadingBook: (book: BookModel) => void;
  handleEditDialog: (isShow: boolean) => void;
  handleAddDialog: (isShow: boolean) => void;
  handleActionDialog: (isShow: boolean) => void;
  handleDetailDialog: (isShow: boolean) => void;
}
export interface ActionDialogState {
  isShowExport: boolean;
  isShowDetail: boolean;
  isExceed: boolean;
}
