import Image from "next/image";
import React from "react";

interface iLogin {
	email: string;
	password: string;
}

const Login = () => {


	// <div className="m-autobg-gray-50 h-screen flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
	// 	<div className="sm:mx-auto sm:w-full sm:max-w-md">
	// 		<div>
	// 			<Image className="mx-auto" src={Logo} alt="full-data-pro-logo" />
	// 		</div>
	// 		{/* <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">{t("login.sign_in-to-account")}</h2> */}
	// 	</div>

	// 	<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
	// 		<div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
	// 			<Form className="space-y-6" group={fLogin} onSubmit={handleLogin}>
	// 				<TextField
	// 					name="email"
	// 					validators={[Validators.required, Validators.email]}
	// 					errorTip={(err : any) => {
	// 						if (err.required) return t("profile.form_personalData_error_email");
	// 						return "";
	// 					}}
	// 				/>
	// 				<TextField
	// 					name="password"
	// 					validators={[Validators.required, Validators.minLength(MIN_LENGHT_PASSWORD)]}
	// 					errorTip={(err) => {
	// 						if (err.required) return t("profile.form_personalData_error_password");
	// 						return "";
	// 					}}
	// 				/>

	// 				<div className="flex items-center justify-between">
	// 					<div className="flex items-center">
	// 						<input
	// 							id="remember-me"
	// 							name="remember-me"
	// 							type="checkbox"
	// 							onChange={(e) => setRememberMe(e.target.checked)}
	// 							className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-red-500"
	// 						/>
	// 						<label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
	// 							{t("login.remember-me")}
	// 						</label>
	// 					</div>

	// 					<div className="text-sm">
	// 						<a href="#" className="font-medium text-primary hover:text-primary">
	// 							{t("login.forgot-password")}
	// 						</a>
	// 					</div>
	// 				</div>

	// 				{/* render if error is true */}
	// 				{error && (
	// 					<>
	// 						<div>
	// 							{/* user or password incorrect */}
	// 							<div className="rounded-md bg-red-50 p-3">
	// 								<div className="flex">
	// 									<div className="flex-shrink-0">
	// 										<svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
	// 											<path fillRule="evenodd" d="M10 2a8 8 0 00-8 8 8 8 0 0016 0 8 8 0 00-8-8zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
	// 											<path fillRule="evenodd" d="M10 8a1 1 0 00-1 1v4a1 1 0 102 0V9a1 1 0 00-1-1z" clipRule="evenodd" />
	// 										</svg>
	// 									</div>
	// 									<div className="ml-3">
	// 										<h3 className="text-sm font-medium text-red-800">{t("login.error")}</h3>
	// 									</div>
	// 								</div>
	// 							</div>
	// 						</div>
	// 					</>
	// 				)}

	// 				<Button fullWidth={true} className="text-sm" disabled={!fLogin.isValid || isLoading} color="primary" type="submit" size="md" >{!isLoading ? `${t("login.sign_in")}` : `${t("login.sign_ing")}`}</Button>
	// 			</Form>
	// 		</div>
	// 	</div>
	// </div>
	return (
		<div>

		</div>
	);
};

export default Login;
