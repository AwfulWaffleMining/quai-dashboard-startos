import { sdk } from '../sdk'
import { confirmedRewards } from './confirmedRewards'

export const actions = sdk.Actions.of().addAction(confirmedRewards)
