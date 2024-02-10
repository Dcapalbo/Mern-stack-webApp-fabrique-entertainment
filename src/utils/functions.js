/** @format */

import moment from 'moment';
import axios from 'axios';

const decodeToken = (token) => {
	let base64Url = token.split('.')[1];
	let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	let jsonPayload = decodeURIComponent(
		window
			.atob(base64)
			.split('')
			.map(function (c) {
				return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join('')
	);

	return JSON.parse(jsonPayload);
};

const slugCreation = (string) => {
	return string.toLowerCase().replaceAll(' ', '-');
};

const handlePressBookDownload = (url) => {
	const link = document.createElement('a');
	link.href = url;
	link.setAttribute('download', true);
	link.setAttribute('target', '_blank');
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};

const handleSingleImageDelete = async (
	imageKey,
	url,
	dispatch,
	reduxAction,
	deleteType
) => {
	dispatch(reduxAction(imageKey));
	try {
		console.log(imageKey);
		const response = await axios.delete(
			`${url}/${deleteType}?image_key=${imageKey}`
		);

		if (response.status === 200) {
			console.log(response);
		} else {
			console.log('Error deleting image:', response.data.message);
		}
	} catch (error) {
		console.error('Error deleting image:', error);
	}
};

const convertToDate = (dateString) => {
	return moment(dateString).format('DD/MM/YYYY');
};

export {
	decodeToken,
	slugCreation,
	handlePressBookDownload,
	handleSingleImageDelete,
	convertToDate,
};
