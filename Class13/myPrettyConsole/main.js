import bc from 'beautiful-console'
 
export const prettifyConsole = () => {
    const {beautify, console: {error: print}} = bc
    print(beautify.blue('Goodbye world'))
}