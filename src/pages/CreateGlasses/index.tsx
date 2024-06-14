import React from 'react';
import styles from './styles.module.scss';
import CustomInput from '../../components/CustomInput';
import { Controller, useForm } from 'react-hook-form';
import { ERROR_MESSAGE } from '../../consts/error-message';

type RegisterType = {
  name: string;
  mail: string;
  password: string;
};

const CreateGlasses = () => {
  const { control, handleSubmit, reset } = useForm<RegisterType>({
    defaultValues: {
      name: '',
      mail: '',
      password: '',
    },
  });

  const handleRegister = (params: RegisterType) => {
    console.log('params', params);
    reset();
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(handleRegister)();
  };
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <span className={styles.title}>Registration</span>
        <div className={styles.content}>
          <div className={styles.filtres}>
            <div className={styles.flexBox}>
              <span>Name</span>
              <Controller
                control={control}
                name="name"
                rules={{ required: { value: true, message: ERROR_MESSAGE.FIELD_REQUIRED } }}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                  <CustomInput
                    value={value}
                    onChange={onChange}
                    errorMessage={error?.message}
                    placeHolder="Enter your name"
                  />
                )}
              />
            </div>
            <div className={styles.flexBox}>
              <span>Email</span>
              <Controller
                control={control}
                name="mail"
                rules={{ required: { value: true, message: ERROR_MESSAGE.FIELD_REQUIRED } }}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                  <CustomInput
                    value={value}
                    onChange={onChange}
                    errorMessage={error?.message}
                    placeHolder="Enter your mail"
                  />
                )}
              />
            </div>
            <div className={styles.flexBox}>
              <span>Password</span>
              <Controller
                control={control}
                name="password"
                rules={{ required: { value: true, message: ERROR_MESSAGE.FIELD_REQUIRED } }}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                  <CustomInput
                    type="password"
                    value={value}
                    onChange={onChange}
                    errorMessage={error?.message}
                    placeHolder="Enter your password"
                  />
                )}
              />
            </div>
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateGlasses;
