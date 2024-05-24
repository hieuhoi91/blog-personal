import {
  Pagination,
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
} from '@nextui-org/react';
import React, { useCallback, useEffect, useState } from 'react';
import {
  MdOutlineDeleteOutline,
  MdOutlineEdit,
  MdRemoveRedEye,
} from 'react-icons/md';
import { toast } from 'react-toastify';

import { BlogApi } from '@/api/blog-api';
import { ReqSearchUser } from '@/shared/user.type';

// const statusColorMap = {
//   active: 'success',
//   paused: 'danger',
//   vacation: 'warning',
// };

const columns = [
  { name: 'NAME', uid: 'username', sortable: true },
  { name: 'EMAIL', uid: 'email', sortable: true },
  { name: 'ROLE', uid: 'role', sortable: true },
  { name: 'ACTIONS', uid: 'actions' },
];

const List = () => {
  const [dataUsers, setDataUsers] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: 'username',
    direction: 'ascending',
  });

  const getUsers = async ({ page, take }: ReqSearchUser) => {
    try {
      const users = await BlogApi.getAllUsers({ page, take });
      setDataUsers(users.data.data);
      setTotalPages(users.data.meta.pageCount);
    } catch (error) {
      toast.error('Failed to fetch users');
    }
  };

  const handleDeleteUser = async (id: string) => {
    try {
      await BlogApi.deleteUser(id);
      await getUsers({ page: currentPage, take: 10 });
      toast.success('User deleted successfully');
    } catch (error) {
      toast.error('Failed to delete user');
    }
  };

  const sortedItems = React.useMemo(() => {
    if (!sortDescriptor) {
      return [...dataUsers];
    }
    return [...dataUsers].sort((a, b) => {
      if (sortDescriptor.column) {
        const first = a[sortDescriptor.column];
        const second = b[sortDescriptor.column];
        const cmp = first < second ? -1 : first > second ? 1 : 0;
        return sortDescriptor.direction === 'descending' ? -cmp : cmp;
      }

      return 0;
    });
  }, [sortDescriptor, dataUsers]);

  useEffect(() => {
    getUsers({ page: currentPage, take: 10 });
  }, [currentPage]);

  // const onNextPage = React.useCallback(() => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // }, [currentPage, totalPages]);

  // const onPreviousPage = React.useCallback(() => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // }, [currentPage]);

  const renderCell = useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case 'username':
        return (
          <User
            avatarProps={{ radius: 'lg', src: user.avatar }}
            description={user.username}
            name={cellValue}
          >
            {user.username}
          </User>
        );
      case 'role':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue}</p>
            <p className='text-bold text-default-400 text-sm capitalize'>
              {user.team}
            </p>
          </div>
        );
      // case 'status':
      //   return (
      //     <Chip
      //       className='capitalize'
      //       color={statusColorMap[user.status]}
      //       size='sm'
      //       variant='flat'
      //     >
      //       {cellValue}
      //     </Chip>
      //   );
      case 'actions':
        return (
          <div className='relative flex items-center gap-2'>
            <Tooltip content='Details'>
              <span className='text-default-400 cursor-pointer text-lg active:opacity-50'>
                <MdRemoveRedEye />
              </span>
            </Tooltip>
            <Tooltip content='Edit user'>
              <span className='text-default-400 cursor-pointer text-lg active:opacity-50'>
                <MdOutlineEdit />
              </span>
            </Tooltip>
            <Tooltip color='danger' content='Delete user'>
              <span
                className='text-danger cursor-pointer text-lg active:opacity-50'
                onClick={() => handleDeleteUser(user.id)}
              >
                <MdOutlineDeleteOutline />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const bottomContent = React.useMemo(() => {
    return (
      <div className='flex items-center justify-between px-2 py-2'>
        <Pagination
          isCompact
          showControls
          showShadow
          color='primary'
          page={currentPage}
          total={totalPages}
          onChange={(page) => setCurrentPage(page)}
        />
        {/* <div className='hidden w-[30%] justify-end gap-2 sm:flex'>
          <Button
            isDisabled={totalPages === 1}
            size='sm'
            variant='flat'
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={totalPages === 1}
            size='sm'
            variant='flat'
            onPress={onNextPage}
          >
            Next
          </Button>
        </div> */}
      </div>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, totalPages]);

  return (
    <Table
      aria-label='Example table with custom cells'
      bottomContent={bottomContent}
      bottomContentPlacement='outside'
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === 'actions' ? 'center' : 'start'}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default List;
