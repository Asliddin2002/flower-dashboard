import React, { useEffect } from 'react';
import { BasicTable } from '../BasicTable/BasicTable';
import { TreeTable } from '../TreeTable/TreeTable';
import { EditableTable } from '../editableTable/EditableTable';
import { useTranslation } from 'react-i18next';
import * as S from './Tables.styles';
import { useLocation } from 'react-router-dom';

export const Tables: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  console.log(location.pathname);
  const titles = { title: '' };
  if (location.pathname === '/category') {
    titles.title = 'Categories';
  }
  if (location.pathname == '/product') {
    titles.title = 'Products';
  }
  if (location.pathname == '/order') {
    titles.title = 'Orders';
  }

  return (
    <>
      <S.TablesWrapper>
        {/* <S.Card id="basic-table" title={t('tables.basicTable')} padding="1.25rem 1.25rem 0">
          <BasicTable />
        </S.Card>
        <S.Card id="tree-table" title={t('tables.treeTable')} padding="1.25rem 1.25rem 0">
          <TreeTable />
        </S.Card> */}
        <S.Card id="editable-table" title={titles.title} padding="1.25rem 1.25rem 0">
          <EditableTable />
        </S.Card>
      </S.TablesWrapper>
    </>
  );
};
