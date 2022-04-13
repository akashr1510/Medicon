
class ActionProvider {
    constructor(createChatbotMessage, setState, createClientMessage) {
      this.createChatbotMessage = createChatbotMessage;
      this.setState = setState;
      this.createClientMessage = createClientMessage;
    }
    handleHello() {
      const message = this.createChatbotMessage("Heyy there ,Have a nice day ..Tell me how can i help you ? ");
    
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
    handleHelp() {
      const message = this.createChatbotMessage(" Step 1: Registeration  step 2 : Login as patient     ");
    
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
    handleThank() {
      const message = this.createChatbotMessage("Welcome,Come again !");
    
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
  }
  }
  
  export default ActionProvider;