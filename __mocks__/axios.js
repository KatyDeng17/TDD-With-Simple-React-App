const axiosMock = jest.genMockFromModule("axios");
let mockResponse = {
  data: {
    shops: [
      {
        location: "test location",
        address: "123 test location Dr"
      }
    ]
  }
};

let req = () => {
  return new Promise(resolve => {
    axiosMock.delayTimer = setTimeout(() => {
      resolve(mockResponse);
    }, 1000);
  });
};
axiosMock.get.mockImplementation(req);

module.exports = axiosMock;
