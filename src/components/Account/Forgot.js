import React from 'react';
import { connect } from 'react-redux'
import { forgotPassword } from '../../actions/auth';

export class Forgot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleForgot(event) {
    event.preventDefault();
    this.props.dispatch(forgotPassword(this.state.email));
  }

  render() {
    return (
      <div className="ui container">
                <div className="ui raised segment">
                    <form className="ui form" onSubmit={this.handleForgot.bind(this)}>
                      <div className="field">
                        <p>Enter your email address below and well send you password reset instructions.</p>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="form-control" autoFocus value={this.state.email} onChange={this.handleChange.bind(this)}/>
                      </div>
                      <button type="submit" className="ui button">Reset Password</button>
                    </form>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Forgot);
