import { get } from '@/utils/request'
import api from './api'

export const getDatas = () => get(api.getData)