import { useEffect, useRef } from "react";
import NotificationItem from "./NotificationItem";
import useNotificationHandler, {
  Notifications,
} from "./useNotificationHandler";

const NotificationContainer = (
  props: Notifications & { container: HTMLElement }
) => {
  const didMountRef = useRef(false);

  const { notifications, notificationCount, initialState, dispatch } =
    useNotificationHandler(props);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }

    if (notificationCount === initialState.count) {
      document.body.removeChild(props.container);
    }
  }, [initialState.count, notificationCount, props.container]);

  return (
    <>
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          {...notification}
          dispatch={dispatch}
        />
      ))}
    </>
  );
};

export default NotificationContainer;
