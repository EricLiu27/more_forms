import React, { useState } from 'react';
import Display from '../Components/Display';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div>
            <form>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={props.firstName} onChange={(e) => setFirstName(e.target.value)} />
                    {
                        firstName.length > 0 && firstName.length < 2 ? <p style={{ color: 'red' }}>First name must have at least 2 characters</p> : <p></p>
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    {
                        lastName.length > 0 && lastName.length < 2 ? <p style={{ color: 'red' }}>Last name must have at least 2 characters</p> : <p></p>
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {
                        email.length > 0 && email.length < 5 ? <p style={{ color: 'red' }}>Email must have at least 5 characters</p> : <p></p>
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {
                        password.length > 0 && password.length < 8 ? <p style={{ color: 'red' }}>Password must have at least 8 characters</p> : <p></p>
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    {
                        confirmPassword.length > 0 && confirmPassword !== password ? <p style={{ color: 'red' }}>Password does not match</p> : <p></p>
                    }
                </div>
                <button type='submit' disabled={firstName.length < 2 || lastName.length < 2 || email.length < 5 || password.length < 8 || confirmPassword !== password}>Submit</button>
            </form>
            <Display firstName={firstName} lastName={lastName} email={email} password={password} confirmPassword={confirmPassword} />
        </div>
    );
};

export default UserForm;
