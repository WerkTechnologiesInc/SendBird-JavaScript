import { className, MAX_COUNT } from '../consts.js';
import Element from './elements.js';
import { addClass, removeClass, show, hide } from '../utils.js';

class WidgetBtn extends Element {
  constructor(widget) {
    super();
    this._create();
    widget.appendChild(this.self);
  }

  reset() {
    this.toggleIcon(false);
    this.setUnreadCount(0);
  }

  _create() {
    this.self = this.createDiv();
    this._setClass(this.self, [className.WIDGET_BTN, className.IC_LOGIN]);

    this.unread = this.createDiv();
    this._setClass(this.unread, [className.NOTIFICATION]);

    this.self.appendChild(this.unread);
  }

  addClickEvent(action) {
    this._setClickEvent(this.self, action);
  }

  setUnreadCount(count) {
    count = parseInt(count);
    this._setContent(this.unread, count > 9 ? MAX_COUNT : count.toString());
    if (count > 0) {
      show(this.unread);
    } else {
      hide(this.unread);
    }
  }

  toggleIcon(isConnected) {
    if (isConnected) {
      addClass(
        removeClass(this.self, className.IC_LOGIN),
        className.IC_CONNECTED
      );
    } else {
      addClass(
        removeClass(this.self, className.IC_CONNECTED),
        className.IC_LOGIN
      );
    }
  }
}

export { WidgetBtn as default };
