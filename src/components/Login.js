import Header from './Header';
import EnterForm from './EnterForm';

function Login(props) {
  return(
    <>
      <Header navLink="Регистрация" linkPath="/sign-up"/>
      <EnterForm
        name="login"
        title="Вход"
        buttonText="Войти"
        onFormSubmit={props.onLogin}
      />
    </>
  )
};

export default Login;