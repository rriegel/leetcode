/**
 * `IntegerContainer` interface.
 */
class IntegerContainerInterface {
  constructor() {
  }

  /**
   * Should add the specified integer `value` to the container
   * and return the number of integers in the container after the
   * addition.
   *
   * @param {number} value
   * @returns {number}
   */
  add(value) {
    // default implementation
    return 0;
  }

  /**
   * Should attempt to remove the specified integer `value` from
   * the container.
   * If the `value` is present in the container, remove it and
   * return `true`, otherwise, return `false`.
   *
   * @param {number} value
   * @returns {boolean}
   */
  delete(value) {
    // default implementation
    return false;
  }

  /**
   * Should return the median integer - the integer in the middle
   * of the sequence after all integers stored in the container
   * are sorted in ascending order.
   * If the length of the sequence is even, the leftmost integer
   * from the two middle integers should be returned.
   * If the container is empty, this method should return `null`.
   *
   * @returns {number | null}
   */
  getMedian() {
    // default implementation
    return null;
  }
}

module.exports = IntegerContainerInterface;
