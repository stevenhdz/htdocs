var Singleton = (function() {
    // instance stores a reference to the Singleton
    var instance;

    function createInstance() {
        // private variables and methods
        var _privateVariable = 'I am a private variable';

        function _privateMethod() {
            console.log('I am a private method');
        }
        return {
            // public methods and variables
            publicMethod: function() {
                console.log('I am a public method');
            },
            publicVariable: 'I am a public variable'
        };
    }
    return {
        // Get the Singleton instance if it exists
        // or create one if doesn't
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// there is no existing instance of Singleton, so it will create one
var instance1 = Singleton.getInstance();
// there is an instance of Singleton, so it will return the reference to this one
var instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true
instance2.publicMethod();  //'I am a public method'