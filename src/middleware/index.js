//used to export the invocation of applyMiddleware

import { thunk } from 'react-redux'
import { applyMiddleware } from 'redux'
import { logger } from './logger'

export default applyMiddleware(
	thunk,
  	logger,
)