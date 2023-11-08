import React from 'react';
import { NOTIFICATION_TYPE as NT } from './_constants';

const ERROR = {
  ANIMATION_IN: 'Validation error. `animationIn` option must be an array',
  ANIMATION_OUT: 'Validation error. `animationOut` option must be an array',
  DISMISS_REQUIRED: 'Validation error. `duration` property of `dismiss` option is required',
  DISMISS_NUMBER: 'Validation error. `duration` property of `dismiss` option must be a Number',
  DISMISS_POSITIVE: 'Validation error. `duration` property of `dismiss` option must be a positive Number',
  DISMISS_CLICK_BOOL: 'Validation error. `click` property of `dismiss` option must be a Boolean',
  DISMISS_TOUCH_BOOL: 'Validation error. `touch` property of `dismiss` option must be a Boolean',
  DISMISS_WAIT: 'Validation error. `waitForAnimation` property of `dismiss` option must be a Boolean',
  DISMISS_PAUSE_BOOL: 'Validation error. `pauseOnHover` property of `dismiss` option must be a Boolean',
  DISMISS_ONSCREEN_BOOL: 'Validation error. `onScreen` property of `dismiss` option must be a Boolean',
  DISMISS_ICON: 'Validation error. `showIcon` property of `dismiss` option must be a Boolean',
  TITLE_STRING: 'Validation error. `title` option must be a String.',
  MESSAGE_REQUIRED: 'Validation error. `message` option is required',
  MESSAGE_STRING: 'Validation error. `message` option must be a String',
  TYPE_REQUIRED: 'Validation error. `type` option is required',
  TYPE_STRING: 'Validation error. `type` option must be a String',
  TYPE_NOT_EXISTENT: 'Validation error. `type` option not found',
  CONTAINER_REQUIRED: 'Validation error. `container` option is required',
  CONTAINER_STRING: 'Validation error. `container` option must be a String',
  CONTENT_INVALID: 'Validation error. `content` option must be a valid React component/function/element',
  WIDTH_NUMBER: 'Validation error. `width` option must be a Number',
  INSERT_STRING: 'Validation error. `insert` option must be a String',
  TRANSITION_DURATION_NUMBER: 'Validation error. `duration` property of `transition` option must be a Number',
  TRANSITION_TIMING_FUNCTION: 'Validation error. `timingFunction` property of `transition` option must be a String',
  TRANSITION_DELAY_NUMBER: 'Validation error. `delay` property of `transition` option must be a Number',
  TYPE_NOT_FOUND: 'Validation error. Custom type not found',
  REMOVAL_FUNC: 'Validation error. `onRemoval` must be a function',
};

const isNull = object => object === null || object === undefined;
const isString = object => typeof object === 'string';
const isNumber = object => typeof object === 'number';
const isBoolean = object => typeof object === 'boolean';
const isFunction = object => !!(object && object.constructor && object.call && object.apply);

function isClassComponent(component) {
  return typeof component === 'function' && !!component.prototype.isReactComponent;
}

function isFunctionComponent(component) {
  return typeof component === 'function';
}

export const validators = [
  function title({ content, title: titleProp }) {
    if (content) return;
    if (isNull(titleProp)) return;
    if (typeof titleProp !== 'string') {
      throw new Error(ERROR.TITLE_STRING);
    }
  },

  function message({ content, message: messageProp }) {
    if (content) return;

    if (!messageProp) {
      throw new Error(ERROR.MESSAGE_REQUIRED);
    }

    if (!isString(messageProp)) {
      throw new Error(ERROR.MESSAGE_STRING);
    }
  },

  function type({ type: typeProp }) {
    if (!typeProp) {
      throw new Error(ERROR.TYPE_REQUIRED);
    }

    if (!isString(typeProp)) {
      throw new Error(ERROR.TYPE_STRING);
    }

    if (
      typeProp !== NT.SUCCESS &&
      typeProp !== NT.ERROR &&
      typeProp !== NT.DEFAULT &&
      typeProp !== NT.WARNING &&
      typeProp !== NT.ANSWER
    ) {
      throw new Error(ERROR.TYPE_NOT_EXISTENT);
    }
  },

  function content({ content: contentProp }) {
    if (!contentProp) return;
    const isClass = isClassComponent(contentProp);
    const isFunc = isFunctionComponent(contentProp);
    const isElem = React.isValidElement(contentProp);
    if (!isClass && !isFunc && !isElem) {
      throw new Error(ERROR.CONTENT_INVALID);
    }
  },

  function onRemoval({ onRemoval: onRemovalProp }) {
    if (!onRemovalProp) return;
    if (!isFunction(onRemovalProp)) {
      throw new Error(ERROR.REMOVAL_FUNC);
    }
  },

  function dismiss({ dismiss: dismissProp }) {
    if (!dismissProp) return;

    const { duration, onScreen, showIcon, pauseOnHover, waitForAnimation: wait, click, touch } = dismissProp;

    if (isNull(duration)) {
      throw new Error(ERROR.DISMISS_REQUIRED);
    }

    if (!isNumber(duration)) {
      throw new Error(ERROR.DISMISS_NUMBER);
    }
    if (duration < 0) {
      throw new Error(ERROR.DISMISS_POSITIVE);
    }

    if (!isNull(onScreen) && !isBoolean(onScreen)) {
      throw new Error(ERROR.DISMISS_ONSCREEN_BOOL);
    }

    if (!isNull(pauseOnHover) && !isBoolean(pauseOnHover)) {
      throw new Error(ERROR.DISMISS_PAUSE_BOOL);
    }

    if (!isNull(click) && !isBoolean(click)) {
      throw new Error(ERROR.DISMISS_CLICK_BOOL);
    }

    if (!isNull(touch) && !isBoolean(touch)) {
      throw new Error(ERROR.DISMISS_TOUCH_BOOL);
    }

    if (!isNull(showIcon) && !isBoolean(showIcon)) {
      throw new Error(ERROR.DISMISS_ICON);
    }

    if (!isNull(wait) && !isBoolean(wait)) {
      throw new Error(ERROR.DISMISS_WAIT);
    }
  },
];
