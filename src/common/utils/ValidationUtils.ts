import _ from 'lodash';

/**
 * 주어진 값이 null 또는 undefined 인지 확인
 */
export const isNil = <T>(value: T): value is T => _.isNil(value);

/**
 * 주어진 값이 null 또는 undefined이 아닌지 확인
 */
export const isNotNil = <T>(value: T): value is T => !_.isNil(value);
