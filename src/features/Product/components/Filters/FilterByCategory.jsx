import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import categoryApi from '../../../../api/categoryApi';
import { ThemeConsumer } from 'styled-components';

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },

  menu: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
    '& > li': {
      marginTop: theme.spacing(1),
      transition: 'all .1s',
      '&:hover': {
        cursor: 'pointer',
        color: theme.palette.primary.dark,
      },
    },
  },
  mau: {
    color: 'black',
  },
}));

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
  const classes = useStyle();
  const [categoryList, setCategoryList] = useState([
    'Thời trang',
    'Khẩu Trang',
    'Làm đẹp',
    'Laptop',
    'ổ cứng',
    'Điện thoại',
  ]);
  const Hai = [
    {
      id: 1,
      title: 'Thời Trang',
    },
    {
      id: 2,
      title: 'Khẩu Trang',
    },
    {
      id: 3,
      title: 'Làm đẹp',
    },
    {
      id: 4,
      title: 'Laptop',
    },
    {
      id: 5,
      title: 'Ổ cứng',
    },
    {
      id: 6,
      title: 'Điện thoại',
    },
  ];
  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        setCategoryList(
          list.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
        console.log('loading', { list });
      } catch (error) {
        console.log('Faile to fetch category list', error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
    console.log(category.id);
  };

  return (
    <Box className={classes.root}>
      {/* <Typography variant="subtitle2">Danh mục sản phẩm</Typography>

      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            <Typography variant="body2">{category.name}</Typography>
          </li>
        ))}
      </ul> */}
      <Typography variant="subtitle2">Danh mục sản phẩm</Typography>
      <ul className={classes.menu}>
        {Hai.map((category) => (
          <li className={classes.mau} key={category.id} onClick={() => handleCategoryClick(category)}>
            <Typography variant="body2">{category.title}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
