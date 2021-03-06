'use strict';

class ParamHelper {
  constructor() {
    this.paramExpression = new RegExp('\{[A-Za-z]+[A-Za-z0-9]*\}');
  }

  /*
  **       on: BOOTSTRAP
  **
  **  find the route params from the given route path
  **
  **  param pattern
  **    - {paramName}
  */
  parseParams(routePath) {
    const params = routePath.match(this.paramExpression);
    return params ? params.map(param => param.slice(1,-1)) : [];
  }
}

// singleton
module.exports = new ParamHelper();
