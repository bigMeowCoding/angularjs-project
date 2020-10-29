angular.module("core.phone").factory("Phone", [
  "$resource",
  function ($resource) {
    console.log($resource)
    return $resource(
      "detail/detail.json",
      {},
      {
        query: {
          method: "GET",
          params: { phoneId: "phones" },
          isArray: true,
        },
      }
    );
  },
]);
