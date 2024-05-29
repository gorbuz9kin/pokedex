import ReactPaginate from 'react-paginate';

import * as Icon from './../Icons';

type Props = {
  currentPage: number;
  pageCount: number;
  onPageChange: (value: { selected: number }) => void;
};

const Pagination = ({ currentPage, pageCount, onPageChange }: Props) => {
  return (
    <div className="pagination">
      <ReactPaginate
        forcePage={currentPage}
        pageCount={pageCount}
        pageRangeDisplayed={1}
        marginPagesDisplayed={2}
        onPageChange={onPageChange}
        nextLabel={<Icon.ChevronRight />}
        previousLabel={<Icon.ChevronLeft />}
      />
    </div>
  );
};

export default Pagination;
