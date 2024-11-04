'use client'

import React from 'react'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export default function PaginationSection() {
  //     {
  //   maxPage,
  //   searchParams,
  // }: {
  //   maxPage: number
  //   searchParams?: {
  //     page?: string
  //     tag?: string
  //   }
  // }
  // const pathname = usePathname()
  // const { replace } = useRouter()
  // const { pageNum, setPageNum } = usePagination()
  //
  // const nextPage = () => {
  //   if (pageNum >= maxPage) return
  //   setPageNum((prev: any) => prev + 1)
  //   const params = new URLSearchParams(searchParams)
  //   params.set('page', (pageNum + 1).toString())
  //   replace(`${pathname}?${params}`)
  // }
  //
  // const previousPage = () => {
  //   if (pageNum < 1) return
  //   setPageNum((prev: any) => prev - 1)
  //   const params = new URLSearchParams(searchParams)
  //   params.set('page', (pageNum - 1).toString())
  //   replace(`${pathname}?${params}`)
  // }

  return (
    <Pagination className="mt-12">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={true}
            onClick={() => {}}
            className="cursor-pointer  hover:bg-primary"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>{0 + 1}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            onClick={() => {}}
            className="cursor-pointer hover:bg-primary"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
