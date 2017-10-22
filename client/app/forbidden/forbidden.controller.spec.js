'use strict';

describe('Component: ForbiddenComponent', function () {

  // load the controller's module
  beforeEach(module('videoClubApp'));

  var ForbiddenComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ForbiddenComponent = $componentController('forbidden', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
