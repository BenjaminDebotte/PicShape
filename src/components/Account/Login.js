import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { login } from '../../actions/auth';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.dispatch(login(this.state.email, this.state.password));
  }

  render() {
    return (
      <div className="login-container container">
        <div className="panel">
          <div className="panel-body">
            <form onSubmit={this.handleLogin.bind(this)}>
              <legend>Log In</legend>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" autoFocus className="form-control" value={this.state.email} onChange={this.handleChange.bind(this)}/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" className="form-control" value={this.state.password} onChange={this.handleChange.bind(this)}/>
              </div>
              <div className="form-group"><Link to="/forgot"><strong>Forgot your password?</strong></Link></div>
              <button type="submit" className="btn btn-success">Log in</button>
            </form>
          </div>
        </div>
        <p className="text-center">
          Don't have an account? <Link to="/signup"><strong>Sign up</strong></Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Login);