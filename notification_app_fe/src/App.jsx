import { useState } from "react";
import { useEffect, axios } from "react";
import "./App.css";
import log from "./notification_app_be/logginMiddleware";
//To display top n notifications with priority  placement>result>event
function App() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const res = axios.get(
      "http://4.244.186.213/evaluation-service/notifications",
    );
    res.then((response) => {
      setNotifications(response.data);
    });
  }, []);
  // top 10 notifications
  notifications.sort((a, b) => {
    if (a.type === "placement" && b.type !== "placement") {
      return -1;
    } else if (a.Type !== "placement" && b.type === "placement") {
      return 1;
    } else if (a.Type === "result" && b.type !== "result") {
      return -1;
    } else if (a.Type !== "result" && b.type === "result") {
      return 1;
    } else if (a.Type === "event" && b.type !== "event") {
      return -1;
    } else if (a.Type !== "event" && b.type === "event") {
      return 1;
    } else {
      return 0;
    }
  });
  const Notifications = notifications.slice(0, 10);
  return (
    <>
      <p>{Notifications}</p>
    </>
  );
}

export default App;
