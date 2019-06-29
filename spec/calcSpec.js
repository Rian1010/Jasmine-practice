describe("My fizzBuzz function", function() {
    
    beforeEach(function() {
        calc = new fizzBuzz;
    });
    describe("Returns number, fizz, buzz or fizzBuzz", function() {
        it("should exist", function() {
            expect(fizzBuzz).toBeDefined()
        });
        it("should return Fizz when called as fizzBuzz(15)", function() {
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });
        it("should return Fizz when called as fizzBuzz(6)", function() {
            var result = fizzBuzz(6)
            expect(result).toBe("Fizz");
        });
        it("should return Buzz when called as fizzBuzz(20)", function() {
            var result = fizzBuzz(20)
            expect(result).toBe("Buzz");
        });
        it("should return a 17 when called as fizzBuzz(17)", function() {
            var result = fizzBuzz(17).typeOf(number)
            expect(result).toBe(17);
        });
    });
});





/*describe("whatCanIDrink", function() {
    
    beforeEach(function() {
        calc = new whatCanIDrink;
    });
    describe("Checks Age", function() {
        it("should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        });
        it("should return drink toddy when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });
        it("should return drink coke when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(17)
            expect(return).toBe("Drink Coke"); 
        });
        it("should return drink beer when called as whatCanIDrink(18)", function() {
            var result = whatCanIDrink(18)
            expect(return).toBe("Drink Beer")
        });
        it("should return drink beer when called as whatCanIDrink(20)", function() {
            var result = whatCanIDrink(20)
            expect(return).toBe("Drink Beer")
        });
        it("should return drink whisky when called as whatCanIDrink(129)", function() {
            var result = whatCanIDrink(129)
            expect(return).toBe("Drink Whisky")
        });
        it("should be unable to return a drink when called as whatCanIDrink(130)", function() {
            var result = whatCanIDrink(150)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("should contain drink when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(10).indexOf("Drink")
            expect(result).not.toEqual(-1);
        })
    });
});*/








/*describe("Calculator", function() {
    
    beforeEach(function() {
        calc = new Calculator;
    });*/
    /*var calc = new Calculator;*/ 
    
    /*describe("Addition test", function() {
        it("should return 42", function() {
            calc.add(20);
            calc.add(22);
            expect(calc.value*//*addition(20, 22)*//*).toBe (42);
        });
        it("should return 26", function() {
            calc.add(7);
            calc.add(19);
            expect(calc.value*//*addition(7, 19)*//*).toBe (26);
        });
        it("should return an error if we don't supply two number", function() {
            spyOn(window, "alert")*/
            /*addition*//*calc.add("Hitchhikers", "Guide");
            expect(window.alert).toHaveBeenCalledWith("Error!");*/
            /*expect(addition("Hitchhikers", "Guide")).toBe
            ("Error!");*/
        /*}); 
    });
});*/