const { sum } = require("./sum")

test("sum", () => {
    const result = sum(2,1)
    expect(result).toBe(3)
})

test("sum ignore any number", () => {
    const result = sum(2)
    expect(result).toBe(2)
})

test("sum e12 max", () => {
    const result = sum(23333333333,33333332323)
    expect(result).toBe(56666665656)
})

test("sum only numbers", () => {
    const result = sum(23333333333, "s");
    expect(result instanceof Error).toBe(true);
    expect(result.message).toBe("Ambos argumentos deben ser números.")
});

test("sum decimals", () => {
    const result = sum(2.5,3.42)
    expect(result).toBe(5.92)
})

//toBeTruthy()
//toBeFalsy()
//toEqual()