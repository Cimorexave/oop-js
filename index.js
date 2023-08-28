class Program {
    main() { }
    constructor() {
        const mainContents = this.extractMain();
        this.main = mainContents;
    }
    static extractMain() {
        // Extracting contents of main from the file
    }
}

let program = new Program();
program.main();