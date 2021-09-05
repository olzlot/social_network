import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css'

type PaginationPropstype = {
    previousLabel?: string
    nextLabel?: string
    breakLabel?: string
    breakClassName?: string
    pageCount?: number
    marginPagesDisplayed?: number
    pageRangeDisplayed?: number
    onPageChange: (value:any) => void
    containerClassName?: string
    activeClassName?: string
}

export const Pagination: React.FC<PaginationPropstype> = ({
    previousLabel = 'previous',
    nextLabel = 'next',
    breakLabel = '...',
    breakClassName = 'break-me',
    pageCount = 30,
    marginPagesDisplayed = 3,
    pageRangeDisplayed = 5,
    onPageChange,
}) => {
    return (
        <ReactPaginate
            previousLabel={previousLabel}
            nextLabel={nextLabel}
            breakLabel={breakLabel}
            breakClassName={breakClassName}
            pageCount={pageCount}
            marginPagesDisplayed={marginPagesDisplayed}
            pageRangeDisplayed={pageRangeDisplayed}
            onPageChange={onPageChange}
            containerClassName={styles.pagination}
            activeClassName={styles.active}
        />
    )
}