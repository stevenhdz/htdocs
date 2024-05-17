test("object assingment", () => {
    const data = { one: 1 }
    data["two"] = 2
    expect(data).toEqual({ one: 1, two: 2})
})

test("null", () => {
    const n = null
    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
})

test("zero", () => {
    const z = 0
    expect(z).toBeDefined()
    expect(z).not.toBeUndefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
})

//https://jestjs.io/docs/expect#tobenull