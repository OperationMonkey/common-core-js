const eslintConfig = require('./.eslintrc.js')

describe('.eslintrc.js', () => {
  it("should export config", () => {
    expect(eslintConfig).toBeInstanceOf(Object)
  })
})