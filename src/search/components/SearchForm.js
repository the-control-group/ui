/**
 * Search Form
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Input, Grid, Div, Button } from 'ui';

import '../styles/search-form.less';

const statesArray = ['All States', 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia',
	'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
	'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
	'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
	'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

class SearchForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			street: '',
			city: '',
			state: '',
			zip: '',
			phone: '',
			email: ''
		};

		this.doSearch = this.doSearch.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	/**
	 * --------------------------------------------------------------------------------------------
	 * Refirect to search results page or report page based on search type and input filds values
	 * --------------------------------------------------------------------------------------------
	 */

	doSearch(e) {
		if(e) e.preventDefault();

		const formValues = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			street: this.state.street,
			city: this.state.city,
			state: this.state.state,
			zip: this.state.zip,
			phone: this.state.phone,
			email: this.state.email
		};

		if (this.props.person) {
			window.location = `https://www.truthfinder.com/dashboard/search/person/?first=${formValues.firstName}&last=${formValues.lastName}&city=${formValues.city}&state=${formValues.state}`;
		} else if (this.props.phone) {
			window.location = `https://www.truthfinder.com/dashboard/report/phone/${formValues.phone}?search-phone=${formValues.phone}`;
		} else if (this.props.email) {
			window.location = `https://www.truthfinder.com/dashboard/report/email/${formValues.email}?search-email=${formValues.email}`;
		} else if (this.props.location) {
			window.location = `https://www.truthfinder.com/dashboard/report/location/?search-street=${formValues.street}&search-city=${formValues.city}&search-state=${formValues.state}&search-zip_code=${formValues.zip}`;
		}
	}

	/**
	 * ---------------------------------------
	 * Markup for the different search forms
	 * ---------------------------------------
	 */

	renderPersonForm() {
		return (
			<form onSubmit={this.doSearch}>
				<Grid
					className="search-form"
					gutterLarge="none"
					gutterMedium="none"
					gutterSmall="x-small"
					stackSmall
					itemWidthsLarge={[2.5, 2.5, 2.5, 2.5, 2]}
				>
					<Div>
						<Input
							type="text"
							label="First Name"
							placeholder="Enter First Name"
							name="firstName"
							value={this.state.firstName}
							onChange={this.handleInputChange}
						/>
					</Div>
					<Div>
						<Input
							type="text"
							label="Last Name"
							placeholder="Enter Last Name"
							name="lastName"
							value={this.state.lastName}
							onChange={this.handleInputChange}
						/>
					</Div>
					<Div>
						<Input
							type="text"
							label="City"
							placeholder="Enter City"
							name="city"
							value={this.state.city}
							onChange={this.handleInputChange}
						/>
					</Div>
					<Div>
						<Input
							type="select"
							label="State"
							options={statesArray}
							name="state"
							value={this.state.state}
							onChange={this.handleInputChange}
						/>
					</Div>
					<Div className="search-form-button">
						<Button full type="submit">Search</Button>
					</Div>
				</Grid>
			</form>
		);
	}

	renderPhoneForm() {
		return (
			<form onSubmit={this.doSearch}>
				<Grid
					className="search-form search-form-phone"
					gutterLarge="none"
					gutterMedium="none"
					gutterSmall="x-small"
					stackSmall
					itemWidthsLarge={[5, 2]}
				>
					<Div>
						<Input
							type="tel"
							label="Phone Number"
							placeholder="Enter any U.S. Phone Number"
							name="phone"
							value={this.state.phone}
							onChange={this.handleInputChange}
						/>
					</Div>
					<Div className="search-form-button">
						<Button full type="submit">Search</Button>
					</Div>
				</Grid>
			</form>
		);
	}

	renderEmailForm() {
		return (
			<form onSubmit={this.doSearch}>
				<Grid
					className="search-form search-form-email"
					gutterLarge="none"
					gutterMedium="none"
					gutterSmall="x-small"
					stackSmall
					itemWidthsLarge={[5, 2]}
				>
					<Div>
						<Input
							type="email"
							label="Email Address"
							placeholder="Enter any Email Address"
							name="email"
							value={this.state.email}
							onChange={this.handleInputChange}
						/>
					</Div>
					<Div className="search-form-button">
						<Button full type="submit">Search</Button>
					</Div>
				</Grid>
			</form>
		);
	}

	renderLocationForm() {
		return (
			<form onSubmit={this.doSearch}>
				<Grid
					className="search-form"
					gutterLarge="none"
					gutterMedium="none"
					gutterSmall="x-small"
					stackSmall
					itemWidthsLarge={[4, 2, 2, 2, 2]}
				>
					<Div>
						<Input
							type="text"
							label="Street Address"
							placeholder="Enter Street Address"
							name="street"
							value={this.state.street}
							onChange={this.handleInputChange}
						/>
					</Div>
					<Div>
						<Input
							type="text"
							label="City"
							placeholder="Enter City"
							name="city"
							value={this.state.city}
							onChange={this.handleInputChange}
						/>
					</Div>
					<Div>
						<Input
							type="select"
							label="State"
							options={statesArray}
							name="state"
							value={this.state.state}
							onChange={this.handleInputChange}
						/>
					</Div>
					<Div>
						<Input
							type="text"
							label="Zip"
							placeholder="Enter Zip"
							name="zip"
							value={this.state.zip}
							onChange={this.handleInputChange}
						/>
					</Div>
					<Div className="search-form-button">
						<Button full type="submit">Search</Button>
					</Div>
				</Grid>
			</form>
		);
	}

	/**
	 * --------------------------------------------------------------------------------------------
	 * Render search form. If no search type specified render person search form
	 * --------------------------------------------------------------------------------------------
	 */

	render() {
		if (this.props.phone) {
			return this.renderPhoneForm();
		} else if (this.props.email) {
			return this.renderEmailForm();
		} else if (this.props.location) {
			return this.renderLocationForm();
		} else {
			return this.renderPersonForm();
		}
	}
}

SearchForm.propTypes = {
	person: PropTypes.bool,
	phone: PropTypes.bool,
	email: PropTypes.bool,
	location: PropTypes.bool,
	options: (props) => {
		if ((props.person === undefined) && (props.phone === undefined) && (props.email === undefined) && (props.location === undefined)) {
			return new Error(
				'Please pass form type to SearchForm component (person, phone, email or location)'
			);
		}
	}
};


export default SearchForm;
