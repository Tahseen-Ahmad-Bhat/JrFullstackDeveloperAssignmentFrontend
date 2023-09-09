import Form from "./components/Form";
import NotificationContainer from "./util/notification";

function App() {
  return (
    <div className="App">
      <Form />

      {/* Component for giving update notification to user  */}
      <NotificationContainer />
    </div>
  );
}

export default App;
