/**
 *  null을 허용하는 타입
 */
export type Nullable<T> = T | null;

/**
 * 인풋을 <-> 아웃풋 매핑 타입
 */
export type Mapper<I, O> = (input: I) => O;
