import dayjs from "dayjs";
import _ from 'lodash'

export default function fn() {
    return _.join(['hello', dayjs().format('YYYY-MM-DD HH:mm:ss')])
}