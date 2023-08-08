import type { FC } from "react";
import * as Styled from "./Pagination.styles";
import { LeftArrow } from "../svg/leftArrow";
import { RightArrow } from "../svg/rightArrow";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};

const Pagination: FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <Styled.PaginationWrapper>
      <Styled.PageButton
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        display="flex"
      >
        <LeftArrow padding="0 12.17px 0 0"></LeftArrow>
        Anterior
      </Styled.PageButton>
      {pageNumbers.map((pageNumber) => (
        <Styled.PageButton
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          isActive={pageNumber === currentPage}
        >
          {pageNumber}
        </Styled.PageButton>
      ))}
      <Styled.PageButton
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        display="flex"
      >
        Próximo
        <RightArrow padding="0 0 0 12.17px"></RightArrow>
      </Styled.PageButton>
    </Styled.PaginationWrapper>
  );
};

export default Pagination;
