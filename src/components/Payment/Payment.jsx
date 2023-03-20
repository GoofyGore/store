import React from 'react';
import './Payment.css';
import Input from './Input';

function Payment(props) {
	return (
		<div className="container">
			<div className="header">
				<h1 className="headerText">Let's Make Payment</h1>
				<p className="call-to-card">
					To start your subscription, input your card details to make payment.
					You will be redirected to your banks authorization page .{' '}
				</p>
			</div>

			<Input />
		</div>
	);
}

export default Payment;
