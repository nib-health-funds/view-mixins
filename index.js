
/**
 * Add methods to the view to show or hide it
 * @param   {Object}  view          The view prototype or instance
 * @param   {String}  [className]   The hidden class name
 */
function visibility(view, className) {
  className = className || 'is-hidden';

  /**
   * Gets whether the view is visible
   * @returns {Boolean}
   */
  view.isVisible = function() {
    return !this.el.classList.contains(className);
  };

  /**
   * Sets whether the view is visible
   * @param   {Boolean}   visible   Whether the view is visible
   * @returns {View}
   */
  view.setVisible = function(visible) {
    if (visible) {
      this.el.classList.remove(className);
    } else {
      this.el.classList.add(className);
    }
    return this;
  };

}

/**
 * Add methods to the view focus/blur it
 * @param   {Object}  view  The view prototype or instance
 */
function focusable(view) {

  /**
   * Apply focus to the view element
   * @returns {View}
   */
  view.focus = function() {
    this.el.focus();
    return this;
  };

  /**
   * Remove focus from the view element
   * @returns {View}
   */
  view.blur = function() {
    this.el.blur();
    return this;
  };

}

module.exports = {
  visibility: visibility,
  focusable: focusable
};