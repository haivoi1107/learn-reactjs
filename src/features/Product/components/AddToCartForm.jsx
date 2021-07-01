import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '..//..//..//components/form-controls/InputField';

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
  const schema = yup.object().shape({
    quantity: yup.number().min(1, 'Please enter at least 1').required('Please enter quantity'),
  });
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    console.log('TODO FORM: ', values);
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="quantity" label="Quantity" form={form} />

      <Button type="submit" variant="contained" color="primary" fullWidth size="large">
        {/* Tại sao chỗ này cần type submit?? */}
        Chọn mua
      </Button>
    </form>
  );
}

export default AddToCartForm;
