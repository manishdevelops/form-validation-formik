import './App.css';
import { useFormik } from 'formik';
import { signUpSchema } from './schemas/main';

const initialValues = {
	name: '',
	email: '',
	password: '',
	confirm_password: '',
};

function App() {
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: initialValues,
			validationSchema: signUpSchema,
			onSubmit: (values, action) => {
				console.log(values);
				postData(values);
				action.resetForm();
			},
		});

	// console.log(errors);

	const postData = async (values) => {
		// const { name, email, password, confirm_password } = values;
		const res = await fetch(
			'https://my-form-data-c8973-default-rtdb.firebaseio.com/my-form-data.json',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			}
		);
		if (res) alert('data stored successfully');
	};

	return (
		<div className='modal'>
			<div className='modal-container'>
				<div className='modal-left'>
					<h1 className='modal-title'>Welcome!</h1>
					<form onSubmit={handleSubmit} method='POST'>
						<div className='input-block'>
							<label htmlFor='name' className='input-label'>
								name
							</label>
							<input
								type='name'
								autoComplete='off'
								id='name'
								name='name'
								placeholder='Name'
								value={values.name}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.name && touched.name ? (
								<p className='form-error'>{errors.name}</p>
							) : null}
						</div>
						<div className='input-block'>
							<label htmlFor='email' className='input-label'>
								Email
							</label>
							<input
								type='email'
								autoComplete='off'
								id='email'
								name='email'
								placeholder='Email'
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.email && touched.email ? (
								<p className='form-error'>{errors.email}</p>
							) : null}
						</div>
						<div className='input-block'>
							<label htmlFor='password' className='input-label'>
								Password
							</label>
							<input
								type='password'
								autoComplete='off'
								id='password'
								name='password'
								placeholder='Password'
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.password && touched.password ? (
								<p className='form-error'>{errors.password}</p>
							) : null}
						</div>
						<div className='input-block'>
							<label htmlFor='confirm_password' className='input-label'>
								Confirm Password
							</label>
							<input
								type='password'
								autoComplete='off'
								id='confirm_password'
								name='confirm_password'
								placeholder='Confirm_Password'
								value={values.current_password}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.confirm_password && touched.confirm_password ? (
								<p className='form-error'>{errors.confirm_password}</p>
							) : null}
						</div>
						<div className='modal-buttons'>
							<button className='input-button' type='submit'>
								Registration
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
