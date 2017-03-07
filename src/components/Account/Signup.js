import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signup } from '../../actions/auth';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', password: '' };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSignup(event) {
    event.preventDefault();
    this.props.dispatch(signup(this.state.name, this.state.email, this.state.password));
  }


  render() {
    return (
        <div className="ui container">
        <div className="ui raised segment">

            <form onSubmit={this.handleSignup.bind(this)} className="ui form">
              <legend>Create an account</legend>
              <div className="field">
                <label htmlFor="name">Nickname</label>
                <input type="text" name="name" id="name" placeholder="Name" autoFocus className="form-control" value={this.state.name} onChange={this.handleChange.bind(this)}/>
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" className="form-control" value={this.state.email} onChange={this.handleChange.bind(this)}/>
              </div>
              <div className="field">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" className="form-control" value={this.state.password} onChange={this.handleChange.bind(this)}/>
              </div>
              <div className="field">
                <small className="text-muted">By signing up, you agree to the <Link to="/">Terms of Service</Link>.</small>
              </div>
              <button type="submit" className="ui button">Create an account</button>
            </form>
          </div>
        <p className="text-center">
          Already have an account? <Link to="/login"><strong>Log in</strong></Link>
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

export default connect(mapStateToProps)(Signup);
