/**
 * lsauer, 2013
 * Lean handler for exception reporting; stdout is set by default to console.log
 * @param {exc} exc an Exception instance of Error, containing a message and stack property
 * @param {exc} stdOut A variadic function for error reporting. By default: console.log
 * @return undefined
 */
var exceptionHandler = function(exc, stdOut){
    var stdOut = stdOut || function() { console.log.apply(console, arguments) };
    if(stdOut instanceof Function){
        if(exc instanceof Error){
            stdOut('Exception:', exc.message, '; Stack:', exc.stack, '; Scope:', this.toString());
        }else{
            stdOut('Exception missing. Argument:', exc);
        }
    }else{
        if(exc instanceof Error){
            exceptionHandler._log.push('Exception:' + exc.message +';' + exc.stack + '; Argument: '+ stdOut.toString());
        }else{
            exceptionHandler._log.push('Exception missing.; Argument(s): '+ exc.toString() + ', ' + stdOut.toString());
        }
    }
};
/** @var {array} _log internal log history for custom functionality */
exceptionHandler._log = [];