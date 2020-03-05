import React from 'react';
import {useForm} from 'react-hook-form';
import {Link, useHistory} from 'react-router-dom';
import {observer} from 'mobx-react';
import FormInput from '../../components/FormInput/FormInput';
import {useStores} from '../../utils/use-stores';
import Loader from '../../components/Loader/Loader';
import ListErrors from '../../components/ListErrors/ListErrors';

const Register = () => {
  const {register, handleSubmit, errors} = useForm();
  const {authStore} = useStores();
  const history = useHistory();
  const onSubmit = (data) => {
    authStore.fetchRegister(data)
      .then((bool) => bool && history.push('/'));
  };
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">

          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link to="/login">Have an account?</Link>
            </p>
            <ListErrors errors={authStore.errors}/>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormInput
                className="form-control-lg"
                type="text"
                name="username"
                placeholder="Username"
                error={errors.username}
                register={register({
                  required: 'Please specify username',
                  pattern: {
                    value: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/,
                    message: 'username is too long (maximum is 20 characters)'
                  }
                })}
              />
              <FormInput
                className="form-control-lg"
                type="email"
                name="email"
                placeholder="Email"
                error={errors.email}
                register={register({
                  required: 'Please specify a valid email address',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              <FormInput
                className="form-control-lg"
                type="password"
                name="password"
                placeholder="Password"
                error={errors.password}
                register={register({
                  required: 'Please specify a valid password',
                  pattern: {
                    value: /.{8,}/,
                    message: 'Too short password'
                  }
                })}
              />
              <button className="btn btn-lg btn-primary pull-xs-right">
                {authStore.loader ? <Loader className="small"/> : 'Sign up'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default observer(Register);
