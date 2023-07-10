import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useProductsForm = <T>(INITIAL_DATA: T) => {

  const [ FormData, setFormData ] = useState<T>(INITIAL_DATA);
  const navigate = useNavigate();

  const onResetForm = () => {
    setFormData(INITIAL_DATA);
  };

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    setFormData({
      ...FormData,
      [name]: value
    });
  };

  const onBack = () => {
    navigate('/admin/products', { replace: true });
  };

  return {
    FormData,
    setFormData,
    onResetForm,
    onInputChange,
    onBack,
  };

};

export default useProductsForm;
