import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import{ emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Button, Input, Spinner } from './common';


class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onPressButton(){
    const { email, password } = this.props;

    this.props.loginUser({email,password});
  }

  renderButton() {
    if(this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onPressButton.bind(this)}>
        Login
      </Button>
    );
  }

  render(){
    return(
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder="example@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value = {this.props.email}
            />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='Password'
            onChangeText={this.onPasswordChange.bind(this)}
            value = {this.props.password}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  console.log(error);
  return { email,password, error, loading };
};

export default connect(mapStateToProps,
  { emailChanged, passwordChanged, loginUser })
  (LoginForm);
