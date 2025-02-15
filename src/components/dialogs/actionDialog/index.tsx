import { connect } from "react-redux";
import {
  handleEditDialog,
  handleDeleteDialog,
  handleAddDialog,
  handleActionDialog,
  handleReadingBook,
  handleFetchBooks,
  handleDetailDialog,
} from "../../../store/actions";

import { stateType } from "../../../store";
import { withTranslation } from "react-i18next";
import ActionDialog from "./component";

const mapStateToProps = (state: stateType) => {
  return {
    mode: state.sidebar.mode,
    currentBook: state.book.currentBook,
    books: state.manager.books,
    notes: state.reader.notes,
    deletedBooks: state.manager.deletedBooks,
  };
};
const actionCreator = {
  handleEditDialog,
  handleAddDialog,
  handleDeleteDialog,
  handleReadingBook,
  handleActionDialog,
  handleFetchBooks,
  handleDetailDialog,
};
export default connect(
  mapStateToProps,
  actionCreator
)(withTranslation()(ActionDialog as any) as any);
