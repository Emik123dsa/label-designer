export class ArrayUtil {
  /**
   * Validate empty or non-array payload.
   *
   * @param  {Array<unknown>} arr
   * @return boolean
   * @memberof ArrayUtil
   */
  static isEmpty(arr: Array<unknown> | null): boolean {
    return !arr || (arr && arr?.length === 0) || (!arr && !Array.isArray(arr));
  }
}
