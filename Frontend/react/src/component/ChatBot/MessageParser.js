
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
        if (message.includes('hello')) {
          console.log("hi");
         
          this.actionProvider.handleHello();
        }
        if (message.includes('help')) {
          this.actionProvider.handleHelp();
        }
        if (message.includes('Thank You')) {
          this.actionProvider.handleThank();
        }
  }
}
export default MessageParser