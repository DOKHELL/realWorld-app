import React from 'react';
import {useForm} from 'react-hook-form';
import {observer} from 'mobx-react';
import {useHistory} from 'react-router-dom';
import FormInput from '../../components/FormInput/FormInput';
import ListErrors from '../../components/ListErrors/ListErrors';
import {useStores} from '../../utils/use-stores';

const Settings = () => {
  const {userStore, authStore} = useStores();
  const {register, handleSubmit, errors} = useForm({
    defaultValues: {
      url: userStore.currentUser.image,
      username: userStore.currentUser.username,
      bio: userStore.currentUser.bio,
      email: userStore.currentUser.email
    }
  });
  const history = useHistory();
  const onSubmit = (data) => {
    userStore.updatingUser(data)
      .then((bool) => bool && history.push('/'));
  };
  const Logout = () => {
    authStore.logout()
      .then(() => history.push('/'));
  };
  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>
            <ListErrors errors={authStore.errors}/>
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset>
                <FormInput
                  className="form-control-lg"
                  type="text"
                  name="url"
                  placeholder="URL of profile picture"
                  error={errors.url}
                  register={register}
                />
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
                  type="textarea"
                  name="bio"
                  placeholder="Short bio about you"
                  error={errors.bio}
                  register={register}
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
                  Update Settings
                </button>
              </fieldset>
            </form>
            <hr/>
            <button onClick={Logout} className="btn btn-outline-danger">Or click here to logout.</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Settings);
