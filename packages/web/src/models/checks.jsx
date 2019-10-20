import PropTypes from 'prop-types'

import { data, axios } from './axios'

export const Checks = {
	getAll: data(() => axios.get('/checks')),
	getHistory: data(params =>
		axios.get('/checks/history', {
			params,
		}),
	),
}

export const CheckType = PropTypes.shape({
	_id: PropTypes.string.isRequired,
	check: PropTypes.string.isRequired,
	serviceStatus: PropTypes.string.isRequired,
	createdAt: PropTypes.number.isRequired,
	output: PropTypes.string.isRequired,
})
