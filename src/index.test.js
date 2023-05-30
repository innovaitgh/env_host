describe('envHost', () => {

  const getUrl = (action, path = "") => {
    const envHost = require("./index");
    return envHost(action, path);
  }

  describe("dev", () => {

    it("should return url without path", () => {
      const url = getUrl("example");
      expect(url).toBe("http://example.test");
    })

    it("should return url with path", () => {
      const url = getUrl("example", "/api/v1");
      expect(url).toBe("http://example.test/api/v1");
    })

  })

  describe("pro", () => {

    beforeEach(() => {
      jest.resetModules();
      process.env = {
        NODE_ENV: "production",
      };
    });

    it("should return url without path", () => {
      const url = getUrl("example");
      expect(url).toBe("https://example.com");
    })

    it("should return url with path", () => {
      const url = getUrl("example", "/api/v1");
      expect(url).toBe("https://example.com/api/v1");
    })


  })


});
